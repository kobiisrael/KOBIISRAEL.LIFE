import { PRINTS_VIEWING_IMAGE } from "@/data/site";
import { PRINTS } from "@/constants/testIds";

export default function CollectorViewingRoom() {
  return (
    <section className="py-24 md:py-36 border-b border-ki-border">
      <div className="container-ki grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <div className="lg:col-span-5">
          <div className="overline">Viewing Room</div>
          <h2
            data-testid={PRINTS.viewingHeading}
            className="mt-6 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ki-fg text-balance"
          >
            Collector Viewing Room
          </h2>
          <p className="mt-8 text-base md:text-lg leading-relaxed text-ki-fg/80 max-w-xl">
            Kobi Israel&apos;s limited edition prints are part of a wider photographic archive
            exploring masculinity, desire, exile, memory, landscape, intimacy and identity. Each
            print record should be treated as an artwork entry with confirmed title, series, year,
            medium, size, edition details and availability.
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.28em] text-ki-muted">
            All print details, prices and availability to be confirmed by artist before publication
          </p>
        </div>

        <div className="lg:col-span-7 lg:pl-8">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-ki-elevated border border-ki-border">
            <img
              src={PRINTS_VIEWING_IMAGE.image}
              alt={PRINTS_VIEWING_IMAGE.alt}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ki-bg/35 to-transparent" />
            <div className="absolute top-5 left-5 right-5 flex justify-between text-[10px] uppercase tracking-[0.28em] text-ki-fg/75">
              <span>Artwork · Placeholder</span>
              <span>Reference</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
