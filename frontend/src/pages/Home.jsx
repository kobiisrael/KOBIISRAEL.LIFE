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

export default function Home() {
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
