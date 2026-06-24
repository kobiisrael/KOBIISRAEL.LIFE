import { useCallback, useEffect, useRef, useState, forwardRef, useImperativeHandle } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { submitInquiry } from "@/lib/api";
import {
  CONTACT_HERO,
  CONTACT_INTRO_IMAGE,
  CONTACT_PATHWAYS,
  CONTACT_INQUIRY_TYPE_OPTIONS,
  CONTACT_CURATOR_FIELDS,
  CONTACT_PRESS_FIELDS,
  CONTACT_FILM_FIELDS,
  CONTACT_BOOK_FIELDS,
  CONTACT_DETAILS,
  CONTACT_RELATED_LINKS,
} from "@/data/site";
import { CONTACT } from "@/constants/testIds";

const setMeta = (name, content) => {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const inputCls =
  "w-full bg-transparent border-b border-ki-border focus:border-ki-gold outline-none text-ki-fg placeholder:text-ki-muted py-3 transition-colors";
const labelCls = "text-[10px] uppercase tracking-[0.28em] text-ki-muted";

const COLLECTOR_TYPES = new Set(["collector", "gallery"]);
const DEADLINE_TYPES = new Set(["press", "publisher", "film_programmer"]);

const ContactForm = forwardRef(function ContactForm(_, ref) {
  const [f, setF] = useState({
    name: "",
    email: "",
    phone: "",
    organisation: "",
    country: "",
    inquiry_type: "general",
    project_interest: "",
    budget_range: "",
    deadline: "",
    message: "",
    consent: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const up = (k) => (e) =>
    setF((s) => ({ ...s, [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value }));

  useImperativeHandle(ref, () => ({
    setInquiryType(t) {
      setF((s) => ({ ...s, inquiry_type: t }));
    },
  }));

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
        subject: f.project_interest ? `Contact — ${f.project_interest}` : "Contact inquiry",
        message: f.message,
        project_interest: f.project_interest || null,
        phone: f.phone || null,
        country: f.country || null,
        organisation: f.organisation || null,
        budget_range: COLLECTOR_TYPES.has(f.inquiry_type) ? f.budget_range || null : null,
        deadline: DEADLINE_TYPES.has(f.inquiry_type) ? f.deadline || null : null,
        consent: f.consent,
      });
      setSubmitted(true);
      setF({
        name: "",
        email: "",
        phone: "",
        organisation: "",
        country: "",
        inquiry_type: "general",
        project_interest: "",
        budget_range: "",
        deadline: "",
        message: "",
        consent: false,
      });
      toast.success("Inquiry received. Thank you.");
    } catch (err) {
      toast.error(err?.response?.data?.detail || "Could not send. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form data-testid={CONTACT.form} onSubmit={submit} noValidate className="flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="flex flex-col gap-2">
          <label htmlFor="ki-c-name" className={labelCls}>
            Full name
          </label>
          <input
            id="ki-c-name"
            type="text"
            required
            value={f.name}
            onChange={up("name")}
            data-testid={CONTACT.formName}
            className={inputCls}
            placeholder="Your full name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="ki-c-email" className={labelCls}>
            Email address
          </label>
          <input
            id="ki-c-email"
            type="email"
            required
            value={f.email}
            onChange={up("email")}
            data-testid={CONTACT.formEmail}
            className={inputCls}
            placeholder="you@studio.com"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="ki-c-phone" className={labelCls}>
            Phone <span className="text-ki-muted/60">(optional)</span>
          </label>
          <input
            id="ki-c-phone"
            type="tel"
            value={f.phone}
            onChange={up("phone")}
            data-testid={CONTACT.formPhone}
            className={inputCls}
            placeholder="With country code"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="ki-c-org" className={labelCls}>
            Organisation <span className="text-ki-muted/60">(optional)</span>
          </label>
          <input
            id="ki-c-org"
            type="text"
            value={f.organisation}
            onChange={up("organisation")}
            data-testid={CONTACT.formOrg}
            className={inputCls}
            placeholder="Institution, gallery, press"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="ki-c-country" className={labelCls}>
            Country
          </label>
          <input
            id="ki-c-country"
            type="text"
            required
            value={f.country}
            onChange={up("country")}
            data-testid={CONTACT.formCountry}
            className={inputCls}
            placeholder="Country"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="ki-c-type" className={labelCls}>
            Inquiry type
          </label>
          <select
            id="ki-c-type"
            value={f.inquiry_type}
            onChange={up("inquiry_type")}
            data-testid={CONTACT.formType}
            className={`${inputCls} appearance-none`}
          >
            {CONTACT_INQUIRY_TYPE_OPTIONS.map((o) => (
              <option key={o.value} value={o.value} className="bg-ki-bg text-ki-fg">
                {o.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2 md:col-span-2">
          <label htmlFor="ki-c-project" className={labelCls}>
            Project or artwork of interest <span className="text-ki-muted/60">(optional)</span>
          </label>
          <input
            id="ki-c-project"
            type="text"
            value={f.project_interest}
            onChange={up("project_interest")}
            data-testid={CONTACT.formProject}
            className={inputCls}
            placeholder="e.g. Cuba, Love Story"
          />
        </div>
        {COLLECTOR_TYPES.has(f.inquiry_type) && (
          <div className="flex flex-col gap-2">
            <label htmlFor="ki-c-budget" className={labelCls}>
              Budget range <span className="text-ki-muted/60">(optional)</span>
            </label>
            <input
              id="ki-c-budget"
              type="text"
              value={f.budget_range}
              onChange={up("budget_range")}
              data-testid={CONTACT.formBudget}
              className={inputCls}
              placeholder="Indicative range"
            />
          </div>
        )}
        {DEADLINE_TYPES.has(f.inquiry_type) && (
          <div className="flex flex-col gap-2">
            <label htmlFor="ki-c-deadline" className={labelCls}>
              Deadline <span className="text-ki-muted/60">(optional)</span>
            </label>
            <input
              id="ki-c-deadline"
              type="text"
              value={f.deadline}
              onChange={up("deadline")}
              data-testid={CONTACT.formDeadline}
              className={inputCls}
              placeholder="e.g. by 15 September"
            />
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="ki-c-msg" className={labelCls}>
          Message
        </label>
        <textarea
          id="ki-c-msg"
          required
          rows={6}
          value={f.message}
          onChange={up("message")}
          data-testid={CONTACT.formMessage}
          className={`${inputCls} resize-none`}
          placeholder="Please include the relevant project, artwork or context for your inquiry."
        />
      </div>
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={f.consent}
          onChange={up("consent")}
          data-testid={CONTACT.formConsent}
          required
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
          data-testid={CONTACT.formSubmit}
          className="inline-flex items-center justify-center border border-ki-gold text-ki-gold hover:bg-ki-gold hover:text-ki-bg disabled:opacity-50 px-10 py-4 text-xs uppercase tracking-[0.28em] transition-colors duration-300"
        >
          {submitting ? "Sending…" : "Send Inquiry"}
        </button>
        {submitted && (
          <span
            data-testid={CONTACT.formSuccess}
            className="text-sm text-ki-gold/90 max-w-md leading-relaxed"
          >
            Thank you for your inquiry. Your message has been received and will be reviewed before
            reply. Availability, prices, licensing terms, screenings and professional materials
            will be confirmed case by case.
          </span>
        )}
      </div>
    </form>
  );
});

export default function Contact() {
  const formRef = useRef(null);

  useEffect(() => {
    const prev = document.title;
    document.title = "Contact | Kobi Israel";
    setMeta(
      "description",
      "Contact Kobi Israel for collector inquiries, limited edition prints, gallery and curator inquiries, press, publications, moving-image screenings, archive research and professional correspondence."
    );
    setMeta(
      "keywords",
      "Contact Kobi Israel, Kobi Israel print inquiry, Kobi Israel collector inquiry, Kobi Israel gallery inquiry, Kobi Israel curator inquiry, Kobi Israel press inquiry, Kobi Israel limited edition prints, Kobi Israel film screening, Kobi Israel archive research, Kobi Israel photography licensing, Kobi Israel books inquiry"
    );
    window.scrollTo(0, 0);
    return () => {
      document.title = prev;
    };
  }, []);

  const scrollToForm = useCallback(() => {
    document.getElementById("contact-form-section")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handlePathway = useCallback(
    (type) => {
      if (type) formRef.current?.setInquiryType(type);
      scrollToForm();
    },
    [scrollToForm]
  );

  return (
    <div data-testid={CONTACT.page}>
      {/* HERO */}
      <section className="relative min-h-[78vh] w-full overflow-hidden grain">
        <img
          src={CONTACT_HERO.image}
          alt={CONTACT_HERO.alt}
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ki-bg/85 via-ki-bg/55 to-ki-bg" />
        <div className="relative container-ki min-h-[78vh] flex flex-col justify-end pb-20 pt-40">
          <div className="max-w-3xl">
            <div className="overline">Contact</div>
            <h1
              data-testid={CONTACT.heroTitle}
              className="mt-6 font-serif text-6xl sm:text-7xl lg:text-[9rem] leading-[0.92] tracking-tight text-ki-fg"
            >
              Contact
            </h1>
            <p
              data-testid={CONTACT.heroSubtitle}
              className="mt-6 font-serif italic text-xl sm:text-2xl text-ki-beige/90"
            >
              Collector, curator, press, archive and professional inquiries
            </p>
            <p
              data-testid={CONTACT.heroIntro}
              className="mt-6 max-w-2xl text-base sm:text-lg text-ki-fg/80 leading-relaxed"
            >
              For print availability, exhibitions, publications, moving-image screenings, research,
              licensing and professional correspondence.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5">
              <a
                href="#contact-form-section"
                data-testid={CONTACT.heroCtaInquiry}
                className="inline-flex items-center justify-center border border-ki-gold text-ki-gold hover:bg-ki-gold hover:text-ki-bg transition-colors duration-300 px-8 py-4 text-xs uppercase tracking-[0.24em]"
              >
                Send Inquiry
              </a>
              <button
                type="button"
                onClick={() => handlePathway("collector")}
                data-testid={CONTACT.heroCtaPrint}
                className="inline-flex items-center justify-center border border-ki-fg/40 text-ki-fg hover:border-ki-fg px-8 py-4 text-xs uppercase tracking-[0.24em]"
              >
                Request Print Availability
              </button>
            </div>
            <p className="mt-12 text-[11px] uppercase tracking-[0.3em] text-ki-muted">
              Final image to be selected by artist
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 md:py-32 border-b border-ki-border">
        <div className="container-ki grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-7 max-w-2xl">
            <div className="overline">Inquiries</div>
            <h2
              data-testid={CONTACT.introHeading}
              className="mt-6 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ki-fg text-balance"
            >
              Professional Inquiries
            </h2>
            <p className="mt-8 text-base md:text-lg leading-relaxed text-ki-fg/85 text-balance">
              Please use the relevant inquiry pathway below so your message can be directed
              clearly. Print availability, publication details, archive materials, screenings and
              professional requests are reviewed case by case.
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.28em] text-ki-muted">
              Final artist-approved contact text to be supplied
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] bg-ki-elevated border border-ki-border/60 overflow-hidden">
              <img
                src={CONTACT_INTRO_IMAGE.image}
                alt={CONTACT_INTRO_IMAGE.alt}
                loading="lazy"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PATHWAYS */}
      <section className="py-24 md:py-32 border-b border-ki-border bg-ki-surface">
        <div className="container-ki">
          <div className="overline">Pathways</div>
          <h2
            data-testid={CONTACT.pathwaysHeading}
            className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg"
          >
            How to Inquire
          </h2>
          <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ki-border border border-ki-border">
            {CONTACT_PATHWAYS.map((p) => (
              <li
                key={p.slug}
                data-testid={CONTACT.pathwayCard(p.slug)}
                className="bg-ki-surface p-6 min-h-[220px] flex flex-col justify-between"
              >
                <div>
                  <div className="text-[10px] uppercase tracking-[0.28em] text-ki-gold/90">
                    Pathway
                  </div>
                  <h3 className="mt-3 font-serif text-xl text-ki-fg tracking-tight">{p.title}</h3>
                  <p className="mt-3 text-sm text-ki-fg/70 leading-relaxed">{p.note}</p>
                </div>
                <button
                  type="button"
                  onClick={() => handlePathway(p.type)}
                  data-testid={CONTACT.pathwayCta(p.slug)}
                  className="mt-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.26em] text-ki-fg/85 hover:text-ki-gold transition-colors self-start"
                >
                  Start Inquiry →
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* MAIN FORM */}
      <section
        id="contact-form-section"
        className="py-28 md:py-36 border-b border-ki-border"
      >
        <div className="container-ki grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <div className="overline">Inquiry Desk</div>
            <h2
              data-testid={CONTACT.formHeading}
              className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg"
            >
              Send an Inquiry
            </h2>
            <p className="mt-6 text-base text-ki-fg/75 leading-relaxed max-w-md">
              Messages are received and reviewed before reply. Treated discreetly. Availability,
              prices, screenings and licensing terms are confirmed case by case.
            </p>
          </div>
          <div className="lg:col-span-8">
            <ContactForm ref={formRef} />
          </div>
        </div>
      </section>

      {/* COLLECTOR */}
      <section className="py-24 md:py-32 border-b border-ki-border bg-ki-surface">
        <div className="container-ki max-w-3xl">
          <div className="overline">Collectors</div>
          <h2
            data-testid={CONTACT.collectorHeading}
            className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ki-fg"
          >
            Collector Inquiries
          </h2>
          <p className="mt-8 text-base md:text-lg leading-relaxed text-ki-fg/85">
            For limited edition print inquiries, please include the artwork title or series if
            known, preferred size, country, and whether the inquiry relates to a new acquisition,
            existing collection, secondary market question or institutional interest.
          </p>
          <p className="mt-6 text-sm text-ki-muted leading-relaxed">
            Prices, edition details, condition and availability must be confirmed before any sale
            or reservation.
          </p>
          <button
            type="button"
            onClick={() => handlePathway("collector")}
            data-testid={CONTACT.collectorCta}
            className="mt-10 inline-flex items-center justify-center border border-ki-gold text-ki-gold hover:bg-ki-gold hover:text-ki-bg px-8 py-4 text-xs uppercase tracking-[0.24em] transition-colors duration-300"
          >
            Request Print Availability
          </button>
        </div>
      </section>

      {/* CURATOR / MUSEUM */}
      <section className="py-24 md:py-32 border-b border-ki-border">
        <div className="container-ki">
          <div className="overline">Curators · Museums</div>
          <h2
            data-testid={CONTACT.curatorHeading}
            className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ki-fg"
          >
            Curator, Museum and Exhibition Inquiries
          </h2>
          <ul className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-ki-border border border-ki-border">
            {CONTACT_CURATOR_FIELDS.map((label) => (
              <li
                key={label}
                className="bg-ki-bg p-5 min-h-[120px] flex items-center text-sm text-ki-fg/85 leading-relaxed"
              >
                {label}
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => handlePathway("curator")}
            data-testid={CONTACT.curatorCta}
            className="mt-10 inline-flex items-center justify-center border border-ki-gold text-ki-gold hover:bg-ki-gold hover:text-ki-bg px-8 py-4 text-xs uppercase tracking-[0.24em] transition-colors duration-300"
          >
            Send Curator Inquiry
          </button>
        </div>
      </section>

      {/* PRESS */}
      <section className="py-24 md:py-32 border-b border-ki-border bg-ki-surface">
        <div className="container-ki">
          <div className="overline">Press · Publishing</div>
          <h2
            data-testid={CONTACT.pressHeading}
            className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ki-fg"
          >
            Press, Publishing and Image Requests
          </h2>
          <ul className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-ki-border border border-ki-border">
            {CONTACT_PRESS_FIELDS.map((label) => (
              <li
                key={label}
                className="bg-ki-surface p-5 min-h-[120px] flex items-center text-sm text-ki-fg/85 leading-relaxed"
              >
                {label}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-ki-muted leading-relaxed max-w-2xl">
            High-resolution image files are not provided as downloads. Requests are reviewed and
            supplied case by case once usage and credit are confirmed.
          </p>
          <button
            type="button"
            onClick={() => handlePathway("press")}
            data-testid={CONTACT.pressCta}
            className="mt-10 inline-flex items-center justify-center border border-ki-gold text-ki-gold hover:bg-ki-gold hover:text-ki-bg px-8 py-4 text-xs uppercase tracking-[0.24em] transition-colors duration-300"
          >
            Send Press / Publishing Inquiry
          </button>
        </div>
      </section>

      {/* FILM */}
      <section className="py-24 md:py-32 border-b border-ki-border">
        <div className="container-ki">
          <div className="overline">Film · Screenings</div>
          <h2
            data-testid={CONTACT.filmHeading}
            className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ki-fg"
          >
            Film, Screening and Moving Image Inquiries
          </h2>
          <ul className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-ki-border border border-ki-border">
            {CONTACT_FILM_FIELDS.map((label) => (
              <li
                key={label}
                className="bg-ki-bg p-5 min-h-[120px] flex items-center text-sm text-ki-fg/85 leading-relaxed"
              >
                {label}
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => handlePathway("film_programmer")}
            data-testid={CONTACT.filmCta}
            className="mt-10 inline-flex items-center justify-center border border-ki-gold text-ki-gold hover:bg-ki-gold hover:text-ki-bg px-8 py-4 text-xs uppercase tracking-[0.24em] transition-colors duration-300"
          >
            Send Film / Screening Inquiry
          </button>
        </div>
      </section>

      {/* BOOKS / ARCHIVE */}
      <section className="py-24 md:py-32 border-b border-ki-border bg-ki-surface">
        <div className="container-ki">
          <div className="overline">Books · Archive</div>
          <h2
            data-testid={CONTACT.bookHeading}
            className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ki-fg"
          >
            Books, Catalogues and Archive Materials
          </h2>
          <ul className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-ki-border border border-ki-border">
            {CONTACT_BOOK_FIELDS.map((label) => (
              <li
                key={label}
                className="bg-ki-surface p-5 min-h-[120px] flex items-center text-sm text-ki-fg/85 leading-relaxed"
              >
                {label}
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => handlePathway("book_inquiry")}
            data-testid={CONTACT.bookCta}
            className="mt-10 inline-flex items-center justify-center border border-ki-gold text-ki-gold hover:bg-ki-gold hover:text-ki-bg px-8 py-4 text-xs uppercase tracking-[0.24em] transition-colors duration-300"
          >
            Send Book / Archive Inquiry
          </button>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section className="py-24 md:py-32 border-b border-ki-border">
        <div className="container-ki">
          <div className="overline">Direct Contact</div>
          <h2
            data-testid={CONTACT.detailsHeading}
            className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ki-fg"
          >
            Contact Details
          </h2>
          <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ki-border border border-ki-border">
            {CONTACT_DETAILS.map((d) => (
              <li
                key={d.slug}
                data-testid={CONTACT.detailsItem(d.slug)}
                className="bg-ki-bg p-6 min-h-[160px] flex flex-col justify-between"
              >
                <div className="text-[10px] uppercase tracking-[0.28em] text-ki-gold/90">
                  {d.label}
                </div>
                <div className="mt-4 text-base text-ki-fg/85 leading-relaxed">{d.value}</div>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-ki-muted leading-relaxed max-w-2xl">
            No private address or telephone number is published. All professional contact runs
            through the inquiry form above and is reviewed before reply.
          </p>
        </div>
      </section>

      {/* BEFORE YOU WRITE */}
      <section className="py-24 md:py-32 border-b border-ki-border bg-ki-surface">
        <div className="container-ki max-w-3xl">
          <div className="overline">Guidance</div>
          <h2
            data-testid={CONTACT.beforeHeading}
            className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ki-fg"
          >
            Before You Write
          </h2>
          <p className="mt-8 text-base md:text-lg leading-relaxed text-ki-fg/85">
            Please include the relevant project, artwork, publication or archive area in your
            message. For print inquiries, include preferred size and country. For press or
            publication requests, include deadline and intended use. For curatorial or screening
            inquiries, include organisation, context and proposed timeframe.
          </p>
        </div>
      </section>

      {/* PRIVACY */}
      <section className="py-24 md:py-32 border-b border-ki-border">
        <div className="container-ki max-w-3xl">
          <div className="overline">Privacy</div>
          <h2
            data-testid={CONTACT.privacyHeading}
            className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ki-fg"
          >
            Privacy
          </h2>
          <p className="mt-8 text-base md:text-lg leading-relaxed text-ki-fg/85">
            Your information will only be used to respond to your inquiry. No mailing list
            subscription will be added unless you choose to subscribe separately.
          </p>
          <p className="mt-6 text-sm text-ki-muted leading-relaxed">
            Final privacy wording to be reviewed before launch.
          </p>
          <a
            href="#"
            data-testid={CONTACT.privacyLink}
            className="mt-6 inline-flex text-[11px] uppercase tracking-[0.26em] text-ki-fg/85 hover:text-ki-gold transition-colors"
            onClick={(e) => e.preventDefault()}
          >
            Privacy Policy · to be supplied →
          </a>
        </div>
      </section>

      {/* RELATED */}
      <section className="py-24 md:py-32">
        <div className="container-ki">
          <div className="overline">Continue Browsing</div>
          <h2
            data-testid={CONTACT.relatedHeading}
            className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg"
          >
            Explore Before Contacting
          </h2>
          <ul className="mt-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-px bg-ki-border border border-ki-border">
            {CONTACT_RELATED_LINKS.map((l) => (
              <li key={l.slug} className="bg-ki-bg">
                <Link
                  to={l.to}
                  data-testid={CONTACT.relatedLink(l.slug)}
                  className="group block p-6 min-h-[120px] flex flex-col justify-between transition-colors hover:bg-ki-surface"
                >
                  <div className="text-[10px] uppercase tracking-[0.28em] text-ki-gold/90">
                    Section
                  </div>
                  <div className="mt-3 font-serif text-lg text-ki-fg tracking-tight group-hover:text-ki-gold transition-colors">
                    {l.label}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
