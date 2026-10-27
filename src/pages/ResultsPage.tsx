import { useState } from "react";
import { galleryPhotos, shuffled } from "../assets/photoLibrary";
import CTASection from "../components/CTASection";
import GoogleReviews, { averageRating, reviewCount, writtenReviews } from "../components/GoogleReviews";
import PageMeta from "../components/PageMeta";
import Section from "../components/Section";
import { clientTestimonial } from "../content/siteData";

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "New Scotland Strength",
  url: "https://www.newscotlandstrength.com/",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: averageRating.toFixed(1),
    reviewCount,
    bestRating: 5,
    worstRating: 1,
  },
  review: writtenReviews.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.author },
    reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
    reviewBody: r.text,
    publisher: { "@type": "Organization", name: "Google" },
  })),
};

export default function ResultsPage() {
  const [gallery] = useState(() => shuffled(galleryPhotos));

  return (
    <>
      <PageMeta
        title="Client Results and Testimonials | Personal Training Halifax | New Scotland Strength"
        description="Read client testimonials and results from New Scotland Strength personal training in Halifax, NS. Real outcomes from real clients in Halifax, Dartmouth, and beyond."
        path="/results"
      />

      {/* BreadcrumbList schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.newscotlandstrength.com/" },
              { "@type": "ListItem", "position": 2, "name": "Results", "item": "https://www.newscotlandstrength.com/results" }
            ]
          })
        }}
      />

      {/* AggregateRating + Review schema built from the Google reviews shown on this page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <Section
        eyebrow="Google Reviews"
        titleAs="h1"
        title="Client Results — Personal Training in Halifax, NS"
        description="Coaching works when it fits real life. Here is what clients have said on Google."
      >
        <GoogleReviews />
        <figure className="panel mt-10 p-6 sm:p-10">
          <p className="font-[family-name:var(--font-heading)] text-5xl leading-none text-[var(--color-accent)]" aria-hidden="true">
            “
          </p>
          <blockquote className="mt-2 text-lg leading-8 text-[var(--color-ink)] sm:text-xl sm:leading-9">
            {clientTestimonial.quote}
          </blockquote>
          <figcaption className="mt-5 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
            {clientTestimonial.author} · Client
          </figcaption>
        </figure>
      </Section>

      <Section
        eyebrow="Photos"
        title="Training and competition"
        className="border-y border-[var(--color-line)] bg-[rgba(255,250,242,0.26)]"
      >
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {gallery.map((photo) => (
            <figure key={photo.src} className="panel mb-5 break-inside-avoid overflow-hidden p-2.5">
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="block w-full rounded-[1.4rem]"
              />
            </figure>
          ))}
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
