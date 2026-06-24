import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Still from "@/pages/Still";
import Moving from "@/pages/Moving";
import Prints from "@/pages/Prints";
import Books from "@/pages/Books";
import CVPage from "@/pages/CV";
import Archive from "@/pages/Archive";
import Journal from "@/pages/Journal";
import JournalEntry from "@/pages/JournalEntry";
import Contact from "@/pages/Contact";
import ProjectDetail from "@/pages/ProjectDetail";
import ArtworkRecord from "@/pages/ArtworkRecord";
import NotFound from "@/pages/NotFound";
import Placeholder from "@/pages/Placeholder";

function GlobalMeta() {
  const location = useLocation();
  useEffect(() => {
    // Only set the homepage meta; other pages own their own title via useEffect.
    if (location.pathname === "/") {
      document.title =
        "Kobi Israel | Photography, Moving Image, Artist Archive and Limited Edition Prints";
      const description =
        "Official website of Kobi Israel, photographer and filmmaker. Still and moving image projects exploring masculinity, desire, exile, memory and identity. Limited edition prints, books, archive and artist CV.";
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", description);
    }
  }, [location.pathname]);
  return null;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalMeta />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/still" element={<Still />} />
            <Route path="/moving" element={<Moving />} />
            <Route path="/projects" element={<Placeholder title="Projects" intro="Project archive — page in preparation." />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/prints" element={<Prints />} />
            <Route path="/prints/:slug" element={<ArtworkRecord />} />
            <Route path="/books" element={<Books />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/cv" element={<CVPage />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/journal/:slug" element={<JournalEntry />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster richColors theme="dark" position="bottom-right" />
    </div>
  );
}

export default App;
