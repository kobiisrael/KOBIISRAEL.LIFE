import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { applyPrivatePageSeo } from "@/lib/seo";
import {
  CONVERSION_PRINCIPLE,
  CONVERSION_AUDIENCES,
  CONVERSION_JOURNEYS,
  HOMEPAGE_FLOW,
  AUDIENCE_PATHWAYS,
  CTA_MAP,
  FORM_MICROCOPY,
  TRUST_ELEMENTS,
  SAFETY_REVIEW,
  FRICTION_REDUCTION,
  VOCABULARY,
  NEWSLETTER_STRATEGY,
  ANALYTICS_EVENTS,
  ANALYTICS_NOTE,
  MOBILE_CHECKS,
  ACCESSIBILITY_CHECKS,
  QUALITY_TESTS,
  CONVERSION_DASHBOARD_STATUS,
  INQUIRY_ROUTING,
} from "@/data/conversion";

const STATUS_STYLES = {
  ready: "bg-emerald-900/30 text-emerald-300 border-emerald-800",
  "needs review": "bg-amber-900/30 text-amber-300 border-amber-800",
  "missing content": "bg-rose-900/30 text-rose-300 border-rose-800",
  "marked TBC": "bg-zinc-800/60 text-zinc-300 border-zinc-700",
  "broken link": "bg-rose-900/30 text-rose-300 border-rose-800",
  "do not publish yet": "bg-zinc-800/60 text-zinc-300 border-zinc-700",
};

const StatusPill = ({ status }) => {
  const cls = STATUS_STYLES[status] || STATUS_STYLES["needs review"];
  return (
    <span
      data-testid={`conv-status-${status?.replace(/\s+/g, "-")}`}
      className={`inline-block px-2 py-0.5 text-[11px] uppercase tracking-wider border rounded ${cls}`}
    >
      {status}
    </span>
  );
};

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="mb-16" data-testid={`conv-section-${id}`}>
    <h2 className="font-serif text-2xl md:text-3xl text-ki-fg mb-2">{title}</h2>
    {subtitle && <p className="text-sm text-ki-fg/60 max-w-3xl mb-6">{subtitle}</p>}
    {children}
  </section>
);

const PathwayCard = ({ p }) => (
  <article
    className="border border-ki-fg/10 rounded p-5"
    data-testid={`conv-pathway-${p.slug}`}
  >
    <header className="flex items-center justify-between mb-3 flex-wrap gap-2">
      <h3 className="font-serif text-xl text-ki-fg">{p.title}</h3>
      <span className="text-[11px] uppercase tracking-wider text-ki-gold">
        inquiry_type · {p.inquiry_type}
      </span>
    </header>
    <p className="text-xs uppercase tracking-wider text-ki-fg/60 mb-1">Flow</p>
    <p className="text-sm text-ki-fg/85 mb-3">{p.flow.join("  →  ")}</p>

    <div className="grid md:grid-cols-2 gap-3 mb-3">
      <div>
        <p className="text-xs uppercase tracking-wider text-ki-fg/60 mb-1">Trust elements</p>
        <ul className="text-xs text-ki-fg/80 space-y-1">
          {p.trust.slice(0, 6).map((t) => (
            <li key={t}>· {t}</li>
          ))}
          {p.trust.length > 6 && (
            <li className="text-ki-fg/50">… +{p.trust.length - 6} more</li>
          )}
        </ul>
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider text-ki-fg/60 mb-1">CTAs (safe)</p>
        <ul className="text-xs text-emerald-300/90 space-y-1">
          {p.cta_safe.map((c) => (
            <li key={c}>+ {c}</li>
          ))}
        </ul>
        <p className="text-xs uppercase tracking-wider text-ki-fg/60 mt-3 mb-1">
          CTAs (forbidden)
        </p>
        <ul className="text-xs text-rose-300/80 space-y-1">
          {p.cta_forbidden.map((c) => (
            <li key={c}>– {c}</li>
          ))}
        </ul>
      </div>
    </div>

    <p className="text-xs text-ki-fg/70 italic border-l-2 border-ki-gold pl-3">
      {p.reassurance}
    </p>
    <p className="text-[11px] uppercase tracking-wider text-ki-fg/50 mt-3">
      Target pages · {p.target_pages.join(" · ")}
    </p>
  </article>
);

