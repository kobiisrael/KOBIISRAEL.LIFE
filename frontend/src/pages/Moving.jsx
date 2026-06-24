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

const setMeta = (name, content) => {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

export default function Moving() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Moving Image | Kobi Israel";
    setMeta(
      "description",
      "Moving-image archive of Kobi Israel, featuring film fragments, video works, visual diaries and experimental works exploring memory, masculinity, desire, exile, identity and time."
    );
    setMeta(
      "keywords",
      "Kobi Israel moving image, Kobi Israel film, Kobi Israel video art, Kobi Israel Cuba Love Story film, experimental filmmaker London, artist film archive, queer video art, photography and moving image, visual diary film, autobiographical filmmaking, memory and film, moving image artist"
    );
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
