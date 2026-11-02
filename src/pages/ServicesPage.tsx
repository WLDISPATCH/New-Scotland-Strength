import { ArrowDown, ArrowRight, Check, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import studioPhoto from "../assets/photos/optimized/services-gym.jpg";
import CTASection from "../components/CTASection";
import Label from "../components/Label";
import PageHero from "../components/PageHero";
import PageMeta from "../components/PageMeta";
import ProcessSteps from "../components/ProcessSteps";
import SectionHead from "../components/SectionHead";
import { programs } from "../content/programs";

// Which program includes what. Column order follows `programs`:
// 1-on-1 Sessions, Online + Meal Plan, Custom Program, Meal Plan.
const compareRows: { feature: string; cols: boolean[] }[] = [
  { feature: "Custom training plan", cols: [true, true, true, false] },
  { feature: "Nutrition / meal plan", cols: [false, true, false, true] },
  { feature: "Ongoing check-ins", cols: [true, true, false, false] },
  { feature: "In-person coaching", cols: [true, false, false, false] },
  { feature: "Train on your schedule", cols: [false, true, true, false] },
];

export default function ServicesPage() {
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

      <PageHero
        label="The programs"
        kicker="Pick your event"
        title="Personal Training Services in Halifax, NS"
        lede={<p>Here are the current offers, what they include, and who they suit best.</p>}
        aside={
          <nav aria-label="Programs on this page" className="border-2 border-iron">
            <p className="mono flex justify-between bg-iron px-4 py-2 text-chalk">
              <span>Heat sheet</span>
              <span className="text-brand-light">{programs.length} events</span>
            </p>
            <ol>
              {programs.map((p) => (
                <li key={p.event} className="border-b border-line last:border-0">
                  <a
                    href={`#event-${p.event}`}
                    className="group grid grid-cols-[3rem_1fr_auto] items-center gap-3 px-4 py-4 transition-colors hover:bg-chalk-2"
                  >
                    <span className="mono text-brand">{p.event}</span>
                    <span>
                      <span className="heading block text-lg uppercase">{p.name}</span>
                      <span className="mono mt-1 block text-steel">{p.specs[0][1]}</span>
                    </span>
                    <ArrowDown className="h-5 w-5 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        }
      />

      {/* One full-width row per program */}
      <div className="border-t-2 border-iron">
        {programs.map((p) => {
          const f = p.featured;
          return (
            <section
              key={p.event}
              id={`event-${p.event}`}
              aria-labelledby={`event-${p.event}-title`}
              className={`scroll-mt-20 border-b-2 border-iron ${f ? "on-brand bg-brand text-white" : ""}`}
            >
              <div className="wrap grid gap-10 py-14 lg:grid-cols-12 lg:gap-8 lg:py-20">
                <div className="lg:col-span-4">
                  <p className={`mono ${f ? "text-white/80" : "text-steel"}`}>Event</p>
                  <p className={`display text-[5rem] sm:text-[7rem] ${f ? "text-white" : "text-brand"}`}>{p.event}</p>
                  <h2 id={`event-${p.event}-title`} className="heading mt-4 text-[2rem] uppercase leading-[0.95] sm:text-[2.5rem]">
                    {p.name}
                  </h2>
                </div>
                <div className="lg:col-span-5 lg:pt-8">
                  <p className="text-xl font-medium leading-snug sm:text-2xl">{p.summary}</p>
                  <p className={`mt-5 text-lg leading-relaxed ${f ? "text-white/85" : "text-steel"}`}>{p.details}</p>
                  <ul className="mt-6 space-y-2">
                    {p.features.map((feature) => (
                      <li key={feature} className="flex gap-3 font-semibold">
                        <span className={`mono pt-0.5 ${f ? "text-white/70" : "text-brand"}`} aria-hidden="true">
                          ✕
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:col-span-3 lg:pt-8">
                  <dl className={`border-t-2 ${f ? "border-white" : "border-iron"}`}>
                    {p.specs.map(([k, v]) => (
                      <div key={k} className={`border-b py-3 ${f ? "border-white/30" : "border-line"}`}>
                        <dt className={`mono ${f ? "text-white/75" : "text-steel"}`}>{k}</dt>
                        <dd className="mt-1 font-medium leading-snug">{v}</dd>
                      </div>
                    ))}
                  </dl>
                  <Link to="/contact/" className={`btn mt-6 w-full ${f ? "btn-chalk" : "btn-line"}`}>
                    Ask about this <ArrowRight className="arrow h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Studio photo */}
      <figure className="wrap pt-16 lg:pt-24">
        <img
          src={studioPhoto}
          alt="Inside the New Scotland Strength training studio"
          loading="lazy"
          className="aspect-[4/3] w-full object-cover sm:aspect-[21/9]"
        />
        <figcaption className="mono mt-3 flex justify-between gap-4 text-steel">
          <span>The studio</span>
          <span>Herring Cove, N.S.</span>
        </figcaption>
      </figure>

      {/* Compare */}
      <section className="wrap py-20 lg:py-28">
        <SectionHead label="Scoresheet" title="Which fits?" intro="A quick side-by-side to help you choose the right starting point." />
        <div className="-mx-5 mt-12 overflow-x-auto px-5 sm:mx-0 sm:px-0">
          <table className="w-full min-w-[620px] border-collapse border-2 border-iron text-left">
            <caption className="sr-only">Features included in each coaching option</caption>
            <thead>
              <tr className="bg-iron text-chalk">
                <th scope="col" className="mono px-4 py-4 align-bottom font-medium text-steel-light">
                  Included
                </th>
                {programs.map((p) => (
                  <th key={p.event} scope="col" className="px-3 py-4 text-center align-bottom">
                    <span className="mono block text-brand-light">Event {p.event}</span>
                    <span className="heading mt-1 block text-[0.9375rem] uppercase leading-tight">{p.name}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {compareRows.map(({ feature, cols }) => (
                <tr key={feature} className="border-t border-line even:bg-chalk-2">
                  <th scope="row" className="px-4 py-4 font-semibold">
                    {feature}
                  </th>
                  {cols.map((yes, i) => (
                    <td key={i} className="px-3 py-4 text-center">
                      {yes ? (
                        <Check className="mx-auto h-6 w-6 text-brand" strokeWidth={3} aria-label="Included" />
                      ) : (
                        <Minus className="mx-auto h-4 w-4 text-steel/50" aria-label="Not included" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Pricing */}
      <section className="on-dark bg-iron text-chalk">
        <div className="wrap grid gap-8 py-16 lg:grid-cols-12 lg:items-center lg:gap-8 lg:py-20">
          <div className="lg:col-span-5">
            <Label className="text-brand-light">Pricing</Label>
            <h2 className="display mt-4 text-[clamp(2rem,9vw,3rem)] sm:text-[clamp(2.5rem,4.6vw,4rem)]">Built around you.</h2>
          </div>
          <div className="lg:col-span-7 lg:pl-8 xl:pl-16">
            <p className="text-xl leading-relaxed">
              Rates depend on the type of coaching and how often you train. Book a consultation and Josh will walk you
              through the options that fit your goals and schedule.
            </p>
            <p className="mono mt-4 text-steel-light">E-transfer for online services · E-transfer or card for in-person</p>
            <Link to="/contact/" className="btn btn-brand mt-8">
              Book a consultation <ArrowRight className="arrow h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Onboarding */}
      <section className="wrap py-20 lg:py-28">
        <SectionHead label="Onboarding" title="After you reach out." />
        <div className="mt-14">
          <ProcessSteps />
        </div>
      </section>

      <CTASection
        title="Not sure which event fits?"
        description="Send a message with your goals, schedule, and training background, and Josh can point you in the right direction."
        secondaryLabel="Read about Josh"
        secondaryTo="/about/"
      />
    </>
  );
}
