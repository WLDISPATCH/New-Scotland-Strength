import type { ReactNode } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

type MobileRevealProps = {
  buttonLabel?: string;
  children: ReactNode;
  className?: string;
};

export default function MobileReveal({
  buttonLabel = "Show details",
  children,
  className = "",
}: MobileRevealProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={className}>
      <div className="sm:hidden">
        {open ? <div>{children}</div> : null}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-ink)]"
        >
          {open ? "Show less" : buttonLabel}
          {open ? (
            <ChevronUp className="h-4 w-4 text-[var(--color-accent)]" />
          ) : (
            <ChevronDown className="h-4 w-4 text-[var(--color-accent)]" />
          )}
        </button>
      </div>

      <div className="hidden sm:block">{children}</div>
    </div>
  );
}
