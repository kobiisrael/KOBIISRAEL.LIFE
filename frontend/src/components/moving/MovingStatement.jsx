import { MOVING_STATEMENT } from "@/data/site";
import { MOVING } from "@/constants/testIds";

export default function MovingStatement() {
  return (
    <section className="py-24 md:py-32 border-b border-ki-border">
      <div className="container-ki max-w-4xl">
        <div className="overline">Statement</div>
        <h2
          data-testid={MOVING.statementHeading}
          className="mt-6 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ki-fg text-balance"
        >
          Moving Image Statement
        </h2>
        <blockquote className="mt-10 font-serif italic text-2xl sm:text-3xl leading-[1.3] text-ki-fg/90 text-balance">
          <span className="text-ki-gold/80">&ldquo;</span>
          {MOVING_STATEMENT}
          <span className="text-ki-gold/80">&rdquo;</span>
        </blockquote>
        <p className="mt-8 text-xs uppercase tracking-[0.28em] text-ki-muted">
          Final statement to be supplied by artist
        </p>
      </div>
    </section>
  );
}
