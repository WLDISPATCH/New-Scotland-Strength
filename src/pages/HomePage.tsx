import { ArrowRight, Plus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import heroPhoto from "../assets/photos/optimized/josh-log-press.jpg";
import joshPortrait from "../assets/photos/optimized/showcase-deadlift.jpg";
import joshKeg from "../assets/photos/optimized/josh-keg-overhead.jpg";
import joshYoke from "../assets/photos/optimized/contact-yk.jpg";
import clientPlateLift from "../assets/photos/optimized/client-plate-lift.jpg";
import clientKegRun from "../assets/photos/optimized/client-keg-run.jpg";
import truckPull from "../assets/photos/optimized/truck-pull.jpg";
import teamTrophies from "../assets/photos/optimized/team-trophies.jpg";
import CredentialTicker from "../components/CredentialTicker";
import CTASection from "../components/CTASection";
import { averageRating, RatingBoard, reviewCount } from "../components/GoogleReviews";
import Label from "../components/Label";
import PageMeta from "../components/PageMeta";
import ProcessSteps from "../components/ProcessSteps";
import ProgramCards from "../components/ProgramCards";
import SectionHead from "../components/SectionHead";
import { audiences } from "../content/programs";
import { business, clientTestimonial, credentials, faqItems, googleReviews } from "../content/siteData";

const stripPhotos = [
  { src: joshKeg, alt: "Josh Dunbar lifting a keg overhead at an outdoor strongman competition" },
  { src: clientPlateLift, alt: "New Scotland Strength client lifting a stack of plates by the handle" },
  { src: truckPull, alt: "Athlete in a New Scotland Strength hat pulling a truck" },
  { src: joshYoke, alt: "Josh Dunbar carrying a yoke during competition" },
  { src: clientKegRun, alt: "New Scotland Strength client running with a keg at a strongman competition" },
  { src: teamTrophies, alt: "New Scotland Strength athletes with their trophies at Nova Scotia's Strongest 2026" },
];

const faqPicks = [
  "Do you work with beginners?",
  "Do you train older adults?",
  "Do I need my own gym membership for in-person sessions?",
  "How do online check-ins work?",
];

// Two reviews shown beside the rating on the home page.
const homeReviewAuthors = ["Lee MacDonald", "matthew english"];
const shortReviews = googleReviews.filter((r) => homeReviewAuthors.includes(r.author));

function EntryCard({ className = "" }: { className?: string }) {
  const rows = [
    ["In person", "Herring Cove + HRM gyms"],
    ["Online", "Anywhere"],
    ["On Google", `${averageRating.toFixed(1)} ★ · ${reviewCount} reviews`],
  ];

  return (
    <div className={`border-2 border-iron bg-chalk ${className}`}>
      <p className="mono flex items-center justify-between bg-iron px-4 py-2 text-chalk">
        <span>Entry card</span>
        <span className="text-brand-light">Coach · {business.owner}</span>
      </p>
      <dl>
        {rows.map(([k, v]) => (
          <div key={k} className="grid grid-cols-[6rem_1fr] gap-3 border-b border-line px-4 py-2.5 last:border-0">
            <dt className="mono pt-0.5 text-steel">{k}</dt>
            <dd className="font-semibold leading-snug">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function HomePage() {
  const [active, setActive] = useState(0);

  return (
    <>
      <PageMeta path="/" />

      {/* Hero */}
      <section className="wrap pb-16 pt-8 sm:pt-12 lg:pb-24">
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-2 border-b-2 border-iron pb-3 text-steel">
          <Label>Personal training &amp; strength coaching</Label>
          <p className="mono">Halifax, N.S. · In person &amp; online</p>
        </div>

        <div className="relative mt-8 sm:mt-10">
          {/* From xl the first line shares its row with the entry card (62% of the width), so the
              size tracks the content width: "STRONG." is ~6em wide and must fit in that 62%. */}
          <p className="display text-[clamp(2.6rem,12.5vw,3.5rem)] sm:text-[clamp(3.1rem,9.4vw,8.25rem)] xl:text-[clamp(3.1rem,calc(9.6vw-8px),8.25rem)]">
            <span className="block xl:max-w-[62%]">Start strong.</span>
            <span className="block text-brand">Stay strong.</span>
          </p>
          {/* Sits in the space beside the first two lines on wide screens */}
          <EntryCard className="absolute right-0 top-2 hidden w-[34%] max-w-[26rem] xl:block" />
        </div>

        <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-12 lg:gap-8">
          <figure className="lg:col-span-6">
            <img
              src={heroPhoto}
              alt="Josh Dunbar pressing a log overhead at an outdoor strongman competition"
              className="aspect-[4/5] w-full object-cover object-top sm:aspect-[5/4] lg:aspect-[6/5]"
            />
            <figcaption className="mono mt-3 text-steel">Josh Dunbar · log press · outdoor strongman</figcaption>
          </figure>

          <div className="flex flex-col gap-10 lg:col-span-6 lg:pl-8 xl:pl-16">
            <div>
              <h1 className="heading text-[1.75rem] sm:text-[2.25rem]">
                Coaching for people who want to get stronger and train with more direction.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-steel">
                New Scotland Strength helps busy people build strength, improve movement quality, and stay consistent
                with coaching that fits real schedules in Halifax and the surrounding areas. Online training available
                worldwide!
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link to="/contact/" className="btn btn-brand">
                  Book a consultation <ArrowRight className="arrow h-4 w-4" aria-hidden="true" />
                </Link>
                <Link to="/services/" className="btn btn-line">
                  Explore services
                </Link>
              </div>
            </div>
            <EntryCard className="xl:hidden" />
          </div>
        </div>
      </section>

      <CredentialTicker />

      {/* Who it's for */}
      <section className="wrap py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Label className="text-brand">Who it's for</Label>
              <h2 className="display display-section mt-4">Built for every&shy;day strong.</h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-steel">
                Strongman is where Josh proves the methods. The coaching is for anyone who wants to get stronger,
                wherever they're starting from.
              </p>
              <div className="relative mt-8 hidden aspect-[4/5] max-h-[30rem] overflow-hidden bg-chalk-2 lg:block">
                {audiences.map((a, i) => (
                  <img
                    key={a.title}
                    src={a.photo}
                    alt={i === active ? a.alt : ""}
                    aria-hidden={i !== active}
                    loading="lazy"
                    className={`photo-swap absolute inset-0 h-full w-full object-cover ${i === active ? "opacity-100" : "opacity-0"}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <ol className="border-t-2 border-iron lg:col-span-7">
            {audiences.map((a, i) => (
              <li
                key={a.title}
                onMouseEnter={() => setActive(i)}
                className={`grid grid-cols-[3rem_1fr] gap-x-4 border-b border-line py-7 transition-colors sm:grid-cols-[4.5rem_1fr] lg:py-9 ${
                  i === active ? "lg:bg-chalk-2" : ""
                }`}
              >
                <span className="mono pt-2 text-brand lg:pl-4">{String(i + 1).padStart(2, "0")}</span>
                <div className="lg:pr-6">
                  <h3 className="heading text-[1.75rem] uppercase sm:text-[2.5rem]">{a.title}</h3>
                  <p className="mt-2 max-w-xl text-lg leading-relaxed text-steel">{a.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="scroll-mt-24 bg-chalk-2 py-20 lg:py-28">
        <div className="wrap">
          <SectionHead
            label="The programs"
            title="Pick your event."
            intro={
              <>
                Four ways to train with Josh. Not sure which fits?{" "}
                <Link to="/services/" className="text-link text-iron">
                  Compare them
                </Link>{" "}
                or let the consultation sort it out.
              </>
            }
          />
          <div className="mt-12">
            <ProgramCards />
          </div>
        </div>
      </section>

      {/* Meet Josh */}
      <section className="on-dark bg-iron py-20 text-chalk lg:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <img
              src={joshPortrait}
              alt="Josh Dunbar pulling a heavy deadlift during competition"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover object-top"
            />
          </div>
          <div className="flex flex-col lg:col-span-7 lg:pl-8 xl:pl-16">
            <Label className="text-brand-light">The coach</Label>
            <h2 className="display display-section mt-4">Josh Dunbar</h2>
            <p className="heading mt-8 max-w-2xl text-[1.5rem] font-medium leading-snug [font-stretch:100%] sm:text-[1.875rem]">
              “I am devoted to using the same principles that built my success to help you reach yours.”
            </p>

            <div className="mt-10 grid gap-8 sm:grid-cols-[auto_1fr] sm:gap-12">
              <div>
                <p className="display text-[5.5rem] text-brand-light sm:text-[7rem]">20+</p>
                <p className="mono mt-2 text-steel-light">Years of strength training</p>
              </div>
              <ul className="border-t border-line-dark">
                {credentials.map((c) => (
                  <li key={c} className="flex gap-3 border-b border-line-dark py-3 leading-snug">
                    <span className="mono pt-0.5 text-brand-light" aria-hidden="true">
                      ✕
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <Link to="/about/" className="btn btn-chalk-line mt-10 self-start">
              Read Josh's story <ArrowRight className="arrow h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="wrap py-20 lg:py-28">
        <SectionHead label="How it works" title="From first chat to new PRs." />
        <div className="mt-14">
          <ProcessSteps />
        </div>
      </section>

      {/* Proof */}
      <section className="border-t-2 border-iron py-20 lg:py-28">
        <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-8">
          <figure className="min-w-0 lg:col-span-7">
            <Label className="text-brand">Client results</Label>
            <blockquote className="heading mt-6 text-[1.625rem] font-semibold leading-[1.2] [font-stretch:100%] sm:text-[2.125rem]">
              “{clientTestimonial.quote}”
            </blockquote>
            <figcaption className="mono mt-6 text-steel">{clientTestimonial.author} · New Scotland Strength client</figcaption>
            <Link to="/results/" className="btn btn-line mt-10">
              See client results <ArrowRight className="arrow h-4 w-4" aria-hidden="true" />
            </Link>
          </figure>

          <div className="min-w-0 lg:col-span-4 lg:col-start-9">
            <RatingBoard />
            <ul className="mt-6 space-y-6">
              {shortReviews.map((r) => (
                <li key={r.author} className="border-l-2 border-brand pl-5">
                  <p className="whitespace-pre-line leading-relaxed">“{r.text}”</p>
                  <p className="mono mt-2 text-steel">{r.author} · Google</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="scroll-strip mt-16 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-4 sm:px-8 lg:mt-20">
          {stripPhotos.map((p) => (
            <img
              key={p.src}
              src={p.src}
              alt={p.alt}
              loading="lazy"
              className="aspect-[4/5] w-[72vw] shrink-0 snap-start object-cover sm:w-[22rem]"
            />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-chalk-2 py-20 lg:py-28">
        <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Label className="text-brand">Questions</Label>
            <h2 className="display mt-4 text-[clamp(1.75rem,9vw,3rem)] lg:text-[clamp(2.5rem,4.2vw,4rem)]">Fair questions.</h2>
            <Link to="/faq/" className="btn btn-line mt-8">
              All {faqItems.length} answers <ArrowRight className="arrow h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="border-t-2 border-iron lg:col-span-7">
            {faqItems
              .filter((f) => faqPicks.includes(f.question))
              .map((f, i) => (
                <details key={f.question} className="border-b border-line" open={i === 0}>
                  <summary className="flex items-center justify-between gap-6 py-6">
                    <span className="heading text-[1.375rem] [font-stretch:100%] [text-wrap:pretty] sm:text-[1.625rem]">{f.question}</span>
                    <Plus className="faq-icon h-6 w-6 shrink-0 text-brand" aria-hidden="true" />
                  </summary>
                  <p className="max-w-2xl pb-6 text-lg leading-relaxed text-steel">{f.answer}</p>
                </details>
              ))}
          </div>
        </div>
      </section>

      <CTASection
        title="It starts with a conversation."
        description="Tell Josh about your goals, your schedule, and your training history. He'll follow up within 48 hours."
        secondaryLabel="See results"
        secondaryTo="/results/"
      />
    </>
  );
}
