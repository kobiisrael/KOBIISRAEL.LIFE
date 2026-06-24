import { useCallback, useEffect, useMemo, useRef, useState, forwardRef, useImperativeHandle } from "react";
import { Link } from "react-router-dom";
import { FileText, Search } from "lucide-react";
import { toast } from "sonner";
import { submitInquiry } from "@/lib/api";
import {
  ARCHIVE_HERO, ARCHIVE_CATEGORIES, ARCHIVE_FILTERS, ARCHIVE_PROJECT_INDEX,
  ARCHIVE_PATHWAYS, ARCHIVE_NOTE_INDEX, ARCHIVE_LIBRARY, ARCHIVE_TIMELINE_ENTRIES,
  ARCHIVE_MYTHOLOGY, ARCHIVE_RELATED_LINKS, ARCHIVE_INQUIRY_TYPE_OPTIONS,
} from "@/data/site";
import { ARCHIVE } from "@/constants/testIds";

const setMeta = (name, content) => {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) { el = document.createElement("meta"); el.setAttribute("name", name); document.head.appendChild(el); }
  el.setAttribute("content", content);
};

const ArchiveInquiryForm = forwardRef(function ArchiveInquiryForm(_, ref) {
  const [f, setF] = useState({ name:"", email:"", organisation:"", country:"", inquiry_type:"curatorial", area:"", message:"", consent:false });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const up = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value }));
  useImperativeHandle(ref, () => ({
    setInquiryType(t) { setF((s) => ({ ...s, inquiry_type: t })); },
    setArea(a) { setF((s) => ({ ...s, area: a || s.area })); },
  }));
  const submit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    if (!f.consent) { toast.error("Please confirm consent to reply before sending the inquiry."); return; }
    setSubmitting(true);
    try {
      await submitInquiry({
        name: f.name, email: f.email, inquiry_type: f.inquiry_type,
        subject: f.area ? `Archive inquiry — ${f.area}` : "Archive inquiry",
        message: f.message, country: f.country || null, consent: f.consent, project_interest: f.area || null,
      });
      setSubmitted(true);
      setF({ name:"", email:"", organisation:"", country:"", inquiry_type:"curatorial", area:"", message:"", consent:false });
      toast.success("Archive inquiry sent. Thank you.");
    } catch (err) {
      toast.error(err?.response?.data?.detail || "Could not send. Please try again.");
    } finally { setSubmitting(false); }
  };
  const inputCls = "w-full bg-transparent border-b border-ki-border focus:border-ki-gold outline-none text-ki-fg placeholder:text-ki-muted py-3 transition-colors";
  const labelCls = "text-[10px] uppercase tracking-[0.28em] text-ki-muted";
  return (
    <form data-testid={ARCHIVE.inquiryForm} onSubmit={submit} noValidate className="flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="flex flex-col gap-2"><label htmlFor="ki-arc-name" className={labelCls}>Full name</label>
          <input id="ki-arc-name" type="text" required value={f.name} onChange={up("name")} data-testid={ARCHIVE.inquiryName} className={inputCls} placeholder="Your full name" /></div>
        <div className="flex flex-col gap-2"><label htmlFor="ki-arc-email" className={labelCls}>Email address</label>
          <input id="ki-arc-email" type="email" required value={f.email} onChange={up("email")} data-testid={ARCHIVE.inquiryEmail} className={inputCls} placeholder="you@studio.com" /></div>
        <div className="flex flex-col gap-2"><label htmlFor="ki-arc-org" className={labelCls}>Organisation <span className="text-ki-muted/60">(optional)</span></label>
          <input id="ki-arc-org" type="text" value={f.organisation} onChange={up("organisation")} data-testid={ARCHIVE.inquiryOrg} className={inputCls} placeholder="Institution, gallery, press" /></div>
        <div className="flex flex-col gap-2"><label htmlFor="ki-arc-country" className={labelCls}>Country</label>
          <input id="ki-arc-country" type="text" value={f.country} onChange={up("country")} data-testid={ARCHIVE.inquiryCountry} className={inputCls} placeholder="Country" /></div>
        <div className="flex flex-col gap-2"><label htmlFor="ki-arc-type" className={labelCls}>Inquiry type</label>
          <select id="ki-arc-type" value={f.inquiry_type} onChange={up("inquiry_type")} data-testid={ARCHIVE.inquiryType} className={`${inputCls} appearance-none`}>
            {ARCHIVE_INQUIRY_TYPE_OPTIONS.map((o) => <option key={o.value} value={o.value} className="bg-ki-bg text-ki-fg">{o.label}</option>)}
          </select></div>
        <div className="flex flex-col gap-2"><label htmlFor="ki-arc-area" className={labelCls}>Project or archive area of interest</label>
          <input id="ki-arc-area" type="text" value={f.area} onChange={up("area")} data-testid={ARCHIVE.inquiryArea} className={inputCls} placeholder="e.g. Cuba, Love Story" /></div>
      </div>
      <div className="flex flex-col gap-2"><label htmlFor="ki-arc-msg" className={labelCls}>Message</label>
        <textarea id="ki-arc-msg" required rows={5} value={f.message} onChange={up("message")} data-testid={ARCHIVE.inquiryMessage} className={`${inputCls} resize-none`} placeholder="Please share any context relevant to your inquiry" /></div>
      <label className="flex items-start gap-3 cursor-pointer">
        <input type="checkbox" checked={f.consent} onChange={up("consent")} data-testid={ARCHIVE.inquiryConsent} required
          className="mt-1 w-4 h-4 border border-ki-border bg-transparent accent-[#C19B54]" />
        <span className="text-xs text-ki-fg/75 leading-relaxed">I consent to the studio replying to this archive inquiry by email. My information will not be shared with third parties.</span>
      </label>
      <div className="flex flex-col sm:flex-row sm:items-center gap-6">
        <button type="submit" disabled={submitting} data-testid={ARCHIVE.inquirySubmit}
          className="inline-flex items-center justify-center border border-ki-gold text-ki-gold hover:bg-ki-gold hover:text-ki-bg disabled:opacity-50 px-10 py-4 text-xs uppercase tracking-[0.28em] transition-colors duration-300">
          {submitting ? "Sending…" : "Send Archive Inquiry"}
        </button>
        {submitted && <span data-testid={ARCHIVE.inquirySuccess} className="text-sm text-ki-gold/90 max-w-md">Thank you for your archive inquiry. Your message has been received and will be reviewed before reply.</span>}
      </div>
    </form>
  );
});

