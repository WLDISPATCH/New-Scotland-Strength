import { ArrowUpRight } from "lucide-react";
import { googleProfileUrl, googleReviews } from "../content/siteData";
import type { GoogleReview } from "../content/siteData";

export const reviewCount = googleReviews.length;
export const averageRating = googleReviews.reduce((sum, r) => sum + r.rating, 0) / googleReviews.length;
export const writtenReviews = googleReviews.filter((r) => r.text);

export function Stars({ rating = 5, className = "h-5 w-5" }: { rating?: number; className?: string }) {
  return (
    <span className="flex" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className={`${className} ${i < Math.round(rating) ? "" : "opacity-25"}`} aria-hidden="true">
          <path fill="currentColor" d="M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3.1-5.4 3.1 1.2-6L1.3 7.8l6.1-.7z" />
        </svg>
      ))}
    </span>
  );
}

// Google only shows relative dates, so we store the approximate year posted.
function timeAgo(year: number) {
  const years = new Date().getFullYear() - year;
  if (years <= 0) return "this year";
  return years === 1 ? "a year ago" : `${years} years ago`;
}

// Big "5.0" scoreboard that links to the Google profile.
export function RatingBoard({ className = "" }: { className?: string }) {
  return (
    <a
      href={googleProfileUrl}
      target="_blank"
      rel="noreferrer"
      className={`group block border-2 border-iron p-6 transition-colors hover:bg-iron hover:text-chalk ${className}`}
    >
      <p className="mono">Google reviews</p>
      <div className="mt-4 flex flex-wrap items-end gap-x-4 gap-y-1">
        <span className="display text-[4rem] sm:text-[5rem]">{averageRating.toFixed(1)}</span>
        <span className="mb-3 text-brand group-hover:text-brand-light">
          <Stars rating={averageRating} className="h-6 w-6" />
        </span>
      </div>
      <p className="mt-2 flex items-center gap-2 font-semibold">
        Read all {reviewCount} reviews on Google <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </p>
    </a>
  );
}

// One review, copied verbatim from Google.
export function ReviewCard({ review, index }: { review: GoogleReview; index?: number }) {
  return (
    <figure className="flex h-full flex-col border-2 border-iron bg-chalk p-6">
      <div className="flex items-center justify-between gap-4">
        <span className="text-brand">
          <Stars rating={review.rating} className="h-4 w-4" />
        </span>
        {index !== undefined ? <span className="mono text-steel">No. {String(index + 1).padStart(2, "0")}</span> : null}
      </div>
      <blockquote className="mt-5 whitespace-pre-line leading-relaxed">“{review.text}”</blockquote>
      <figcaption className="mt-auto pt-6">
        <p className="heading text-lg uppercase">{review.author}</p>
        <p className="mono mt-1 text-steel">
          Google · {timeAgo(review.year)}
          {review.meta ? ` · ${review.meta}` : ""}
        </p>
      </figcaption>
    </figure>
  );
}
