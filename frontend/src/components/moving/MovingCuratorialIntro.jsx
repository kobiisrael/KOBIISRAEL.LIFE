import { MOVING_CURATORIAL_IMAGE } from "@/data/site";
import { MOVING } from "@/constants/testIds";

export default function MovingCuratorialIntro() {
  return (
    <section className="py-24 md:py-36 border-b border-ki-border">
      <div className="container-ki grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <div className="lg:col-span-5">
          <div className="overline">Curatorial Note</div>
          <h2
            data-testid={MOVING.curatorialHeading}
            className="mt-6 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ki-fg text-balance"
          >
            When the Still Image Begins to Move
          </h2>
          <p className="mt-8 text-base md:text-lg leading-relaxed text-ki-fg/80 max-w-xl">
            Kobi Israel&apos;s moving-image work extends the photographic archive into time. Bodies,
            streets, landscapes, voices and remembered encounters become cinematic fragments,
            suspended between documentary, autobiography, performance and dream.
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.28em] text-ki-muted">
            Final artist-approved text to be supplied
          </p>
        </div>

        <div className="lg:col-span-7 lg:pl-8">
          <div className="relative aspect-video w-full overflow-hidden bg-ki-elevated border border-ki-border">
            <img
              src={MOVING_CURATORIAL_IMAGE.image}
              alt={MOVING_CURATORIAL_IMAGE.alt}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover opacity-75 hover:opacity-95 transition-opacity duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ki-bg/55 to-transparent" />
            {/* Static "still" indicator — no autoplay, no sound */}
            <div className="absolute top-5 left-5 text-[10px] uppercase tracking-[0.3em] text-ki-fg/80 flex items-center gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-ki-gold" />
              Video Still · Reference
            </div>
            <div className="absolute bottom-5 left-5 right-5 flex justify-between text-[10px] uppercase tracking-[0.28em] text-ki-fg/70">
              <span>No autoplay · No sound</span>
              <span>Placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
