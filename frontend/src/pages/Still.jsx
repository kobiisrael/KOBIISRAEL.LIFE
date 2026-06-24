import { useEffect } from "react";
import StillHero from "@/components/still/StillHero";
import CuratorialIntro from "@/components/still/CuratorialIntro";
import ProjectIndex from "@/components/still/ProjectIndex";
import FeaturedStill from "@/components/still/FeaturedStill";
import CollectorPathway from "@/components/still/CollectorPathway";
import ArchiveNotes from "@/components/still/ArchiveNotes";
import { STILL } from "@/constants/testIds";
import { applyPageSeo, breadcrumbSchema } from "@/lib/seo";

export default function Still() {
  useEffect(() => {
    const previousTitle = document.title;
    applyPageSeo({
      title: "Still Photography | Kobi Israel",
      description:
        "Still photography by Kobi Israel — autobiographical projects on masculinity, desire, exile and memory. Project index, prints and archive notes.",
      path: "/still",
      ogType: "website",
      jsonLd: [
        {
          id: "still-breadcrumb",
          data: breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Still Photography", path: "/still" },
          ]),
        },
        {
          id: "still-collection",
          data: {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Still Photography",
            url: "https://kobiisrael.life/still",
            about: { "@type": "Person", name: "Kobi Israel" },
            inLanguage: "en",
          },
        },
      ],
    });
    // Long-tail keyword hint kept on the page for legacy crawlers.
    const k = document.querySelector('meta[name="keywords"]') || document.createElement("meta");
    k.setAttribute("name", "keywords");
    k.setAttribute(
      "content",
      "Kobi Israel photography, Kobi Israel still photography, Kobi Israel Cuba Love Story, queer photography, homoerotic photography, autobiographical photography, Israeli photographer London, fine art photography prints, photography of masculinity, photography and memory, limited edition photography prints",
    );
    if (!k.parentNode) document.head.appendChild(k);
    window.scrollTo(0, 0);
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div data-testid={STILL.page}>
      <StillHero />
      <CuratorialIntro />
      <ProjectIndex />
      <FeaturedStill />
      <CollectorPathway />
      <ArchiveNotes />
    </div>
  );
}
