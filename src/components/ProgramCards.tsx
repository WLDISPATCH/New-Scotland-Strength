import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { programs } from "../content/programs";

// The four coaching options as competition "event" cards. The featured one is solid blue.
export default function ProgramCards({ linkTo = "/contact/", linkLabel = "Ask about this" }: { linkTo?: string; linkLabel?: string }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {programs.map((p) => {
        const f = p.featured;
        return (
          <article
            key={p.title}
            className={`flex flex-col border-2 p-6 sm:p-7 ${f ? "on-brand border-brand bg-brand text-white" : "border-iron bg-chalk"}`}
          >
            <p className={`mono ${f ? "text-white/80" : "text-steel"}`}>Event {p.event}</p>
            <h3 className="heading mt-8 text-[2rem] uppercase leading-[0.95]">{p.name}</h3>
            <p className={`mt-3 leading-relaxed ${f ? "text-white/90" : "text-steel"}`}>{p.summary}</p>
            <dl className={`mt-6 border-t ${f ? "border-white/30" : "border-line"}`}>
              {p.specs.slice(0, 3).map(([k, v]) => (
                <div key={k} className={`grid grid-cols-[5.5rem_1fr] gap-3 border-b py-3 ${f ? "border-white/30" : "border-line"}`}>
                  <dt className={`mono pt-0.5 ${f ? "text-white/75" : "text-steel"}`}>{k}</dt>
                  <dd className="text-[0.9375rem] font-medium leading-snug">{v}</dd>
                </div>
              ))}
            </dl>
            <Link
              to={linkTo}
              className="mt-auto flex items-center justify-between pt-8 font-bold uppercase tracking-[0.04em] [font-stretch:112%] hover:underline"
            >
              {linkLabel} <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </article>
        );
      })}
    </div>
  );
}
