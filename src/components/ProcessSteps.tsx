import { processSteps } from "../content/siteData";

// The four-step coaching process as a ruled grid with big blue numerals.
export default function ProcessSteps() {
  return (
    <ol className="grid gap-px border-2 border-iron bg-iron sm:grid-cols-2 lg:grid-cols-4">
      {processSteps.map((step, index) => (
        <li key={step} className="flex flex-col gap-8 bg-chalk p-6 sm:min-h-[16rem] sm:p-8">
          <div className="flex items-baseline justify-between">
            <span className="display text-[3.5rem] text-brand">{String(index + 1).padStart(2, "0")}</span>
            <span className="mono text-steel">Step {index + 1} / {processSteps.length}</span>
          </div>
          <p className="mt-auto text-lg font-medium leading-snug">{step}</p>
        </li>
      ))}
    </ol>
  );
}
