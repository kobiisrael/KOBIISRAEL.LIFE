import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { toast } from "sonner";
import ArtworkDetail from "@/components/artwork/ArtworkDetail";
import { submitInquiry } from "@/lib/api";

const TBC = "To be confirmed by artist";
const field = (v) => (v && String(v).trim() ? v : TBC);
const listField = (arr) => (Array.isArray(arr) && arr.length > 0 ? arr : [TBC]);

const ARCHIVE_NOTE_MOTIFS = [
  { slug: "memory", title: "Memory", excerpt: "Short note on memory — final text to be supplied." },
  { slug: "place", title: "Place", excerpt: "Short note on place — final text to be supplied." },
  { slug: "body", title: "Body", excerpt: "Short note on the body — final text to be supplied." },
  { slug: "witness", title: "Witness", excerpt: "Short note on witnessing — final text to be supplied." },
  { slug: "desire", title: "Desire", excerpt: "Short note on desire — final text to be supplied." },
  { slug: "exile", title: "Exile", excerpt: "Short note on exile — final text to be supplied." },
  { slug: "time", title: "Time", excerpt: "Short note on time — final text to be supplied." },
  { slug: "encounter", title: "Encounter", excerpt: "Short note on encounter — final text to be supplied." },
];

const RELATED_LINKS = [
  { slug: "still", label: "Still", to: "/still", note: "Photography archive" },
  { slug: "moving", label: "Moving", to: "/moving", note: "Film and video archive" },
  { slug: "books", label: "Books", to: "/books", note: "Publications and catalogues" },
  { slug: "prints", label: "Prints", to: "/prints", note: "Limited edition prints" },
  { slug: "archive", label: "Archive", to: "/archive", note: "Project index" },
  { slug: "journal", label: "Journal", to: "/journal", note: "Writing and archive notes" },
];

const INQUIRY_TYPE_OPTIONS = [
  { value: "collector", label: "Collector" },
  { value: "gallery", label: "Gallery" },
  { value: "curator", label: "Curator" },
  { value: "museum", label: "Museum" },
  { value: "press", label: "Press" },
  { value: "publisher", label: "Publisher" },
  { value: "film_programmer", label: "Film programmer" },
  { value: "book_inquiry", label: "Book inquiry" },
  { value: "research", label: "Archive research" },
  { value: "licensing", label: "Licensing" },
  { value: "general", label: "General" },
];

// ---------- Sub-components ----------

