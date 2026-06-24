import { Link } from "react-router-dom";
import { CV_BOOKS_SHORT } from "@/data/site";
import { CV } from "@/constants/testIds";

export default function BooksList() {
  return (
    <section className="py-24 md:py-32 border-b border-ki-border">
      <div className="container-ki">
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="overline">Books</div>
          <h2 data-testid={CV.booksHeading}
            className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg">
            Books and Artist Publications
          </h2>
          <p className="mt-6 text-sm text-ki-muted leading-relaxed">
            Selected publications. For full publication metadata see the Books page.
          </p>
        </div>

        <ul className="divide-y divide-ki-border border-y border-ki-border">
          {CV_BOOKS_SHORT.map((b) => (
            <li key={b.slug} data-testid={CV.bookEntry(b.slug)}
              className="grid grid-cols-12 gap-4 py-6 items-start">
              <div className="col-span-12 md:col-span-2 text-[11px] uppercase tracking-[0.22em] text-ki-muted">
                {b.year}
              </div>
              <div className="col-span-12 md:col-span-7">
                <div className="font-serif text-xl text-ki-fg tracking-tight">{b.title}</div>
                <div className="mt-1 text-sm text-ki-fg/75">{b.publisher} · {b.format}</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-ki-muted">
                  ISBN · {b.isbn} &middot; {b.availability}
                </div>
              </div>
              <div className="col-span-12 md:col-span-3 md:text-right">
                <Link to="/books" data-testid={CV.bookCta(b.slug)}
                  className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.26em] text-ki-fg/85 hover:text-ki-gold transition-colors duration-300">
                  View Book →
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
