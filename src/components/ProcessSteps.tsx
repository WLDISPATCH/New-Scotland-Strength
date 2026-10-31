import { processSteps } from "../content/siteData";

type ProcessStepsProps = {
  // "four" lays the steps out in one row on desktop; "two" keeps a two-by-two grid.
  columns?: "four" | "two";
};

// The four-step coaching process as numbered, ruled steps rather than boxes.
export default function ProcessSteps({ columns = "four" }: ProcessStepsProps) {
  const grid = columns === "four" ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2";

  return (
    <ol className={`grid gap-x-8 ${grid}`}>
      {processSteps.map((step, index) => (
        <li key={step} className="flex gap-5 border-t border-[var(--color-line-strong)] py-6 sm:block sm:pb-8">
          <span
            className="w-10 shrink-0 font-[family-name:var(--font-display)] text-[2rem] font-bold leading-none text-[var(--color-accent)] sm:block sm:w-auto sm:text-[2.75rem]"
            aria-hidden="true"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <p className="text-lg font-medium leading-snug text-[var(--color-ink)] sm:mt-4">{step}</p>
        </li>
      ))}
    </ol>
  );
}
