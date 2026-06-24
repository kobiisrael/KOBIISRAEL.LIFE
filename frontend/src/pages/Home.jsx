import { useEffect } from "react";
import Hero from "@/components/sections/Hero";
import ConceptualEntry from "@/components/sections/ConceptualEntry";
import SelectedWorks from "@/components/sections/SelectedWorks";
import StillMovingSplit from "@/components/sections/StillMovingSplit";
import FeaturedProject from "@/components/sections/FeaturedProject";
import PrintsCollector from "@/components/sections/PrintsCollector";
import BooksSection from "@/components/sections/BooksSection";
import CredibilityStrip from "@/components/sections/CredibilityStrip";
import ArtistStatement from "@/components/sections/ArtistStatement";
import CurrentProjects from "@/components/sections/CurrentProjects";
import ContactSection from "@/components/sections/ContactSection";

const HOME_TITLE =
  "Kobi Israel | Photography, Moving Image, Artist Archive and Limited Edition Prints";
const HOME_DESC =
  "Official website of Kobi Israel, photographer and filmmaker. Still and moving image projects exploring masculinity, desire, exile, memory and identity. Limited edition prints, books, archive and artist CV.";

const setMeta = (name, content) => {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

export default function Home() {
  useEffect(() => {
    document.title = HOME_TITLE;
    setMeta("description", HOME_DESC);
  }, []);
  return (
    <>
      <Hero />
      <ConceptualEntry />
      <SelectedWorks />
      <StillMovingSplit />
      <FeaturedProject />
      <PrintsCollector />
      <BooksSection />
      <CredibilityStrip />
      <ArtistStatement />
      <CurrentProjects />
      <ContactSection />
    </>
  );
}
