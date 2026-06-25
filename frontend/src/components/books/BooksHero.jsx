import { BOOKS_HERO } from "@/data/site";
import { BOOKS } from "@/constants/testIds";

export default function BooksHero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden grain">
      <img src={BOOKS_HERO.image} alt={BOOKS_HERO.alt} loading="eager" decoding="async"
        className="absolute inset-0 w-full h-full object-cover opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-ki-bg/85 via-ki-bg/55 to-ki-bg" />
      <div className="absolute inset-0 bg-gradient-to-r from-ki-bg/70 via-transparent to-transparent" />
      <div className="relative container-ki min-h-[92vh] flex flex-col justify-end pb-20 md:pb-28 pt-40">
        <div className="max-w-3xl">
          <div className="overline animate-fade-up" style={{ animationDelay: "0.05s" }}>
            Publications · Volume 04
          </div>
          <h1 data-testid={BOOKS.heroTitle}
            className="mt-6 font-serif text-6xl sm:text-7xl lg:text-[9rem] leading-[0.92] tracking-tight text-ki-fg animate-fade-up"
            style={{ animationDelay: "0.15s" }}>
            Books
          </h1>
          <p data-testid={BOOKS.heroSubtitle}
            className="mt-6 font-serif italic text-xl sm:text-2xl text-ki-beige/90 animate-fade-up"
            style={{ animationDelay: "0.3s" }}>
            Artist books, catalogues, visual diaries and publications
          </p>
          <p data-testid={BOOKS.heroIntro}
            className="mt-6 max-w-2xl text-base sm:text-lg text-ki-fg/80 leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.4s" }}>
            Printed works, books and publications from the Kobi Israel archive, bringing together
            photography, memory, masculinity, desire, travel, autobiography and cinematic fragments.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5 animate-fade-up"
            style={{ animationDelay: "0.55s" }}>
            <a href="#books-index" data-testid={BOOKS.heroCtaView}
              className="inline-flex items-center justify-center border border-ki-gold text-ki-gold hover:bg-ki-gold hover:text-ki-bg transition-colors duration-300 px-8 py-4 text-xs uppercase tracking-[0.24em]">
              View Publications
            </a>
            <a href="#books-inquiry" data-testid={BOOKS.heroCtaInquire}
              className="inline-flex items-center justify-center border border-[#8B1C1C] text-[#d97a7a] hover:bg-[#8B1C1C] hover:text-white transition-colors duration-300 px-8 py-4 text-xs uppercase tracking-[0.24em]">
              Book Inquiries
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
