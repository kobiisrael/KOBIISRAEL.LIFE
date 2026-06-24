import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { applyPrivatePageSeo } from "@/lib/seo";
import {
  SEO_MAP,
  REDIRECT_MAP,
  NOINDEX_ROUTES,
  SEO_CLUSTERS,
  SEO_CONTENT_CALENDAR,
  SEO_LAUNCH_CHECKLIST,
  IMAGE_SEO_RULES,
} from "@/data/seo";

const STATUS_STYLES = {
  ready: "bg-emerald-900/30 text-emerald-300 border-emerald-800",
  "needs review": "bg-amber-900/30 text-amber-300 border-amber-800",
  "missing content": "bg-rose-900/30 text-rose-300 border-rose-800",
  "do not index yet": "bg-zinc-800/60 text-zinc-300 border-zinc-700",
  "do not publish yet": "bg-zinc-800/60 text-zinc-300 border-zinc-700",
};

const StatusPill = ({ status }) => {
  const cls = STATUS_STYLES[status] || STATUS_STYLES["needs review"];
  return (
    <span
      data-testid={`seo-status-${status?.replace(/\s+/g, "-")}`}
      className={`inline-block px-2 py-0.5 text-[11px] uppercase tracking-wider border rounded ${cls}`}
    >
      {status}
    </span>
  );
};

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="mb-16" data-testid={`seo-section-${id}`}>
    <h2 className="font-serif text-2xl md:text-3xl text-ki-fg mb-2">{title}</h2>
    {subtitle && <p className="text-sm text-ki-fg/60 max-w-3xl mb-6">{subtitle}</p>}
    {children}
  </section>
);

