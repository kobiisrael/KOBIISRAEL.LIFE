import { forwardRef, useImperativeHandle, useState } from "react";
import { toast } from "sonner";
import { submitInquiry } from "@/lib/api";
import { INQUIRY_TYPE_OPTIONS } from "@/data/site";
import { PRINTS } from "@/constants/testIds";

const CollectorInquiryForm = forwardRef(function CollectorInquiryForm(_, ref) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    artwork: "",
    preferred_size: "",
    budget_range: "",
    inquiry_type: "collector",
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
    setArtworkInterest(artwork, series) {
      setForm((s) => ({
        ...s,
        artwork: artwork || s.artwork,
        message: series
          ? `Inquiring about ${artwork} (${series}). ${s.message}`.trim()
          : s.message,
      }));
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
        subject: form.artwork || "Print availability inquiry",
        message: form.message,
        project_interest: form.artwork || null,
        phone: form.phone || null,
        country: form.country || null,
        preferred_size: form.preferred_size || null,
        budget_range: form.budget_range || null,
        consent: form.consent,
      });
      setSubmitted(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        country: "",
        artwork: "",
        preferred_size: "",
        budget_range: "",
        inquiry_type: "collector",
        message: "",
        consent: false,
      });
      toast.success("Inquiry sent. Thank you.");
    } catch (err) {
      const msg = err?.response?.data?.detail || "Could not send. Please try again.";
      toast.error(typeof msg === "string" ? msg : "Could not send. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputCls =
    "w-full bg-transparent border-b border-ki-border focus:border-ki-gold outline-none text-ki-fg placeholder:text-ki-muted py-3 transition-colors";
  const labelCls = "text-[10px] uppercase tracking-[0.28em] text-ki-muted";

  return (
    <form
      data-testid={PRINTS.inquiryForm}
      onSubmit={submit}
      noValidate
      className="flex flex-col gap-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="flex flex-col gap-2">
          <label htmlFor="ki-prints-name" className={labelCls}>Full name</label>
          <input id="ki-prints-name" type="text" required value={form.name} onChange={update("name")}
            data-testid={PRINTS.inquiryName} className={inputCls} placeholder="Your full name" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="ki-prints-email" className={labelCls}>Email address</label>
          <input id="ki-prints-email" type="email" required value={form.email} onChange={update("email")}
            data-testid={PRINTS.inquiryEmail} className={inputCls} placeholder="you@studio.com" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="ki-prints-phone" className={labelCls}>Phone number <span className="text-ki-muted/60">(optional)</span></label>
          <input id="ki-prints-phone" type="tel" value={form.phone} onChange={update("phone")}
            data-testid={PRINTS.inquiryPhone} className={inputCls} placeholder="+44 20 7946 0000" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="ki-prints-country" className={labelCls}>Country</label>
          <input id="ki-prints-country" type="text" value={form.country} onChange={update("country")}
            data-testid={PRINTS.inquiryCountry} className={inputCls} placeholder="Country" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="flex flex-col gap-2">
          <label htmlFor="ki-prints-artwork" className={labelCls}>Artwork or series of interest</label>
          <input id="ki-prints-artwork" type="text" value={form.artwork} onChange={update("artwork")}
            data-testid={PRINTS.inquiryArtwork} className={inputCls} placeholder="e.g. Cuba, Love Story" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="ki-prints-size" className={labelCls}>Preferred size <span className="text-ki-muted/60">(if known)</span></label>
          <input id="ki-prints-size" type="text" value={form.preferred_size} onChange={update("preferred_size")}
            data-testid={PRINTS.inquirySize} className={inputCls} placeholder="e.g. 60 × 80 cm" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="ki-prints-budget" className={labelCls}>Budget range <span className="text-ki-muted/60">(optional)</span></label>
          <input id="ki-prints-budget" type="text" value={form.budget_range} onChange={update("budget_range")}
            data-testid={PRINTS.inquiryBudget} className={inputCls} placeholder="e.g. £3,000 – £8,000" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="ki-prints-type" className={labelCls}>Interest type</label>
          <select id="ki-prints-type" value={form.inquiry_type} onChange={update("inquiry_type")}
            data-testid={PRINTS.inquiryType}
            className={`${inputCls} appearance-none`}
          >
            {INQUIRY_TYPE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-ki-bg text-ki-fg">
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="ki-prints-message" className={labelCls}>Message</label>
        <textarea id="ki-prints-message" required rows={5} value={form.message} onChange={update("message")}
          data-testid={PRINTS.inquiryMessage}
          className={`${inputCls} resize-none`} placeholder="Please share any context relevant to your inquiry" />
      </div>

      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={form.consent}
          onChange={update("consent")}
          data-testid={PRINTS.inquiryConsent}
          className="mt-1 w-4 h-4 border border-ki-border bg-transparent accent-[#C19B54]"
          required
        />
        <span className="text-xs text-ki-fg/75 leading-relaxed">
          I consent to the studio replying to this inquiry by email regarding print availability,
          edition details and pricing. My information will not be shared with third parties.
        </span>
      </label>

      <div className="flex flex-col sm:flex-row sm:items-center gap-6">
        <button
          type="submit"
          disabled={submitting}
          data-testid={PRINTS.inquirySubmit}
          className="inline-flex items-center justify-center border border-ki-gold text-ki-gold hover:bg-ki-gold hover:text-ki-bg disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-ki-gold px-10 py-4 text-xs uppercase tracking-[0.28em] transition-colors duration-300"
        >
          {submitting ? "Sending…" : "Send Collector Inquiry"}
        </button>
        {submitted && (
          <span data-testid={PRINTS.inquirySuccess} className="text-sm text-ki-gold/90 max-w-md">
            Thank you for your inquiry. Print availability, edition details and pricing will be
            confirmed by the artist or representative.
          </span>
        )}
      </div>
    </form>
  );
});

export default CollectorInquiryForm;
