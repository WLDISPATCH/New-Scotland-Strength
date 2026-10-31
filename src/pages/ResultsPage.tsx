import { useState } from "react";
import { galleryPhotos, shuffled } from "../assets/photoLibrary";
import CTASection from "../components/CTASection";
import GoogleReviews from "../components/GoogleReviews";
import PageMeta from "../components/PageMeta";
import Section from "../components/Section";
import { clientTestimonial } from "../content/siteData";

export default function ResultsPage() {
  const [gallery] = useState(() => shuffled(galleryPhotos));

  return (
    <>
      <PageMeta path="/results/" />

      {/* BreadcrumbList schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://newscotlandstrength.ca/" },
              { "@type": "ListItem", "position": 2, "name": "Results", "item": "https://newscotlandstrength.ca/results/" }
            ]
          })
        }}
      />

      <Section
        eyebrow="Google Reviews"
        titleAs="h1"
        title="Client Results — Personal Training in Halifax, NS"
        description="Coaching works when it fits real life. Here is what clients have said on Google."
        spacing="page"
      >
        <GoogleReviews />
        <figure className="mt-16 grid gap-6 border-t-2 border-[var(--color-ink)] pt-10 sm:mt-20 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <figcaption className="order-last lg:order-none">
            <p className="font-[family-name:var(--font-display)] text-2xl font-bold">{clientTestimonial.author}</p>
            <p className="mt-1 text-[var(--color-text-muted)]">New Scotland Strength client</p>
          </figcaption>
          <blockquote className="text-xl font-medium leading-relaxed text-[var(--color-ink)] sm:text-2xl sm:leading-relaxed">
            <span className="mr-1 font-[family-name:var(--font-display)] text-[var(--color-accent)]" aria-hidden="true">
              “
            </span>
            {clientTestimonial.quote}
            <span className="ml-0.5 font-[family-name:var(--font-display)] text-[var(--color-accent)]" aria-hidden="true">
              ”
            </span>
          </blockquote>
        </figure>
      </Section>

      <Section eyebrow="Photos" title="Training and competition" tone="alt">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {gallery.map((photo) => (
            <img
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="photo mb-4 break-inside-avoid"
            />
          ))}
        </div>
      </Section>

      <CTASection
        title="Want results like this?"
        description="The next step is a conversation about your goals and what kind of support makes sense for where you are now."
        secondaryLabel="Contact Josh"
        secondaryTo="/contact/"
      />
    </>
  );
}
