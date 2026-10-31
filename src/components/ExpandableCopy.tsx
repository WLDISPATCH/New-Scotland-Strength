import { ChevronDown } from "lucide-react";
import { useState } from "react";

type ExpandableCopyProps = {
  preview: string;
  full: string;
  buttonLabel?: string;
  className?: string;
  textClassName?: string;
};

// Short preview with a toggle on phones; the full text from sm up.
export default function ExpandableCopy({
  preview,
  full,
  buttonLabel = "Read more",
  className = "",
  textClassName = "text-lg leading-relaxed text-[var(--color-text-muted)] sm:text-xl",
}: ExpandableCopyProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={className}>
      <div className="sm:hidden">
        <p className={textClassName}>{expanded ? full : preview}</p>
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
          className="mt-2 inline-flex min-h-11 items-center gap-1.5 text-[0.9375rem] font-semibold text-[var(--color-ink)]"
        >
          {expanded ? "Show less" : buttonLabel}
          <ChevronDown
            className={`h-4 w-4 text-[var(--color-accent)] transition-transform ${expanded ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </button>
      </div>

      <p className={`hidden sm:block ${textClassName}`}>{full}</p>
    </div>
  );
}
