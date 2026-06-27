import { useEffect } from "react";
import MovingHero from "@/components/moving/MovingHero";
import MovingCuratorialIntro from "@/components/moving/MovingCuratorialIntro";
import MovingWorksIndex from "@/components/moving/MovingWorksIndex";
import FeaturedMoving from "@/components/moving/FeaturedMoving";
import MovingStatement from "@/components/moving/MovingStatement";
import CuratorPathway from "@/components/moving/CuratorPathway";
import StillMovingBridge from "@/components/moving/StillMovingBridge";
import SoundVoiceMusic from "@/components/moving/SoundVoiceMusic";
import ArchiveFragments from "@/components/moving/ArchiveFragments";
import { MOVING } from "@/constants/testIds";
import { applyPageSeo, breadcrumbSchema } from "@/lib/seo";
import { MOVING_HERO } from "@/data/site";

export default function Moving() {
  useEffect(() => {
    const previousTitle = document.title;
    applyPageSeo({
      title: "Moving Image | Kobi Israel",
      description:
        "Moving image and film works by Kobi Israel — short films, video art, visual diaries and travelogue works. Screenings and curator inquiries.",
      path: "/moving",
      image: MOVING_HERO.image,
      imageAlt: MOVING_HERO.alt,
      jsonLd: [
        {
          id: "moving-breadcrumb",
          data: breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Moving Image", path: "/moving" },
          ]),
        },
        {
          id: "moving-collection",
          data: {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Moving Image",
            url: "https://kobiisrael.life/moving",
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
      "Kobi Israel moving image, Kobi Israel film, Kobi Israel video art, Kobi Israel Cuba Love Story film, experimental filmmaker London, artist film archive, queer video art, photography and moving image, visual diary film, autobiographical filmmaking, memory and film, moving image artist",
    );
    if (!k.parentNode) document.head.appendChild(k);
    window.scrollTo(0, 0);
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div data-testid={MOVING.page}>
      <MovingHero />
      <MovingCuratorialIntro />
      <MovingWorksIndex />
      <FeaturedMoving />
      <MovingStatement />
      <CuratorPathway />
      <StillMovingBridge />
      <SoundVoiceMusic />
      <ArchiveFragments />
    </div>
  );
}
