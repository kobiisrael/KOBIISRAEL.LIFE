import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Placeholder from "@/pages/Placeholder";

function App() {
  useEffect(() => {
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
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/still" element={<Placeholder title="Still" intro="Still image works — page in preparation." />} />
            <Route path="/moving" element={<Placeholder title="Moving" intro="Moving-image works — page in preparation." />} />
            <Route path="/projects" element={<Placeholder title="Projects" intro="Project archive — page in preparation." />} />
            <Route path="/projects/:slug" element={<Placeholder title="Project" intro="Project page — in preparation." />} />
            <Route path="/prints" element={<Placeholder title="Prints" intro="Signed limited edition prints — page in preparation." />} />
            <Route path="/books" element={<Placeholder title="Books" intro="Books and catalogues — page in preparation." />} />
            <Route path="/archive" element={<Placeholder title="Archive" intro="Working archive — page in preparation." />} />
            <Route path="/cv" element={<Placeholder title="CV" intro="Artist CV — to be confirmed by artist." />} />
            <Route path="/journal" element={<Placeholder title="Journal" intro="Journal — page in preparation." />} />
            <Route path="/contact" element={<Placeholder title="Contact" intro="Use the form on the homepage to send an inquiry." />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster richColors theme="dark" position="bottom-right" />
    </div>
  );
}

export default App;
