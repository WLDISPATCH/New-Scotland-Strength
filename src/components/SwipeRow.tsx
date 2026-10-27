import { Children, useCallback, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type SwipeRowProps = {
  children: ReactNode;
  // Grid classes applied from the lg breakpoint up, e.g. "lg:grid-cols-3 lg:gap-6".
  desktopClassName: string;
  // Width and snap classes for each item below lg. Default shows the next card peeking in.
  itemClassName?: string;
  // Show a scroll-position bar instead of the "Swipe for more" hint.
  progress?: boolean;
};

// Sideways-swipe row below lg, regular grid from lg up.
export default function SwipeRow({
  children,
  desktopClassName,
  itemClassName = "w-[85%] snap-start sm:w-[60%]",
  progress = false,
}: SwipeRowProps) {
  const rowRef = useRef<HTMLDivElement | null>(null);
  const [bar, setBar] = useState({ left: 0, width: 100 });

  const updateBar = useCallback(() => {
    const el = rowRef.current;
    if (!el || el.scrollWidth === 0) return;
    const width = Math.min(100, (el.clientWidth / el.scrollWidth) * 100);
    const maxScroll = el.scrollWidth - el.clientWidth;
    const left = maxScroll > 0 ? (el.scrollLeft / maxScroll) * (100 - width) : 0;
    setBar({ left, width });
  }, []);

  useEffect(() => {
    if (!progress) return;
    updateBar();
    window.addEventListener("resize", updateBar);
    return () => window.removeEventListener("resize", updateBar);
  }, [progress, updateBar]);

  return (
    <>
      <div
        ref={rowRef}
        onScroll={progress ? updateBar : undefined}
        className={`no-scrollbar -mx-5 flex snap-x snap-mandatory scroll-px-5 gap-5 overflow-x-auto px-5 pb-2 sm:-mx-6 sm:scroll-px-6 sm:px-6 lg:mx-0 lg:grid lg:overflow-visible lg:px-0 lg:pb-0 ${desktopClassName}`}
      >
        {Children.map(children, (child) => (
          <div className={`shrink-0 lg:w-auto ${itemClassName}`}>{child}</div>
        ))}
      </div>
      {progress ? (
        <div className="mx-auto mt-6 h-1 w-36 overflow-hidden rounded-full bg-[var(--color-line)] lg:hidden" aria-hidden="true">
          <div
            className="h-full rounded-full bg-[var(--color-text-muted)]"
            style={{ width: `${bar.width}%`, marginLeft: `${bar.left}%` }}
          />
        </div>
      ) : (
        <p
          className="mt-3 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-text-subtle)] lg:hidden"
          aria-hidden="true"
        >
          Swipe for more →
        </p>
      )}
    </>
  );
}
