import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { brandPhotos } from "../assets/photoLibrary";
import CTASection from "../components/CTASection";
import MobileReveal from "../components/MobileReveal";
import PageMeta from "../components/PageMeta";
import Section from "../components/Section";
import { pricing, processSteps, services } from "../content/siteData";

export default function ServicesPage() {
  return (
    <>
      <PageMeta
        title="Services | Personal Training Halifax | New Scotland Strength"
        description="Explore personal training, strength coaching, and online coaching services from New Scotland Strength in Halifax, Nova Scotia."
        path="/services"
      />

      <Section
        eyebrow="Services"
        title="Services laid out clearly"
        description="Here are the current offers, what they include, and who they suit best."
      >
        <div className="grid gap-6 xl:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="panel flex h-full flex-col p-5 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
                {service.title}
              </p>
              <p className="mt-3 text-xl font-semibold text-[var(--color-ink)] sm:mt-4 sm:text-2xl">{service.summary}</p>
              <MobileReveal buttonLabel="See service details">
                <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)]">{service.details}</p>
                <div className="mt-6 h-px bg-[var(--color-line)]" />
                <ul className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-[var(--color-text-muted)]">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent)]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 rounded-2xl border border-[var(--color-line)] bg-[rgba(255,250,242,0.72)] px-4 py-4 text-sm leading-6 text-[var(--color-text-muted)]">
                  {service.audience}
                </p>
              </MobileReveal>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Service Fit"
        title="Which option makes the most sense?"
        className="border-y border-[var(--color-line)] bg-[rgba(255,250,242,0.26)]"
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div className="space-y-4">
            <div className="panel p-5 sm:p-6">
              <h2 className="text-xl font-semibold text-[var(--color-ink)]">Choose 1-on-1 sessions if:</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
                You want someone in the room coaching the session, correcting form, and keeping you on track.
              </p>
            </div>
            <div className="panel p-5 sm:p-6">
              <h2 className="text-xl font-semibold text-[var(--color-ink)]">Choose a custom program if:</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
                You want a training plan to follow on your own without booking ongoing coaching.
              </p>
            </div>
            <div className="panel p-5 sm:p-6">
              <h2 className="text-xl font-semibold text-[var(--color-ink)]">Choose online training if:</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
                You want training and meal plan support together, but need the flexibility to train on your own schedule.
              </p>
            </div>
            <div className="panel p-5 sm:p-6">
              <h2 className="text-xl font-semibold text-[var(--color-ink)]">Choose a meal plan if:</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
                You mainly want help getting your nutrition organized without committing to a full coaching package.
              </p>
            </div>
          </div>
          <div className="panel overflow-hidden p-3">
            <img
              src={brandPhotos.servicesEnvironment}
              alt="New Scotland Strength training space and branded environment"
              className="h-full min-h-[260px] w-full rounded-[1.75rem] object-cover sm:min-h-[500px]"
            />
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Pricing"
        title="Current rates"
        description="Current rates for in-person training, online coaching, and standalone programming."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {pricing.map((item) => (
            <article key={item.title} className="panel flex h-full flex-col p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
                {item.title}
              </p>
              <p className="mt-4 text-3xl font-semibold text-[var(--color-ink)]">
                {item.price}
                {item.cadence ? (
                  <span className="text-lg font-medium text-[var(--color-text-subtle)]">
                    {item.cadence}
                  </span>
                ) : null}
              </p>
              <p className="mt-4 text-sm leading-6 text-[var(--color-text-muted)]">{item.note}</p>
            </article>
          ))}
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
        <Link to="/contact" className="btn-primary mt-8 justify-center sm:justify-start">
          Request a Consultation
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Section>

      <CTASection
        title="Not sure which option fits?"
        description="Send a message with your goals, schedule, and training background, and Josh can point you in the right direction."
        secondaryLabel="Read About Josh"
        secondaryTo="/about"
      />
    </>
  );
}
