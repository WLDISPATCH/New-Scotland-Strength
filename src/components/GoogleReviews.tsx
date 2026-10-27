import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import SwipeRow from "./SwipeRow";
import { googleProfileUrl, googleReviews } from "../content/siteData";
import type { GoogleReview } from "../content/siteData";

const STAR_PATH =
  "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z";

const googleFont = { fontFamily: "Roboto, Arial, sans-serif" };

export const reviewCount = googleReviews.length;
export const averageRating =
  googleReviews.reduce((sum, r) => sum + r.rating, 0) / googleReviews.length;
export const writtenReviews = googleReviews.filter((r) => r.text);

function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

function Stars({ rating, size = "h-4 w-4" }: { rating: number; size?: string }) {
  return (
    <div className="flex" aria-label={`${rating} out of 5 stars`} role="img">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`${size} ${i < Math.round(rating) ? "fill-[#FBBC04]" : "fill-[#dadce0]"}`}
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d={STAR_PATH} />
        </svg>
      ))}
    </div>
  );
}

function timeAgo(year: number) {
  const years = new Date().getFullYear() - year;
  return years <= 1 ? "a year ago" : `${years} years ago`;
}

function ReviewCard({ review }: { review: GoogleReview }) {
  return (
    <article
      className="flex h-full flex-col rounded-3xl border border-[#e8eaed] bg-white p-5 shadow-[0_1px_2px_rgba(60,64,67,0.08)] sm:p-6"
      style={googleFont}
    >
      <div className="flex items-center gap-3">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg font-medium text-white"
          style={{ backgroundColor: review.avatarColor }}
          aria-hidden="true"
        >
          {review.author.charAt(0)}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[15px] font-medium text-[#202124]">{review.author}</p>
          {review.meta ? <p className="text-[13px] text-[#70757a]">{review.meta}</p> : null}
        </div>
        <GoogleLogo className="h-5 w-5 shrink-0" />
      </div>
      <div className="mt-3 flex items-center gap-2">
        <Stars rating={review.rating} />
        <span className="text-[13px] text-[#70757a]">{timeAgo(review.year)}</span>
      </div>
      {review.text ? (
        <p className="mt-3 whitespace-pre-line text-[15px] leading-6 text-[#3c4043]">{review.text}</p>
      ) : null}
    </article>
  );
}

type GoogleReviewsProps = {
  limit?: number;
  gridClassName?: string;
  swipeOnMobile?: boolean;
};

export default function GoogleReviews({
  limit,
  gridClassName = "md:grid-cols-2",
  swipeOnMobile = false,
}: GoogleReviewsProps) {
  const shown = limit ? writtenReviews.slice(0, limit) : writtenReviews;
  const cards = shown.map((review, index) => (
    <Reveal key={review.author} delayMs={index * 90} className="h-full">
      <ReviewCard review={review} />
    </Reveal>
  ));

  return (
    <div>
      <div
        className="mb-6 flex flex-col gap-4 rounded-3xl border border-[#e8eaed] bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
        style={googleFont}
      >
        <div className="flex items-center gap-4">
          <GoogleLogo className="h-9 w-9 shrink-0" />
          <div>
            <p className="text-[15px] font-medium text-[#202124]">Google Reviews</p>
            <div className="mt-1 flex items-center gap-2">
              <span className="text-xl font-medium text-[#202124]">{averageRating.toFixed(1)}</span>
              <Stars rating={averageRating} size="h-5 w-5" />
              <span className="text-[13px] text-[#70757a]">({reviewCount})</span>
            </div>
          </div>
        </div>
        <a
          href={googleProfileUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-[#dadce0] px-5 py-2.5 text-sm font-medium text-[#1a73e8] transition hover:bg-[#f8f9fa]"
        >
          See all reviews on Google
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      {swipeOnMobile ? (
        <SwipeRow desktopClassName={`${gridClassName} lg:gap-5`}>{cards}</SwipeRow>
      ) : (
        <div className={`grid gap-5 ${gridClassName}`}>{cards}</div>
      )}
    </div>
  );
}