export default function Archive() {
  const formRef = useRef(null);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const prev = document.title;
    document.title = "Archive | Kobi Israel";
    setMeta("description", "Archive of Kobi Israel, featuring photography projects, moving-image works, books, limited edition prints, texts, exhibitions, press materials and autobiographical research notes.");
    setMeta("keywords", "Kobi Israel archive, Kobi Israel photography archive, Kobi Israel artist archive, Kobi Israel projects, Kobi Israel moving image archive, Kobi Israel books, Kobi Israel prints, Kobi Israel exhibitions, queer photography archive, autobiographical photography archive, photography and memory archive, Israeli photographer archive, artist research library");
    window.scrollTo(0, 0);
    return () => { document.title = prev; };
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ARCHIVE_PROJECT_INDEX.filter((p) => {
      const matchFilter = filter === "all" || p.kinds?.includes(filter);
      const matchQuery = !q || [p.title, p.subtitle, p.medium, p.location, p.description, p.year_range, ...(p.kinds || [])].join(" ").toLowerCase().includes(q);
      return matchFilter && matchQuery;
    });
  }, [query, filter]);

  const scrollToForm = useCallback(() => { document.getElementById("archive-inquiry")?.scrollIntoView({ behavior: "smooth" }); }, []);
  const handlePathway = useCallback((slug, to) => {
    const typeMap = { collectors: "collector", curators: "curatorial", researchers: "research", viewers: "general", publishers: "publisher" };
    if (typeMap[slug]) formRef.current?.setInquiryType(typeMap[slug]);
    if (to) window.location.assign(to);
  }, []);
  const handleLibrary = useCallback((title) => {
    formRef.current?.setInquiryType("research");
    formRef.current?.setArea(title);
    scrollToForm();
  }, [scrollToForm]);

  return (
    <div data-testid={ARCHIVE.page}>
      {/* HERO */}
      <section className="relative min-h-[88vh] w-full overflow-hidden grain">
        <img src={ARCHIVE_HERO.image} alt={ARCHIVE_HERO.alt} loading="eager"
          className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-ki-bg/85 via-ki-bg/55 to-ki-bg" />
        <div className="relative container-ki min-h-[88vh] flex flex-col justify-end pb-20 pt-40">
          <div className="max-w-3xl">
            <div className="overline">Archive · Volume 06</div>
            <h1 data-testid={ARCHIVE.heroTitle} className="mt-6 font-serif text-6xl sm:text-7xl lg:text-[9rem] leading-[0.92] tracking-tight text-ki-fg">Archive</h1>
            <p data-testid={ARCHIVE.heroSubtitle} className="mt-6 font-serif italic text-xl sm:text-2xl text-ki-beige/90">Projects, fragments, books, films, prints and notes</p>
            <p data-testid={ARCHIVE.heroIntro} className="mt-6 max-w-2xl text-base sm:text-lg text-ki-fg/80 leading-relaxed">
              A living index of Kobi Israel&apos;s photographic, moving-image, printed and autobiographical archive.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5">
              <a href="#archive-index" data-testid={ARCHIVE.heroCtaExplore}
                className="inline-flex items-center justify-center border border-ki-gold text-ki-gold hover:bg-ki-gold hover:text-ki-bg transition-colors duration-300 px-8 py-4 text-xs uppercase tracking-[0.24em]">Explore Projects</a>
              <a href="#archive-search-section" data-testid={ARCHIVE.heroCtaSearch}
                className="inline-flex items-center justify-center border border-ki-fg/40 text-ki-fg hover:border-ki-fg px-8 py-4 text-xs uppercase tracking-[0.24em]">Search the Archive</a>
            </div>
            <p className="mt-12 text-[11px] uppercase tracking-[0.3em] text-ki-muted">Final archive image to be selected by artist</p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 md:py-32 border-b border-ki-border">
        <div className="container-ki max-w-3xl">
          <div className="overline">Introduction</div>
          <h2 data-testid={ARCHIVE.introHeading} className="mt-6 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ki-fg text-balance">A Map of the Work</h2>
          <p className="mt-8 text-base md:text-lg leading-relaxed text-ki-fg/85 text-balance">
            The archive gathers bodies of work, image sequences, moving-image fragments, books, print records, writings,
            exhibitions and research materials into one connected structure. It is both a record of completed works and
            a space for unfinished memories, future projects and returning questions.
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.28em] text-ki-muted">Final artist-approved archive introduction to be supplied</p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-24 md:py-32 border-b border-ki-border bg-ki-surface">
        <div className="container-ki">
          <div className="overline">Categories</div>
          <h2 data-testid={ARCHIVE.categoriesHeading} className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg">Archive Categories</h2>
          <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-ki-border border border-ki-border">
            {ARCHIVE_CATEGORIES.map((c, i) => (
              <li key={c.slug} data-testid={ARCHIVE.categoryCard(c.slug)} className="group bg-ki-surface p-6 min-h-[220px] flex flex-col">
                <div className="relative aspect-[4/3] bg-ki-elevated border border-ki-border/60 mb-4 flex items-center justify-center text-[10px] uppercase tracking-[0.28em] text-ki-muted/70">
                  Image · {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-serif text-lg text-ki-fg tracking-tight">{c.title}</h3>
                <p className="mt-2 text-sm text-ki-fg/70 leading-relaxed flex-1">{c.note}</p>
                <div className="mt-3 flex items-center justify-between text-[10px] uppercase tracking-[0.24em]">
                  <span className="text-ki-muted">Entries · {c.count}</span>
                  <Link to={c.to} data-testid={ARCHIVE.categoryCta(c.slug)} className="text-ki-fg/85 hover:text-ki-gold transition-colors">Open →</Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PROJECT INDEX */}
      <section id="archive-index" className="py-24 md:py-32 border-b border-ki-border">
        <div className="container-ki">
          <div className="overline">Project Index</div>
          <h2 data-testid={ARCHIVE.indexHeading} className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg">Project Index</h2>

          {/* SEARCH */}
          <div id="archive-search-section" className="mt-10 max-w-2xl">
            <label htmlFor="archive-search-input" className="text-[10px] uppercase tracking-[0.28em] text-ki-muted">Search</label>
            <div className="mt-3 flex items-center gap-3 border-b border-ki-border focus-within:border-ki-gold transition-colors">
              <Search size={16} className="text-ki-muted" strokeWidth={1.4} />
              <input id="archive-search-input" type="search" value={query} onChange={(e) => setQuery(e.target.value)}
                data-testid={ARCHIVE.search}
                className="flex-1 bg-transparent outline-none text-ki-fg placeholder:text-ki-muted py-3"
                placeholder="Search by project, place, theme, medium or year" />
            </div>
          </div>

          {/* FILTERS */}
          <div data-testid={ARCHIVE.filtersBar} role="tablist" aria-label="Archive filters"
            className="-mx-6 md:-mx-12 lg:-mx-20 px-6 md:px-12 lg:px-20 mt-8 mb-10 overflow-x-auto no-scrollbar">
            <div className="flex gap-2 md:gap-3 min-w-max">
              {ARCHIVE_FILTERS.map((f) => {
                const active = filter === f.slug;
                return (
                  <button key={f.slug} type="button" role="tab" aria-selected={active}
                    data-testid={ARCHIVE.filterBtn(f.slug)} onClick={() => setFilter(f.slug)}
                    className={`whitespace-nowrap border px-4 md:px-5 py-2.5 text-[11px] uppercase tracking-[0.24em] transition-colors duration-300 ${active ? "border-ki-gold text-ki-gold bg-ki-gold/5" : "border-ki-border text-ki-fg/70 hover:border-ki-fg/40 hover:text-ki-fg"}`}>
                    {f.label}
                  </button>
                );
              })}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div data-testid={ARCHIVE.emptyState} className="border border-ki-border p-12 text-center">
              <p className="text-sm text-ki-fg/70">No matching archive item found. Try another project, theme or keyword.</p>
            </div>
          ) : (
            <div data-testid={ARCHIVE.indexGrid} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ki-border border border-ki-border">
              {filtered.map((p) => (
                <article key={p.slug} data-testid={ARCHIVE.indexCard(p.slug)} className="bg-ki-bg p-6 flex flex-col">
                  <div className="text-[10px] uppercase tracking-[0.26em] text-ki-gold/90">{p.status}</div>
                  <h3 className="mt-3 font-serif text-xl text-ki-fg tracking-tight">{p.title}</h3>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.22em] text-ki-muted">{p.subtitle}</div>
                  <dl className="mt-3 text-[10px] uppercase tracking-[0.22em] text-ki-muted space-y-1">
                    <div className="flex justify-between gap-3"><dt>Year</dt><dd className="text-ki-fg/75 text-right">{p.year_range}</dd></div>
                    <div className="flex justify-between gap-3"><dt>Medium</dt><dd className="text-ki-fg/75 text-right line-clamp-1">{p.medium}</dd></div>
                    <div className="flex justify-between gap-3"><dt>Location</dt><dd className="text-ki-fg/75 text-right">{p.location}</dd></div>
                  </dl>
                  <p className="mt-3 text-sm text-ki-fg/70 leading-relaxed line-clamp-3 flex-1">{p.description}</p>
                  <Link to={`/projects/${p.slug}`} data-testid={ARCHIVE.indexCta(p.slug)}
                    className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-ki-fg/85 hover:text-ki-gold transition-colors self-start">
                    View Project →
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* PATHWAYS */}
      <section className="py-24 md:py-32 border-b border-ki-border bg-ki-bg">
        <div className="container-ki">
          <div className="overline">Pathways</div>
          <h2 data-testid={ARCHIVE.pathwaysHeading} className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg">Suggested Pathways</h2>
          <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-ki-border border border-ki-border">
            {ARCHIVE_PATHWAYS.map((p) => (
              <li key={p.slug} data-testid={ARCHIVE.pathwayCard(p.slug)} className="bg-ki-bg p-6 min-h-[240px] flex flex-col justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.28em] text-ki-gold/90">Pathway</div>
                  <h3 className="mt-4 font-serif text-xl text-ki-fg tracking-tight">{p.title}</h3>
                  <p className="mt-3 text-sm text-ki-fg/70 leading-relaxed">{p.note}</p>
                </div>
                <Link to={p.to} data-testid={ARCHIVE.pathwayCta(p.slug)}
                  onClick={() => handlePathway(p.slug)}
                  className="mt-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.26em] text-ki-fg/85 hover:text-ki-gold transition-colors self-start">
                  Begin →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ARCHIVE NOTES */}
      <section className="py-24 md:py-32 border-b border-ki-border">
        <div className="container-ki">
          <div className="overline">Notes</div>
          <h2 data-testid={ARCHIVE.notesHeading} className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg">Archive Notes</h2>
          <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-ki-border border border-ki-border">
            {ARCHIVE_NOTE_INDEX.map((n) => (
              <li key={n.slug} data-testid={ARCHIVE.noteCard(n.slug)} className="bg-ki-bg p-5 min-h-[200px] flex flex-col justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.26em] text-ki-gold/90">{n.title}</div>
                  <p className="mt-3 text-sm text-ki-fg/70 leading-relaxed">{n.excerpt}</p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-ki-muted">{n.date}</span>
                  <Link to="/journal" className="text-[11px] uppercase tracking-[0.26em] text-ki-fg/85 hover:text-ki-gold transition-colors">Read →</Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* RESEARCH LIBRARY */}
      <section id="archive-library" className="py-24 md:py-32 border-b border-ki-border bg-ki-surface">
        <div className="container-ki">
          <div className="overline">Library</div>
          <h2 data-testid={ARCHIVE.libraryHeading} className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg">Research Library</h2>
          <p className="mt-6 text-sm text-ki-muted max-w-md leading-relaxed">No real files are linked until supplied by the artist. Access by inquiry.</p>
          <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ki-border border border-ki-border">
            {ARCHIVE_LIBRARY.map((m) => (
              <li key={m.slug} data-testid={ARCHIVE.libraryCard(m.slug)} className="bg-ki-surface p-5 min-h-[220px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.26em] text-ki-gold/90">
                    <FileText size={14} strokeWidth={1.2} /> {m.file_type}
                  </div>
                  <h3 className="mt-4 font-serif text-lg text-ki-fg tracking-tight">{m.title}</h3>
                  <p className="mt-3 text-sm text-ki-fg/70 leading-relaxed">{m.description}</p>
                </div>
                <button type="button" onClick={() => handleLibrary(m.title)} data-testid={ARCHIVE.libraryCta(m.slug)}
                  className="mt-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.26em] text-ki-fg/85 hover:text-ki-gold transition-colors self-start">
                  Request →
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 md:py-32 border-b border-ki-border">
        <div className="container-ki">
          <div className="overline">Timeline</div>
          <h2 data-testid={ARCHIVE.timelineHeading} className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg">Archive Timeline</h2>
          <ol className="mt-12 relative border-l border-ki-border ml-4">
            {ARCHIVE_TIMELINE_ENTRIES.map((t) => (
              <li key={t.slug} data-testid={ARCHIVE.timelineEntry(t.slug)} className="pl-8 py-5 relative">
                <span className="absolute -left-[7px] top-7 w-3 h-3 rounded-full bg-ki-gold/70 border border-ki-gold" />
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-12 md:col-span-3 text-[11px] uppercase tracking-[0.22em] text-ki-muted">{t.year_range}</div>
                  <div className="col-span-12 md:col-span-9">
                    <div className="flex items-baseline justify-between gap-3 flex-wrap">
                      <h3 className="font-serif text-xl text-ki-fg tracking-tight">{t.title}</h3>
                      <span className="text-[10px] uppercase tracking-[0.24em] text-ki-gold/90">{t.event_type}</span>
                    </div>
                    <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-ki-muted">{t.medium} · {t.location}</div>
                    <p className="mt-2 text-sm text-ki-fg/75 leading-relaxed">{t.note}</p>
                    <Link to={`/projects/${t.related_slug}`} className="mt-2 inline-flex text-[11px] uppercase tracking-[0.24em] text-ki-fg/80 hover:text-ki-gold transition-colors">View Project →</Link>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* MYTHOLOGY */}
      <section id="archive-mythology" className="py-24 md:py-32 border-b border-ki-border bg-ki-bg">
        <div className="container-ki">
          <div className="overline">Motifs</div>
          <h2 data-testid={ARCHIVE.mythologyHeading} className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg">Personal Mythology</h2>
          <ul className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-ki-border border border-ki-border">
            {ARCHIVE_MYTHOLOGY.map((m) => (
              <li key={m.slug} data-testid={ARCHIVE.mythCard(m.slug)} className="bg-ki-bg p-5 min-h-[180px] flex flex-col justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.26em] text-ki-gold/90">Motif</div>
                  <h3 className="mt-3 font-serif text-xl text-ki-fg tracking-tight">{m.title}</h3>
                  <p className="mt-3 text-sm text-ki-fg/70 leading-relaxed">{m.note}</p>
                </div>
                <Link to="/journal" className="mt-4 inline-flex text-[11px] uppercase tracking-[0.26em] text-ki-fg/85 hover:text-ki-gold transition-colors">Explore Motif →</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* RELATED */}
      <section className="py-24 md:py-32 border-b border-ki-border">
        <div className="container-ki">
          <div className="overline">Continue Browsing</div>
          <h2 data-testid={ARCHIVE.relatedHeading} className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg">Explore the Archive</h2>
          <ul className="mt-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-px bg-ki-border border border-ki-border">
            {ARCHIVE_RELATED_LINKS.map((l) => (
              <li key={l.slug} className="bg-ki-bg">
                <Link to={l.to} data-testid={ARCHIVE.relatedLink(l.slug)}
                  className="group block p-6 min-h-[120px] flex flex-col justify-between transition-colors hover:bg-ki-surface">
                  <div className="text-[10px] uppercase tracking-[0.28em] text-ki-gold/90">Section</div>
                  <div className="mt-3 font-serif text-lg text-ki-fg tracking-tight group-hover:text-ki-gold transition-colors">{l.label}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* INQUIRY FORM */}
      <section id="archive-inquiry" className="py-28 md:py-40 border-b border-ki-border">
        <div className="container-ki grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <div className="overline">Archive Inquiry</div>
            <h2 data-testid={ARCHIVE.inquiryHeading} className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg">Archive and Research Inquiries</h2>
            <p className="mt-6 text-base text-ki-fg/75 leading-relaxed max-w-md">All inquiries are received and reviewed before reply. Treated discreetly.</p>
          </div>
          <div className="lg:col-span-8">
            <ArchiveInquiryForm ref={formRef} />
          </div>
        </div>
      </section>
    </div>
  );
}
