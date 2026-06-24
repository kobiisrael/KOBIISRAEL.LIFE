import { forwardRef, useImperativeHandle, useState } from "react";
import { toast } from "sonner";
import { submitInquiry } from "@/lib/api";
import { BOOK_INQUIRY_TYPE_OPTIONS } from "@/data/site";
import { BOOKS } from "@/constants/testIds";

const BooksInquiryForm = forwardRef(function BooksInquiryForm(_, ref) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    country: "",
    book: "",
    inquiry_type: "purchase",
    message: "",
    consent: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (k) => (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((s) => ({ ...s, [k]: value }));
  };

  useImperativeHandle(ref, () => ({
    setInquiryType(type) {
      setForm((s) => ({ ...s, inquiry_type: type }));
    },
    setBookInterest(book) {
      setForm((s) => ({ ...s, book: book || s.book }));
    },
  }));

  const submit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    if (!form.consent) {
      toast.error("Please confirm consent to reply before sending the inquiry.");
      return;
    }
    setSubmitting(true);
    try {
      await submitInquiry({
        name: form.name,
        email: form.email,
        inquiry_type: form.inquiry_type,
        subject: form.book || "Book inquiry",
        message: form.message,
        project_interest: form.book || null,
        country: form.country || null,
        consent: form.consent,
      });
      setSubmitted(true);
      setForm({
        name: "",
        email: "",
        country: "",
        book: "",
        inquiry_type: "purchase",
        message: "",
        consent: false,
      });
      toast.success("Book inquiry sent. Thank you.");
    } catch (err) {
      const msg = err?.response?.data?.detail || "Could not send. Please try again.";
      toast.error(typeof msg === "string" ? msg : "Could not send. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputCls = "w-full bg-transparent border-b border-ki-border focus:border-ki-gold outline-none text-ki-fg placeholder:text-ki-muted py-3 transition-colors";
  const labelCls = "text-[10px] uppercase tracking-[0.28em] text-ki-muted";

  return (
    <form data-testid={BOOKS.inquiryForm} onSubmit={submit} noValidate
      className="flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="flex flex-col gap-2">
          <label htmlFor="ki-books-name" className={labelCls}>Full name</label>
          <input id="ki-books-name" type="text" required value={form.name} onChange={update("name")}
            data-testid={BOOKS.inquiryName} className={inputCls} placeholder="Your full name" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="ki-books-email" className={labelCls}>Email address</label>
          <input id="ki-books-email" type="email" required value={form.email} onChange={update("email")}
            data-testid={BOOKS.inquiryEmail} className={inputCls} placeholder="you@studio.com" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="ki-books-country" className={labelCls}>Country</label>
          <input id="ki-books-country" type="text" value={form.country} onChange={update("country")}
            data-testid={BOOKS.inquiryCountry} className={inputCls} placeholder="Country" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="ki-books-book" className={labelCls}>Book or publication of interest</label>
          <input id="ki-books-book" type="text" value={form.book} onChange={update("book")}
            data-testid={BOOKS.inquiryBook} className={inputCls} placeholder="e.g. Cuba, Love Story" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="ki-books-type" className={labelCls}>Interest type</label>
        <select id="ki-books-type" value={form.inquiry_type} onChange={update("inquiry_type")}
          data-testid={BOOKS.inquiryType}
          className={`${inputCls} appearance-none`}>
          {BOOK_INQUIRY_TYPE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-ki-bg text-ki-fg">
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="ki-books-message" className={labelCls}>Message</label>
        <textarea id="ki-books-message" required rows={5} value={form.message} onChange={update("message")}
          data-testid={BOOKS.inquiryMessage}
          className={`${inputCls} resize-none`} placeholder="Please share any context relevant to your inquiry" />
      </div>

      <label className="flex items-start gap-3 cursor-pointer">
        <input type="checkbox" checked={form.consent} onChange={update("consent")}
          data-testid={BOOKS.inquiryConsent} required
          className="mt-1 w-4 h-4 border border-ki-border bg-transparent accent-[#C19B54]" />
        <span className="text-xs text-ki-fg/75 leading-relaxed">
          I consent to the studio replying to this inquiry by email regarding book availability,
          signed copies, pricing and shipping. My information will not be shared with third parties.
        </span>
      </label>

      <div className="flex flex-col sm:flex-row sm:items-center gap-6">
        <button type="submit" disabled={submitting}
          data-testid={BOOKS.inquirySubmit}
          className="inline-flex items-center justify-center border border-ki-gold text-ki-gold hover:bg-ki-gold hover:text-ki-bg disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-ki-gold px-10 py-4 text-xs uppercase tracking-[0.28em] transition-colors duration-300">
          {submitting ? "Sending…" : "Send Book Inquiry"}
        </button>
        {submitted && (
          <span data-testid={BOOKS.inquirySuccess} className="text-sm text-ki-gold/90 max-w-md">
            Thank you for your inquiry. Book availability, pricing and shipping information will be
            confirmed before any order is arranged.
          </span>
        )}
      </div>
    </form>
  );
});

export default BooksInquiryForm;
