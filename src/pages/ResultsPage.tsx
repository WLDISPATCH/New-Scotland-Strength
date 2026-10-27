import { brandPhotos } from "../assets/photoLibrary";
import CTASection from "../components/CTASection";
import GoogleReviews, { averageRating, reviewCount, writtenReviews } from "../components/GoogleReviews";
import PageMeta from "../components/PageMeta";
import Section from "../components/Section";

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
