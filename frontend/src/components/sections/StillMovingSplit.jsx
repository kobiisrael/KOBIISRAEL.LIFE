import { Link } from "react-router-dom";
import { SPLIT_MEDIA } from "@/data/site";
import { HOME } from "@/constants/testIds";

function Side({ side, image, alt, description, label, cta, to, testId }) {
  return (
    <Link
      to={to}
      className="group relative flex flex-col justify-end min-h-[70vh] lg:min-h-[85vh] overflow-hidden bg-ki-elevated"
    >
      <img
        src={image}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover opacity-55 group-hover:opacity-80 transition-opacity duration-1000 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ki-bg via-ki-bg/40 to-transparent" />
      <div className="absolute inset-0 border border-ki-border" />
      <div className="relative p-8 md:p-12 lg:p-16 max-w-xl">
        <div className="overline text-ki-beige/90">{side}</div>
        <h3 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg">
          {label}
        </h3>
        <p className="mt-5 text-sm md:text-base text-ki-fg/75 leading-relaxed max-w-md">
          {description}
        </p>
        <span
          data-testid={testId}
          className="mt-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-ki-gold border-b border-ki-gold/40 group-hover:border-ki-gold pb-1 transition-colors"
        >
          {cta} →
        </span>
      </div>
    </Link>
  );
}

export default function StillMovingSplit() {
  return (
    <section className="border-b border-ki-border">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <Side
          side="01 — Stillness"
          image={SPLIT_MEDIA.still.image}
          alt={SPLIT_MEDIA.still.alt}
          description={SPLIT_MEDIA.still.description}
          label="Still Images"
          cta="Explore Still Works"
          to="/still"
          testId={HOME.splitStillCta}
        />
        <Side
          side="02 — Time"
          image={SPLIT_MEDIA.moving.image}
          alt={SPLIT_MEDIA.moving.alt}
          description={SPLIT_MEDIA.moving.description}
          label="Moving Images"
          cta="Explore Moving Works"
          to="/moving"
          testId={HOME.splitMovingCta}
        />
      </div>
    </section>
  );
}
