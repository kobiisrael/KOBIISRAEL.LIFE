import { PRINTS } from "@/constants/testIds";

export default function SecondaryMarket() {
  return (
    <section className="py-24 md:py-32 border-b border-ki-border">
      <div className="container-ki max-w-4xl">
        <div className="overline">Discreet</div>
        <h2
          data-testid={PRINTS.secondaryHeading}
          className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg"
        >
          Secondary Market and Rare Works
        </h2>
        <p className="mt-8 text-base md:text-lg text-ki-fg/80 leading-relaxed text-balance">
          Some works may be sold out, unavailable, held in private collections or only accessible
          through secondary market inquiries. Availability, ownership, condition and price must
          always be confirmed case by case.
        </p>
        <p className="mt-6 text-xs uppercase tracking-[0.28em] text-ki-muted">
          No collector names, ownership claims or secondary market prices are stated unless
          confirmed in writing by the artist
        </p>
      </div>
    </section>
  );
}
