import { useState } from "react";
import { toast } from "sonner";
import { submitInquiry, subscribeNewsletter } from "@/lib/api";
import { HOME } from "@/constants/testIds";

const INQUIRY_TYPES = [
  { value: "general", label: "General" },
  { value: "collector", label: "Collector Inquiry" },
  { value: "gallery_curator", label: "Gallery / Curator" },
  { value: "press", label: "Press" },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    inquiry_type: "general",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitting, setNewsletterSubmitting] = useState(false);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const update = (k) => (e) => setForm((s) => ({ ...s, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      await submitInquiry(form);
      setSubmitted(true);
      setForm({ name: "", email: "", inquiry_type: "general", subject: "", message: "" });
      toast.success("Inquiry sent. Thank you.");
    } catch (err) {
      const msg = err?.response?.data?.detail || "Could not send. Please try again.";
      toast.error(typeof msg === "string" ? msg : "Could not send. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const submitNewsletter = async (e) => {
    e.preventDefault();
    if (newsletterSubmitting) return;
    setNewsletterSubmitting(true);
    try {
      await subscribeNewsletter({ email: newsletterEmail, source: "homepage" });
      setNewsletterSubmitted(true);
      setNewsletterEmail("");
      toast.success("Subscribed to Archive Notes.");
    } catch (err) {
      const msg = err?.response?.data?.detail || "Could not subscribe. Please try again.";
      toast.error(typeof msg === "string" ? msg : "Could not subscribe. Please try again.");
    } finally {
      setNewsletterSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-28 md:py-40">
      <div className="container-ki grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        <div className="lg:col-span-7">
          <div className="overline">Inquiries</div>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg">
            Write to the studio
          </h2>
          <p className="mt-6 text-base text-ki-fg/75 leading-relaxed max-w-xl">
            For collector inquiries, gallery and curator requests, press, publication and general
            correspondence. One form — choose your interest below.
          </p>

          <form
            data-testid={HOME.contactForm}
            onSubmit={submit}
            className="mt-12 flex flex-col gap-8"
            noValidate
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label htmlFor="ki-name" className="text-[10px] uppercase tracking-[0.28em] text-ki-muted">
                  Name
                </label>
                <input
                  id="ki-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={update("name")}
                  data-testid={HOME.contactName}
                  className="w-full bg-transparent border-b border-ki-border focus:border-ki-gold outline-none text-ki-fg placeholder:text-ki-muted py-3 transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="ki-email" className="text-[10px] uppercase tracking-[0.28em] text-ki-muted">
                  Email
                </label>
                <input
                  id="ki-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={update("email")}
                  data-testid={HOME.contactEmail}
                  className="w-full bg-transparent border-b border-ki-border focus:border-ki-gold outline-none text-ki-fg placeholder:text-ki-muted py-3 transition-colors"
                  placeholder="you@studio.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label htmlFor="ki-type" className="text-[10px] uppercase tracking-[0.28em] text-ki-muted">
                  Inquiry Type
                </label>
                <select
                  id="ki-type"
                  value={form.inquiry_type}
                  onChange={update("inquiry_type")}
                  data-testid={HOME.contactType}
                  className="w-full bg-transparent border-b border-ki-border focus:border-ki-gold outline-none text-ki-fg py-3 transition-colors appearance-none"
                  style={{ backgroundImage: "none" }}
                >
                  {INQUIRY_TYPES.map((t) => (
                    <option key={t.value} value={t.value} className="bg-ki-bg text-ki-fg">
                      {t.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="ki-subject" className="text-[10px] uppercase tracking-[0.28em] text-ki-muted">
                  Subject
                </label>
                <input
                  id="ki-subject"
                  type="text"
                  value={form.subject}
                  onChange={update("subject")}
                  data-testid={HOME.contactSubject}
                  className="w-full bg-transparent border-b border-ki-border focus:border-ki-gold outline-none text-ki-fg placeholder:text-ki-muted py-3 transition-colors"
                  placeholder="e.g. Cuba, Love Story — print inquiry"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="ki-message" className="text-[10px] uppercase tracking-[0.28em] text-ki-muted">
                Message
              </label>
              <textarea
                id="ki-message"
                required
                rows={5}
                value={form.message}
                onChange={update("message")}
                data-testid={HOME.contactMessage}
                className="w-full bg-transparent border-b border-ki-border focus:border-ki-gold outline-none text-ki-fg placeholder:text-ki-muted py-3 transition-colors resize-none"
                placeholder="Tell us about your interest"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <button
                type="submit"
                disabled={submitting}
                data-testid={HOME.contactSubmit}
                className="inline-flex items-center justify-center border border-ki-gold text-ki-gold hover:bg-ki-gold hover:text-ki-bg disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-ki-gold px-10 py-4 text-xs uppercase tracking-[0.28em] transition-colors duration-300"
              >
                {submitting ? "Sending…" : "Send Inquiry"}
              </button>
              {submitted && (
                <span data-testid={HOME.contactSuccess} className="text-sm text-ki-gold/90">
                  Thank you — your inquiry has been received.
                </span>
              )}
            </div>
          </form>
        </div>

        <aside className="lg:col-span-5 lg:border-l lg:border-ki-border lg:pl-16">
          <div className="overline text-ki-red/90" style={{ color: "#c47373" }}>
            Newsletter
          </div>
          <h3 className="mt-4 font-serif text-3xl sm:text-4xl tracking-tight text-ki-fg">
            The Archive Notes
          </h3>
          <p className="mt-5 text-sm text-ki-fg/75 leading-relaxed max-w-sm">
            Occasional letters from the studio. New work, moving image excerpts, exhibitions and
            limited edition releases.
          </p>

          <form
            data-testid={HOME.newsletterForm}
            onSubmit={submitNewsletter}
            className="mt-10 flex flex-col gap-4"
            noValidate
          >
            <label htmlFor="ki-newsletter" className="text-[10px] uppercase tracking-[0.28em] text-ki-muted">
              Email
            </label>
            <input
              id="ki-newsletter"
              type="email"
              required
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              data-testid={HOME.newsletterEmail}
              className="w-full bg-transparent border-b border-ki-border focus:border-[#8B1C1C] outline-none text-ki-fg placeholder:text-ki-muted py-3 transition-colors"
              placeholder="you@studio.com"
            />
            <button
              type="submit"
              disabled={newsletterSubmitting}
              data-testid={HOME.newsletterSubmit}
              className="mt-2 inline-flex self-start items-center justify-center border border-[#8B1C1C] text-[#d97a7a] hover:bg-[#8B1C1C] hover:text-white disabled:opacity-50 px-8 py-4 text-xs uppercase tracking-[0.28em] transition-colors duration-300"
            >
              {newsletterSubmitting ? "Subscribing…" : "Subscribe"}
            </button>
            {newsletterSubmitted && (
              <span data-testid={HOME.newsletterSuccess} className="text-sm text-ki-gold/90">
                Thank you — you are subscribed.
              </span>
            )}
          </form>

          <div className="mt-14 hairline" />
          <div className="mt-10 grid grid-cols-2 gap-8">
            <div>
              <div className="overline">Email</div>
              <p className="mt-3 text-sm text-ki-fg/80">studio@kobiisrael.com</p>
              <p className="mt-1 text-xs text-ki-muted">Address to be confirmed by artist.</p>
            </div>
            <div>
              <div className="overline">Social</div>
              <p className="mt-3 text-sm text-ki-fg/80">Instagram · Vimeo</p>
              <p className="mt-1 text-xs text-ki-muted">Handles to be confirmed by artist.</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