function ImageSequence({ images, projectTitle }) {
  const [openIdx, setOpenIdx] = useState(null);
  const close = useCallback(() => setOpenIdx(null), []);
  const prev = useCallback(
    () => setOpenIdx((i) => (i === null ? null : (i - 1 + images.length) % images.length)),
    [images.length]
  );
  const next = useCallback(
    () => setOpenIdx((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (openIdx === null) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [openIdx, close, prev, next]);

  const active = openIdx !== null ? images[openIdx] : null;

  return (
    <section className="container-ki mt-24" id="image-sequence" data-testid="project-image-sequence">
      <div className="overline">Image Sequence</div>
      <h2 className="mt-4 font-serif text-3xl sm:text-4xl tracking-tight text-ki-fg">
        Image Sequence
      </h2>
      <p className="mt-3 text-[11px] uppercase tracking-[0.24em] text-ki-muted">
        Tap an image for the sequence view · keyboard ← → to navigate
      </p>
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {images.map((img, i) => (
          <button
            key={img?.url || `seq-${i}`}
            type="button"
            onClick={() => setOpenIdx(i)}
            data-testid={`project-sequence-thumb-${i}`}
            className="group relative aspect-[4/5] bg-ki-elevated border border-ki-border/60 overflow-hidden text-left transition-colors hover:border-ki-gold"
            aria-label={`Open image ${i + 1} of ${images.length}`}
          >
            {img?.url ? (
              <img
                src={img.url}
                alt={img.alt || `${projectTitle} — sequence image ${i + 1}`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                <div className="text-[10px] uppercase tracking-[0.28em] text-ki-muted/70">
                  Image · {String(i + 1).padStart(2, "0")} · placeholder
                </div>
              </div>
            )}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ki-bg/85 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="text-[10px] uppercase tracking-[0.22em] text-ki-fg/80">
                {String(i + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active && (
        <div
          data-testid="project-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${projectTitle} — image ${openIdx + 1} of ${images.length}`}
          className="fixed inset-0 z-50 bg-ki-bg/95 backdrop-blur-sm flex items-center justify-center px-4 sm:px-10"
          onClick={close}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            data-testid="project-lightbox-close"
            aria-label="Close image sequence"
            className="absolute top-5 right-5 p-3 text-ki-fg/80 hover:text-ki-gold transition-colors"
          >
            <X size={22} strokeWidth={1.4} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            data-testid="project-lightbox-prev"
            aria-label="Previous image"
            className="absolute left-3 sm:left-6 p-3 text-ki-fg/80 hover:text-ki-gold transition-colors"
          >
            <ChevronLeft size={28} strokeWidth={1.4} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            data-testid="project-lightbox-next"
            aria-label="Next image"
            className="absolute right-3 sm:right-6 p-3 text-ki-fg/80 hover:text-ki-gold transition-colors"
          >
            <ChevronRight size={28} strokeWidth={1.4} />
          </button>
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[3/2] bg-ki-elevated border border-ki-border overflow-hidden">
              {active?.url ? (
                <img
                  src={active.url}
                  alt={active.alt || `${projectTitle} — image ${openIdx + 1}`}
                  className="absolute inset-0 w-full h-full object-contain"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-[11px] uppercase tracking-[0.28em] text-ki-muted">
                  Image · {String(openIdx + 1).padStart(2, "0")} · placeholder
                </div>
              )}
            </div>
            <div className="mt-5 flex items-start justify-between gap-6">
              <div>
                <div className="text-[10px] uppercase tracking-[0.26em] text-ki-gold/90">
                  {projectTitle}
                </div>
                <div
                  data-testid="project-lightbox-caption"
                  className="mt-2 font-serif italic text-lg text-ki-fg/85"
                >
                  {active.alt || "Caption to be supplied"}
                </div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.22em] text-ki-muted">
                  {openIdx + 1} / {images.length} · Title, year, edition and availability to be
                  confirmed
                </div>
              </div>
              <a
                href="#project-inquiry"
                onClick={close}
                data-testid="project-lightbox-request"
                className="shrink-0 border border-ki-gold text-ki-gold hover:bg-ki-gold hover:text-ki-bg px-5 py-3 text-[11px] uppercase tracking-[0.24em] transition-colors"
              >
                Request Details →
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function ProjectInquiryForm({ projectTitle, projectSlug }) {
  const [f, setF] = useState({
    name: "",
    email: "",
    organisation: "",
    country: "",
    inquiry_type: "collector",
    artwork: "",
    message: "",
    consent: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const up = (k) => (e) =>
    setF((s) => ({ ...s, [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value }));

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
        subject: `Project inquiry — ${projectTitle}`,
        message: f.message,
        project_interest: projectSlug || projectTitle,
        country: f.country || null,
        organisation: f.organisation || null,
        consent: f.consent,
      });
      setSubmitted(true);
      setF({
        name: "",
        email: "",
        organisation: "",
        country: "",
        inquiry_type: "collector",
        artwork: "",
        message: "",
        consent: false,
      });
      toast.success("Project inquiry received. Thank you.");
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
      data-testid="project-inquiry-form"
      className="flex flex-col gap-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="flex flex-col gap-2">
          <label htmlFor="ki-pi-name" className={labelCls}>Full name</label>
          <input
            id="ki-pi-name"
            type="text"
            required
            value={f.name}
            onChange={up("name")}
            data-testid="project-inquiry-name"
            className={inputCls}
            placeholder="Your full name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="ki-pi-email" className={labelCls}>Email address</label>
          <input
            id="ki-pi-email"
            type="email"
            required
            value={f.email}
            onChange={up("email")}
            data-testid="project-inquiry-email"
            className={inputCls}
            placeholder="you@studio.com"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="ki-pi-org" className={labelCls}>
            Organisation <span className="text-ki-muted/60">(optional)</span>
          </label>
          <input
            id="ki-pi-org"
            type="text"
            value={f.organisation}
            onChange={up("organisation")}
            data-testid="project-inquiry-org"
            className={inputCls}
            placeholder="Institution, gallery, press"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="ki-pi-country" className={labelCls}>Country</label>
          <input
            id="ki-pi-country"
            type="text"
            required
            value={f.country}
            onChange={up("country")}
            data-testid="project-inquiry-country"
            className={inputCls}
            placeholder="Country"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="ki-pi-type" className={labelCls}>Inquiry type</label>
          <select
            id="ki-pi-type"
            value={f.inquiry_type}
            onChange={up("inquiry_type")}
            data-testid="project-inquiry-type"
            className={`${inputCls} appearance-none`}
          >
            {INQUIRY_TYPE_OPTIONS.map((o) => (
              <option key={o.value} value={o.value} className="bg-ki-bg text-ki-fg">
                {o.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="ki-pi-project" className={labelCls}>Project</label>
          <input
            id="ki-pi-project"
            type="text"
            value={projectTitle}
            readOnly
            data-testid="project-inquiry-project"
            className={`${inputCls} text-ki-fg/80`}
          />
        </div>
        <div className="flex flex-col gap-2 md:col-span-2">
          <label htmlFor="ki-pi-artwork" className={labelCls}>
            Artwork title <span className="text-ki-muted/60">(optional)</span>
          </label>
          <input
            id="ki-pi-artwork"
            type="text"
            value={f.artwork}
            onChange={up("artwork")}
            data-testid="project-inquiry-artwork"
            className={inputCls}
            placeholder="If known"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="ki-pi-msg" className={labelCls}>Message</label>
        <textarea
          id="ki-pi-msg"
          required
          rows={5}
          value={f.message}
          onChange={up("message")}
          data-testid="project-inquiry-message"
          className={`${inputCls} resize-none`}
          placeholder="Please describe the inquiry — context, timeframe, intended use."
        />
      </div>
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={f.consent}
          onChange={up("consent")}
          required
          data-testid="project-inquiry-consent"
          className="mt-1 w-4 h-4 border border-ki-border bg-transparent accent-[#C19B54]"
        />
        <span className="text-xs text-ki-fg/75 leading-relaxed">
          I consent to the studio replying to this inquiry by email. My information will not be
          added to any mailing list and will not be shared with third parties.
        </span>
      </label>
      <div className="flex flex-col sm:flex-row sm:items-center gap-6">
        <button
          type="submit"
          disabled={submitting}
          data-testid="project-inquiry-submit"
          className="inline-flex items-center justify-center border border-ki-gold text-ki-gold hover:bg-ki-gold hover:text-ki-bg disabled:opacity-50 px-10 py-4 text-xs uppercase tracking-[0.28em] transition-colors duration-300"
        >
          {submitting ? "Sending…" : "Send Project Inquiry"}
        </button>
        {submitted && (
          <span
            data-testid="project-inquiry-success"
            className="text-sm text-ki-gold/90 max-w-md leading-relaxed"
          >
            Thank you for your inquiry. Project details, print availability, publication
            information and professional materials will be confirmed case by case.
          </span>
        )}
      </div>
    </form>
  );
}

// ---------- Main template ----------

export default function ProjectDetailTemplate({ project = {} }) {
  const inquiryRef = useRef(null);
  const sequenceImages = useMemo(() => {
    if (project.gallery_images && project.gallery_images.length > 0) return project.gallery_images;
    return Array.from({ length: 8 }).map((_, i) => ({ url: null, alt: null, idx: i }));
  }, [project.gallery_images]);

  const fallbackArtwork = useMemo(
    () => ({ title: field(project.title), series: field(project.title) }),
    [project.title]
  );

  const scrollToInquiry = useCallback(() => {
    inquiryRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const projectTitle = field(project.title);

  return (
    <article className="pt-40 pb-32" data-testid="project-detail">
      {/* HERO */}
      <header className="container-ki max-w-4xl">
        <div className="overline">Project</div>
        <h1
          data-testid="project-title"
          className="mt-6 font-serif text-5xl sm:text-6xl lg:text-7xl tracking-tight text-ki-fg"
        >
          {projectTitle}
        </h1>
        {project.subtitle ? (
          <p className="mt-5 font-serif italic text-xl text-ki-beige/90">{project.subtitle}</p>
        ) : (
          <p className="mt-5 font-serif italic text-xl text-ki-muted/80">
            Subtitle to be confirmed by artist
          </p>
        )}
        {(project.hasStill || project.hasMoving) && (
          <div className="mt-7 flex flex-wrap gap-3" data-testid="project-status-badges">
            {project.hasStill && (
              <span
                data-testid="project-badge-still"
                className="text-[10px] uppercase tracking-[0.28em] border border-ki-gold/60 text-ki-gold/90 px-3 py-1.5"
              >
                Still · Photography
              </span>
            )}
            {project.hasMoving && (
              <span
                data-testid="project-badge-moving"
                className="text-[10px] uppercase tracking-[0.28em] border border-[#8B1C1C]/60 text-[#d97a7a] px-3 py-1.5"
              >
                Moving · Film / Video
              </span>
            )}
          </div>
        )}
        <div className="mt-8 flex flex-wrap gap-x-10 gap-y-3 text-[11px] uppercase tracking-[0.24em] text-ki-muted">
          <span>Year · {field(project.year_range)}</span>
          <span>Location · {field(project.location)}</span>
          <span>Medium · {field(project.medium)}</span>
          <span>Status · {field(project.status)}</span>
        </div>
        <p className="mt-10 max-w-2xl text-base md:text-lg leading-relaxed text-ki-fg/80">
          {field(project.intro_statement)}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="#image-sequence"
            data-testid="project-cta-sequence"
            className="inline-flex items-center justify-center border border-ki-gold text-ki-gold hover:bg-ki-gold hover:text-ki-bg px-7 py-4 text-xs uppercase tracking-[0.24em] transition-colors duration-300"
          >
            View Image Sequence
          </a>
          <button
            type="button"
            onClick={scrollToInquiry}
            data-testid="project-cta-print"
            className="inline-flex items-center justify-center border border-ki-fg/40 text-ki-fg hover:border-ki-fg px-7 py-4 text-xs uppercase tracking-[0.24em]"
          >
            Request Print Availability
          </button>
          {project.hasMoving && (
            <a
              href="#film"
              data-testid="project-cta-moving"
              className="inline-flex items-center justify-center border border-[#8B1C1C]/60 text-[#d97a7a] hover:border-[#d97a7a] px-7 py-4 text-xs uppercase tracking-[0.24em]"
            >
              Related Moving Image
            </a>
          )}
        </div>
      </header>

      {/* HERO IMAGE */}
      {project.hero_image && (
        <section className="container-ki mt-16">
          <div className="relative aspect-[21/9] w-full overflow-hidden bg-ki-elevated border border-ki-border grain">
            <img
              src={project.hero_image}
              alt={project.hero_alt || `${projectTitle} — hero placeholder`}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ki-bg/40 to-transparent" />
            <div className="absolute top-5 left-5 text-[10px] uppercase tracking-[0.3em] text-ki-fg/75">
              Hero · Placeholder
            </div>
          </div>
        </section>
      )}

      {/* PROJECT SUMMARY */}
      <section className="container-ki mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <div className="lg:col-span-7 max-w-2xl">
          <div className="overline">Summary</div>
          <h2
            data-testid="project-summary-heading"
            className="mt-4 font-serif text-3xl sm:text-4xl tracking-tight text-ki-fg"
          >
            Project Summary
          </h2>
          <p className="mt-8 text-base md:text-lg leading-relaxed text-ki-fg/85">
            {field(project.intro_statement)}
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.28em] text-ki-muted">
            Final artist-approved project summary to be supplied
          </p>
        </div>
        <aside className="lg:col-span-5">
          <div className="relative aspect-[4/5] bg-ki-elevated border border-ki-border/60 overflow-hidden">
            {project.hero_image ? (
              <img
                src={project.hero_image}
                alt={project.hero_alt || `${projectTitle} — supporting image`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-[10px] uppercase tracking-[0.28em] text-ki-muted/70">
                Supporting image · placeholder
              </div>
            )}
          </div>
        </aside>
      </section>

      {/* CURATORIAL NOTE */}
      <section className="container-ki mt-24 max-w-3xl">
        <div className="overline">Curatorial</div>
        <h2
          data-testid="project-curatorial-heading"
          className="mt-4 font-serif text-3xl sm:text-4xl tracking-tight text-ki-fg"
        >
          Curatorial Note
        </h2>
        <p className="mt-8 text-base md:text-lg leading-relaxed text-ki-fg/85">
          Final curatorial note to be supplied. This space holds a longer conceptual framing of the
          project — historical context, personal context, visual language and the relationship
          between the still and moving-image materials within the archive.
        </p>
        <p className="mt-6 text-sm text-ki-muted">
          Artist note, historical context, personal context and visual language — to be confirmed
          by artist.
        </p>
      </section>

      {/* IMAGE SEQUENCE — replaces the old gallery grid */}
      <ImageSequence images={sequenceImages} projectTitle={projectTitle} />

      {/* SELECTED WORKS */}
      <section className="container-ki mt-24" id="film">
        <div className="overline">Selected Works</div>
        <h2
          data-testid="project-selected-works-heading"
          className="mt-4 font-serif text-3xl sm:text-4xl tracking-tight text-ki-fg"
        >
          Selected Works
        </h2>
        {project.selected_works && project.selected_works.length > 0 ? (
          project.selected_works.map((w, i) => (
            <ArtworkDetail key={w?.slug || w?.title || `selected-${i}`} artwork={w} />
          ))
        ) : (
          <ArtworkDetail artwork={fallbackArtwork} />
        )}
      </section>

      {/* MOVING IMAGE STUB (only when no rich VideoWorkDetail follows) */}
      {!project.hasMoving && (
        <section className="container-ki mt-24" data-testid="project-moving-stub">
          <div className="overline">Moving Image Connection</div>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl tracking-tight text-ki-fg">
            Moving Image Connection
          </h2>
          <div className="mt-6 relative aspect-video w-full bg-ki-elevated border border-ki-border overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-center px-6">
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-ki-muted/70">
                  Moving Image · Placeholder
                </div>
                <div className="mt-3 font-serif italic text-lg text-ki-fg/55">
                  Related moving-image material to be confirmed.
                </div>
                <div className="mt-3 text-[10px] uppercase tracking-[0.28em] text-ki-muted/60">
                  Duration, format and screening status to be confirmed by artist
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Link
              to="/moving"
              className="inline-flex items-center justify-center border border-ki-fg/40 text-ki-fg hover:border-ki-fg px-7 py-4 text-xs uppercase tracking-[0.24em]"
            >
              View Moving Work →
            </Link>
            <button
              type="button"
              onClick={scrollToInquiry}
              className="inline-flex items-center justify-center border border-[#8B1C1C]/60 text-[#d97a7a] hover:border-[#d97a7a] px-7 py-4 text-xs uppercase tracking-[0.24em]"
            >
              Film / Curator Inquiry
            </button>
          </div>
        </section>
      )}

      {/* BOOK CONNECTION */}
      <section className="container-ki mt-24">
        <div className="overline">Books and Publications</div>
        <h2
          data-testid="project-book-heading"
          className="mt-4 font-serif text-3xl sm:text-4xl tracking-tight text-ki-fg"
        >
          Books and Publications
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-10 border border-ki-border p-8">
          <div className="md:col-span-4 relative aspect-[3/4] bg-ki-elevated border border-ki-border/60 flex items-center justify-center">
            <div className="text-[10px] uppercase tracking-[0.28em] text-ki-muted/70">
              Cover · Placeholder
            </div>
          </div>
          <div className="md:col-span-8">
            <h3 className="font-serif text-2xl text-ki-fg tracking-tight">
              {field(project.book?.title)}
            </h3>
            <dl className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
              {[
                ["Publisher", project.book?.publisher],
                ["Year", project.book?.year],
                ["Format", project.book?.format],
                ["ISBN", project.book?.isbn],
                ["Availability", project.book?.availability || "To be confirmed"],
                ["Price", project.book?.price || "Price on request"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex justify-between gap-3 border-b border-ki-border/60 pb-2"
                >
                  <dt className="uppercase tracking-[0.2em] text-[10px] text-ki-muted">{label}</dt>
                  <dd className="text-ki-fg/80 text-right">{field(value)}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Link
                to="/books"
                className="inline-flex items-center justify-center border border-ki-fg/40 text-ki-fg hover:border-ki-fg px-7 py-4 text-xs uppercase tracking-[0.24em]"
              >
                View Book →
              </Link>
              <button
                type="button"
                onClick={scrollToInquiry}
                data-testid="project-book-inquiry-cta"
                className="inline-flex items-center justify-center border border-ki-gold text-ki-gold hover:bg-ki-gold hover:text-ki-bg px-7 py-4 text-xs uppercase tracking-[0.24em] transition-colors duration-300"
              >
                Book Inquiry
              </button>
            </div>
            <p className="mt-4 text-xs text-ki-muted">
              Related publication material to be confirmed.
            </p>
          </div>
        </div>
      </section>

      {/* LIMITED EDITION PRINTS */}
      <section className="container-ki mt-24">
        <div className="overline">Limited Edition Prints</div>
        <h2
          data-testid="project-prints-heading"
          className="mt-4 font-serif text-3xl sm:text-4xl tracking-tight text-ki-fg"
        >
          Limited Edition Prints
        </h2>
        <div className="mt-6 border border-ki-border p-8">
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 text-sm">
            {[
              ["Selected prints", "To be confirmed by artist"],
              ["Edition details", "To be confirmed"],
              ["Size options", "To be confirmed"],
              ["Medium", "To be confirmed"],
              ["Signature", "Signed by the artist · to be confirmed"],
              ["Certificate", "Certificate of authenticity · to be confirmed"],
              ["Availability", "Availability to be confirmed"],
              ["Price", "Price on request"],
            ].map(([k, v]) => (
              <div key={k} className="border-b border-ki-border/60 pb-2">
                <dt className="uppercase tracking-[0.22em] text-[10px] text-ki-muted">{k}</dt>
                <dd className="mt-1 text-ki-fg/85">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 text-sm text-ki-muted leading-relaxed max-w-2xl">
            Print availability, edition details, dimensions and pricing must be confirmed before
            any sale or reservation.
          </p>
          <button
            type="button"
            onClick={scrollToInquiry}
            data-testid="project-prints-cta"
            className="mt-6 inline-flex items-center gap-3 border border-ki-gold text-ki-gold hover:bg-ki-gold hover:text-ki-bg px-7 py-4 text-xs uppercase tracking-[0.28em] transition-colors duration-300"
          >
            Request Print Availability →
          </button>
        </div>
      </section>

      {/* ARCHIVE NOTES */}
      <section className="container-ki mt-24">
        <div className="overline">Archive Notes</div>
        <h2
          data-testid="project-archive-notes-heading"
          className="mt-4 font-serif text-3xl sm:text-4xl tracking-tight text-ki-fg"
        >
          Archive Notes
        </h2>
        <ul className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-ki-border border border-ki-border">
          {ARCHIVE_NOTE_MOTIFS.map((m) => (
            <li
              key={m.slug}
              data-testid={`project-archive-note-${m.slug}`}
              className="bg-ki-bg p-5 min-h-[180px] flex flex-col justify-between"
            >
              <div>
                <div className="text-[10px] uppercase tracking-[0.26em] text-ki-gold/90">Note</div>
                <h3 className="mt-3 font-serif text-xl text-ki-fg tracking-tight">{m.title}</h3>
                <p className="mt-3 text-sm text-ki-fg/70 leading-relaxed">{m.excerpt}</p>
              </div>
              <div className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.22em]">
                <span className="text-ki-muted">Date · to be confirmed</span>
                <Link
                  to="/journal"
                  className="text-ki-fg/85 hover:text-ki-gold transition-colors"
                >
                  Read Note →
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* EXHIBITION + PUBLICATION HISTORY */}
      <section className="container-ki mt-24">
        <div className="overline">History</div>
        <h2
          data-testid="project-history-heading"
          className="mt-4 font-serif text-3xl sm:text-4xl tracking-tight text-ki-fg"
        >
          Exhibition and Publication History
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-ki-border border border-ki-border">
          <div className="bg-ki-surface p-7">
            <div className="text-[10px] uppercase tracking-[0.28em] text-ki-gold/90">
              Exhibition history
            </div>
            <ul className="mt-4 space-y-2">
              {listField(project.exhibition_history).map((x, i) => (
                <li key={`exh-${x}-${i}`} className="text-sm text-ki-fg/75 leading-snug">
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-ki-surface p-7">
            <div className="text-[10px] uppercase tracking-[0.28em] text-ki-gold/90">
              Publication history
            </div>
            <ul className="mt-4 space-y-2">
              {listField(project.publication_history).map((x, i) => (
                <li key={`pub-${x}-${i}`} className="text-sm text-ki-fg/75 leading-snug">
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-4 text-xs text-ki-muted">
          Exhibition and publication history to be confirmed.
        </p>
      </section>

      {/* PRESS QUOTES */}
      <section className="container-ki mt-24">
        <div className="overline">Press</div>
        {project.press_quotes && project.press_quotes.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10">
            {project.press_quotes.map((q, i) => (
              <blockquote
                key={q.source || `press-quote-${i}`}
                className="border-l-2 border-ki-gold pl-6"
              >
                <p className="font-serif italic text-xl text-ki-fg/90 leading-relaxed">
                  &ldquo;{q.quote}&rdquo;
                </p>
                <footer className="mt-4 text-[11px] uppercase tracking-[0.28em] text-ki-muted">
                  {q.source || TBC}
                </footer>
              </blockquote>
            ))}
          </div>
        ) : (
          <p className="mt-6 text-sm text-ki-muted">Press quotes to be supplied by the artist.</p>
        )}
      </section>

      {/* PROJECT METADATA */}
      <section className="container-ki mt-24">
        <div className="overline">Metadata</div>
        <h2
          data-testid="project-metadata-heading"
          className="mt-4 font-serif text-3xl sm:text-4xl tracking-tight text-ki-fg"
        >
          Project Metadata
        </h2>
        <dl
          data-testid="project-metadata"
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3 text-sm border border-ki-border p-8"
        >
          {[
            ["Project title", project.title],
            ["Subtitle", project.subtitle],
            ["Year / year range", project.year_range],
            ["Location", project.location],
            ["Medium", project.medium],
            ["Format", project.format],
            ["Number of works", project.number_of_works],
            ["Related moving-image works", project.related_moving_works],
            ["Related books", project.related_books],
            ["Related prints", project.related_prints],
            ["Related texts", project.related_texts],
            ["Exhibition history", "See section above"],
            ["Publication history", "See section above"],
            ["Archive status", project.archive_status],
            ["Availability status", project.availability_status],
            ["Last updated", project.last_updated],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between gap-4 border-b border-ki-border/60 pb-2">
              <dt className="uppercase tracking-[0.22em] text-[10px] text-ki-muted">{k}</dt>
              <dd className="text-ki-fg/85 text-right">{field(v)}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* RELATED PROJECTS */}
      <section className="container-ki mt-24">
        <div className="overline">Continue</div>
        <h2
          data-testid="project-related-heading"
          className="mt-4 font-serif text-3xl sm:text-4xl tracking-tight text-ki-fg"
        >
          Related Projects
        </h2>
        <ul className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-ki-border border border-ki-border">
          {RELATED_LINKS.map((l) => (
            <li key={l.slug} className="bg-ki-bg">
              <Link
                to={l.to}
                data-testid={`project-related-${l.slug}`}
                className="group block p-6 min-h-[160px] flex flex-col justify-between transition-colors hover:bg-ki-surface"
              >
                <div className="text-[10px] uppercase tracking-[0.28em] text-ki-gold/90">
                  Section
                </div>
                <div>
                  <div className="font-serif text-lg text-ki-fg tracking-tight group-hover:text-ki-gold transition-colors">
                    {l.label}
                  </div>
                  <p className="mt-2 text-xs text-ki-muted leading-relaxed">{l.note}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* PROJECT INQUIRY */}
      <section
        ref={inquiryRef}
        id="project-inquiry"
        className="container-ki mt-28 pt-12 border-t border-ki-border"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <div className="overline">Inquiry</div>
            <h2
              data-testid="project-inquiry-heading"
              className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ki-fg"
            >
              Inquire About This Project
            </h2>
            <p className="mt-6 text-base text-ki-fg/75 leading-relaxed max-w-md">
              Messages are reviewed before reply. Project details, print availability, publication
              information and professional materials are confirmed case by case.
            </p>
          </div>
          <div className="lg:col-span-8">
            <ProjectInquiryForm projectTitle={projectTitle} projectSlug={project.slug} />
          </div>
        </div>
      </section>

      {/* FOOTER ACTIONS */}
      <section className="container-ki mt-24">
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/archive"
            className="inline-flex items-center justify-center border border-ki-fg/30 text-ki-fg hover:border-ki-gold hover:text-ki-gold px-8 py-4 text-xs uppercase tracking-[0.28em] transition-colors duration-300"
          >
            ← Back to Archive
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center border border-ki-gold text-ki-gold hover:bg-ki-gold hover:text-ki-bg px-8 py-4 text-xs uppercase tracking-[0.28em] transition-colors duration-300"
          >
            Contact Studio →
          </Link>
        </div>
      </section>
    </article>
  );
}
