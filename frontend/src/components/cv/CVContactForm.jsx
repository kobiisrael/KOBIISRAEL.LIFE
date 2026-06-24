import { forwardRef, useImperativeHandle, useState } from "react";
import { toast } from "sonner";
import { submitInquiry } from "@/lib/api";
import { CV_CONTACT_TYPE_OPTIONS } from "@/data/site";
import { CV } from "@/constants/testIds";

const CVContactForm = forwardRef(function CVContactForm(_, ref) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    organisation: "",
    country: "",
    inquiry_type: "general",
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
        subject: form.organisation ? `Inquiry from ${form.organisation}` : "CV inquiry",
        message: form.message,
        country: form.country || null,
        consent: form.consent,
      });
      setSubmitted(true);
      setForm({
        name: "", email: "", organisation: "", country: "",
        inquiry_type: "general", message: "", consent: false,
      });
      toast.success("Inquiry sent. Thank you.");
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
    <form data-testid={CV.contactForm} onSubmit={submit} noValidate
      className="flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="flex flex-col gap-2">
          <label htmlFor="ki-cv-name" className={labelCls}>Full name</label>
          <input id="ki-cv-name" type="text" required value={form.name} onChange={update("name")}
            data-testid={CV.contactName} className={inputCls} placeholder="Your full name" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="ki-cv-email" className={labelCls}>Email address</label>
          <input id="ki-cv-email" type="email" required value={form.email} onChange={update("email")}
            data-testid={CV.contactEmail} className={inputCls} placeholder="you@studio.com" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="ki-cv-org" className={labelCls}>Organisation <span className="text-ki-muted/60">(optional)</span></label>
          <input id="ki-cv-org" type="text" value={form.organisation} onChange={update("organisation")}
            data-testid={CV.contactOrg} className={inputCls} placeholder="Institution, gallery, press" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="ki-cv-country" className={labelCls}>Country</label>
          <input id="ki-cv-country" type="text" value={form.country} onChange={update("country")}
            data-testid={CV.contactCountry} className={inputCls} placeholder="Country" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="ki-cv-type" className={labelCls}>Inquiry type</label>
        <select id="ki-cv-type" value={form.inquiry_type} onChange={update("inquiry_type")}
          data-testid={CV.contactType}
          className={`${inputCls} appearance-none`}>
          {CV_CONTACT_TYPE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-ki-bg text-ki-fg">
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="ki-cv-message" className={labelCls}>Message</label>
        <textarea id="ki-cv-message" required rows={5} value={form.message} onChange={update("message")}
          data-testid={CV.contactMessage}
          className={`${inputCls} resize-none`} placeholder="Please share any context relevant to your inquiry" />
      </div>

      <label className="flex items-start gap-3 cursor-pointer">
        <input type="checkbox" checked={form.consent} onChange={update("consent")}
          data-testid={CV.contactConsent} required
          className="mt-1 w-4 h-4 border border-ki-border bg-transparent accent-[#C19B54]" />
        <span className="text-xs text-ki-fg/75 leading-relaxed">
          I consent to the studio replying to this inquiry by email. My information will not be
          shared with third parties.
        </span>
      </label>

      <div className="flex flex-col sm:flex-row sm:items-center gap-6">
        <button type="submit" disabled={submitting}
          data-testid={CV.contactSubmit}
          className="inline-flex items-center justify-center border border-ki-gold text-ki-gold hover:bg-ki-gold hover:text-ki-bg disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-ki-gold px-10 py-4 text-xs uppercase tracking-[0.28em] transition-colors duration-300">
          {submitting ? "Sending…" : "Send Inquiry"}
        </button>
        {submitted && (
          <span data-testid={CV.contactSuccess} className="text-sm text-ki-gold/90 max-w-md">
            Thank you for your inquiry. Your message has been received and will be reviewed before
            reply.
          </span>
        )}
      </div>
    </form>
  );
});

export default CVContactForm;
