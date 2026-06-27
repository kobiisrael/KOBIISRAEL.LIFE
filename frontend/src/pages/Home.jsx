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
import {
  applyPageSeo,
  websiteSchema,
  personSchema,
  breadcrumbSchema,
} from "@/lib/seo";
import { HERO } from "@/data/site";

const HOME_TITLE = "Kobi Israel | Photography, Moving Image and Prints";
const HOME_DESC =
  "Official website of Kobi Israel, photographer and filmmaker. Still and moving image works, prints, books, archive notes and artist CV.";
const HOME_OG_TITLE = "Kobi Israel — Still & Moving Diaries";
const HOME_OG_DESC =
  "An archive of photography, moving image, books and limited edition prints — masculinity, desire, exile and memory.";

export default function Home() {
  useEffect(() => {
    applyPageSeo({
      title: HOME_TITLE,
      description: HOME_DESC,
      path: "/",
      ogTitle: HOME_OG_TITLE,
      ogDescription: HOME_OG_DESC,
      ogType: "website",
      image: HERO.image,
      imageAlt: HERO.alt,
      jsonLd: [
        { id: "home-website", data: websiteSchema() },
        { id: "home-person", data: personSchema() },
        {
          id: "home-breadcrumb",
          data: breadcrumbSchema([{ name: "Home", path: "/" }]),
        },
      ],
    });
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
