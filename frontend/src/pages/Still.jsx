import { useEffect } from "react";
import StillHero from "@/components/still/StillHero";
import CuratorialIntro from "@/components/still/CuratorialIntro";
import ProjectIndex from "@/components/still/ProjectIndex";
import FeaturedStill from "@/components/still/FeaturedStill";
import CollectorPathway from "@/components/still/CollectorPathway";
import ArchiveNotes from "@/components/still/ArchiveNotes";
import { STILL } from "@/constants/testIds";

const setMeta = (name, content) => {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

export default function Still() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Still Photography | Kobi Israel";
    setMeta(
      "description",
      "Still photography archive of Kobi Israel, featuring projects exploring masculinity, desire, exile, memory, travel, portraiture, landscape and autobiographical visual storytelling."
    );
    setMeta(
      "keywords",
      "Kobi Israel photography, Kobi Israel still photography, Kobi Israel Cuba Love Story, queer photography, homoerotic photography, autobiographical photography, Israeli photographer London, fine art photography prints, photography of masculinity, photography and memory, limited edition photography prints"
    );
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
