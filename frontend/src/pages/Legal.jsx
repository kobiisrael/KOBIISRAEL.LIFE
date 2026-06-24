import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import NotFound from "@/pages/NotFound";

const setMeta = (name, content) => {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const PLACEHOLDERS = {
  privacy: {
    title: "Privacy Policy",
    overline: "Legal · Privacy",
    sections: [
      {
        heading: "Information we collect",
        body: "Information collected through the inquiry forms (name, email, organisation, country, message and consent) is used only to respond to your inquiry. No other personal data is collected from this website. Final wording to be reviewed before launch.",
      },
      {
        heading: "How information is used",
        body: "Your information is used only to reply to your inquiry. It is not added to any mailing list unless you separately subscribe through the Journal newsletter form. It is not shared with third parties. Final wording to be reviewed before launch.",
      },
      {
        heading: "Retention",
        body: "Inquiries are retained for archival and professional record-keeping purposes. You may request deletion at any time by contacting the studio. Final wording to be reviewed before launch.",
      },
      {
        heading: "Your rights",
        body: "You have the right to request access to, correction of or deletion of your personal information held by the studio. Final wording to be reviewed before launch.",
      },
    ],
  },
  terms: {
    title: "Terms of Use",
    overline: "Legal · Terms",
    sections: [
      {
        heading: "Use of this website",
        body: "This website is provided for the viewing and professional reference of Kobi Israel's photographic, moving-image, archival and publication work. Final wording to be reviewed before launch.",
      },
      {
        heading: "Inquiries are not orders",
        body: "Submission of any inquiry form does not constitute an order, reservation or contract. Print availability, edition details, condition and pricing must be confirmed in writing before any sale or reservation. Final wording to be reviewed before launch.",
      },
      {
        heading: "Information accuracy",
        body: "Some information on this website is shown as placeholder text marked 'To be confirmed by artist' and will be updated as material is supplied. The studio makes no warranty as to the accuracy of unconfirmed placeholder content. Final wording to be reviewed before launch.",
      },
      {
        heading: "Governing law",
        body: "Final governing-law clause to be reviewed before launch.",
      },
    ],
  },
  copyright: {
    title: "Copyright and Image Use",
    overline: "Legal · Copyright",
    sections: [
      {
        heading: "Copyright",
        body: "All images, films, texts and works displayed on this website are copyright Kobi Israel unless otherwise stated. Reproduction, publication, copying, downloading, framing, derivative use, commercial use or redistribution is not permitted without prior written permission. Final wording to be reviewed before launch.",
      },
      {
        heading: "Discreet image notice",
        body: "Images are shown for viewing and archive reference only. Reproduction or commercial use requires written permission.",
      },
      {
        heading: "Image licensing",
        body: "Image licensing for editorial, academic, publishing or film use is reviewed case by case. Please use the Licensing pathway on the Contact page. High-resolution image files are not provided as downloads. Final wording to be reviewed before launch.",
      },
      {
        heading: "Credits",
        body: "Approved use must carry the credit line: Photograph © Kobi Israel. Courtesy of the artist. Final wording to be reviewed before launch.",
      },
    ],
  },
  cookies: {
    title: "Cookie Notice",
    overline: "Legal · Cookies",
    sections: [
      {
        heading: "Use of cookies",
        body: "This website uses minimal cookies necessary for basic functionality. No advertising or third-party tracking cookies are set by the studio at this time. Final cookie inventory and consent banner wording to be reviewed before launch.",
      },
      {
        heading: "Analytics",
        body: "If analytics tools are added before launch, this notice will be updated to describe what is collected, why and for how long. Final wording to be reviewed before launch.",
      },
      {
        heading: "Managing cookies",
        body: "You can manage or block cookies through your browser settings. Doing so may affect form submissions but will not block access to the archive content. Final wording to be reviewed before launch.",
      },
    ],
  },
  accessibility: {
    title: "Accessibility Statement",
    overline: "Legal · Accessibility",
    sections: [
      {
        heading: "Commitment",
        body: "The studio is committed to making the Kobi Israel website usable for as wide a range of visitors as possible, including those using assistive technologies. Final wording to be reviewed before launch.",
      },
      {
        heading: "What we do",
        body: "We aim for strong colour contrast, clear focus states, keyboard-accessible navigation, gallery and lightbox controls, labelled form fields, text-based availability labels and descriptive alt-text placeholders for all images. Captions and transcripts will be supplied for moving-image works as material becomes available.",
      },
      {
        heading: "Ongoing work",
        body: "Some material is still in preparation and may carry placeholder text. We will continue to refine accessibility as content is finalised. Final wording to be reviewed before launch.",
      },
      {
        heading: "Feedback",
        body: "If you encounter an accessibility issue, please contact the studio using the Contact form so it can be reviewed and addressed.",
      },
    ],
  },
};

export default function Legal() {
  const { slug } = useParams();
  const doc = PLACEHOLDERS[slug];

  useEffect(() => {
    if (!doc) return undefined;
    const prev = document.title;
    document.title = `${doc.title} | Kobi Israel`;
    setMeta(
      "description",
      `${doc.title} for the Kobi Israel website — placeholder text. Final wording to be reviewed before launch.`
    );
    window.scrollTo(0, 0);
    return () => {
      document.title = prev;
    };
  }, [doc]);

  if (!doc) return <NotFound slug={slug} />;

  return (
    <article data-testid={`legal-page-${slug}`} className="pt-40 pb-32">
      <header className="container-ki max-w-3xl">
        <div className="overline">{doc.overline}</div>
        <h1
          data-testid="legal-title"
          className="mt-6 font-serif text-5xl sm:text-6xl lg:text-7xl tracking-tight text-ki-fg"
        >
          {doc.title}
        </h1>
        <p className="mt-6 text-xs uppercase tracking-[0.28em] text-ki-muted">
          Placeholder text · final wording to be reviewed before launch
        </p>
      </header>

      <section className="container-ki max-w-3xl mt-16 space-y-12">
        {doc.sections.map((s) => (
          <div
            key={s.heading}
            data-testid={`legal-section-${s.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
          >
            <h2 className="font-serif text-2xl sm:text-3xl tracking-tight text-ki-fg">
              {s.heading}
            </h2>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-ki-fg/85">{s.body}</p>
          </div>
        ))}
      </section>

      <section className="container-ki max-w-3xl mt-20">
        <div className="overline">Other legal documents</div>
        <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
          {Object.entries(PLACEHOLDERS)
            .filter(([key]) => key !== slug)
            .map(([key, d]) => (
              <li key={key}>
                <Link
                  to={`/legal/${key}`}
                  data-testid={`legal-related-${key}`}
                  className="text-[11px] uppercase tracking-[0.24em] text-ki-muted hover:text-ki-gold transition-colors"
                >
                  {d.title} →
                </Link>
              </li>
            ))}
        </ul>
      </section>

      <section className="container-ki max-w-3xl mt-16">
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center border border-ki-fg/30 text-ki-fg hover:border-ki-gold hover:text-ki-gold px-8 py-4 text-xs uppercase tracking-[0.28em] transition-colors duration-300"
          >
            ← Return Home
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