export default function SEOReview() {
  useEffect(() => {
    applyPrivatePageSeo("SEO Review (Internal) | Kobi Israel");
  }, []);

  const [query, setQuery] = useState("");

  const filteredPages = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return SEO_MAP;
    return SEO_MAP.filter(
      (p) =>
        p.page.toLowerCase().includes(q) ||
        p.url.toLowerCase().includes(q) ||
        p.primary?.toLowerCase().includes(q),
    );
  }, [query]);

  const summary = useMemo(() => {
    const counts = { ready: 0, "needs review": 0, "missing content": 0, "do not index yet": 0 };
    SEO_MAP.forEach((p) => {
      counts[p.status] = (counts[p.status] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <div className="min-h-screen bg-ki-bg text-ki-fg" data-testid="seo-review-page">
      <header className="border-b border-ki-fg/10 px-6 md:px-10 py-10">
        <p className="text-[11px] uppercase tracking-[0.2em] text-ki-gold mb-3">
          Internal — noindex, nofollow · robots.txt disallowed
        </p>
        <h1 className="font-serif text-4xl md:text-5xl mb-3">SEO Review</h1>
        <p className="text-ki-fg/70 max-w-2xl">
          Canonical reference for KOBIISRAEL.COM metadata, structured data, internal links, redirects
          and launch readiness. This page is not indexed and not linked from the public site.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-xs">
          {Object.entries(summary).map(([k, v]) => (
            <div key={k} className="px-3 py-2 border border-ki-fg/15 rounded">
              <span className="text-ki-fg/60">{k}: </span>
              <span className="text-ki-fg">{v}</span>
            </div>
          ))}
        </div>
      </header>

      <main className="px-6 md:px-10 py-12 max-w-7xl">
        <Section
          id="map"
          title="1 · Page-level SEO map"
          subtitle="Title, description, H1, primary keyword and indexing status for every page."
        >
          <div className="mb-4">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by page, URL or keyword…"
              data-testid="seo-map-search"
              className="w-full md:w-96 bg-transparent border border-ki-fg/20 rounded px-3 py-2 text-sm placeholder:text-ki-fg/40 focus:outline-none focus:border-ki-gold"
            />
          </div>
          <div className="overflow-x-auto border border-ki-fg/10 rounded">
            <table className="w-full text-sm" data-testid="seo-map-table">
              <thead className="bg-ki-fg/5 text-ki-fg/70 text-xs uppercase tracking-wider">
                <tr>
                  <th className="text-left p-3">Page</th>
                  <th className="text-left p-3">URL</th>
                  <th className="text-left p-3">Title</th>
                  <th className="text-left p-3">Primary keyword</th>
                  <th className="text-left p-3">Schema</th>
                  <th className="text-left p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredPages.map((p) => (
                  <tr
                    key={p.url + p.page}
                    className="border-t border-ki-fg/10 align-top"
                    data-testid={`seo-row-${p.url.replace(/[^a-z0-9]+/gi, "-")}`}
                  >
                    <td className="p-3 text-ki-fg">{p.page}</td>
                    <td className="p-3 font-mono text-xs text-ki-fg/70">{p.url}</td>
                    <td className="p-3 text-ki-fg/80">{p.title}</td>
                    <td className="p-3 text-ki-fg/70">{p.primary}</td>
                    <td className="p-3 text-xs text-ki-fg/60">{p.schema.join(", ") || "—"}</td>
                    <td className="p-3">
                      <StatusPill status={p.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section
          id="meta-details"
          title="2 · Metadata detail (title + description per page)"
          subtitle="Cross-check titles ≤ ~60 chars and descriptions ≤ ~155 chars."
        >
          <div className="space-y-4">
            {SEO_MAP.map((p) => (
              <article
                key={`detail-${p.url}-${p.page}`}
                className="border border-ki-fg/10 rounded p-4"
                data-testid={`seo-detail-${p.url.replace(/[^a-z0-9]+/gi, "-")}`}
              >
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <p className="font-mono text-xs text-ki-fg/60">{p.url}</p>
                  <StatusPill status={p.status} />
                </div>
                <p className="text-ki-fg">
                  <span className="text-ki-fg/60 text-xs uppercase tracking-wider">Title · </span>
                  {p.title}{" "}
                  <span className="text-ki-fg/40 text-xs">({p.title.length} chars)</span>
                </p>
                <p className="mt-1 text-ki-fg/80 text-sm">
                  <span className="text-ki-fg/60 text-xs uppercase tracking-wider">Meta · </span>
                  {p.description}{" "}
                  <span className="text-ki-fg/40 text-xs">({p.description.length} chars)</span>
                </p>
                <p className="mt-2 text-xs text-ki-fg/60">
                  <span className="text-ki-gold">H1:</span> {p.h1} ·{" "}
                  <span className="text-ki-gold">Intent:</span> {p.intent}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="clusters"
          title="3 · Content clusters"
          subtitle="Each cluster has one hub page and supporting members. Internal links should reinforce these groupings."
        >
          <div className="grid md:grid-cols-2 gap-4">
            {SEO_CLUSTERS.map((c) => (
              <div
                key={c.name}
                className="border border-ki-fg/10 rounded p-4"
                data-testid={`seo-cluster-${c.name.replace(/\s+/g, "-").toLowerCase()}`}
              >
                <p className="text-xs uppercase tracking-wider text-ki-gold mb-1">{c.name}</p>
                <p className="text-sm">
                  <span className="text-ki-fg/60">Hub: </span>
                  <span className="font-mono">{c.hub}</span>
                </p>
                <ul className="mt-2 text-xs font-mono text-ki-fg/70 space-y-0.5">
                  {c.members.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="redirects"
          title="4 · Wix → kobiisrael.life redirect map"
          subtitle="Apply at server / CDN level (Cloudflare, Vercel, Nginx). React cannot enforce 301s."
        >
          <div className="overflow-x-auto border border-ki-fg/10 rounded">
            <table className="w-full text-sm" data-testid="seo-redirect-table">
              <thead className="bg-ki-fg/5 text-xs uppercase tracking-wider text-ki-fg/70">
                <tr>
                  <th className="text-left p-3">From</th>
                  <th className="text-left p-3">To</th>
                  <th className="text-left p-3">Code</th>
                </tr>
              </thead>
              <tbody>
                {REDIRECT_MAP.map((r) => (
                  <tr key={r.from} className="border-t border-ki-fg/10">
                    <td className="p-3 font-mono text-xs text-ki-fg/70 break-all">{r.from}</td>
                    <td className="p-3 font-mono text-xs text-ki-fg">{r.to}</td>
                    <td className="p-3 text-ki-fg/70">{r.code}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section
          id="noindex"
          title="5 · Noindex routes"
          subtitle="These routes carry meta robots noindex,nofollow and are disallowed in robots.txt."
        >
          <ul className="grid md:grid-cols-2 gap-1 text-sm font-mono text-ki-fg/80">
            {NOINDEX_ROUTES.map((r) => (
              <li key={r} data-testid={`seo-noindex-${r.replace(/[^a-z0-9]+/gi, "-")}`}>
                · {r}
              </li>
            ))}
          </ul>
        </Section>

        <Section
          id="image-seo"
          title="6 · Image SEO rules"
          subtitle="Filename and alt-text patterns. Use these as defaults when artist captions are not yet supplied."
        >
          <div className="space-y-3 text-sm">
            <p>
              <span className="text-ki-gold">Filename pattern:</span>{" "}
              <code className="text-xs">{IMAGE_SEO_RULES.filenamePattern}</code>
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {Object.entries(IMAGE_SEO_RULES.defaults).map(([k, v]) => (
                <div key={k} className="border border-ki-fg/10 rounded p-3">
                  <p className="text-xs uppercase tracking-wider text-ki-gold">{k}</p>
                  <p className="text-ki-fg/80 text-sm mt-1">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section
          id="content-calendar"
          title="7 · Suggested archive-note calendar"
          subtitle="Only publish when artist-approved. Quality over frequency."
        >
          <ul className="space-y-2 text-sm">
            {SEO_CONTENT_CALENDAR.map((n) => (
              <li
                key={n.slug}
                className="flex items-center justify-between border border-ki-fg/10 rounded px-3 py-2"
                data-testid={`seo-calendar-${n.slug}`}
              >
                <span className="text-ki-fg">{n.title}</span>
                <span className="text-xs uppercase tracking-wider text-ki-fg/50">
                  {n.category} · {n.status}
                </span>
              </li>
            ))}
          </ul>
        </Section>

        <Section
          id="launch"
          title="8 · SEO launch checklist"
          subtitle="Manual review before production cut-over."
        >
          <ul className="space-y-2 text-sm">
            {SEO_LAUNCH_CHECKLIST.map((item, idx) => (
              <li
                key={item}
                className="flex items-start gap-3 border border-ki-fg/10 rounded px-3 py-2"
                data-testid={`seo-launch-${idx}`}
              >
                <span className="text-ki-gold">·</span>
                <span className="text-ki-fg/80">{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        <footer className="border-t border-ki-fg/10 pt-6 mt-12 text-xs text-ki-fg/60">
          Strategy reference: <Link to="/launch-checklist" className="underline">/launch-checklist</Link> ·{" "}
          <Link to="/migration-review" className="underline">/migration-review</Link>
        </footer>
      </main>
    </div>
  );
}
