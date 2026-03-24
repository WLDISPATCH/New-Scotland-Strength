import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";

type CTASectionProps = {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
};

export default function CTASection({
  title,
  description,
  primaryLabel = "Book a Consultation",
  primaryTo = "/contact",
  secondaryLabel,
  secondaryTo = "/services",
}: CTASectionProps) {
  return (
    <section className="py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-[1.75rem] border border-[var(--color-line)] bg-[radial-gradient(circle_at_top_left,rgba(159,103,52,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(110,85,48,0.12),transparent_30%),linear-gradient(135deg,rgba(255,250,242,0.98),rgba(244,233,216,0.96))] p-6 shadow-[0_28px_70px_rgba(78,51,25,0.16)] sm:rounded-[2rem] sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-end">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-accent)]">
                Start Strong
              </p>
              <h2 className="max-w-3xl text-2xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
                {title}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--color-text-muted)] sm:mt-4 sm:text-lg">
                {description}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link to={primaryTo} className="btn-primary justify-center sm:justify-start">
                {primaryLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
              {secondaryLabel ? (
                <Link to={secondaryTo} className="btn-secondary justify-center sm:justify-start">
                  {secondaryLabel}
                </Link>
              ) : null}
            </div>
          </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
