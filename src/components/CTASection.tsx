import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { business } from "../content/siteData";
import { keepDash } from "./keepDash";
import Label from "./Label";

type CTASectionProps = {
  title: string;
  description: string;
  label?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
};

// Closing call to action shared by every page: a full-width blue band with a
// full-width headline, then the description and buttons beneath it.
export default function CTASection({
  title,
  description,
  label = "Your first rep",
  primaryLabel = "Book a consultation",
  primaryTo = "/contact/",
  secondaryLabel,
  secondaryTo = "/services/",
}: CTASectionProps) {
  return (
    <section className="on-brand bg-brand text-white">
      <div className="wrap py-20 lg:py-28">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-white/40 pb-3">
          <Label className="text-white/80">{label}</Label>
          <a href={`mailto:${business.email}`} className="mono break-all text-white/80 underline-offset-4 hover:text-white hover:underline">
            {business.email}
          </a>
        </div>
        <h2 className="display mt-10 text-[clamp(1.5rem,7.6vw,3.5rem)] sm:text-[clamp(2.5rem,7vw,6.5rem)]">{keepDash(title)}</h2>
        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-8">
          <p className="max-w-xl text-lg leading-relaxed text-white/90 lg:col-span-6">{description}</p>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-6 lg:justify-end">
            <Link to={primaryTo} className="btn btn-chalk">
              {primaryLabel} <ArrowRight className="arrow h-4 w-4" aria-hidden="true" />
            </Link>
            {secondaryLabel ? (
              <Link to={secondaryTo} className="btn btn-chalk-line">
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
