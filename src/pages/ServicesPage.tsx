import { ArrowRight, CheckCircle2, Minus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { shuffled, widePhotos } from "../assets/photoLibrary";
import CTASection from "../components/CTASection";
import PageMeta from "../components/PageMeta";
import Section from "../components/Section";
import { processSteps, services } from "../content/siteData";

export default function ServicesPage() {
  const [[banner]] = useState(() => shuffled(widePhotos));

  return (
    <>
      <PageMeta path="/services/" />

      {/* BreadcrumbList schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://newscotlandstrength.ca/" },
              { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://newscotlandstrength.ca/services/" }
            ]
          })
        }}
      />

      {/* Service ItemList schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Personal Training Services — New Scotland Strength",
            "description": "Personal training and strength coaching services available in Halifax, NS and online.",
            "url": "https://newscotlandstrength.ca/services/",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@type": "Service",
                  "name": "Online Training + Meal Plan",
                  "description": "Monthly online coaching with a custom training plan, meal plan support, and regular check-ins. Available for clients in Halifax and anywhere online.",
                  "provider": { "@id": "https://newscotlandstrength.ca/#business" },
                  "areaServed": "Worldwide",
                  "url": "https://newscotlandstrength.ca/services/"
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@type": "Service",
                  "name": "1-on-1 Personal Training Sessions",
                  "description": "In-person personal training sessions in Halifax, NS. Hands-on coaching, form correction, and session-by-session progression.",
                  "provider": { "@id": "https://newscotlandstrength.ca/#business" },
                  "areaServed": "Halifax, Nova Scotia",
                  "url": "https://newscotlandstrength.ca/services/"
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@type": "Service",
                  "name": "Custom Training Program",
                  "description": "Standalone personalized strength training program. Built around your goals, schedule, and training history.",
                  "provider": { "@id": "https://newscotlandstrength.ca/#business" },
                  "areaServed": "Worldwide",
                  "url": "https://newscotlandstrength.ca/services/"
                }
              },
              {
                "@type": "ListItem",
                "position": 4,
                "item": {
                  "@type": "Service",
                  "name": "Meal Plan",
                  "description": "Standalone custom nutrition and meal plan for clients who want dietary structure without a full coaching package.",
                  "provider": { "@id": "https://newscotlandstrength.ca/#business" },
                  "areaServed": "Worldwide",
                  "url": "https://newscotlandstrength.ca/services/"
                }
              }
            ]
          })
        }}
      />

      <Section
        eyebrow="Services"
        titleAs="h1"
        title="Personal Training Services in Halifax, NS"
        description="Here are the current offers, what they include, and who they suit best."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="panel flex h-full flex-col p-5 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
                {service.title}
              </p>
              <p className="mt-3 text-xl font-semibold text-[var(--color-ink)] sm:mt-4 sm:text-2xl">{service.summary}</p>
              <ul className="mt-6 space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-[var(--color-text-muted)]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent)]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="panel mt-6 overflow-hidden p-3">
          <img
            src={banner.src}
            alt={banner.alt}
            loading="lazy"
            className="h-[240px] w-full rounded-[1.75rem] object-cover sm:h-[420px]"
          />
        </div>
      </Section>

      <Section eyebrow="Pricing">
        <div className="panel flex flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-3xl">
              Pricing built around you
            </h2>
            <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)] sm:text-base">
              Rates depend on the type of coaching and how often you train. Book a consultation and Josh will walk
              you through the options that fit your goals and schedule.
            </p>
          </div>
          <Link to="/contact/" className="btn-primary shrink-0 justify-center">
            Book a Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="Compare"
        title="Which option fits your situation?"
        description="A quick side-by-side to help you choose the right starting point."
        className="border-y border-[var(--color-line)] bg-[rgba(255,250,242,0.26)]"
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-sm">
            <thead>
              <tr>
                <th className="pb-4 pr-4 text-left text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-text-subtle)]">
                  Feature
                </th>
                {["Online + Meal Plan", "Custom Program", "Meal Plan", "1-on-1 Sessions"].map((col) => (
                  <th key={col} className="pb-4 px-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-line)]">
              {[
                { feature: "Custom training plan", cols: [true, true, false, true] },
                { feature: "Nutrition / meal plan", cols: [true, false, true, false] },
                { feature: "Ongoing check-ins", cols: [true, false, false, true] },
                { feature: "In-person coaching", cols: [false, false, false, true] },
                { feature: "Train on your schedule", cols: [true, true, false, false] },
              ].map(({ feature, cols }) => (
                <tr key={feature}>
                  <td className="py-3 pr-4 font-medium text-[var(--color-ink-soft)]">{feature}</td>
                  {cols.map((yes, i) => (
                    <td key={i} className="py-3 px-3 text-center">
                      {yes ? (
                        <CheckCircle2 className="mx-auto h-4 w-4 text-[var(--color-accent)]" aria-label="Included" />
                      ) : (
                        <Minus className="mx-auto h-4 w-4 text-[var(--color-text-subtle)]" aria-label="Not included" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        eyebrow="Onboarding"
        title="What happens after you reach out"
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => (
            <article key={step} className="panel p-5 sm:p-6">
              <p className="text-sm font-semibold text-[var(--color-accent)]">0{index + 1}</p>
              <p className="mt-4 text-lg font-semibold text-[var(--color-ink)]">{step}</p>
            </article>
          ))}
        </div>
        <Link to="/contact/" className="btn-primary mt-8 justify-center sm:justify-start">
          Request a Consultation
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Section>

      <CTASection
        title="Not sure which option fits?"
        description="Send a message with your goals, schedule, and training background, and Josh can point you in the right direction."
        secondaryLabel="Read About Josh"
        secondaryTo="/about/"
      />
    </>
  );
}