export default function ConversionReview() {
  useEffect(() => {
    applyPrivatePageSeo("Conversion Review (Internal) | Kobi Israel");
  }, []);

  const [query, setQuery] = useState("");

  const filteredJourneys = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return CONVERSION_JOURNEYS;
    return CONVERSION_JOURNEYS.filter((j) =>
      [j.audience, j.entry, j.next_action, j.target].join(" ").toLowerCase().includes(q),
    );
  }, [query]);

  const summary = useMemo(() => {
    const counts = { ready: 0, "needs review": 0, "do not publish yet": 0 };
    CONVERSION_DASHBOARD_STATUS.forEach((row) => {
      counts[row.status] = (counts[row.status] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <div className="min-h-screen bg-ki-bg text-ki-fg" data-testid="conversion-review-page">
      <header className="border-b border-ki-fg/10 px-6 md:px-10 py-10">
        <p className="text-[11px] uppercase tracking-[0.2em] text-ki-gold mb-3">
          Internal — noindex, nofollow · robots.txt disallowed
        </p>
        <h1 className="font-serif text-4xl md:text-5xl mb-3">Conversion Review</h1>
        <p className="text-ki-fg/70 max-w-2xl">
          Canonical reference for the KOBIISRAEL.COM conversion strategy — audience pathways,
          journey map, CTA placement, microcopy, trust elements, friction map, vocabulary,
          newsletter strategy, analytics placeholders, mobile + accessibility checks and
          professional safety review.
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
          id="principle"
          title="1 · Core conversion principle"
          subtitle={CONVERSION_PRINCIPLE.headline}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-xs uppercase tracking-wider text-ki-gold mb-2">Visitor should feel</p>
              <ul className="text-sm text-ki-fg/85 space-y-1">
                {CONVERSION_PRINCIPLE.visitor_feels.map((v) => (
                  <li key={v}>+ {v}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-ki-gold mb-2">Avoid</p>
              <ul className="text-sm text-rose-300/80 space-y-1">
                {CONVERSION_PRINCIPLE.forbidden_patterns.map((v) => (
                  <li key={v}>– {v}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section
          id="audiences"
          title="2 · Primary conversion audiences"
          subtitle="Eight visitor types, each routed to a dedicated pathway and inquiry type."
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {CONVERSION_AUDIENCES.map((a) => (
              <div
                key={a.slug}
                className="border border-ki-fg/10 rounded p-4"
                data-testid={`conv-audience-${a.slug}`}
              >
                <p className="font-serif text-lg text-ki-fg">{a.title}</p>
                <p className="text-xs uppercase tracking-wider text-ki-gold mt-1">
                  inquiry_type · {a.inquiryType}
                </p>
                <p className="text-sm text-ki-fg/70 mt-2">{a.note}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="journeys"
          title="3 · Visitor journey map"
          subtitle="Audience · entry · motivation · trust signal · next action · friction · fix."
        >
          <div className="mb-4">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Filter by audience, entry, action…"
              data-testid="conv-journey-search"
              className="w-full md:w-96 bg-transparent border border-ki-fg/20 rounded px-3 py-2 text-sm placeholder:text-ki-fg/40 focus:outline-none focus:border-ki-gold"
            />
          </div>
          <div className="overflow-x-auto border border-ki-fg/10 rounded">
            <table className="w-full text-sm" data-testid="conv-journey-table">
              <thead className="bg-ki-fg/5 text-ki-fg/70 text-xs uppercase tracking-wider">
                <tr>
                  <th className="text-left p-3">Audience</th>
                  <th className="text-left p-3">Entry</th>
                  <th className="text-left p-3">Motivation</th>
                  <th className="text-left p-3">Trust</th>
                  <th className="text-left p-3">Next action</th>
                  <th className="text-left p-3">Target</th>
                  <th className="text-left p-3">Friction → Fix</th>
                </tr>
              </thead>
              <tbody>
                {filteredJourneys.map((j) => (
                  <tr key={j.audience} className="border-t border-ki-fg/10 align-top">
                    <td className="p-3 text-ki-fg">{j.audience}</td>
                    <td className="p-3 font-mono text-xs text-ki-fg/70">{j.entry}</td>
                    <td className="p-3 text-ki-fg/75">{j.motivation}</td>
                    <td className="p-3 text-xs text-ki-fg/60">{j.trust}</td>
                    <td className="p-3 text-ki-gold">{j.next_action}</td>
                    <td className="p-3 font-mono text-xs text-ki-fg/70">{j.target}</td>
                    <td className="p-3 text-xs text-ki-fg/70">
                      <span className="text-rose-300/80">{j.friction}</span>
                      <br />
                      <span className="text-emerald-300/80">→ {j.fix}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section
          id="homepage-flow"
          title="4 · Homepage conversion flow"
          subtitle="Ten ordered blocks — keep the hero limited to two primary CTAs."
        >
          <ol className="space-y-2">
            {HOMEPAGE_FLOW.map((b) => (
              <li
                key={b.order}
                className="border border-ki-fg/10 rounded p-3 flex flex-wrap items-center gap-3"
                data-testid={`conv-homepage-block-${b.order}`}
              >
                <span className="text-ki-gold font-mono text-sm w-6">{b.order}.</span>
                <span className="font-serif text-ki-fg">{b.block}</span>
                <span className="text-xs text-ki-fg/60">— {b.role}</span>
                {b.primary_ctas.length > 0 && (
                  <span className="text-xs text-ki-gold/80 ml-auto">
                    {b.primary_ctas.join(" · ")}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </Section>

        <Section
          id="pathways"
          title="5–11 · Audience pathways"
          subtitle="Per-audience flow, trust elements, safe CTAs, forbidden language and reassurance copy."
        >
          <div className="grid lg:grid-cols-2 gap-4">
            {AUDIENCE_PATHWAYS.map((p) => (
              <PathwayCard key={p.slug} p={p} />
            ))}
          </div>
        </Section>

        <Section
          id="cta-map"
          title="12 · Site-wide CTA placement map"
          subtitle="Where each CTA appears and what it says."
        >
          <div className="overflow-x-auto border border-ki-fg/10 rounded">
            <table className="w-full text-sm" data-testid="conv-cta-table">
              <thead className="bg-ki-fg/5 text-xs uppercase tracking-wider text-ki-fg/70">
                <tr>
                  <th className="text-left p-3">Page</th>
                  <th className="text-left p-3">Placement</th>
                  <th className="text-left p-3">CTAs</th>
                </tr>
              </thead>
              <tbody>
                {CTA_MAP.map((row, i) => (
                  <tr key={`${row.page}-${row.placement}-${i}`} className="border-t border-ki-fg/10">
                    <td className="p-3 font-mono text-xs text-ki-fg/70">{row.page}</td>
                    <td className="p-3 text-ki-fg/85">{row.placement}</td>
                    <td className="p-3 text-ki-gold/90 text-xs">{row.ctas.join(" · ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section
          id="microcopy"
          title="13 · Form microcopy reference"
          subtitle="Calm, professional copy — used as the canonical wording across forms."
        >
          <div className="grid md:grid-cols-2 gap-3">
            {Object.entries(FORM_MICROCOPY).map(([k, v]) => (
              <div
                key={k}
                className="border border-ki-fg/10 rounded p-4"
                data-testid={`conv-microcopy-${k}`}
              >
                <p className="text-xs uppercase tracking-wider text-ki-gold mb-2">{k}</p>
                <p className="text-sm text-ki-fg/85 leading-relaxed">{v}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="trust" title="14 · Trust elements" subtitle="Active across the site.">
          <ul className="grid md:grid-cols-2 gap-1 text-sm text-ki-fg/85">
            {TRUST_ELEMENTS.map((t) => (
              <li key={t}>+ {t}</li>
            ))}
          </ul>
        </Section>

        <Section
          id="friction"
          title="15 · Friction reduction"
          subtitle="Common friction patterns and how the site addresses each."
        >
          <div className="overflow-x-auto border border-ki-fg/10 rounded">
            <table className="w-full text-sm" data-testid="conv-friction-table">
              <thead className="bg-ki-fg/5 text-xs uppercase tracking-wider text-ki-fg/70">
                <tr>
                  <th className="text-left p-3">Friction</th>
                  <th className="text-left p-3">Fix</th>
                </tr>
              </thead>
              <tbody>
                {FRICTION_REDUCTION.map((row) => (
                  <tr key={row.friction} className="border-t border-ki-fg/10">
                    <td className="p-3 text-rose-300/80">{row.friction}</td>
                    <td className="p-3 text-emerald-300/85">{row.fix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section id="vocabulary" title="16 · Conversion-safe vocabulary" subtitle="Use vs avoid.">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-ki-fg/10 rounded p-4">
              <p className="text-xs uppercase tracking-wider text-emerald-400 mb-2">Use</p>
              <ul className="text-sm text-ki-fg/85 space-y-1">
                {VOCABULARY.safe.map((s) => (
                  <li key={s}>+ {s}</li>
                ))}
              </ul>
            </div>
            <div className="border border-ki-fg/10 rounded p-4">
              <p className="text-xs uppercase tracking-wider text-rose-400 mb-2">Avoid</p>
              <ul className="text-sm text-rose-300/85 space-y-1">
                {VOCABULARY.forbidden.map((s) => (
                  <li key={s}>– {s}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section
          id="newsletter"
          title="17 · Newsletter strategy"
          subtitle="Restrained, no pop-ups, no forced subscription."
        >
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <div className="border border-ki-fg/10 rounded p-4">
              <p className="text-xs uppercase tracking-wider text-ki-gold">Purpose</p>
              <p className="text-ki-fg/85 mt-2">{NEWSLETTER_STRATEGY.purpose}</p>
              <p className="text-xs uppercase tracking-wider text-ki-gold mt-4">Copy</p>
              <p className="text-ki-fg/85 mt-2 italic">"{NEWSLETTER_STRATEGY.copy}"</p>
              <p className="text-xs uppercase tracking-wider text-ki-gold mt-4">After-submit</p>
              <p className="text-ki-fg/85 mt-2 italic">"{NEWSLETTER_STRATEGY.after_submit}"</p>
            </div>
            <div className="border border-ki-fg/10 rounded p-4">
              <p className="text-xs uppercase tracking-wider text-ki-gold">Placement</p>
              <ul className="text-ki-fg/85 mt-2 space-y-1">
                {NEWSLETTER_STRATEGY.placement.map((p) => (
                  <li key={p}>· {p}</li>
                ))}
              </ul>
              <p className="text-xs uppercase tracking-wider text-ki-gold mt-4">Interests</p>
              <ul className="text-ki-fg/85 mt-2 grid grid-cols-2 gap-y-1">
                {NEWSLETTER_STRATEGY.interests.map((p) => (
                  <li key={p}>· {p}</li>
                ))}
              </ul>
              <p className="text-xs uppercase tracking-wider text-rose-400 mt-4">Forbidden</p>
              <ul className="text-rose-300/80 mt-2 space-y-1">
                {NEWSLETTER_STRATEGY.forbidden.map((p) => (
                  <li key={p}>– {p}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section
          id="analytics"
          title="18 · Analytics conversion events (placeholders)"
          subtitle={ANALYTICS_NOTE}
        >
          <div className="overflow-x-auto border border-ki-fg/10 rounded">
            <table className="w-full text-sm" data-testid="conv-analytics-table">
              <thead className="bg-ki-fg/5 text-xs uppercase tracking-wider text-ki-fg/70">
                <tr>
                  <th className="text-left p-3">Event</th>
                  <th className="text-left p-3">Page</th>
                </tr>
              </thead>
              <tbody>
                {ANALYTICS_EVENTS.map((e) => (
                  <tr key={e.name} className="border-t border-ki-fg/10">
                    <td className="p-3 font-mono text-xs text-ki-fg">{e.name}</td>
                    <td className="p-3 text-xs text-ki-fg/70">{e.page}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section
          id="dashboard-status"
          title="19 · Conversion dashboard status"
          subtitle="One-line review per pathway."
        >
          <div className="space-y-2">
            {CONVERSION_DASHBOARD_STATUS.map((row) => (
              <div
                key={row.area}
                className="border border-ki-fg/10 rounded p-3 flex flex-wrap items-start gap-3"
                data-testid={`conv-row-${row.area.replace(/\s+/g, "-").toLowerCase()}`}
              >
                <span className="font-serif text-ki-fg flex-1 min-w-[200px]">{row.area}</span>
                <StatusPill status={row.status} />
                <p className="text-xs text-ki-fg/70 basis-full">{row.notes}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="routing"
          title="Inquiry routing reference"
          subtitle="Each pathway lands on a single backend endpoint with a stable type vocabulary."
        >
          <div className="overflow-x-auto border border-ki-fg/10 rounded">
            <table className="w-full text-sm" data-testid="conv-routing-table">
              <thead className="bg-ki-fg/5 text-xs uppercase tracking-wider text-ki-fg/70">
                <tr>
                  <th className="text-left p-3">Pathway</th>
                  <th className="text-left p-3">Endpoint</th>
                  <th className="text-left p-3">Type vocabulary</th>
                  <th className="text-left p-3">Primary form</th>
                </tr>
              </thead>
              <tbody>
                {INQUIRY_ROUTING.map((row) => (
                  <tr key={row.pathway} className="border-t border-ki-fg/10">
                    <td className="p-3 text-ki-fg">{row.pathway}</td>
                    <td className="p-3 font-mono text-xs text-ki-gold">{row.endpoint}</td>
                    <td className="p-3 text-xs text-ki-fg/70">{row.types.join(", ")}</td>
                    <td className="p-3 text-xs text-ki-fg/70">{row.primary_form}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section id="mobile" title="20 · Mobile conversion review">
          <ul className="grid md:grid-cols-2 gap-1 text-sm text-ki-fg/85">
            {MOBILE_CHECKS.map((c) => (
              <li key={c}>· {c}</li>
            ))}
          </ul>
        </Section>

        <Section id="a11y" title="21 · Accessibility conversion review">
          <ul className="grid md:grid-cols-2 gap-1 text-sm text-ki-fg/85">
            {ACCESSIBILITY_CHECKS.map((c) => (
              <li key={c}>· {c}</li>
            ))}
          </ul>
        </Section>

        <Section
          id="safety"
          title="22 · Professional safety review"
          subtitle="Every claim is either confirmed by the artist or rendered as a TBC placeholder."
        >
          <div className="space-y-2">
            {SAFETY_REVIEW.map((row) => (
              <div
                key={row.label}
                className="border border-ki-fg/10 rounded p-3 flex flex-wrap items-start gap-3"
                data-testid={`conv-safety-${row.label.replace(/\s+/g, "-").toLowerCase()}`}
              >
                <span className="font-serif text-ki-fg flex-1 min-w-[200px]">{row.label}</span>
                <StatusPill status={row.status} />
                <p className="text-xs text-ki-fg/70 basis-full">{row.note}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="quality" title="23 · Final conversion quality test">
          <ol className="space-y-2 text-sm text-ki-fg/85">
            {QUALITY_TESTS.map((t, idx) => (
              <li
                key={t}
                className="border border-ki-fg/10 rounded px-3 py-2 flex items-start gap-3"
                data-testid={`conv-quality-${idx}`}
              >
                <span className="text-ki-gold font-mono">{idx + 1}.</span>
                <span>{t}</span>
              </li>
            ))}
          </ol>
        </Section>

        <footer className="border-t border-ki-fg/10 pt-6 mt-12 text-xs text-ki-fg/60">
          Cross-links:{" "}
          <Link to="/seo-review" className="underline">/seo-review</Link> ·{" "}
          <Link to="/launch-checklist" className="underline">/launch-checklist</Link> ·{" "}
          <Link to="/migration-review" className="underline">/migration-review</Link>
        </footer>
      </main>
    </div>
  );
}
