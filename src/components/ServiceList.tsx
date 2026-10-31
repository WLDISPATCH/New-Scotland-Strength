import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "../content/siteData";

type ServiceListProps = {
  // Show the longer description (from sm up on Home, always on Services).
  details?: "never" | "desktop" | "always";
  showLink?: boolean;
};

// The four coaching options as a ruled two-by-two grid instead of boxed cards.
export default function ServiceList({ details = "always", showLink = false }: ServiceListProps) {
  const detailsClass = details === "desktop" ? "hidden sm:block" : details === "always" ? "" : "hidden";

  return (
    <div className="grid border-b border-[var(--color-line-strong)] md:grid-cols-2 md:gap-x-12 lg:gap-x-16">
      {services.map((service, index) => (
        <article
          key={service.title}
          className="flex flex-col border-t border-[var(--color-line-strong)] py-6 sm:py-10"
        >
          <div className="flex items-baseline gap-4">
            <span className="font-[family-name:var(--font-display)] text-base font-semibold text-[var(--color-accent)]" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="font-[family-name:var(--font-display)] text-[1.75rem] font-bold leading-tight sm:text-[2rem]">
              {service.title}
            </h3>
          </div>
          <p className="mt-3 text-lg leading-relaxed text-[var(--color-ink-soft)]">{service.summary}</p>
          <p className={`mt-3 leading-relaxed text-[var(--color-text-muted)] ${detailsClass}`}>{service.details}</p>
          <ul
            className={`mt-5 flex-wrap gap-x-6 gap-y-2 text-[0.9375rem] font-medium text-[var(--color-ink-soft)] ${
              details === "desktop" ? "hidden sm:flex" : "flex"
            }`}
          >
            {service.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 shrink-0 bg-[var(--color-accent)]" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
          {showLink ? (
            <Link
              to="/services/"
              className={`text-link mt-6 self-start text-[0.9375rem] ${details === "desktop" ? "hidden sm:inline-flex" : ""}`}
            >
              Service details
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          ) : null}
        </article>
      ))}
    </div>
  );
}
