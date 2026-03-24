import { brandPhotos } from "../assets/photoLibrary";
import CTASection from "../components/CTASection";
import MobileReveal from "../components/MobileReveal";
import PageMeta from "../components/PageMeta";
import Section from "../components/Section";
import { resultHighlights } from "../content/siteData";

export default function ResultsPage() {
  return (
    <>
      <PageMeta
        title="Results and Testimonials | New Scotland Strength"
        description="Proof, testimonials, and client results for New Scotland Strength personal training and strength coaching in Halifax."
        path="/results"
      />

      <Section
        eyebrow="Results"
        title="Results and proof"
        description="This page is set aside for future client stories, progress photos, and measurable results."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {resultHighlights.map((item) => (
            <article key={item.label} className="panel placeholder-card p-5 text-center sm:p-7">
              <p className="text-3xl font-semibold text-[#8c1d1d] sm:text-4xl">{item.value}</p>
              <p className="mt-3 text-sm leading-6 text-[#8c1d1d]">{item.label}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Testimonials"
        title="Client testimonials"
        className="border-y border-[var(--color-line)] bg-[rgba(255,250,242,0.26)]"
      >
        <div className="grid gap-6 xl:grid-cols-3">
          {[
            "Client feedback will appear here.",
            "Transformation stories will appear here.",
            "Performance milestones will appear here.",
          ].map((item) => (
            <article key={item} className="panel placeholder-card p-5 sm:p-7">
              <p className="text-base leading-7 text-[#8c1d1d] sm:text-lg sm:leading-8">{item}</p>
              <MobileReveal buttonLabel="See more">
                <p className="mt-5 text-sm leading-7 text-[#8c1d1d]">
                  This area is reserved for approved client quotes and measurable outcomes.
                </p>
              </MobileReveal>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Photos"
        title="Training and competition photos"
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="panel overflow-hidden p-3">
            <img
              src={brandPhotos.showcaseLift}
              alt="Josh Dunbar deadlifting on competition floor"
              className="h-full min-h-[280px] w-full rounded-[1.75rem] object-cover sm:min-h-[420px]"
            />
          </div>
          <div className="panel overflow-hidden p-3">
            <img
              src={brandPhotos.resultsWide}
              alt="Josh Dunbar pulling a sled in front of a crowd"
              className="h-full min-h-[280px] w-full rounded-[1.75rem] object-cover sm:min-h-[420px]"
            />
          </div>
        </div>
      </Section>

      <CTASection
        title="Want to talk about coaching?"
        description="If you want to learn more about coaching, the next step is still a conversation."
        secondaryLabel="Contact Josh"
        secondaryTo="/contact"
      />
    </>
  );
}
