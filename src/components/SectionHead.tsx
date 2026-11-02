import type { ReactNode } from "react";
import Label from "./Label";

type SectionHeadProps = {
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  // Light text for iron or blue sections.
  onDark?: boolean;
  className?: string;
};

// Label + wide display title, with an optional intro set to the right on desktop.
export default function SectionHead({ label, title, intro, onDark = false, className = "" }: SectionHeadProps) {
  return (
    <div className={`flex flex-col justify-between gap-6 lg:flex-row lg:items-end lg:gap-16 ${className}`}>
      <div>
        <Label className={onDark ? "text-brand-light" : "text-brand"}>{label}</Label>
        <h2 className="display display-section mt-4 max-w-4xl">{title}</h2>
      </div>
      {intro ? (
        <p className={`max-w-md text-lg leading-relaxed lg:pb-1 ${onDark ? "text-steel-light" : "text-steel"}`}>{intro}</p>
      ) : null}
    </div>
  );
}
