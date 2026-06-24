import { useCallback, useEffect, useRef } from "react";
import BooksHero from "@/components/books/BooksHero";
import BooksEditorial from "@/components/books/BooksEditorial";
import PublicationsIndex from "@/components/books/PublicationsIndex";
import FeaturedBook from "@/components/books/FeaturedBook";
import PurchaseAvailability from "@/components/books/PurchaseAvailability";
import PdfArchive from "@/components/books/PdfArchive";
import TextsEssays from "@/components/books/TextsEssays";
import PublicationHistory from "@/components/books/PublicationHistory";
import BooksInquiryForm from "@/components/books/BooksInquiryForm";
import BooksRelatedArchive from "@/components/books/BooksRelatedArchive";
import { BOOKS } from "@/constants/testIds";

const setMeta = (name, content) => {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

export default function Books() {
  const formRef = useRef(null);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Books and Publications | Kobi Israel";
    setMeta(
      "description",
      "Books, catalogues and publications by Kobi Israel, including photographic works, artist books, visual diaries and archive texts exploring masculinity, desire, exile, memory and identity."
    );
    setMeta(
      "keywords",
      "Kobi Israel books, Kobi Israel Cuba Love Story book, Kobi Israel photography book, artist books photography, queer photography book, photography catalogue Kobi Israel, fine art photography books, autobiographical photography book, visual diary photography, photography and memory book, limited edition photography book"
    );
    window.scrollTo(0, 0);
    return () => { document.title = previousTitle; };
  }, []);

  const scrollToForm = useCallback(() => {
    document.getElementById("books-inquiry")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleInquireForBook = useCallback(({ book }) => {
    formRef.current?.setInquiryType("purchase");
    formRef.current?.setBookInterest(book);
    scrollToForm();
  }, [scrollToForm]);

  const handleCollectorInquire = useCallback((type = "collector") => {
    formRef.current?.setInquiryType(type);
    formRef.current?.setBookInterest("Cuba, Love Story");
    scrollToForm();
  }, [scrollToForm]);

  const handlePurchaseRequest = useCallback((type = "purchase") => {
    formRef.current?.setInquiryType(type);
    scrollToForm();
  }, [scrollToForm]);

  const handlePdfAccess = useCallback((pdfTitle) => {
    formRef.current?.setInquiryType("research");
    formRef.current?.setBookInterest(pdfTitle);
    scrollToForm();
  }, [scrollToForm]);

  return (
    <div data-testid={BOOKS.page}>
      <BooksHero />
      <BooksEditorial />
      <PublicationsIndex onInquire={handleInquireForBook} />
      <FeaturedBook onCollectorInquire={handleCollectorInquire} />
      <PurchaseAvailability onRequest={handlePurchaseRequest} />
      <PdfArchive onAccess={handlePdfAccess} />
      <TextsEssays />
      <PublicationHistory />

      <section id="books-inquiry" className="py-28 md:py-40 border-b border-ki-border">
        <div className="container-ki grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <div className="overline">Book Inquiry</div>
            <h2 data-testid={BOOKS.inquiryHeading}
              className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg">
              Book Inquiry
            </h2>
            <p className="mt-6 text-base text-ki-fg/75 leading-relaxed max-w-md">
              Book availability, pricing and shipping information will be confirmed before any
              order is arranged. No payments are processed on this page.
            </p>
          </div>
          <div className="lg:col-span-8">
            <BooksInquiryForm ref={formRef} />
          </div>
        </div>
      </section>

      <BooksRelatedArchive />
    </div>
  );
}
