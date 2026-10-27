import { Children } from "react";
import type { ReactNode } from "react";

type SwipeRowProps = {
  children: ReactNode;
  // Grid classes applied from the lg breakpoint up, e.g. "lg:grid-cols-3 lg:gap-6".
  desktopClassName: string;
};

// Sideways-swipe row below lg (next card peeks in), regular grid from lg up.
export default function SwipeRow({ children, desktopClassName }: SwipeRowProps) {
  return (
    <>
      <div
        className={`no-scrollbar -mx-5 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-2 sm:-mx-6 sm:scroll-px-6 sm:px-6 lg:mx-0 lg:grid lg:overflow-visible lg:px-0 lg:pb-0 ${desktopClassName}`}
      >
        {Children.map(children, (child) => (
          <div className="w-[85%] shrink-0 snap-start sm:w-[60%] lg:w-auto">{child}</div>
        ))}
      </div>
      <p
        className="mt-3 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-text-subtle)] lg:hidden"
        aria-hidden="true"
      >
        Swipe for more →
      </p>
    </>
  );
}
