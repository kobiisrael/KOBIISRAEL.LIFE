import { STILL_CURATORIAL_IMAGE } from "@/data/site";
import { STILL } from "@/constants/testIds";

export default function CuratorialIntro() {
  return (
    <section className="py-24 md:py-36 border-b border-ki-border">
      <div className="container-ki grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <div className="lg:col-span-6">
          <div className="overline">Curatorial Note</div>
          <h2
            data-testid={STILL.curatorialHeading}
            className="mt-6 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ki-fg text-balance"
          >
            Still Images as Memory Objects
          </h2>
          <p className="mt-8 text-base md:text-lg leading-relaxed text-ki-fg/80 max-w-xl">
            Kobi Israel&apos;s photographic work moves between documentary encounter, staged intimacy,
            travel diary, homoerotic tension, autobiography and visual memory. The still image
            becomes evidence, performance, confession and fragment.
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.28em] text-ki-muted">
            Final artist-approved text to be supplied
          </p>
        </div>

        <div className="lg:col-span-6 lg:pl-8">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-ki-elevated border border-ki-border">
            <img
              src={STILL_CURATORIAL_IMAGE.image}
              alt={STILL_CURATORIAL_IMAGE.alt}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ki-bg/40 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex justify-between text-[10px] uppercase tracking-[0.28em] text-ki-fg/70">
              <span>Reference Image</span>
              <span>Placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
