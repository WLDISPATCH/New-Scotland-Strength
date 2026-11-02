import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";
import contactPhoto from "../assets/photos/optimized/contact-yk.jpg";
import CTASection from "../components/CTASection";
import Label from "../components/Label";
import PageHero from "../components/PageHero";
import PageMeta from "../components/PageMeta";
import { business, socialLinks, web3formsKey } from "../content/siteData";

const nextSteps = [
  { title: "Send the form", text: "Your goals, schedule, training history, and anything Josh should know." },
  { title: "Josh replies", text: "A personal follow-up within 48 hours." },
  { title: "The consultation", text: "A conversation about what has worked, what has not, and the plan that fits." },
];

export default function ContactPage() {
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

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

      <PageHero
        label="Contact"
        kicker="Enter here"
        title="Book a Personal Trainer in Halifax, NS"
        lede={<p>Use this page to start the conversation and give me enough context to respond properly.</p>}
        aside={
          <div className="border-2 border-iron">
            <p className="mono flex justify-between bg-iron px-4 py-2 text-chalk">
              <span>What happens next</span>
              <span className="text-brand-light">3 steps</span>
            </p>
            <ol>
              {nextSteps.map((step, i) => (
                <li key={step.title} className="grid grid-cols-[3rem_1fr] gap-3 border-b border-line px-4 py-4 last:border-0">
                  <span className="mono pt-1 text-brand">{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="heading block text-lg uppercase">{step.title}</span>
                    <span className="mt-1 block leading-relaxed text-steel">{step.text}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        }
      />

      <section className="border-t-2 border-iron bg-chalk-2">
        <div className="wrap grid gap-12 py-16 lg:grid-cols-12 lg:gap-8 lg:py-24">
          <div className="lg:col-span-7">
            {isSent ? (
              <div role="status" className="border-2 border-iron bg-chalk">
                <p className="mono bg-brand px-5 py-2 text-white">Entry received</p>
                <div className="p-6 sm:p-10">
                  <CheckCircle2 className="h-10 w-10 text-brand" aria-hidden="true" />
                  <h2 className="display mt-6 text-[clamp(2rem,8vw,3.5rem)]">Inquiry sent.</h2>
                  <p className="mt-4 max-w-md text-lg leading-relaxed text-steel">
                    Thanks for reaching out. I will review your message and follow up within 48 hours.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="border-2 border-iron bg-chalk" aria-labelledby="entry-form-title">
                <div className="flex flex-wrap items-center justify-between gap-2 bg-iron px-5 py-3 text-chalk">
                  <h2 id="entry-form-title" className="heading text-lg uppercase">
                    Entry form
                  </h2>
                  <p className="mono text-steel-light">
                    <span className="text-brand-light">*</span> Required
                  </p>
                </div>
                <div className="p-5 sm:p-8">
                  {/* Honeypot: hidden from real users, traps spam bots */}
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

                  <fieldset>
                    <legend className="mono mb-4 text-brand">01 · About you</legend>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <label className="field-label">
                        <span className="font-semibold">
                          First name <span className="text-brand" aria-hidden="true">*</span>
                        </span>
                        <input className="field-input" type="text" name="firstName" placeholder="John" autoComplete="given-name" required aria-required="true" />
                      </label>
                      <label className="field-label">
                        <span className="font-semibold">
                          Last name <span className="text-brand" aria-hidden="true">*</span>
                        </span>
                        <input className="field-input" type="text" name="lastName" placeholder="Smith" autoComplete="family-name" required aria-required="true" />
                      </label>
                      <label className="field-label">
                        <span className="font-semibold">
                          Email <span className="text-brand" aria-hidden="true">*</span>
                        </span>
                        <input className="field-input" type="email" name="email" placeholder="you@example.com" autoComplete="email" required aria-required="true" />
                      </label>
                      <label className="field-label">
                        <span className="font-semibold">Phone</span>
                        <input className="field-input" type="tel" name="phone" placeholder="(902) 555-0100" autoComplete="tel" />
                      </label>
                    </div>
                  </fieldset>

                  <div className="mt-10 border-t border-line" aria-hidden="true" />
                  <fieldset className="mt-8">
                    <legend className="mono mb-4 text-brand">02 · Your training</legend>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <label className="field-label">
                        <span className="font-semibold">Coaching interest</span>
                        <select className="field-input" name="service" defaultValue="1-on-1 Sessions">
                          <option>1-on-1 Sessions</option>
                          <option>Online Training + Meal Plan</option>
                          <option>Custom Program</option>
                          <option>Meal Plan</option>
                          <option>Not sure yet</option>
                        </select>
                      </label>
                      <label className="field-label">
                        <span className="font-semibold">Training experience</span>
                        <select className="field-input" name="experience" defaultValue="Brand new">
                          <option>Brand new</option>
                          <option>Some experience</option>
                          <option>Training consistently</option>
                          <option>Returning after a break</option>
                        </select>
                      </label>
                    </div>
                    <label className="field-label mt-5">
                      <span className="font-semibold">
                        Primary goal <span className="text-brand" aria-hidden="true">*</span>
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
                    <label className="field-label mt-5">
                      <span className="font-semibold">
                        Tell me about your current situation <span className="text-brand" aria-hidden="true">*</span>
                      </span>
                      <textarea
                        className="field-input min-h-40 resize-y"
                        name="message"
                        placeholder="Share your goals, schedule, previous training history, injuries, or anything else that would help shape the consultation."
                        required
                        aria-required="true"
                      />
                    </label>
                  </fieldset>

                  <div className="mt-8 flex flex-col gap-4 border-t-2 border-iron pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-xs leading-relaxed text-steel">I will follow up within 48 hours.</p>
                    <button type="submit" className="btn btn-brand" disabled={isSending}>
                      {isSending ? "Sending…" : "Send inquiry"}
                      {isSending ? null : <ArrowRight className="arrow h-4 w-4" aria-hidden="true" />}
                    </button>
                  </div>
                  {errorMsg && (
                    <p role="alert" className="mt-4 border-l-4 border-[#a32020] pl-4 leading-relaxed text-[#a32020]">
                      {errorMsg}
                    </p>
                  )}
                </div>
              </form>
            )}
          </div>

          <div className="lg:col-span-5 lg:pl-4 xl:pl-10">
            <Label className="text-brand">Direct line</Label>
            <dl className="mt-4 border-t-2 border-iron">
              <div className="border-b border-line py-4">
                <dt className="mono text-steel">Email</dt>
                <dd className="mt-1">
                  <a href={`mailto:${business.email}`} className="text-link break-all text-lg">
                    {business.email}
                  </a>
                </dd>
              </div>
              <div className="border-b border-line py-4">
                <dt className="mono text-steel">Location</dt>
                <dd className="mt-1 text-lg font-semibold">
                  {business.city}, {business.region}, {business.country}
                </dd>
                <dd className="mt-1 leading-relaxed text-steel">Herring Cove studio · Burnside · North End · Online anywhere</dd>
              </div>
              <div className="border-b border-line py-4">
                <dt className="mono text-steel">Follow</dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {socialLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="border-2 border-iron px-3 py-2 font-semibold transition-colors hover:bg-iron hover:text-chalk"
                    >
                      {item.label}
                    </a>
                  ))}
                </dd>
              </div>
            </dl>
            <img
              src={contactPhoto}
              alt="Josh Dunbar carrying a yoke during competition"
              loading="lazy"
              className="mt-8 hidden aspect-[4/5] w-full object-cover object-top lg:block"
            />
          </div>
        </div>
      </section>

      <CTASection
        label="Not ready yet?"
        title="Review the programs first."
        description="You can also review the services first, then come back once you know what kind of support you want."
        primaryLabel="View services"
        primaryTo="/services/"
        secondaryLabel="See results"
        secondaryTo="/results/"
      />
    </>
  );
}
