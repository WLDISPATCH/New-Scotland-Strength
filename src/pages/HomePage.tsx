import { ArrowRight, CheckCircle2, Compass, MapPin, MoveRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import CTASection from "../components/CTASection";
import ExpandableCopy from "../components/ExpandableCopy";
import PageMeta from "../components/PageMeta";
import Reveal from "../components/Reveal";
import Section from "../components/Section";
import { brandPhotos } from "../assets/photoLibrary";
import {
  aboutStory,
  business,
  faqPreview,
  homeStats,
  processSteps,
  services,
} from "../content/siteData";

export default function HomePage() {
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
      title: "Strength-first",
      text: "Built for busy adults who want direction, not random workouts.",
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
            <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4">
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
                <div className="panel flex flex-col items-center justify-center p-5 text-center">
                  <img
                    src={brandPhotos.brandLogo}
                    alt="New Scotland Strength illustrated logo"
                    className="mx-auto w-full max-w-[18rem] object-contain"
                  />
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
                    New Scotland Strength
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">
                    A cleaner wordmark-led identity that fits the lighter site style without losing the strength focus.
                  </p>
                </div>
                <div className="panel overflow-hidden p-3">
                <img
                  src={brandPhotos.heroPortrait}
                  alt="Josh Dunbar competing in a strongman event"
                  className="h-full min-h-[320px] w-full rounded-[1.5rem] object-cover"
                />
                </div>
              </div>
              <div className="panel overflow-hidden p-3">
                <img
                  src={brandPhotos.showcaseCarry}
                  alt="Josh Dunbar carrying a yoke during competition"
                  className="h-full min-h-[340px] w-full rounded-[1.5rem] object-cover sm:min-h-[420px]"
                />
              </div>
            </div>
            <div className="panel mt-4 p-5 sm:absolute sm:-bottom-6 sm:right-6 sm:mt-0 sm:max-w-sm">
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
        description="Each service is built around real schedules, clear communication, and training that has a point."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delayMs={index * 90} className="h-full">
              <article className="panel flex h-full flex-col p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
                {service.title}
              </p>
              <p className="mt-4 text-xl font-semibold text-[var(--color-ink)]">{service.summary}</p>
              <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)]">{service.details}</p>
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
        </div>
      </Section>

      <Section
        eyebrow="About Josh"
        title="A practical coaching style built around strength, consistency, and common sense"
        className="border-y border-[var(--color-line)] bg-[rgba(255,250,242,0.26)]"
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div className="space-y-5">
            <ExpandableCopy
              preview="New Scotland Strength is built for people who want to train seriously without being treated like they live in the gym."
              full={aboutStory.slice(0, 2).join(" ")}
              buttonLabel="Read Josh's approach"
            />
            <Link to="/about" className="btn-secondary mt-2">
              Read Josh's Story
            </Link>
          </div>
          <div className="panel overflow-hidden p-3">
            <img
              src={brandPhotos.servicesEnvironment}
              alt="New Scotland Strength gym environment and training setup"
              className="h-full min-h-[360px] w-full rounded-[1.75rem] object-cover"
            />
          </div>
        </div>
      </Section>

      <Section
        eyebrow="How It Works"
        title="A simple process from first conversation to better training"
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal key={step} delayMs={index * 80}>
              <article className="panel p-6">
              <p className="text-sm font-semibold text-[var(--color-accent)]">0{index + 1}</p>
              <p className="mt-4 text-lg font-semibold text-[var(--color-ink)]">{step}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Results"
        title="Client results and success stories"
        description="This section is reserved for future client stories, progress photos, and measurable wins."
        className="border-y border-[var(--color-line)] bg-[rgba(255,250,242,0.26)]"
      >
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-1">
            {[
              "Client story coming soon",
              "Progress photo set coming soon",
              "Strength milestone coming soon",
            ].map((item, index) => (
              <Reveal key={item} delayMs={index * 90}>
                <article className="panel placeholder-card p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8c1d1d]">Coming soon</p>
                <p className="mt-3 text-lg leading-8 text-[#8c1d1d]">{item}</p>
                <p className="mt-4 text-sm leading-6 text-[#8c1d1d]">
                  Real client proof will be added here as it becomes available for the site.
                </p>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="panel overflow-hidden p-3">
            <img
              src={brandPhotos.resultsWide}
              alt="Josh Dunbar competing in front of a crowd"
              className="h-full min-h-[560px] w-full rounded-[1.75rem] object-cover"
            />
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Local Focus"
        title={`Local coaching for Halifax, ${business.areasServed[1]}, and ${business.areasServed[2]}`}
      >
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="panel p-7">
            <ExpandableCopy
              preview="If you are looking for a coach in Halifax or nearby, the goal here is simple: make it easy to understand what Josh offers and how to get started."
              full="If you are looking for a coach in Halifax, Dartmouth, or Bedford, the goal here is simple: make it easy to understand what Josh offers, who it is for, and how to take the next step without digging through vague sales language."
              buttonLabel="Read local details"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {faqPreview.map((item) => (
              <article key={item.question} className="panel p-6">
                <h3 className="text-lg font-semibold text-[var(--color-ink)]">{item.question}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <CTASection
        title="Build strength with a plan you can actually follow."
        description="If you want coaching that feels clear, practical, and built around real life, the next step is a consultation."
        secondaryLabel="See Results"
        secondaryTo="/results"
      />
    </>
  );
}
