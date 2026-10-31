import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CTASection from "../components/CTASection";
import ExpandableCopy from "../components/ExpandableCopy";
import GoogleReviews from "../components/GoogleReviews";
import PageMeta from "../components/PageMeta";
import ProcessSteps from "../components/ProcessSteps";
import Section from "../components/Section";
import ServiceList from "../components/ServiceList";
import { joshPhotos, shuffled } from "../assets/photoLibrary";
import { homeStats } from "../content/siteData";

const trustPoints = [
  {
    title: "Halifax-based",
    text: "Local coaching for Halifax, Dartmouth, Bedford, Sackville, and wider HRM.",
  },
  {
    title: "Structured process",
    text: "Assessment, programming, accountability, and clear progression.",
  },
  {
    title: "Flexible",
    text: "Programs that will help you accomplish your goals, regardless of your schedule.",
  },
];

export default function HomePage() {
  const [[heroPhoto, processPhoto]] = useState(() => shuffled(joshPhotos));

  return (
    <>
      <PageMeta path="/" />

      <section>
        <div className="wrap grid gap-10 pb-14 pt-10 sm:pt-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pb-20 lg:pt-16">
          <div>
            <p className="eyebrow">Personal trainer &amp; strength coach in the Halifax area</p>
            <h1 className="mt-4 font-[family-name:var(--font-display)] text-[2.75rem] font-bold leading-[0.95] tracking-[-0.01em] sm:text-6xl lg:text-[4.5rem] xl:text-[5rem]">
              Coaching for people who want to get stronger and train with more direction.
            </h1>
            <ExpandableCopy
              className="mt-6 max-w-xl"
              preview="New Scotland Strength is for people who want clear coaching, a realistic plan, and steady progress without all the noise."
              full="New Scotland Strength helps busy people build strength, improve movement quality, and stay consistent with coaching that fits real schedules in Halifax and the surrounding areas. Online training available worldwide!"
              buttonLabel="See full intro"
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact/" className="btn-primary justify-center">
                Book a Consultation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link to="/services/" className="btn-secondary justify-center">
                Explore Services
              </Link>
            </div>
            <dl className="mt-10 grid max-w-xl gap-6 border-t border-[var(--color-line-strong)] pt-6 sm:grid-cols-2 sm:gap-8">
              {homeStats.map((stat) => (
                <div key={stat.value}>
                  <dt className="font-[family-name:var(--font-display)] text-2xl font-bold">{stat.value}</dt>
                  <dd className="mt-1 leading-relaxed text-[var(--color-text-muted)]">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <figure className="order-first sm:order-none">
            <img
              src={heroPhoto.src}
              alt={heroPhoto.alt}
              className="photo aspect-[4/3] object-[center_30%] sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[34rem]"
            />
          </figure>
        </div>
      </section>

      <section className="border-y border-[var(--color-line)] bg-[var(--color-bg-alt)]">
        <ul className="wrap grid gap-6 py-10 md:grid-cols-3 md:gap-10 md:py-12">
          {trustPoints.map((item) => (
            <li key={item.title} className="md:border-l md:border-[var(--color-line-strong)] md:pl-6 md:first:border-l-0 md:first:pl-0">
              <h2 className="font-[family-name:var(--font-display)] text-xl font-bold">{item.title}</h2>
              <p className="mt-1.5 leading-relaxed text-[var(--color-text-muted)]">{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <Section
        eyebrow="What You Get"
        title="Coaching options that are easy to understand and easier to stick with"
        description={
          <>
            Decide which option is best for you or{" "}
            <Link to="/contact/" className="text-link">
              reach out
            </Link>{" "}
            if you need help!
          </>
        }
      >
        <ServiceList details="desktop" showLink />
      </Section>

      <Section tone="alt">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <img
            src={processPhoto.src}
            alt={processPhoto.alt}
            loading="lazy"
            className="photo hidden aspect-[4/5] object-[center_30%] lg:block"
          />
          <div className="lg:py-4">
            <p className="eyebrow mb-3">How It Works</p>
            <h2 className="heading max-w-xl">A simple step-by-step process, from consultation to results.</h2>
            <div className="mt-10">
              <ProcessSteps columns="two" />
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="What Clients Say" title="Coaching that fits real life, not just perfect conditions">
        <GoogleReviews limit={3} gridClassName="lg:grid-cols-3" />
      </Section>

      <CTASection
        title="Don't Just Start Strong — Stay Strong."
        description="Reach your health and fitness goals with a sustainable plan that is tailored for you!"
        secondaryLabel="See Results"
        secondaryTo="/results/"
      />
    </>
  );
}
