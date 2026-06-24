import { Link } from "react-router-dom";
import { BOOKS_RELATED_LINKS } from "@/data/site";
import { BOOKS } from "@/constants/testIds";

export default function BooksRelatedArchive() {
  return (
    <section className="py-24 md:py-32 border-b border-ki-border bg-ki-bg">
      <div className="container-ki">
        <div className="max-w-2xl mb-10">
          <div className="overline">Continue Browsing</div>
          <h2 data-testid={BOOKS.relatedHeading}
            className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg">
            Related Archive
          </h2>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-px bg-ki-border border border-ki-border">
          {BOOKS_RELATED_LINKS.map((l) => (
            <li key={l.slug} className="bg-ki-bg">
              <Link to={l.to} data-testid={BOOKS.relatedLink(l.slug)}
                className="group block p-6 min-h-[140px] flex flex-col justify-between transition-colors duration-500 hover:bg-ki-surface">
                <div className="text-[10px] uppercase tracking-[0.28em] text-ki-gold/90">Section</div>
                <div className="mt-4 font-serif text-xl text-ki-fg tracking-tight group-hover:text-ki-gold transition-colors leading-tight">
                  {l.label}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
