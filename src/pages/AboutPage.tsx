import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import portrait from "../assets/photos/optimized/about-oh.jpg";
import carryPhoto from "../assets/photos/optimized/showcase-carry.jpg";
import CTASection from "../components/CTASection";
import ExpandableCopy from "../components/ExpandableCopy";
import Label from "../components/Label";
import PageHero from "../components/PageHero";
import PageMeta from "../components/PageMeta";
import SectionHead from "../components/SectionHead";
import { aboutStory, business, coachingValues, credentials } from "../content/siteData";

const stats = [
  { value: "20+", label: "Years of strength training" },
  { value: "4", label: "Coaching certifications" },
  { value: "Titles", label: "Multiple Nova Scotia & Atlantic strongman titles" },
  { value: "Top 5", label: "Multiple national-level finishes" },
];

export default function AboutPage() {
  return (
    <>
      <PageMeta path="/about/" />

      {/* BreadcrumbList schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://newscotlandstrength.ca/" },
              { "@type": "ListItem", "position": 2, "name": "About", "item": "https://newscotlandstrength.ca/about/" }
            ]
          })
        }}
      />

      <PageHero
        label="The coach"
        kicker="Josh Dunbar"
        title="About Josh Dunbar — Personal Trainer in Halifax, NS"
        lede={
          <p>
            With multiple Nova Scotia and Atlantic titles, as well as multiple top-five finishes at the national level,
            I bring proven experience to every client I coach. Whether your goal is to lose weight, get stronger, move
            better, or compete at a higher level, I am devoted to using the same principles that built my success to
            help you reach yours!
          </p>
        }
        actions={
          <Link to="/contact/" className="btn btn-brand">
            Train with Josh <ArrowRight className="arrow h-4 w-4" aria-hidden="true" />
          </Link>
        }
        aside={
          <figure>
            <img
              src={portrait}
              alt="Josh Dunbar completing a clean during competition"
              className="aspect-[4/5] w-full object-cover object-[center_35%]"
            />
            <figcaption className="mono mt-3 flex justify-between gap-4 text-steel">
              <span>Athlete profile</span>
              <span>Strongman · Powerlifting</span>
            </figcaption>
          </figure>
        }
      />

      {/* Stat strip */}
      <section className="on-dark bg-iron text-chalk" aria-label="Josh Dunbar at a glance">
        <dl className="wrap grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col border-line-dark py-10 lg:py-14 ${i % 2 === 1 ? "border-l pl-5 sm:pl-8" : ""} ${
                i > 1 ? "border-t lg:border-t-0" : ""
              } ${i === 2 ? "lg:border-l lg:pl-8" : ""}`}
            >
              <dt className="mono order-2 mt-3 text-steel-light">{s.label}</dt>
              <dd className="display order-1 text-[clamp(2rem,9vw,4.5rem)] text-brand-light">{s.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Story */}
      <section className="wrap py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Label className="text-brand">The story</Label>
              <h2 className="display mt-4 text-[clamp(1.75rem,9vw,3rem)] lg:text-[clamp(2.25rem,3.4vw,3.5rem)]">Useful coaching. No posturing.</h2>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ExpandableCopy
              preview={aboutStory[0]}
              full={aboutStory.join(" ")}
              buttonLabel="Read full story"
              textClassName="heading text-[1.375rem] font-medium leading-snug [font-stretch:100%] sm:text-[1.75rem]"
            />
            <div className="mt-12 grid gap-px border-2 border-iron bg-iron sm:grid-cols-2">
              <div className="bg-chalk p-6">
                <p className="mono text-steel">Home base</p>
                <p className="mt-2 font-semibold leading-snug">
                  {business.city}, {business.region}
                </p>
                <p className="mt-2 leading-relaxed text-steel">
                  Private studio in Herring Cove, with additional gym access in Burnside and Halifax's North End.
                </p>
              </div>
              <div className="bg-chalk p-6">
                <p className="mono text-steel">Coaching area</p>
                <p className="mt-2 font-semibold leading-snug">Halifax, Dartmouth, Bedford &amp; Sackville</p>
                <p className="mt-2 leading-relaxed text-steel">Online coaching for clients anywhere else.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials spec sheet */}
      <section className="border-t-2 border-iron">
        <div className="wrap grid gap-10 py-20 lg:grid-cols-12 lg:gap-8 lg:py-28">
          <div className="lg:col-span-5">
            <Label className="text-brand">Spec sheet</Label>
            <h2 className="display mt-4 text-[clamp(1.75rem,9vw,3rem)] lg:text-[clamp(2.25rem,3.4vw,3.5rem)]">Credentials</h2>
          </div>
          <ol className="border-t-2 border-iron lg:col-span-7">
            {credentials.map((c, i) => (
              <li key={c} className="grid grid-cols-[4.5rem_1fr] gap-4 border-b border-line py-5 sm:grid-cols-[6rem_1fr]">
                <span className="mono pt-1 text-brand">No. {String(i + 1).padStart(2, "0")}</span>
                <span className="text-lg font-semibold leading-snug sm:text-xl">{c}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* House rules */}
      <section className="bg-chalk-2 py-20 lg:py-28">
        <div className="wrap">
          <SectionHead label="Coaching philosophy" title="House rules." intro="What the coaching should feel like in practice." />
          <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {coachingValues.map((v, i) => (
              <li key={v.title} className="border-t-[6px] border-iron pt-6">
                <p className="display text-[3.5rem] text-brand">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="heading mt-6 text-[1.75rem] uppercase leading-[0.95]">{v.title}</h3>
                <p className="mt-4 text-lg leading-relaxed text-steel">{v.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why clients stay */}
      <section className="wrap py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-8">
          <img
            src={carryPhoto}
            alt="Josh Dunbar getting set for a carry during competition"
            loading="lazy"
            className="aspect-[4/3] w-full object-cover object-[center_30%] lg:col-span-6 lg:aspect-[5/6]"
          />
          <div className="lg:col-span-6 lg:pl-8 xl:pl-16">
            <Label className="text-brand">Why clients stay</Label>
            <h2 className="heading mt-4 text-[2rem] uppercase sm:text-[2.75rem]">Better than random hard workouts.</h2>
            <p className="mt-6 text-lg leading-relaxed text-steel">
              A good coach does more than count reps. The real job is making sound decisions over time: when to push,
              when to back off, what to change, and how to keep someone training when life gets busy. That is the
              difference between a plan that looks good for a week and one that actually holds up.
            </p>
            <Link to="/contact/" className="btn btn-line mt-8">
              Start the conversation <ArrowRight className="arrow h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Want coaching that keeps it simple?"
        description="Use the contact page to talk through your goals, training background, and what kind of support makes the most sense."
        secondaryLabel="View services"
        secondaryTo="/services/"
      />
    </>
  );
}
