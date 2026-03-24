import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

export default function Section({
  eyebrow,
  title,
  description,
  children,
  className = "",
  containerClassName = "",
}: SectionProps) {
  return (
    <section className={`py-14 sm:py-20 lg:py-24 ${className}`.trim()}>
      <div className={`mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 ${containerClassName}`.trim()}>
        {(eyebrow || title || description) && (
          <Reveal className="mb-8 max-w-3xl sm:mb-12 lg:mb-14">
            {eyebrow ? (
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-accent)]/90">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl md:text-5xl">
                {title}
              </h2>
            ) : null}
            {description ? (
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--color-text-muted)] sm:mt-4 sm:text-lg">
                {description}
              </p>
            ) : null}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
