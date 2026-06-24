import { Link } from "react-router-dom";
import { ARTIST_STATEMENT } from "@/data/site";
import { HOME } from "@/constants/testIds";

export default function ArtistStatement() {
  return (
    <section className="py-28 md:py-40 border-b border-ki-border">
      <div className="container-ki max-w-4xl">
        <div className="overline">Artist Statement</div>
        <blockquote className="mt-8 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.15] text-ki-fg text-balance">
          <span className="text-ki-gold/80">“</span>
          {ARTIST_STATEMENT}
          <span className="text-ki-gold/80">”</span>
        </blockquote>
        <div className="mt-12">
          <Link
            to="/cv"
            data-testid={HOME.statementReadCta}
            className="inline-flex items-center gap-3 border border-ki-fg/30 text-ki-fg hover:border-ki-gold hover:text-ki-gold px-8 py-4 text-xs uppercase tracking-[0.28em] transition-colors duration-300"
          >
            Read Full Statement →
          </Link>
        </div>
      </div>
    </section>
  );
}
