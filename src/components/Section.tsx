import type { ReactNode } from "react";
import { keepDash } from "./keepDash";

type SectionProps = {
  eyebrow?: string;
  title?: string;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  titleAs?: "h1" | "h2";
  // Background band: page paper, a slightly deeper paper, or dark ink.
  tone?: "default" | "alt" | "dark";
  // Vertical padding. "page" is the opening section of an inner page.
  spacing?: "default" | "tight" | "page";
};

const toneClass = {
  default: "",
  alt: "bg-[var(--color-bg-alt)]",
  dark: "on-dark bg-[var(--color-dark)] text-[var(--color-on-dark)]",
};

const spacingClass = {
  default: "py-16 sm:py-20 lg:py-28",
  tight: "py-12 sm:py-16",
  page: "pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24",
};

export default function Section({
  eyebrow,
  title,
  description,
  children,
  className = "",
  containerClassName = "",
  titleAs = "h2",
  tone = "default",
  spacing = "default",
}: SectionProps) {
  const TitleTag = titleAs;
  const isDark = tone === "dark";
  const titleClass =
    titleAs === "h1"
      ? "max-w-4xl font-[family-name:var(--font-display)] text-[2.5rem] font-bold leading-[0.98] tracking-[-0.01em] sm:text-[3.25rem] lg:text-[4rem]"
      : "heading max-w-3xl";

  return (
    <section className={`${spacingClass[spacing]} ${toneClass[tone]} ${className}`.trim()}>
      <div className={`wrap ${containerClassName}`.trim()}>
        {(eyebrow || title || description) && (
          <header className="mb-10 sm:mb-12 lg:mb-14">
            {eyebrow ? (
              <p className={`eyebrow mb-3 ${isDark ? "!text-[var(--color-accent-light)]" : ""}`}>{eyebrow}</p>
            ) : null}
            {title ? (
              <TitleTag className={`${titleClass} ${isDark ? "!text-[var(--color-on-dark)]" : ""}`}>{keepDash(title)}</TitleTag>
            ) : null}
            {description ? (
              <p
                className={`mt-4 max-w-2xl text-lg leading-relaxed sm:mt-5 ${
                  isDark ? "text-[var(--color-on-dark-muted)]" : "text-[var(--color-text-muted)]"
                }`}
              >
                {description}
              </p>
            ) : null}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
