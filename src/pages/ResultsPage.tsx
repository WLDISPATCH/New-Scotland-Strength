import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { galleryPhotos, shuffled } from "../assets/photoLibrary";
import CTASection from "../components/CTASection";
import { RatingBoard, ReviewCard, writtenReviews } from "../components/GoogleReviews";
import Label from "../components/Label";
import PageHero from "../components/PageHero";
import PageMeta from "../components/PageMeta";
import SectionHead from "../components/SectionHead";
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

      <PageHero
        label="Client results"
        kicker="The results"
        title="Client Results — Personal Training in Halifax, NS"
        lede={<p>Coaching works when it fits real life. Here is what clients have said on Google.</p>}
        actions={
          <a href="#reviews" className="btn btn-line">
            Read the reviews
          </a>
        }
        aside={
          <div>
            <RatingBoard />
            <p className="mono mt-3 text-steel">Reviews are copied word for word from Google</p>
          </div>
        }
      />

      {/* Featured testimonial */}
      <section className="on-dark bg-iron text-chalk">
        <figure className="wrap grid gap-8 py-20 lg:grid-cols-12 lg:gap-8 lg:py-28">
          <div className="lg:col-span-3">
            <Label className="text-brand-light">Client story</Label>
            <p className="display mt-4 text-[6rem] leading-[0.7] text-brand-light sm:text-[9rem]" aria-hidden="true">
              “
            </p>
          </div>
          <div className="lg:col-span-9">
            <blockquote className="heading text-[1.625rem] font-semibold leading-[1.2] [font-stretch:100%] sm:text-[2.25rem] lg:text-[2.625rem]">
              {clientTestimonial.quote}
            </blockquote>
            <figcaption className="mt-8 flex flex-wrap items-baseline gap-x-4 gap-y-1 border-t border-line-dark pt-5">
              <span className="heading text-xl uppercase">{clientTestimonial.author}</span>
              <span className="mono text-steel-light">New Scotland Strength client</span>
            </figcaption>
          </div>
        </figure>
      </section>

      {/* Google reviews */}
      <section id="reviews" className="wrap scroll-mt-20 py-20 lg:py-28">
        <SectionHead label="On Google" title="In their words." intro="What clients have written about training with Josh." />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {writtenReviews.map((review, i) => (
            <ReviewCard key={review.author} review={review} index={i} />
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-chalk-2 py-20 lg:py-28">
        <div className="wrap">
          <SectionHead
            label="Photos"
            title="Photo finish."
            intro="Josh and New Scotland Strength athletes in training and competition."
          />
          <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
            {gallery.map((photo, i) => (
              <figure key={photo.src} className="mb-6 break-inside-avoid">
                <img src={photo.src} alt={photo.alt} loading="lazy" className="w-full" />
                <figcaption className="mt-2 flex gap-3 text-[0.9375rem] leading-snug text-steel">
                  <span className="mono pt-0.5 text-brand">{String(i + 1).padStart(2, "0")}</span>
                  <span>{photo.alt}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <Link to="/contact/" className="btn btn-brand mt-8">
            Start your own <ArrowRight className="arrow h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <CTASection
        title="Want results like this?"
        description="The next step is a conversation about your goals and what kind of support makes sense for where you are now."
        secondaryLabel="View services"
        secondaryTo="/services/"
      />
    </>
  );
}
