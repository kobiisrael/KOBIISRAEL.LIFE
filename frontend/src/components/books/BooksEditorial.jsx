import { BOOKS_EDITORIAL_IMAGE } from "@/data/site";
import { BOOKS } from "@/constants/testIds";

export default function BooksEditorial() {
  return (
    <section className="py-24 md:py-36 border-b border-ki-border">
      <div className="container-ki grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <div className="lg:col-span-5">
          <div className="overline">Editorial Note</div>
          <h2 data-testid={BOOKS.editorialHeading}
            className="mt-6 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ki-fg text-balance">
            Books as Portable Archives
          </h2>
          <p className="mt-8 text-base md:text-lg leading-relaxed text-ki-fg/80 max-w-xl">
            Kobi Israel&apos;s books and publications extend the photographic archive into printed
            form. They gather images, sequences, fragments, landscapes, bodies, memory and
            autobiography into objects that can be held, collected and revisited.
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.28em] text-ki-muted">
            Final artist-approved text to be supplied
          </p>
        </div>
        <div className="lg:col-span-7 lg:pl-8">
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-ki-elevated border border-ki-border">
            <img src={BOOKS_EDITORIAL_IMAGE.image} alt={BOOKS_EDITORIAL_IMAGE.alt}
              loading="lazy" decoding="async"
              className="absolute inset-0 w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-ki-bg/40 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex justify-between text-[10px] uppercase tracking-[0.28em] text-ki-fg/70">
              <span>Book Spread · Reference</span>
              <span>Placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
