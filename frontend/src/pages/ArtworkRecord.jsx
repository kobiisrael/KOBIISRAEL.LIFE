import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { X } from "lucide-react";
import { toast } from "sonner";
import { getArtworkRecord } from "@/data/artworks";
import { submitInquiry } from "@/lib/api";
import {
  applyPageSeo,
  breadcrumbSchema,
  visualArtworkSchema,
} from "@/lib/seo";

const TBC = "To be confirmed by artist";
const field = (v) => (v && String(v).trim() ? v : TBC);
const listField = (arr) => (Array.isArray(arr) && arr.length > 0 ? arr : [TBC]);

const INQUIRY_TYPE_OPTIONS = [
  { value: "collector", label: "Collector" },
  { value: "gallery", label: "Gallery" },
  { value: "curator", label: "Curator" },
  { value: "museum", label: "Museum" },
  { value: "press", label: "Press" },
  { value: "publisher", label: "Publisher" },
  { value: "licensing", label: "Licensing" },
  { value: "research", label: "Archive research" },
  { value: "general", label: "General" },
];

const ARTWORK_DETAILS_FIELDS = [
  ["Title", "title"],
  ["Series / Project", "series"],
  ["Year", "year"],
  ["Location", "location"],
  ["Medium", "medium"],
  ["Print type", "print_type"],
  ["Paper type", "paper_type"],
  ["Image size", "image_size"],
  ["Paper size", "paper_size"],
  ["Frame size", "frame_size"],
  ["Edition size", "edition_size"],
  ["Edition number", "edition_number"],
  ["Signature", "signature"],
  ["Certificate of authenticity", "certificate"],
  ["Condition", "condition"],
  ["Framing status", "framing_status"],
  ["Availability", "availability"],
  ["Price", "price"],
  ["Archive status", "archive_status"],
  ["Last updated", "last_updated"],
];

const PRINT_AVAILABILITY_FIELDS = [
  "Availability status",
  "Edition details",
  "Available sizes",
  "Print medium",
  "Signature details",
  "Certificate of authenticity",
  "Framing options",
  "Shipping notes",
  "Price on request",
  "Condition notes",
  "Reservation status",
];

const RELATED_MEDIA_CARDS = [
  { slug: "moving", title: "Related Moving Image", to: "/moving", note: "Connected film or video work." },
  { slug: "book", title: "Related Book", to: "/books", note: "Catalogue or publication context." },
  { slug: "archive-note", title: "Related Archive Note", to: "/journal", note: "Notes, fragments and contexts." },
  { slug: "exhibition", title: "Related Exhibition", to: "/cv", note: "Exhibition history and venues." },
  { slug: "text", title: "Related Text", to: "/journal", note: "Essays and writing." },
  { slug: "sound", title: "Related Sound / Music Work", to: "/moving", note: "Sound and score works." },
];

// ---------- Sub-components ----------

