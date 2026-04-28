import { useState } from "react";
import { toTelHref } from "@/lib/phone";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, MapPin, Clock, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { dict, type Locale } from "@/lib/i18n";
import { supabase } from "@/integrations/supabase/client";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(50).optional().or(z.literal("")),
  subject: z.string().trim().min(1).max(200),
  message: z.string().trim().min(10).max(5000),
  consent: z.literal(true),
});

type FormValues = z.infer<typeof schema>;

const copy = {
  de: {
    eyebrow: "Kontakt",
    title: "Sprechen Sie mit uns.",
    intro:
      "Wir nehmen jede Anfrage persönlich entgegen. Vertraulich. In der Regel innerhalb eines Werktags.",
    detailsTitle: "Kanzlei",
    formTitle: "Nachricht senden",
    fields: {
      name: "Name",
      email: "E-Mail",
      phone: "Telefon (optional)",
      subject: "Betreff",
      message: "Ihre Nachricht",
      consent:
        "Ich willige ein, dass meine Angaben zur Bearbeitung meiner Anfrage verarbeitet werden. (Datenschutz)",
      submit: "Anfrage senden",
      sending: "Wird gesendet…",
    },
    success: "Vielen Dank — wir melden uns in Kürze bei Ihnen.",
    error: "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.",
    invalidConsent: "Bitte bestätigen Sie die Datenschutzhinweise.",
  },
  en: {
    eyebrow: "Contact",
    title: "Get in touch.",
    intro:
      "Every inquiry is received personally. Confidentially. Usually within one business day.",
    detailsTitle: "Office",
    formTitle: "Send a message",
    fields: {
      name: "Name",
      email: "Email",
      phone: "Phone (optional)",
      subject: "Subject",
      message: "Your message",
      consent: "I consent to my data being processed to handle my inquiry. (Privacy)",
      submit: "Send inquiry",
      sending: "Sending…",
    },
    success: "Thank you — we will be in touch shortly.",
    error: "Something went wrong. Please try again.",
    invalidConsent: "Please confirm the privacy notice.",
  },
} as const;

export function ContactPage({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const t = dict[locale];
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", subject: "", message: "" },
  });

  const onSubmit = async (values: FormValues) => {
    setSubmitting(true);
    try {
      const { error } = await supabase.from("contact_messages").insert({
        name: values.name,
        email: values.email,
        phone: values.phone || null,
        subject: values.subject,
        message: values.message,
        locale,
      });
      if (error) throw error;
      toast.success(c.success);
      reset();
    } catch (e) {
      console.error(e);
      toast.error(c.error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="container-editorial pt-20 md:pt-28">
        <p className="eyebrow">{c.eyebrow}</p>
        <h1 className="font-serif text-5xl md:text-6xl mt-4 max-w-3xl leading-tight">{c.title}</h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">{c.intro}</p>
      </section>

      <section className="container-editorial mt-20 grid gap-16 lg:grid-cols-[1fr_1.3fr]">
        {/* Details */}
        <aside className="space-y-10">
          <div>
            <p className="eyebrow">{c.detailsTitle}</p>
            <p className="font-serif text-3xl mt-3">{t.firmName}</p>
          </div>
          <ul className="space-y-6 text-sm">
            <li className="flex gap-4">
              <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" strokeWidth={1.5} />
              <div>
                {t.contact.address.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </div>
            </li>
            <li className="flex gap-4">
              <Phone className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" strokeWidth={1.5} />
              <div>
                <a href={toTelHref(t.contact.phone)} className="hover:text-accent block">
                  {t.contact.phone}
                </a>
                <span className="text-muted-foreground text-xs">
                  {locale === "de" ? "Notfall " : "Emergency "}
                  <a href={toTelHref(t.contact.emergency)} className="hover:text-accent">
                    {t.contact.emergency}
                  </a>
                </span>
              </div>
            </li>
            <li className="flex gap-4">
              <Mail className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" strokeWidth={1.5} />
              <a href={`mailto:${t.contact.email}`} className="hover:text-accent">
                {t.contact.email}
              </a>
            </li>
            <li className="flex gap-4">
              <Clock className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" strokeWidth={1.5} />
              <span>{t.contact.hours}</span>
            </li>
          </ul>

          <div className="aspect-[4/3] overflow-hidden border border-border">
            <iframe
              title="Alt-Moabit 110, Berlin"
              src="https://www.openstreetmap.org/export/embed.html?bbox=13.3380%2C52.5235%2C13.3500%2C52.5295&amp;layer=mapnik&amp;marker=52.5265,13.3440"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </aside>

        {/* Form */}
        <div>
          <p className="eyebrow">{c.formTitle}</p>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-6" noValidate>
            <div className="grid gap-6 md:grid-cols-2">
              <Field label={c.fields.name} error={errors.name?.message}>
                <input {...register("name")} className={inputCls} autoComplete="name" />
              </Field>
              <Field label={c.fields.email} error={errors.email?.message}>
                <input type="email" {...register("email")} className={inputCls} autoComplete="email" />
              </Field>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <Field label={c.fields.phone}>
                <input type="tel" {...register("phone")} className={inputCls} autoComplete="tel" />
              </Field>
              <Field label={c.fields.subject} error={errors.subject?.message}>
                <input {...register("subject")} className={inputCls} />
              </Field>
            </div>
            <Field label={c.fields.message} error={errors.message?.message}>
              <textarea {...register("message")} rows={7} className={`${inputCls} resize-none`} />
            </Field>

            <label className="flex gap-3 items-start text-xs text-muted-foreground cursor-pointer">
              <input
                type="checkbox"
                {...register("consent")}
                className="mt-1 h-4 w-4 accent-[var(--color-brass)] flex-shrink-0"
              />
              <span>{c.fields.consent}</span>
            </label>
            {errors.consent && (
              <p className="text-xs text-destructive -mt-3">{c.invalidConsent}</p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-3.5 text-sm hover:bg-accent transition-colors disabled:opacity-60"
            >
              {submitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> {c.fields.sending}
                </>
              ) : (
                c.fields.submit
              )}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

const inputCls =
  "w-full bg-transparent border-b border-input px-0 py-3 text-base text-foreground focus:border-accent focus:outline-none transition-colors";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="eyebrow block mb-1">{label}</span>
      {children}
      {error && <span className="text-xs text-destructive mt-1 block">{error}</span>}
    </label>
  );
}
