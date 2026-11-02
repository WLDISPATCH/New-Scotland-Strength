import type { ReactNode } from "react";
import { keepDash } from "./keepDash";
import Label from "./Label";

type PageHeroProps = {
  label: string;
  // Right-hand text in the top rule, e.g. the location.
  meta?: string;
  // Short, wide display word set above the H1.
  kicker: string;
  title: string;
  lede?: ReactNode;
  actions?: ReactNode;
  aside?: ReactNode;
};

// Opening section for inner pages: a ruled meta line, a big display kicker, the page's H1,
// and a right-hand panel that each page fills with its own content.
export default function PageHero({ label, meta = "Halifax, N.S.", kicker, title, lede, actions, aside }: PageHeroProps) {
  return (
    <section className="wrap pb-16 pt-8 sm:pt-12 lg:pb-24">
      <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-2 border-b-2 border-iron pb-3 text-steel">
        <Label>{label}</Label>
        <p className="mono">{meta}</p>
      </div>

      <div className={`mt-10 grid gap-12 lg:mt-14 lg:gap-8 ${aside ? "lg:grid-cols-12" : ""}`}>
        <div className={aside ? "lg:col-span-7" : "max-w-5xl"}>
          <p className="display text-[clamp(2rem,10.5vw,3.25rem)] text-brand sm:text-[clamp(3rem,6.4vw,5.75rem)]" aria-hidden="true">
            {kicker}
          </p>
          <h1 className="heading mt-6 max-w-3xl text-[1.875rem] sm:text-[2.5rem] lg:text-[2.75rem]">{keepDash(title)}</h1>
          {lede ? <div className="mt-6 max-w-2xl text-lg leading-relaxed text-steel">{lede}</div> : null}
          {actions ? <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">{actions}</div> : null}
        </div>
        {aside ? <div className="lg:col-span-5 lg:pl-4 xl:pl-10">{aside}</div> : null}
      </div>
    </section>
  );
}