function ArtworkLightbox({ open, onClose, src, alt, title }) {
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div
      data-testid="artwork-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} — enlarged view`}
      onClick={onClose}
      className="fixed inset-0 z-50 bg-ki-bg/95 backdrop-blur-sm flex items-center justify-center px-4 sm:px-10"
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        data-testid="artwork-lightbox-close"
        aria-label="Close enlarged view"
        className="absolute top-5 right-5 p-3 text-ki-fg/80 hover:text-ki-gold transition-colors"
      >
        <X size={22} strokeWidth={1.4} />
      </button>
      <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
        <div className="relative aspect-[3/2] bg-ki-elevated border border-ki-border overflow-hidden">
          {src ? (
            <img src={src} alt={alt || title} className="absolute inset-0 w-full h-full object-contain" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-[11px] uppercase tracking-[0.28em] text-ki-muted">
              Artwork image · placeholder
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ArtworkInquiryForm({ artwork }) {
  const [f, setF] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    inquiry_type: "collector",
    preferred_size: "",
    budget_range: "",
    message: "",
    consent: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const up = (k) => (e) => {
    if (submitted) setSubmitted(false);
    setF((s) => ({ ...s, [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value }));
  };

  const submit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    if (!f.consent) {
      toast.error("Please confirm consent to reply before sending the inquiry.");
      return;
    }
    setSubmitting(true);
    try {
      await submitInquiry({
        name: f.name,
        email: f.email,
        inquiry_type: f.inquiry_type,
        subject: `Artwork inquiry — ${artwork.title}`,
        message: f.message,
        project_interest: artwork.series || artwork.title,
        phone: f.phone || null,
        country: f.country || null,
        preferred_size: f.preferred_size || null,
        budget_range: f.budget_range || null,
        consent: f.consent,
      });
      setSubmitted(true);
      setF({
        name: "",
        email: "",
        phone: "",
        country: "",
        inquiry_type: "collector",
        preferred_size: "",
        budget_range: "",
        message: "",
        consent: false,
      });
      toast.success("Artwork inquiry received. Thank you.");
    } catch (err) {
      toast.error(err?.response?.data?.detail || "Could not send. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputCls =
    "w-full bg-transparent border-b border-ki-border focus:border-ki-gold outline-none text-ki-fg placeholder:text-ki-muted py-3 transition-colors";
  const labelCls = "text-[10px] uppercase tracking-[0.28em] text-ki-muted";

  return (
    <form
      onSubmit={submit}
      noValidate
      data-testid="artwork-inquiry-form"
      className="flex flex-col gap-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="flex flex-col gap-2">
          <label htmlFor="ki-ar-name" className={labelCls}>Full name</label>
          <input id="ki-ar-name" type="text" required value={f.name} onChange={up("name")} data-testid="artwork-inquiry-name" className={inputCls} placeholder="Your full name" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="ki-ar-email" className={labelCls}>Email address</label>
          <input id="ki-ar-email" type="email" required value={f.email} onChange={up("email")} data-testid="artwork-inquiry-email" className={inputCls} placeholder="you@studio.com" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="ki-ar-phone" className={labelCls}>
            Phone <span className="text-ki-muted/60">(optional)</span>
          </label>
          <input id="ki-ar-phone" type="tel" value={f.phone} onChange={up("phone")} data-testid="artwork-inquiry-phone" className={inputCls} placeholder="With country code" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="ki-ar-country" className={labelCls}>Country</label>
          <input id="ki-ar-country" type="text" required value={f.country} onChange={up("country")} data-testid="artwork-inquiry-country" className={inputCls} placeholder="Country" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="ki-ar-artwork" className={labelCls}>Artwork title</label>
          <input id="ki-ar-artwork" type="text" value={artwork.title} readOnly data-testid="artwork-inquiry-artwork" className={`${inputCls} text-ki-fg/80`} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="ki-ar-series" className={labelCls}>Series / project</label>
          <input id="ki-ar-series" type="text" value={artwork.series || TBC} readOnly data-testid="artwork-inquiry-series" className={`${inputCls} text-ki-fg/80`} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="ki-ar-type" className={labelCls}>Interest type</label>
          <select id="ki-ar-type" value={f.inquiry_type} onChange={up("inquiry_type")} data-testid="artwork-inquiry-type" className={`${inputCls} appearance-none`}>
            {INQUIRY_TYPE_OPTIONS.map((o) => (
              <option key={o.value} value={o.value} className="bg-ki-bg text-ki-fg">
                {o.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="ki-ar-size" className={labelCls}>
            Preferred size <span className="text-ki-muted/60">(optional)</span>
          </label>
          <input id="ki-ar-size" type="text" value={f.preferred_size} onChange={up("preferred_size")} data-testid="artwork-inquiry-size" className={inputCls} placeholder="e.g. 80×100 cm" />
        </div>
        <div className="flex flex-col gap-2 md:col-span-2">
          <label htmlFor="ki-ar-budget" className={labelCls}>
            Budget range <span className="text-ki-muted/60">(optional)</span>
          </label>
          <input id="ki-ar-budget" type="text" value={f.budget_range} onChange={up("budget_range")} data-testid="artwork-inquiry-budget" className={inputCls} placeholder="Indicative range" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="ki-ar-msg" className={labelCls}>Message</label>
        <textarea id="ki-ar-msg" required rows={5} value={f.message} onChange={up("message")} data-testid="artwork-inquiry-message" className={`${inputCls} resize-none`} placeholder="Please describe your interest — context, timeframe, intended placement." />
      </div>
      <label className="flex items-start gap-3 cursor-pointer">
        <input type="checkbox" checked={f.consent} onChange={up("consent")} required data-testid="artwork-inquiry-consent" className="mt-1 w-4 h-4 border border-ki-border bg-transparent accent-[#C19B54]" />
        <span className="text-xs text-ki-fg/75 leading-relaxed">
          I consent to the studio replying to this inquiry by email. My information will not be added to any mailing list and will not be shared with third parties.
        </span>
      </label>
      <div className="flex flex-col sm:flex-row sm:items-center gap-6">
        <button
          type="submit"
          disabled={submitting}
          data-testid="artwork-inquiry-submit"
          className="inline-flex items-center justify-center border border-ki-gold text-ki-gold hover:bg-ki-gold hover:text-ki-bg disabled:opacity-50 px-10 py-4 text-xs uppercase tracking-[0.28em] transition-colors duration-300"
        >
          {submitting ? "Sending…" : "Send Artwork Inquiry"}
        </button>
        {submitted && (
          <span data-testid="artwork-inquiry-success" className="text-sm text-ki-gold/90 max-w-md leading-relaxed">
            Thank you for your inquiry. Artwork details, print availability, edition status, condition and pricing will be confirmed before any sale or reservation.
          </span>
        )}
      </div>
    </form>
  );
}

// ---------- Main page ----------

export default function ArtworkRecord() {
  const { slug } = useParams();
  const artwork = useMemo(() => getArtworkRecord(slug), [slug]);
  const inquiryRef = useRef(null);
  const [lightbox, setLightbox] = useState(false);

  useEffect(() => {
    if (!artwork) return undefined;
    const prevTitle = document.title;
    const projectPart = artwork.series ? ` from ${artwork.series}` : "";
    const title = `${artwork.title}${projectPart} | Kobi Israel`;
    const description = `${artwork.title} by Kobi Israel${projectPart}. Artwork record, print details, archive context and collector inquiry.`;
    const path = `/prints/${slug}`;
    applyPageSeo({
      title,
      description: description.slice(0, 155),
      path,
      ogType: "article",
      jsonLd: [
        {
          id: "artwork-breadcrumb",
          data: breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Limited Edition Prints", path: "/prints" },
            { name: artwork.title, path },
          ]),
        },
        {
          id: "artwork-visualartwork",
          data: visualArtworkSchema({
            name: artwork.title,
            description,
            path,
            year: artwork.year,
            medium: artwork.medium,
          }),
        },
      ],
    });
    window.scrollTo(0, 0);
    return () => {
      document.title = prevTitle;
    };
  }, [artwork, slug]);

  const scrollToInquiry = useCallback(() => {
    inquiryRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  if (!artwork) return null;

  const availabilityStatus =
    artwork.archive_status || artwork.availability || "Availability to be confirmed";

  return (
    <article data-testid="artwork-record" className="pt-40 pb-32">
      {/* HERO */}
      <header className="container-ki max-w-4xl">
        <div className="overline">Artwork Record</div>
        <h1
          data-testid="artwork-title"
          className="mt-6 font-serif text-5xl sm:text-6xl lg:text-7xl tracking-tight text-ki-fg"
        >
          {field(artwork.title)}
        </h1>
        <p className="mt-5 font-serif italic text-xl text-ki-beige/90" data-testid="artwork-series">
          {artwork.series ? `From ${artwork.series}` : "Series / project to be confirmed by artist"}
        </p>
        <div className="mt-8 flex flex-wrap gap-x-10 gap-y-3 text-[11px] uppercase tracking-[0.24em] text-ki-muted">
          <span>Year · {field(artwork.year)}</span>
          <span>Location · {field(artwork.location)}</span>
          <span>Medium · {field(artwork.medium)}</span>
        </div>
        <p className="mt-10 max-w-2xl text-base md:text-lg leading-relaxed text-ki-fg/80">
          {field(artwork.caption)}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button
            type="button"
            onClick={scrollToInquiry}
            data-testid="artwork-cta-details"
            className="inline-flex items-center justify-center border border-ki-gold text-ki-gold hover:bg-ki-gold hover:text-ki-bg px-7 py-4 text-xs uppercase tracking-[0.24em] transition-colors duration-300"
          >
            Request Artwork Details
          </button>
          <button
            type="button"
            onClick={scrollToInquiry}
            data-testid="artwork-cta-print"
            className="inline-flex items-center justify-center border border-ki-fg/40 text-ki-fg hover:border-ki-fg px-7 py-4 text-xs uppercase tracking-[0.24em]"
          >
            Request Print Availability
          </button>
          {artwork.series_slug && (
            <Link
              to={`/projects/${artwork.series_slug}`}
              data-testid="artwork-cta-project"
              className="inline-flex items-center justify-center border border-ki-fg/30 text-ki-fg hover:border-ki-gold hover:text-ki-gold px-7 py-4 text-xs uppercase tracking-[0.24em] transition-colors duration-300"
            >
              ← Back to Project
            </Link>
          )}
        </div>
      </header>

      {/* VIEWING LAYOUT */}
      <section className="container-ki mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-8">
          <button
            type="button"
            onClick={() => setLightbox(true)}
            data-testid="artwork-image-open"
            aria-label="Open enlarged view of the artwork"
            className="group relative block w-full aspect-[4/5] bg-ki-elevated border border-ki-border overflow-hidden"
          >
            {artwork.image ? (
              <img
                src={artwork.image}
                alt={artwork.alt || `${artwork.title} — artwork image`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-ki-muted/70">
                    Artwork image · placeholder
                  </div>
                  <div className="mt-3 text-[10px] uppercase tracking-[0.28em] text-ki-muted/60">
                    Final image to be supplied by artist
                  </div>
                </div>
              </div>
            )}
            <div className="absolute bottom-3 right-3 text-[10px] uppercase tracking-[0.22em] text-ki-fg/60 opacity-0 group-hover:opacity-100 transition-opacity">
              Click to enlarge
            </div>
          </button>
          <div className="mt-4 flex items-start justify-between gap-6 text-[11px] uppercase tracking-[0.22em] text-ki-muted">
            <span>Caption · {field(artwork.caption)}</span>
            <span>© {field(artwork.copyright)}</span>
          </div>
          {/* Thumbnail strip — alternate views (placeholder) */}
          <div className="mt-6 grid grid-cols-4 gap-3">
            {(artwork.alternate_views && artwork.alternate_views.length > 0
              ? artwork.alternate_views
              : Array.from({ length: 4 })
            ).map((v, i) => (
              <div
                key={v?.url || `alt-${i}`}
                data-testid={`artwork-alt-view-${i}`}
                className="relative aspect-square bg-ki-elevated border border-ki-border/60 flex items-center justify-center"
              >
                {v?.url ? (
                  <img src={v.url} alt={v.alt || `${artwork.title} — view ${i + 1}`} className="absolute inset-0 w-full h-full object-cover opacity-90" />
                ) : (
                  <div className="text-[9px] uppercase tracking-[0.26em] text-ki-muted/60">
                    View · {String(i + 1).padStart(2, "0")}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right side: quick metadata + inquiry CTAs */}
        <aside className="lg:col-span-4 border border-ki-border p-7 bg-ki-surface" data-testid="artwork-side-panel">
          <div className="text-[10px] uppercase tracking-[0.28em] text-ki-gold/90">Availability</div>
          <div
            data-testid="artwork-availability"
            className="mt-3 font-serif text-2xl text-ki-fg tracking-tight"
          >
            {availabilityStatus}
          </div>
          <div className="mt-2 text-sm text-ki-muted">
            {field(artwork.price) === TBC ? "Price on request" : artwork.price}
          </div>
          <dl className="mt-7 space-y-3 text-sm">
            {[
              ["Edition size", artwork.edition_size],
              ["Edition number", artwork.edition_number],
              ["Image size", artwork.image_size],
              ["Paper size", artwork.paper_size],
              ["Signature", artwork.signature],
              ["Certificate", artwork.certificate],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-3 border-b border-ki-border/60 pb-2">
                <dt className="uppercase tracking-[0.22em] text-[10px] text-ki-muted">{k}</dt>
                <dd className="text-ki-fg/85 text-right">{field(v)}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-7 flex flex-col gap-3">
            <button
              type="button"
              onClick={scrollToInquiry}
              data-testid="artwork-side-cta-inquire"
              className="inline-flex items-center justify-center border border-ki-gold text-ki-gold hover:bg-ki-gold hover:text-ki-bg px-6 py-3.5 text-[11px] uppercase tracking-[0.24em] transition-colors duration-300"
            >
              Inquire about this work
            </button>
            <button
              type="button"
              onClick={scrollToInquiry}
              data-testid="artwork-side-cta-licensing"
              className="inline-flex items-center justify-center border border-ki-fg/40 text-ki-fg hover:border-ki-fg px-6 py-3.5 text-[11px] uppercase tracking-[0.24em]"
            >
              Licensing request
            </button>
          </div>
          <p className="mt-6 text-[10px] uppercase tracking-[0.22em] text-ki-muted leading-relaxed">
            Edition details, condition, framing, availability and pricing must be confirmed before
            any sale or reservation.
          </p>
        </aside>
      </section>

      {/* ARTWORK DETAILS */}
      <section className="container-ki mt-24">
        <div className="overline">Details</div>
        <h2
          data-testid="artwork-details-heading"
          className="mt-4 font-serif text-3xl sm:text-4xl tracking-tight text-ki-fg"
        >
          Artwork Details
        </h2>
        <dl
          data-testid="artwork-details-grid"
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3 text-sm border border-ki-border p-8"
        >
          {ARTWORK_DETAILS_FIELDS.map(([label, key]) => (
            <div key={key} className="flex justify-between gap-4 border-b border-ki-border/60 pb-2">
              <dt className="uppercase tracking-[0.22em] text-[10px] text-ki-muted">{label}</dt>
              <dd className="text-ki-fg/85 text-right">
                {key === "price" && !artwork[key]
                  ? "Price on request"
                  : key === "availability" && !artwork[key]
                  ? "Availability to be confirmed"
                  : field(artwork[key])}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ARTWORK NOTE */}
      <section className="container-ki mt-24 max-w-3xl">
        <div className="overline">Note</div>
        <h2
          data-testid="artwork-note-heading"
          className="mt-4 font-serif text-3xl sm:text-4xl tracking-tight text-ki-fg"
        >
          Artwork Note
        </h2>
        <p className="mt-8 text-base md:text-lg leading-relaxed text-ki-fg/85">
          {field(artwork.note)}
        </p>
        <p className="mt-6 text-sm text-ki-muted">
          Final artwork note to be supplied by the artist — visual description, project context,
          memory / place / encounter note and any confirmed publication or exhibition reference.
        </p>
      </section>

      {/* PROJECT CONTEXT */}
      <section className="container-ki mt-24">
        <div className="overline">Project</div>
        <h2
          data-testid="artwork-project-heading"
          className="mt-4 font-serif text-3xl sm:text-4xl tracking-tight text-ki-fg"
        >
          Project Context
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-10 border border-ki-border p-8">
          <div className="md:col-span-8">
            <h3 className="font-serif text-2xl text-ki-fg tracking-tight">
              {field(artwork.project_title || artwork.series)}
            </h3>
            <p className="mt-2 font-serif italic text-base text-ki-beige/85">
              {field(artwork.project_subtitle)}
            </p>
            <p className="mt-6 text-base text-ki-fg/80 leading-relaxed">
              {field(artwork.project_description)}
            </p>
            <dl className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              {[
                ["Themes", artwork.project_themes],
                ["Location", artwork.project_location],
                ["Year range", artwork.project_year_range],
              ].map(([k, v]) => (
                <div key={k} className="border-b border-ki-border/60 pb-2">
                  <dt className="uppercase tracking-[0.22em] text-[10px] text-ki-muted">{k}</dt>
                  <dd className="mt-1 text-ki-fg/85">{field(v)}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-xs text-ki-muted">
              Project connection to be confirmed.
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col gap-3">
            {artwork.series_slug ? (
              <Link
                to={`/projects/${artwork.series_slug}`}
                data-testid="artwork-project-cta"
                className="inline-flex items-center justify-center border border-ki-gold text-ki-gold hover:bg-ki-gold hover:text-ki-bg px-6 py-3.5 text-[11px] uppercase tracking-[0.24em] transition-colors duration-300"
              >
                View Full Project →
              </Link>
            ) : (
              <Link
                to="/projects"
                data-testid="artwork-project-cta"
                className="inline-flex items-center justify-center border border-ki-fg/40 text-ki-fg hover:border-ki-fg px-6 py-3.5 text-[11px] uppercase tracking-[0.24em]"
              >
                Browse Projects →
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* PRINT AVAILABILITY */}
      <section className="container-ki mt-24">
        <div className="overline">Prints</div>
        <h2
          data-testid="artwork-print-availability-heading"
          className="mt-4 font-serif text-3xl sm:text-4xl tracking-tight text-ki-fg"
        >
          Print Availability
        </h2>
        <div className="mt-8 border border-ki-border p-8">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3 text-sm">
            {PRINT_AVAILABILITY_FIELDS.map((label) => (
              <li key={label} className="border-b border-ki-border/60 pb-2">
                <div className="uppercase tracking-[0.22em] text-[10px] text-ki-muted">{label}</div>
                <div className="mt-1 text-ki-fg/85">{TBC}</div>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-ki-muted leading-relaxed max-w-2xl">
            Print availability, edition details, dimensions, condition and pricing must be
            confirmed before any sale or reservation.
          </p>
          <button
            type="button"
            onClick={scrollToInquiry}
            data-testid="artwork-print-cta"
            className="mt-6 inline-flex items-center gap-3 border border-ki-gold text-ki-gold hover:bg-ki-gold hover:text-ki-bg px-7 py-4 text-xs uppercase tracking-[0.28em] transition-colors duration-300"
          >
            Request Print Availability →
          </button>
        </div>
      </section>

      {/* PROVENANCE & HISTORY */}
      <section className="container-ki mt-24">
        <div className="overline">History</div>
        <h2
          data-testid="artwork-provenance-heading"
          className="mt-4 font-serif text-3xl sm:text-4xl tracking-tight text-ki-fg"
        >
          Provenance, Exhibition and Publication History
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-px bg-ki-border border border-ki-border">
          <div className="bg-ki-surface p-7">
            <div className="text-[10px] uppercase tracking-[0.28em] text-ki-gold/90">Provenance</div>
            <ul className="mt-4 space-y-2">
              {listField(artwork.provenance).map((x, i) => (
                <li key={`prov-${x}-${i}`} className="text-sm text-ki-fg/75 leading-snug">{x}</li>
              ))}
            </ul>
          </div>
          <div className="bg-ki-surface p-7">
            <div className="text-[10px] uppercase tracking-[0.28em] text-ki-gold/90">Exhibition history</div>
            <ul className="mt-4 space-y-2">
              {listField(artwork.exhibition_history).map((x, i) => (
                <li key={`exh-${x}-${i}`} className="text-sm text-ki-fg/75 leading-snug">{x}</li>
              ))}
            </ul>
          </div>
          <div className="bg-ki-surface p-7">
            <div className="text-[10px] uppercase tracking-[0.28em] text-ki-gold/90">Publication history</div>
            <ul className="mt-4 space-y-2">
              {listField(artwork.publication_history).map((x, i) => (
                <li key={`pub-${x}-${i}`} className="text-sm text-ki-fg/75 leading-snug">{x}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-4 text-xs text-ki-muted">
          Provenance, exhibition and publication history to be confirmed.
        </p>
      </section>

      {/* RELATED WORKS */}
      <section className="container-ki mt-24">
        <div className="overline">Related</div>
        <h2
          data-testid="artwork-related-works-heading"
          className="mt-4 font-serif text-3xl sm:text-4xl tracking-tight text-ki-fg"
        >
          Related Works
        </h2>
        <ul className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-ki-border border border-ki-border">
          {(artwork.related_works && artwork.related_works.length > 0
            ? artwork.related_works
            : Array.from({ length: 4 })
          ).map((w, i) => (
            <li
              key={w?.slug || `related-${i}`}
              data-testid={`artwork-related-work-${i}`}
              className="bg-ki-bg p-5 min-h-[260px] flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[4/5] bg-ki-elevated border border-ki-border/60 mb-3 flex items-center justify-center text-[10px] uppercase tracking-[0.26em] text-ki-muted/70">
                  {w?.image ? (
                    <img src={w.image} alt={w.title || "Related work"} className="absolute inset-0 w-full h-full object-cover opacity-90" />
                  ) : (
                    <span>Related · {String(i + 1).padStart(2, "0")}</span>
                  )}
                </div>
                <h3 className="font-serif text-base text-ki-fg tracking-tight">
                  {field(w?.title)}
                </h3>
                <div className="mt-2 text-[10px] uppercase tracking-[0.22em] text-ki-muted space-y-1">
                  <div>Series · {field(w?.series)}</div>
                  <div>Year · {field(w?.year)}</div>
                  <div>Availability · {field(w?.availability)}</div>
                </div>
              </div>
              <Link
                to={w?.slug ? `/prints/${w.slug}` : "/prints"}
                className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.26em] text-ki-fg/85 hover:text-ki-gold transition-colors"
              >
                View Work →
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* RELATED MEDIA */}
      <section className="container-ki mt-24">
        <div className="overline">Media</div>
        <h2
          data-testid="artwork-related-media-heading"
          className="mt-4 font-serif text-3xl sm:text-4xl tracking-tight text-ki-fg"
        >
          Related Media
        </h2>
        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ki-border border border-ki-border">
          {RELATED_MEDIA_CARDS.map((c) => (
            <li
              key={c.slug}
              data-testid={`artwork-related-media-${c.slug}`}
              className="bg-ki-bg p-6 min-h-[180px] flex flex-col justify-between"
            >
              <div>
                <div className="text-[10px] uppercase tracking-[0.28em] text-ki-gold/90">Media</div>
                <h3 className="mt-3 font-serif text-xl text-ki-fg tracking-tight">{c.title}</h3>
                <p className="mt-3 text-sm text-ki-fg/70 leading-relaxed">{c.note}</p>
              </div>
              <Link
                to={c.to}
                className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.26em] text-ki-fg/85 hover:text-ki-gold transition-colors"
              >
                View →
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-ki-muted">Related media to be confirmed.</p>
      </section>

      {/* ARTWORK INQUIRY */}
      <section
        ref={inquiryRef}
        id="artwork-inquiry"
        className="container-ki mt-28 pt-12 border-t border-ki-border"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <div className="overline">Inquiry</div>
            <h2
              data-testid="artwork-inquiry-heading"
              className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ki-fg"
            >
              Inquire About This Artwork
            </h2>
            <p className="mt-6 text-base text-ki-fg/75 leading-relaxed max-w-md">
              Reviewed before reply. Artwork details, print availability, edition status,
              condition and pricing are confirmed before any sale or reservation.
            </p>
          </div>
          <div className="lg:col-span-8">
            <ArtworkInquiryForm artwork={artwork} />
          </div>
        </div>
      </section>

      {/* LICENSING */}
      <section className="container-ki mt-24">
        <div className="overline">Licensing</div>
        <h2
          data-testid="artwork-licensing-heading"
          className="mt-4 font-serif text-3xl sm:text-4xl tracking-tight text-ki-fg"
        >
          Licensing and Reproduction
        </h2>
        <ul className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-ki-border border border-ki-border">
          {[
            "Publication use",
            "Press use",
            "Academic use",
            "Film / moving-image use",
            "Exhibition use",
            "Archive research",
            "High-resolution image request",
            "Licensing terms",
          ].map((label) => (
            <li
              key={label}
              className="bg-ki-bg p-5 min-h-[120px] flex items-center text-sm text-ki-fg/85 leading-relaxed"
            >
              {label}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-ki-muted leading-relaxed max-w-2xl">
          High-resolution image files are not provided as downloads. Requests are reviewed and
          supplied case by case once usage and credit are confirmed.
        </p>
        <button
          type="button"
          onClick={scrollToInquiry}
          data-testid="artwork-licensing-cta"
          className="mt-6 inline-flex items-center justify-center border border-ki-gold text-ki-gold hover:bg-ki-gold hover:text-ki-bg px-7 py-4 text-xs uppercase tracking-[0.24em] transition-colors duration-300"
        >
          Request Licensing Information
        </button>
      </section>

      {/* ARCHIVE RECORD STATUS */}
      <section className="container-ki mt-24">
        <div className="overline">Archive</div>
        <h2
          data-testid="artwork-archive-status-heading"
          className="mt-4 font-serif text-3xl sm:text-4xl tracking-tight text-ki-fg"
        >
          Archive Record
        </h2>
        <div className="mt-8 border border-ki-border p-8">
          <div className="text-[10px] uppercase tracking-[0.28em] text-ki-gold/90">Status</div>
          <div
            data-testid="artwork-archive-status"
            className="mt-2 font-serif text-2xl text-ki-fg tracking-tight"
          >
            {availabilityStatus}
          </div>
          <ul className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 text-[11px] uppercase tracking-[0.22em] text-ki-muted">
            {[
              "Available by inquiry",
              "Availability to be confirmed",
              "Sold out",
              "Archive record only",
              "Private collection, to be confirmed",
              "Public collection, to be confirmed",
              "Not currently available",
              "Edition details to be confirmed",
            ].map((label) => (
              <li
                key={label}
                className="border border-ki-border/60 px-3 py-2 leading-snug"
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FOOTER ACTIONS */}
      <section className="container-ki mt-24">
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/prints"
            className="inline-flex items-center justify-center border border-ki-fg/30 text-ki-fg hover:border-ki-gold hover:text-ki-gold px-8 py-4 text-xs uppercase tracking-[0.28em] transition-colors duration-300"
          >
            ← Back to Prints
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center border border-ki-gold text-ki-gold hover:bg-ki-gold hover:text-ki-bg px-8 py-4 text-xs uppercase tracking-[0.28em] transition-colors duration-300"
          >
            Contact Studio →
          </Link>
        </div>
      </section>

      <ArtworkLightbox
        open={lightbox}
        onClose={() => setLightbox(false)}
        src={artwork.image}
        alt={artwork.alt || artwork.title}
        title={artwork.title}
      />
    </article>
  );
}
