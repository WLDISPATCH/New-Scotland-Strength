import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { keepDash } from "./keepDash";

type CTASectionProps = {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
};

// Closing call to action shared by every page: one dark band, heading left, actions right.
export default function CTASection({
  title,
  description,
  primaryLabel = "Book a Consultation",
  primaryTo = "/contact/",
  secondaryLabel,
  secondaryTo = "/services/",
}: CTASectionProps) {
  return (
    <section className="on-dark bg-[var(--color-dark)] text-[var(--color-on-dark)]">
      <div className="wrap grid gap-8 py-16 sm:py-20 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16 lg:py-24">
        <div>
          <h2 className="heading max-w-2xl !text-[var(--color-on-dark)]">{keepDash(title)}</h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-[var(--color-on-dark-muted)]">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to={primaryTo} className="btn-primary justify-center">
            {primaryLabel}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          {secondaryLabel ? (
            <Link to={secondaryTo} className="btn-secondary justify-center">
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
