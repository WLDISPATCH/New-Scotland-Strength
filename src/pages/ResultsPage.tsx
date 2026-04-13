import { brandPhotos } from "../assets/photoLibrary";
import CTASection from "../components/CTASection";
import PageMeta from "../components/PageMeta";
import Reveal from "../components/Reveal";
import Section from "../components/Section";
import { testimonials } from "../content/siteData";

export default function ResultsPage() {
  return (
    <>
      <PageMeta
        title="Results and Testimonials | New Scotland Strength"
        description="Client testimonials and results for New Scotland Strength personal training and strength coaching in Halifax, Nova Scotia."
        path="/results"
      />

      <Section
        eyebrow="Testimonials"
        title="What clients say about working with Josh"
        description="Coaching works when it fits real life. Here is what clients have experienced."
      >
        <div className="grid gap-6 xl:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delayMs={index * 90} className="h-full">
              <article className="panel flex h-full flex-col p-6 sm:p-8">
                <div className="flex gap-1 text-[var(--color-accent)]" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-base leading-8 text-[var(--color-ink)] sm:text-lg sm:leading-9">
                  "{item.quote}"
                </blockquote>
                <div className="mt-6 border-t border-[var(--color-line)] pt-5">
                  <p className="font-semibold text-[var(--color-ink)]">{item.name}</p>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">{item.role}</p>
                  <p className="mt-3 text-sm leading-6 text-[var(--color-text-subtle)] italic">{item.outcome}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Photos"
        title="Training and competition"
        className="border-y border-[var(--color-line)] bg-[rgba(255,250,242,0.26)]"
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="panel overflow-hidden p-3">
            <img
              src={brandPhotos.showcaseLift}
              alt="Josh Dunbar deadlifting on competition floor"
              loading="lazy"
              className="h-full min-h-[280px] w-full rounded-[1.75rem] object-cover sm:min-h-[420px]"
            />
          </div>
          <div className="grid gap-6">
            <div className="panel overflow-hidden p-3">
              <img
                src={brandPhotos.resultsWide}
                alt="Josh Dunbar pulling a sled in front of a crowd"
                loading="lazy"
                className="h-full min-h-[200px] w-full rounded-[1.75rem] object-cover"
              />
            </div>
            <div className="panel overflow-hidden p-3">
              <img
                src={brandPhotos.showcaseCarry}
                alt="Josh Dunbar carrying a yoke during competition"
                loading="lazy"
                className="h-full min-h-[200px] w-full rounded-[1.75rem] object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      <CTASection
        title="Want results like this?"
        description="The next step is a conversation about your goals and what kind of support makes sense for where you are now."
        secondaryLabel="Contact Josh"
        secondaryTo="/contact"
      />
    </>
  );
}
