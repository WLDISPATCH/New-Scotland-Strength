import { ArrowRight, CheckCircle2, Compass, MapPin, MoveRight, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CTASection from "../components/CTASection";
import ExpandableCopy from "../components/ExpandableCopy";
import GoogleReviews from "../components/GoogleReviews";
import PageMeta from "../components/PageMeta";
import Reveal from "../components/Reveal";
import Section from "../components/Section";
import SwipeRow from "../components/SwipeRow";
import { brandPhotos, joshPhotos, shuffled } from "../assets/photoLibrary";
import {
  homeStats,
  processSteps,
  services,
} from "../content/siteData";

export default function HomePage() {
  const [[heroSmall, heroLarge]] = useState(() => shuffled(joshPhotos));
  const trustPoints = [
    {
      icon: MapPin,
      title: "Halifax-based",
      text: "Local coaching for Halifax, Dartmouth, Bedford, and wider HRM.",
    },
    {
      icon: ShieldCheck,
      title: "Structured process",
      text: "Assessment, programming, accountability, and clear progression.",
    },
    {
      icon: Compass,
      title: "Flexible",
      text: "Programs that will help you accomplish your goals, regardless of your schedule.",
    },
  ];

  return (
    <>
      <PageMeta
        title="Personal Trainer Halifax, NS | New Scotland Strength"
        description="Work with Josh Dunbar at New Scotland Strength for personal training and strength coaching in Halifax, Nova Scotia. Straightforward coaching, clear programming, and practical support."
        path="/"
      />

      <section className="relative overflow-hidden border-b border-[var(--color-line)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(159,103,52,0.14),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(110,85,48,0.1),transparent_30%)]" />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:px-8 lg:py-28">
          <div className="relative z-10 flex flex-col justify-center">
            <p className="inline-flex w-fit max-w-full items-center gap-2 rounded-full border border-[var(--color-line)] bg-[rgba(255,250,242,0.74)] px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-text-muted)] sm:px-4 sm:text-xs sm:tracking-[0.28em]">
              <MapPin className="h-4 w-4 text-[var(--color-accent)]" />
              Personal trainer/strength coach in the Halifax area
            </p>
            <h1 className="mt-5 max-w-4xl text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:mt-6 sm:text-5xl lg:text-6xl">
              Coaching for people who want to get stronger and train with more direction.
            </h1>
            <ExpandableCopy
              className="mt-5 max-w-2xl sm:mt-6"
              preview="New Scotland Strength is for people who want clear coaching, a realistic plan, and steady progress without all the noise."
              full="New Scotland Strength helps busy people build strength, improve movement quality, and stay consistent with coaching that fits real schedules in Halifax and the surrounding areas. Online training available worldwide!"
              buttonLabel="See full intro"
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="btn-primary justify-center sm:justify-start">
                Book a Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="btn-secondary justify-center sm:justify-start">
                Explore Services
              </Link>
            </div>
            <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4">
              {homeStats.map((stat) => (
                <Reveal key={stat.value} delayMs={80} className="h-full">
                  <div className="panel h-full p-4 sm:p-5">
                  <p className="text-xl font-semibold text-[var(--color-ink)] sm:text-2xl">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">{stat.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-8 hidden h-36 w-36 rounded-full bg-[var(--color-accent)]/10 blur-3xl sm:block" />
            <div className="grid gap-4 sm:grid-cols-[0.9fr_1fr] sm:gap-5">
              <div className="hidden gap-4 sm:grid sm:translate-y-10">
                <div className="panel flex items-center justify-center p-6">
                  <img
                    src={brandPhotos.brandLogo}
                    alt="New Scotland Strength logo"
                    className="w-full max-w-[16rem] object-contain"
                  />
                </div>
                <div className="panel overflow-hidden p-3">
                <img
                  src={heroSmall.src}
                  alt={heroSmall.alt}
                  loading="lazy"
                  className="h-full min-h-[320px] w-full rounded-[1.5rem] object-cover"
                />
                </div>
              </div>
              <div className="panel overflow-hidden p-3">
                <img
                  src={heroLarge.src}
                  alt={heroLarge.alt}
                  loading="lazy"
                  className="h-full max-h-[260px] min-h-[240px] w-full rounded-[1.5rem] object-cover sm:max-h-none sm:min-h-[420px]"
                />
              </div>
            </div>
            <div className="panel mt-4 hidden p-5 sm:absolute sm:-bottom-6 sm:right-6 sm:mt-0 sm:block sm:max-w-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
                How It Works
              </p>
              <p className="mt-3 text-base font-semibold text-[var(--color-ink)] sm:text-lg">
                Start with a conversation, build the plan, and keep adjusting it as you go.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 sm:py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-3 md:grid-cols-3">
            {trustPoints.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delayMs={index * 90}>
                  <article className="panel flex h-full items-start gap-4 p-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/10">
                      <Icon className="h-5 w-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h2 className="text-base font-semibold text-[var(--color-ink)]">{item.title}</h2>
                      <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">{item.text}</p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <Section
        eyebrow="What You Get"
        title="Coaching options that are easy to understand and easier to stick with"
        description={
          <>
            Decide which option is best for you or{" "}
            <Link to="/contact" className="font-semibold text-[var(--color-ink)] underline decoration-[var(--color-accent)] underline-offset-4">
              reach out
            </Link>{" "}
            if you need help!
          </>
        }
      >
        <SwipeRow desktopClassName="lg:grid-cols-3 lg:gap-6">
          {services.map((service, index) => (
            <Reveal key={service.title} delayMs={index * 90} className="h-full">
              <article className="panel flex h-full flex-col p-6 lg:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
                {service.title}
              </p>
              <p className="mt-4 text-lg font-semibold text-[var(--color-ink)] lg:text-xl">{service.summary}</p>
              <p className="mt-4 hidden text-sm leading-7 text-[var(--color-text-muted)] lg:block">{service.details}</p>
              <ul className="mt-6 space-y-3 text-sm text-[var(--color-text-muted)]">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent)]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/services" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-ink)]">
                View service details
                <MoveRight className="h-4 w-4 text-[var(--color-accent)]" />
              </Link>
              </article>
            </Reveal>
          ))}
        </SwipeRow>
      </Section>

      <Section
        eyebrow="How It Works"
        title="A simple step-by-step process, from consultation to results."
      >
        <div className="grid gap-3 md:grid-cols-2 md:gap-5 xl:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal key={step} delayMs={index * 80}>
              <article className="panel flex items-baseline gap-4 rounded-2xl p-4 md:block md:rounded-[2rem] md:p-6">
              <p className="w-6 shrink-0 text-sm font-semibold text-[var(--color-accent)]">0{index + 1}</p>
              <p className="text-base font-semibold text-[var(--color-ink)] md:mt-4 md:text-lg">{step}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="What Clients Say"
        title="Coaching that fits real life, not just perfect conditions"
        className="border-y border-[var(--color-line)] bg-[rgba(255,250,242,0.26)]"
      >
        <GoogleReviews limit={3} gridClassName="lg:grid-cols-3" swipeOnMobile />
      </Section>

      <CTASection
        title="Don't Just Start Strong — Stay Strong."
        description="Reach your health and fitness goals with a sustainable plan that is tailored for you!"
        secondaryLabel="See Results"
        secondaryTo="/results"
      />
    </>
  );
}
