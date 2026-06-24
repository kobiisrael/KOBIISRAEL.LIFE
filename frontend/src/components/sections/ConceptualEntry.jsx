import { CONCEPT_HEADING, CONCEPT_BODY } from "@/data/site";
import { HOME } from "@/constants/testIds";

export default function ConceptualEntry() {
  return (
    <section className="relative py-28 md:py-40 border-b border-ki-border">
      <div className="container-ki max-w-4xl text-center">
        <div className="overline">Entry</div>
        <h2
          data-testid={HOME.conceptHeading}
          className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg"
        >
          {CONCEPT_HEADING}
        </h2>
        <p className="mt-10 font-serif italic text-xl sm:text-2xl leading-relaxed text-ki-fg/85 text-balance">
          {CONCEPT_BODY}
        </p>
        <p className="mt-8 text-xs uppercase tracking-[0.28em] text-ki-muted">
          Final text to be supplied by the artist
        </p>
      </div>
    </section>
  );
}
