import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

type ExpandableCopyProps = {
  preview: string;
  full: string;
  buttonLabel?: string;
  className?: string;
};

export default function ExpandableCopy({
  preview,
  full,
  buttonLabel = "Read more",
  className = "",
}: ExpandableCopyProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={className}>
      <div className="sm:hidden">
        <p className="text-base leading-7 text-[var(--color-text-muted)]">
          {expanded ? full : preview}
        </p>
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-ink)]"
        >
          {expanded ? "Show less" : buttonLabel}
          {expanded ? (
            <ChevronUp className="h-4 w-4 text-[var(--color-accent)]" />
          ) : (
            <ChevronDown className="h-4 w-4 text-[var(--color-accent)]" />
          )}
        </button>
      </div>

      <p className="hidden text-base leading-8 text-[var(--color-text-muted)] sm:block sm:text-lg">
        {full}
      </p>
    </div>
  );
}
