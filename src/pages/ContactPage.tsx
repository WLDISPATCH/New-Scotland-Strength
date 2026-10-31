import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";
import { joshPhotos, shuffled } from "../assets/photoLibrary";
import CTASection from "../components/CTASection";
import PageMeta from "../components/PageMeta";
import Section from "../components/Section";
import { business, socialLinks, web3formsKey } from "../content/siteData";

export default function ContactPage() {
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [[photo]] = useState(() => shuffled(joshPhotos));

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMsg("");
    setIsSending(true);

    const form = event.currentTarget;
    const data = new FormData(form);

    const fullName = [data.get("firstName"), data.get("lastName")]
      .map((v) => (v ?? "").toString().trim())
      .filter(Boolean)
      .join(" ");

    // Web3Forms fields: access_key plus the form data. subject/from_name/replyto
    // control how the notification email looks in the business inbox.
    data.append("access_key", web3formsKey);
    data.append("subject", `New training inquiry${fullName ? ` from ${fullName}` : ""}`);
    data.append("from_name", "New Scotland Strength Website");
    const replyTo = (data.get("email") ?? "").toString().trim();
    if (replyTo) data.append("replyto", replyTo);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.message || `Request failed (${response.status})`);
      }
      setIsSent(true);
    } catch {
      setErrorMsg(
        `Something went wrong sending your message. Please email us directly at ${business.email}.`,
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <PageMeta path="/contact/" />

      {/* BreadcrumbList schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://newscotlandstrength.ca/" },
              { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://newscotlandstrength.ca/contact/" }
            ]
          })
        }}
      />

      {/* LocalBusiness NAP schema for contact page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://newscotlandstrength.ca/#business",
            "name": "New Scotland Strength",
            "url": "https://newscotlandstrength.ca/",
            "email": "newscotlandstrength@gmail.com",
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
              { "@type": "City", "name": "Sackville" },
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
        titleAs="h1"
        title="Book a Personal Trainer in Halifax, NS"
        description="Use this page to start the conversation and give me enough context to respond properly."
        spacing="page"
      >
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="order-2 lg:order-1">
            <h2 className="font-[family-name:var(--font-display)] text-[1.75rem] font-bold">Contact details</h2>
            <dl className="mt-5 border-t border-[var(--color-line-strong)]">
              <div className="flex flex-col gap-1 border-b border-[var(--color-line-strong)] py-4 sm:flex-row sm:gap-6">
                <dt className="w-24 shrink-0 text-[0.9375rem] text-[var(--color-text-subtle)]">Location</dt>
                <dd className="font-medium">
                  {business.city}, {business.region}, {business.country}
                </dd>
              </div>
              <div className="flex flex-col gap-1 border-b border-[var(--color-line-strong)] py-4 sm:flex-row sm:gap-6">
                <dt className="w-24 shrink-0 text-[0.9375rem] text-[var(--color-text-subtle)]">Email</dt>
                <dd>
                  <a href={`mailto:${business.email}`} className="text-link break-all font-medium">
                    {business.email}
                  </a>
                </dd>
              </div>
              <div className="flex flex-col gap-1 border-b border-[var(--color-line-strong)] py-4 sm:flex-row sm:gap-6">
                <dt className="w-24 shrink-0 text-[0.9375rem] text-[var(--color-text-subtle)]">Social</dt>
                <dd className="flex flex-wrap gap-x-5 gap-y-2">
                  {socialLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium text-[var(--color-ink)] underline decoration-[var(--color-line-strong)] underline-offset-4 transition-colors hover:text-[var(--color-accent-strong)] hover:decoration-[var(--color-accent)]"
                    >
                      {item.label}
                    </a>
                  ))}
                </dd>
              </div>
            </dl>

            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="photo mt-10 hidden aspect-[4/5] object-[center_30%] lg:block"
            />
          </div>

          {isSent ? (
            <div
              role="status"
              className="order-1 flex flex-col items-start justify-center gap-5 self-start rounded-md border border-[var(--color-line-strong)] bg-[var(--color-surface)] p-8 sm:p-10 lg:order-2"
            >
              <CheckCircle2 className="h-9 w-9 text-[var(--color-accent-strong)]" aria-hidden="true" />
              <div>
                <h2 className="font-[family-name:var(--font-display)] text-[2rem] font-bold">Inquiry sent</h2>
                <p className="mt-2 max-w-sm leading-relaxed text-[var(--color-text-muted)]">
                  Thanks for reaching out. I will review your message and follow up within 48 hours.
                </p>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="order-1 self-start rounded-md border border-[var(--color-line-strong)] bg-[var(--color-surface)] p-5 sm:p-8 lg:order-2"
            >
              {/* Honeypot: hidden from real users, traps spam bots */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="field-label">
                  <span>
                    First name <span className="text-[var(--color-accent-strong)]" aria-hidden="true">*</span>
                  </span>
                  <input
                    className="field-input"
                    type="text"
                    name="firstName"
                    placeholder="John"
                    autoComplete="given-name"
                    required
                    aria-required="true"
                  />
                </label>
                <label className="field-label">
                  <span>
                    Last name <span className="text-[var(--color-accent-strong)]" aria-hidden="true">*</span>
                  </span>
                  <input
                    className="field-input"
                    type="text"
                    name="lastName"
                    placeholder="Smith"
                    autoComplete="family-name"
                    required
                    aria-required="true"
                  />
                </label>
              </div>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <label className="field-label">
                  <span>
                    Email <span className="text-[var(--color-accent-strong)]" aria-hidden="true">*</span>
                  </span>
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
                  <span>
                    Primary goal <span className="text-[var(--color-accent-strong)]" aria-hidden="true">*</span>
                  </span>
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
                  <span>
                    Tell me about your current situation <span className="text-[var(--color-accent-strong)]" aria-hidden="true">*</span>
                  </span>
                  <textarea
                    className="field-input min-h-36 resize-y"
                    name="message"
                    placeholder="Share your goals, schedule, previous training history, injuries, or anything else that would help shape the consultation."
                    required
                    aria-required="true"
                  />
                </label>
              </div>
              <div className="mt-7 flex flex-col gap-4 border-t border-[var(--color-line)] pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[0.9375rem] leading-relaxed text-[var(--color-text-muted)]">
                  Fields marked <span className="text-[var(--color-accent-strong)]">*</span> are required. I will follow up within 48 hours.
                </p>
                <button type="submit" className="btn-primary justify-center" disabled={isSending}>
                  {isSending ? "Sending…" : "Send Inquiry"}
                </button>
              </div>
              {errorMsg && (
                <p role="alert" className="mt-4 leading-relaxed text-[#a32020]">
                  {errorMsg}
                </p>
              )}
            </form>
          )}
        </div>
      </Section>

      <CTASection
        title="Prefer to review services before reaching out?"
        description="You can also review the services first, then come back once you know what kind of support you want."
        primaryLabel="View Services"
        primaryTo="/services/"
        secondaryLabel="See Results"
        secondaryTo="/results/"
      />
    </>
  );
}
