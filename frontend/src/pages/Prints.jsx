import { useCallback, useEffect, useRef } from "react";
import PrintsHero from "@/components/prints/PrintsHero";
import CollectorViewingRoom from "@/components/prints/CollectorViewingRoom";
import PrintCollections from "@/components/prints/PrintCollections";
import AvailableWorks from "@/components/prints/AvailableWorks";
import PrintInformation from "@/components/prints/PrintInformation";
import CollectorTrust from "@/components/prints/CollectorTrust";
import CollectorInquiryForm from "@/components/prints/CollectorInquiryForm";
import InstitutionalInquiry from "@/components/prints/InstitutionalInquiry";
import SecondaryMarket from "@/components/prints/SecondaryMarket";
import RelatedArchive from "@/components/prints/RelatedArchive";
import { PRINTS } from "@/constants/testIds";
import { applyPageSeo, breadcrumbSchema } from "@/lib/seo";
import { PRINTS_HERO } from "@/data/site";

export default function Prints() {
  const formRef = useRef(null);

  useEffect(() => {
    const previousTitle = document.title;
    applyPageSeo({
      title: "Limited Edition Prints | Kobi Israel",
      description:
        "Signed limited edition photography prints by Kobi Israel. Collector inquiries for selected works exploring masculinity, desire, exile and memory.",
      path: "/prints",
      image: PRINTS_HERO.image,
      imageAlt: PRINTS_HERO.alt,
      jsonLd: [
        {
          id: "prints-breadcrumb",
          data: breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Limited Edition Prints", path: "/prints" },
          ]),
        },
        {
          id: "prints-collection",
          data: {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Limited Edition Prints",
            url: "https://kobiisrael.life/prints",
            about: { "@type": "Person", name: "Kobi Israel" },
            inLanguage: "en",
          },
        },
      ],
    });
    const k = document.querySelector('meta[name="keywords"]') || document.createElement("meta");
    k.setAttribute("name", "keywords");
    k.setAttribute(
      "content",
      "Kobi Israel prints, Kobi Israel limited edition prints, Kobi Israel photography prints, Kobi Israel Cuba Love Story print, fine art photography prints, signed photography prints, limited edition C-type prints, queer photography prints, homoerotic photography prints, Israeli photographer prints, London fine art photography, collector photography prints",
    );
    if (!k.parentNode) document.head.appendChild(k);
    window.scrollTo(0, 0);
    return () => {
      document.title = previousTitle;
    };
  }, []);

  const scrollToForm = useCallback(() => {
    document.getElementById("prints-inquiry")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleInquireForArtwork = useCallback(({ artwork, series }) => {
    formRef.current?.setInquiryType("collector");
    formRef.current?.setArtworkInterest(artwork, series);
    scrollToForm();
  }, [scrollToForm]);

  const handleInstitutional = useCallback(() => {
    formRef.current?.setInquiryType("institutional");
    scrollToForm();
  }, [scrollToForm]);

  return (
    <div data-testid={PRINTS.page}>
      <PrintsHero />
      <CollectorViewingRoom />
      <PrintCollections />
      <AvailableWorks onInquire={handleInquireForArtwork} />
      <PrintInformation />
      <CollectorTrust />

      <section id="prints-inquiry" className="py-28 md:py-40 border-b border-ki-border">
        <div className="container-ki grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <div className="overline">Collector Inquiry</div>
            <h2
              data-testid={PRINTS.inquiryHeading}
              className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg"
            >
              Request Print Availability
            </h2>
            <p className="mt-6 text-base text-ki-fg/75 leading-relaxed max-w-md">
              All fields treated discreetly. Print availability, edition details and pricing are
              confirmed case by case by the artist or representative.
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.24em] text-ki-muted">
              No payments are processed on this page
            </p>
          </div>
          <div className="lg:col-span-8">
            <CollectorInquiryForm ref={formRef} />
          </div>
        </div>
      </section>

      <InstitutionalInquiry onSendInstitutional={handleInstitutional} />
      <SecondaryMarket />
      <RelatedArchive />
    </div>
  );
}
