import { ArrowRight, Check, Minus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { shuffled, widePhotos } from "../assets/photoLibrary";
import CTASection from "../components/CTASection";
import PageMeta from "../components/PageMeta";
import ProcessSteps from "../components/ProcessSteps";
import Section from "../components/Section";
import ServiceList from "../components/ServiceList";

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
        spacing="page"
      >
        <ServiceList details="always" />
        <img
          src={banner.src}
          alt={banner.alt}
          loading="lazy"
          className="photo mt-12 aspect-[4/3] sm:aspect-[21/9] sm:mt-16"
        />
      </Section>

      <Section
        eyebrow="Compare"
        title="Which option fits your situation?"
        description="A quick side-by-side to help you choose the right starting point."
        tone="alt"
      >
        <div className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <caption className="sr-only">Features included in each coaching option</caption>
            <thead>
              <tr className="border-b-2 border-[var(--color-ink)]">
                <th scope="col" className="pb-3 pr-4 align-bottom text-[0.9375rem] font-medium text-[var(--color-text-subtle)]">
                  Included
                </th>
                {["Online + Meal Plan", "Custom Program", "Meal Plan", "1-on-1 Sessions"].map((col) => (
                  <th
                    key={col}
                    scope="col"
                    className="px-3 pb-3 text-center align-bottom font-[family-name:var(--font-display)] text-lg font-bold leading-tight"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-line-strong)]">
              {[
                { feature: "Custom training plan", cols: [true, true, false, true] },
                { feature: "Nutrition / meal plan", cols: [true, false, true, false] },
                { feature: "Ongoing check-ins", cols: [true, false, false, true] },
                { feature: "In-person coaching", cols: [false, false, false, true] },
                { feature: "Train on your schedule", cols: [true, true, false, false] },
              ].map(({ feature, cols }) => (
                <tr key={feature}>
                  <th scope="row" className="py-4 pr-4 font-medium text-[var(--color-ink-soft)]">
                    {feature}
                  </th>
                  {cols.map((yes, i) => (
                    <td key={i} className="px-3 py-4 text-center">
                      {yes ? (
                        <Check className="mx-auto h-5 w-5 text-[var(--color-accent-strong)]" strokeWidth={2.5} aria-label="Included" />
                      ) : (
                        <Minus className="mx-auto h-4 w-4 text-[var(--color-text-subtle)]/60" aria-label="Not included" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 border-y border-[var(--color-line-strong)] py-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16 lg:py-12">
          <div>
            <p className="eyebrow mb-3">Pricing</p>
            <h2 className="heading">Pricing built around you</h2>
          </div>
          <div className="lg:pt-8">
            <p className="max-w-2xl text-lg leading-relaxed text-[var(--color-text-muted)]">
              Rates depend on the type of coaching and how often you train. Book a consultation and Josh will walk
              you through the options that fit your goals and schedule.
            </p>
            <Link to="/contact/" className="btn-primary mt-6 justify-center">
              Book a Consultation
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="mt-16 sm:mt-20 lg:mt-24">
          <p className="eyebrow mb-3">Onboarding</p>
          <h2 className="heading mb-10 sm:mb-12">What happens after you reach out</h2>
          <ProcessSteps />
        </div>
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
