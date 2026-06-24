import { PURCHASE_BLOCKS } from "@/data/site";
import { BOOKS } from "@/constants/testIds";

export default function PurchaseAvailability({ onRequest }) {
  return (
    <section className="py-24 md:py-32 border-b border-ki-border bg-ki-surface">
      <div className="container-ki grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5">
          <div className="overline">For Collectors and Readers</div>
          <h2 data-testid={BOOKS.purchaseHeading}
            className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg">
            Purchase and Availability
          </h2>
          <p className="mt-6 text-base text-ki-fg/75 leading-relaxed max-w-md">
            Inquiry-first. No checkout is processed on this page. Availability, signed-copy status,
            shipping and pricing are confirmed before any order is arranged.
          </p>
          <button type="button"
            data-testid={BOOKS.purchaseRequestCta}
            onClick={() => onRequest?.("purchase")}
            className="mt-10 inline-flex items-center justify-center border border-ki-gold text-ki-gold hover:bg-ki-gold hover:text-ki-bg transition-colors duration-300 px-8 py-4 text-xs uppercase tracking-[0.26em]">
            Request Book Availability →
          </button>
          <p className="mt-6 text-xs uppercase tracking-[0.24em] text-ki-muted">
            No payments processed on this page
          </p>
        </div>
        <div className="lg:col-span-7">
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-ki-border border border-ki-border">
            {PURCHASE_BLOCKS.map((d) => (
              <div key={d.label} className="bg-ki-surface p-6 md:p-7">
                <dt className="text-[10px] uppercase tracking-[0.28em] text-ki-gold/90">
                  {d.label}
                </dt>
                <dd className="mt-3 font-serif text-base md:text-lg text-ki-fg/90 leading-snug">
                  {d.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
