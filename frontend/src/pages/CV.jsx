import { useCallback, useEffect, useRef } from "react";
import CVHero from "@/components/cv/CVHero";
import BiographyAndPositioning from "@/components/cv/BiographyAndPositioning";
import SelectedExhibitions from "@/components/cv/SelectedExhibitions";
import Collections from "@/components/cv/Collections";
import AwardsRecognition from "@/components/cv/AwardsRecognition";
import PublicationsPress from "@/components/cv/PublicationsPress";
import BooksList from "@/components/cv/BooksList";
import ProjectTimeline from "@/components/cv/ProjectTimeline";
import ProfessionalMaterials from "@/components/cv/ProfessionalMaterials";
import ProfessionalInquiries from "@/components/cv/ProfessionalInquiries";
import CVContactForm from "@/components/cv/CVContactForm";
import { CV } from "@/constants/testIds";
import { applyPageSeo, breadcrumbSchema, personSchema } from "@/lib/seo";

export default function CVPage() {
  const formRef = useRef(null);

  useEffect(() => {
    const previousTitle = document.title;
    applyPageSeo({
      title: "CV and Biography | Kobi Israel",
      description:
        "CV and biography of Kobi Israel — exhibitions, collections, publications and press history of the photographer and filmmaker.",
      path: "/cv",
      ogType: "profile",
      jsonLd: [
        {
          id: "cv-breadcrumb",
          data: breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "CV and Biography", path: "/cv" },
          ]),
        },
        { id: "cv-person", data: personSchema() },
        {
          id: "cv-profilepage",
          data: {
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            mainEntity: personSchema(),
            url: "https://kobiisrael.life/cv",
            inLanguage: "en",
          },
        },
      ],
    });
    const k = document.querySelector('meta[name="keywords"]') || document.createElement("meta");
    k.setAttribute("name", "keywords");
    k.setAttribute(
      "content",
      "Kobi Israel CV, Kobi Israel biography, Kobi Israel photographer biography, Kobi Israel exhibitions, Kobi Israel collections, Kobi Israel publications, Kobi Israel artist CV, Kobi Israel fine art photography, Israeli photographer London, queer photographer biography, photography exhibitions Kobi Israel",
    );
    if (!k.parentNode) document.head.appendChild(k);
    window.scrollTo(0, 0);
    return () => { document.title = previousTitle; };
  }, []);

  const scrollToForm = useCallback(() => {
    document.getElementById("cv-contact")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleSendPathway = useCallback((type) => {
    formRef.current?.setInquiryType(type);
    scrollToForm();
  }, [scrollToForm]);

  const handleHighResRequest = useCallback(() => {
    formRef.current?.setInquiryType("press");
    scrollToForm();
  }, [scrollToForm]);

  return (
    <div data-testid={CV.page}>
      <CVHero />
      <BiographyAndPositioning />
      <SelectedExhibitions />
      <Collections />
      <AwardsRecognition />
      <PublicationsPress />
      <BooksList />
      <ProjectTimeline />
      <ProfessionalMaterials onHighResRequest={handleHighResRequest} />
      <ProfessionalInquiries onSend={handleSendPathway} />

      <section id="cv-contact" className="py-28 md:py-40 border-b border-ki-border">
        <div className="container-ki grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <div className="overline">Contact</div>
            <h2 data-testid={CV.contactHeading}
              className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg">
              Contact
            </h2>
            <p className="mt-6 text-base text-ki-fg/75 leading-relaxed max-w-md">
              All inquiries are received and reviewed before reply. Treated discreetly.
            </p>
          </div>
          <div className="lg:col-span-8">
            <CVContactForm ref={formRef} />
          </div>
        </div>
      </section>
    </div>
  );
}
