import { Link } from "react-router-dom";
import { NAV_ITEMS } from "@/data/site";
import { HOME } from "@/constants/testIds";

const PROFESSIONAL_LINKS = [
  { slug: "collector", label: "Collector Inquiries", to: "/contact#contact-form-section" },
  { slug: "curator", label: "Curator / Museum Inquiries", to: "/contact#contact-form-section" },
  { slug: "press", label: "Press / Publishing Inquiries", to: "/contact#contact-form-section" },
  { slug: "film", label: "Film / Screening Inquiries", to: "/contact#contact-form-section" },
  { slug: "licensing", label: "Licensing Inquiries", to: "/contact#contact-form-section" },
];

const FOLLOW_CONTACT = [
  { slug: "email", label: "Email", value: "To be confirmed by artist" },
  { slug: "instagram", label: "Instagram", value: "To be confirmed by artist" },
  { slug: "video", label: "YouTube / Vimeo", value: "To be confirmed by artist" },
  { slug: "newsletter", label: "Newsletter", value: "To be confirmed by artist" },
];

const LEGAL_LINKS = [
  { slug: "privacy", label: "Privacy Policy", to: "/legal/privacy" },
  { slug: "terms", label: "Terms of Use", to: "/legal/terms" },
  { slug: "copyright", label: "Copyright and Image Use", to: "/legal/copyright" },
  { slug: "cookies", label: "Cookie Notice", to: "/legal/cookies" },
  { slug: "accessibility", label: "Accessibility Statement", to: "/legal/accessibility" },
];

export default function Footer() {
  return (
    <footer
      data-testid={HOME.footer}
      className="border-t border-ki-border bg-ki-bg"
    >
      <div className="container-ki py-20 md:py-28 grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Column 1 — Studio */}
        <div className="md:col-span-3" data-testid="footer-col-studio">
          <div className="font-serif text-2xl md:text-3xl tracking-tight text-ki-fg">
            KOBI ISRAEL
          </div>
          <p className="mt-5 max-w-xs text-sm text-ki-muted leading-relaxed">
            Photography, moving images and autobiographical archives of masculinity, desire,
            exile and memory.
          </p>
        </div>

        {/* Column 2 — Explore */}
        <div className="md:col-span-3" data-testid="footer-col-explore">
          <div className="overline">Explore</div>
          <ul className="mt-5 grid grid-cols-2 gap-y-2 gap-x-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.slug}>
                <Link
                  to={item.to}
                  data-testid={`footer-explore-${item.slug}`}
                  className="text-sm text-ki-fg/75 hover:text-ki-gold transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Professional Inquiries */}
        <div className="md:col-span-3" data-testid="footer-col-inquiries">
          <div className="overline">Professional Inquiries</div>
          <ul className="mt-5 space-y-2">
            {PROFESSIONAL_LINKS.map((l) => (
              <li key={l.slug}>
                <Link
                  to={l.to}
                  data-testid={`footer-inquiry-${l.slug}`}
                  className="text-sm text-ki-fg/75 hover:text-ki-gold transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 — Follow / Contact */}
        <div className="md:col-span-3" data-testid="footer-col-follow">
          <div className="overline">Follow / Contact</div>
          <ul className="mt-5 space-y-3">
            {FOLLOW_CONTACT.map((c) => (
              <li
                key={c.slug}
                data-testid={`footer-follow-${c.slug}`}
                className="text-sm leading-relaxed"
              >
                <span className="text-[10px] uppercase tracking-[0.26em] text-ki-muted block">
                  {c.label}
                </span>
                <span className="text-ki-fg/75">{c.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Legal bottom bar */}
      <div className="border-t border-ki-border">
        <div className="container-ki py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-xs text-ki-muted leading-relaxed max-w-2xl">
            © {new Date().getFullYear()} Kobi Israel. All rights reserved. All images and works are
            copyright Kobi Israel unless otherwise stated. Reproduction, publication, copying,
            downloading, commercial use or redistribution is not permitted without written
            permission. Final copyright wording to be confirmed by artist.
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {LEGAL_LINKS.map((l) => (
              <li key={l.slug}>
                <Link
                  to={l.to}
                  data-testid={`footer-legal-${l.slug}`}
                  className="text-[11px] uppercase tracking-[0.24em] text-ki-muted hover:text-ki-gold transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
