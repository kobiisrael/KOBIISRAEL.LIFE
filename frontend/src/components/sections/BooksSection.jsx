import { Link } from "react-router-dom";
import { BOOKS } from "@/data/site";
import { HOME } from "@/constants/testIds";

export default function BooksSection() {
  return (
    <section className="py-24 md:py-32 border-b border-ki-border">
      <div className="container-ki">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="overline">Publications</div>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg">
              Books &amp; Catalogues
            </h2>
          </div>
          <p className="text-sm text-ki-muted max-w-sm leading-relaxed">
            Photography books, exhibition catalogues and artist PDFs. Titles, ISBN, prices and signed
            copy availability — to be confirmed by the artist.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {BOOKS.map((b, i) => (
            <article key={b.slug} className="group flex flex-col">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-ki-elevated border border-ki-border/60 flex items-center justify-center">
                <div className="text-center px-6">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-ki-muted/70">
                    Cover · 0{i + 1}
                  </div>
                  <div className="mt-3 font-serif text-base text-ki-fg/45 leading-snug">
                    {b.title}
                  </div>
                  <div className="mt-3 text-[10px] uppercase tracking-[0.28em] text-ki-muted/60">
                    Placeholder
                  </div>
                </div>
                <div className="absolute inset-0 border border-ki-gold/0 group-hover:border-ki-gold/30 transition-colors duration-500" />
              </div>
              <div className="mt-5 space-y-2">
                <h3 className="font-serif text-xl text-ki-fg tracking-tight">{b.title}</h3>
                <dl className="text-xs text-ki-muted space-y-1">
                  <div className="flex justify-between gap-3"><dt className="uppercase tracking-[0.2em]">Publisher</dt><dd className="text-ki-fg/70 text-right">{b.publisher}</dd></div>
                  <div className="flex justify-between gap-3"><dt className="uppercase tracking-[0.2em]">Format</dt><dd className="text-ki-fg/70 text-right">{b.format}</dd></div>
                  <div className="flex justify-between gap-3"><dt className="uppercase tracking-[0.2em]">ISBN</dt><dd className="text-ki-fg/70 text-right">{b.isbn}</dd></div>
                  <div className="flex justify-between gap-3"><dt className="uppercase tracking-[0.2em]">Price</dt><dd className="text-ki-fg/70 text-right">{b.price}</dd></div>
                  <div className="flex justify-between gap-3"><dt className="uppercase tracking-[0.2em]">Signed</dt><dd className="text-ki-fg/70 text-right">{b.signed}</dd></div>
                </dl>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            to="/books"
            data-testid={HOME.booksViewCta}
            className="inline-flex items-center gap-3 border border-ki-fg/30 text-ki-fg hover:border-ki-gold hover:text-ki-gold px-8 py-4 text-xs uppercase tracking-[0.28em] transition-colors duration-300"
          >
            View Books →
          </Link>
        </div>
      </div>
    </section>
  );
}
