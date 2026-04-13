import { CheckCircle2, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";
import { brandPhotos } from "../assets/photoLibrary";
import CTASection from "../components/CTASection";
import PageMeta from "../components/PageMeta";
import Section from "../components/Section";
import { business, socialLinks } from "../content/siteData";

export default function ContactPage() {
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);
    // Simulate a short send delay; swap for a real fetch() when a backend is wired up
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
    }, 800);
  };

  return (
    <>
      <PageMeta
        title="Book a Personal Trainer in Halifax | New Scotland Strength"
        description="Book a consultation with New Scotland Strength. In-person personal training and strength coaching in Halifax, Nova Scotia. Online coaching available everywhere."
        path="/contact"
      />

      {/* LocalBusiness NAP schema for contact page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "New Scotland Strength",
            "url": "https://www.newscotlandstrength.com/",
            "email": "newscotlandstrength@gmail.com",
            "telephone": "(902) 000-0000",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Halifax",
              "addressRegion": "NS",
              "addressCountry": "CA"
            },
            "areaServed": [
              { "@type": "City", "name": "Halifax" },
              { "@type": "City", "name": "Dartmouth" },
              { "@type": "City", "name": "Bedford" },
              { "@type": "AdministrativeArea", "name": "Halifax Regional Municipality" }
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer support",
              "email": "newscotlandstrength@gmail.com",
              "availableLanguage": "English"
            }
          })
        }}
      />

      <Section
        eyebrow="Contact"
        title="Book a consultation and outline what you want from coaching"
        description="Use this page to start the conversation and give Josh enough context to respond properly."
      >
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="order-2 space-y-6 lg:order-1">
            <div className="panel p-5 sm:p-7">
              <h2 className="text-2xl font-semibold text-[var(--color-ink)]">Contact details</h2>
              <div className="mt-5 space-y-4 text-sm text-[var(--color-text-muted)] sm:mt-6 sm:space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent)]" />
                  <span>
                    {business.city}, {business.region}, {business.country}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent)]" />
                  <a href={`mailto:${business.email}`} className="transition hover:text-[var(--color-ink)]">
                    {business.email}
                  </a>
                </div>
              </div>
              <div className="mt-6 border-t border-[var(--color-line)] pt-5">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-text-subtle)]">
                  Social
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {socialLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-[var(--color-line)] bg-[rgba(255,250,242,0.74)] px-4 py-2 text-sm text-[var(--color-text-muted)] transition hover:border-[rgba(123,69,25,0.24)] hover:text-[var(--color-ink)]"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="hidden panel overflow-hidden p-3 lg:block">
              <img
                src={brandPhotos.contactPortrait}
                alt="Josh Dunbar carrying a yoke during competition"
                loading="lazy"
                className="h-full min-h-[360px] w-full rounded-[1.75rem] object-cover"
              />
            </div>
          </div>

          {isSent ? (
            <div className="order-1 panel flex flex-col items-center justify-center gap-5 p-8 text-center lg:order-2">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-accent)]/10">
                <CheckCircle2 className="h-8 w-8 text-[var(--color-accent)]" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-[var(--color-ink)]">Inquiry sent</h2>
                <p className="mt-3 max-w-sm text-sm leading-7 text-[var(--color-text-muted)]">
                  Thanks for reaching out. Josh will review your message and follow up within 24 hours.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="order-1 panel p-5 sm:p-8 lg:order-2">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="field-label">
                  First name <span className="text-[var(--color-accent)]">*</span>
                  <input
                    className="field-input"
                    type="text"
                    name="firstName"
                    placeholder="Josh"
                    autoComplete="given-name"
                    required
                    aria-required="true"
                  />
                </label>
                <label className="field-label">
                  Last name <span className="text-[var(--color-accent)]">*</span>
                  <input
                    className="field-input"
                    type="text"
                    name="lastName"
                    placeholder="Dunbar"
                    autoComplete="family-name"
                    required
                    aria-required="true"
                  />
                </label>
              </div>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <label className="field-label">
                  Email <span className="text-[var(--color-accent)]">*</span>
                  <input
                    className="field-input"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    aria-required="true"
                  />
                </label>
                <label className="field-label">
                  Phone
                  <input
                    className="field-input"
                    type="tel"
                    name="phone"
                    placeholder="(902) 555-0100"
                    autoComplete="tel"
                  />
                </label>
              </div>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <label className="field-label">
                  Coaching interest
                  <select className="field-input" name="service" defaultValue="1-on-1 Sessions">
                    <option>1-on-1 Sessions</option>
                    <option>Online Training + Meal Plan</option>
                    <option>Custom Program</option>
                    <option>Meal Plan</option>
                    <option>Not sure yet</option>
                  </select>
                </label>
                <label className="field-label">
                  Training experience
                  <select className="field-input" name="experience" defaultValue="Brand new">
                    <option>Brand new</option>
                    <option>Some experience</option>
                    <option>Training consistently</option>
                    <option>Returning after a break</option>
                  </select>
                </label>
              </div>
              <div className="mt-5">
                <label className="field-label">
                  Primary goal <span className="text-[var(--color-accent)]">*</span>
                  <input
                    className="field-input"
                    type="text"
                    name="goal"
                    placeholder="Build strength, lose body fat, improve consistency"
                    required
                    aria-required="true"
                  />
                </label>
              </div>
              <div className="mt-5">
                <label className="field-label">
                  Tell Josh about your current situation <span className="text-[var(--color-accent)]">*</span>
                  <textarea
                    className="field-input min-h-36 resize-y"
                    name="message"
                    placeholder="Share your goals, schedule, previous training history, injuries, or anything else that would help shape the consultation."
                    required
                    aria-required="true"
                  />
                </label>
              </div>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm leading-6 text-[var(--color-text-subtle)]">
                  Fields marked <span className="text-[var(--color-accent)]">*</span> are required. Josh will follow up within 24 hours.
                </p>
                <button type="submit" className="btn-primary justify-center" disabled={isSending}>
                  {isSending ? "Sending…" : "Send Inquiry"}
                </button>
              </div>
            </form>
          )}
        </div>
      </Section>

      <CTASection
        title="Prefer to review services before reaching out?"
        description="You can also review the services first, then come back once you know what kind of support you want."
        primaryLabel="View Services"
        primaryTo="/services"
        secondaryLabel="See Results"
        secondaryTo="/results"
      />
    </>
  );
}
