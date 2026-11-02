import { ArrowDown, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import CTASection from "../components/CTASection";
import PageHero from "../components/PageHero";
import PageMeta from "../components/PageMeta";
import { faqItems } from "../content/siteData";

// Topic for each question. Any question not listed here falls into "More questions",
// so new FAQ entries still appear.
const topics: { id: string; title: string; questions: string[] }[] = [
  {
    id: "location",
    title: "Location",
    questions: ["Where is New Scotland Strength located?", "Do you offer personal training in Dartmouth or Bedford?"],
  },
  {
    id: "coach",
    title: "The coach",
    questions: [
      "What experience does Josh Dunbar have as a coach?",
      "What makes New Scotland Strength different from a regular gym trainer?",
      "Should I hire a personal trainer or follow a free program online?",
    ],
  },
  {
    id: "who",
    title: "Who it's for",
    questions: [
      "Do you work with beginners?",
      "Do you train older adults?",
      "Can you help with weight loss, not just strength training?",
      "Do you train athletes preparing for competition?",
      "What if I have an injury or physical limitation?",
    ],
  },
  {
    id: "training",
    title: "Training",
    questions: [
      "What happens in the first session or check-in?",
      "How long does it take to see results?",
      "How often should I train per week with a coach?",
    ],
  },
  {
    id: "online",
    title: "Online coaching",
    questions: [
      "Is online coaching available outside Halifax?",
      "What equipment do I need for online coaching?",
      "How do online check-ins work?",
    ],
  },
  {
    id: "logistics",
    title: "Logistics",
    questions: [
      "Do I need my own gym membership for in-person sessions?",
      "How do I pay for coaching?",
      "Can I pause or change my plan?",
    ],
  },
];

const assigned = new Set(topics.flatMap((t) => t.questions));
const leftovers = faqItems.filter((f) => !assigned.has(f.question));
const groups = [
  ...topics.map((t) => ({ ...t, items: faqItems.filter((f) => t.questions.includes(f.question)) })),
  ...(leftovers.length ? [{ id: "more", title: "More questions", questions: [], items: leftovers }] : []),
].filter((g) => g.items.length > 0);

export default function FaqPage() {
  // Build JSON-LD FAQ schema for rich search result snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const topicIndex = (
    <ol>
      {groups.map((g, i) => (
        <li key={g.id} className="border-b border-line last:border-0">
          <a href={`#${g.id}`} className="group grid grid-cols-[3rem_1fr_auto] items-center gap-3 px-4 py-3 transition-colors hover:bg-chalk-2">
            <span className="mono text-brand">{String(i + 1).padStart(2, "0")}</span>
            <span className="font-semibold">{g.title}</span>
            <span className="mono text-steel">{g.items.length}</span>
          </a>
        </li>
      ))}
    </ol>
  );

  return (
    <>
      <PageMeta path="/faq/" />

      {/* BreadcrumbList schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://newscotlandstrength.ca/" },
              { "@type": "ListItem", "position": 2, "name": "FAQ", "item": "https://newscotlandstrength.ca/faq/" }
            ]
          })
        }}
      />

      {/* FAQ schema for rich search snippets */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        label="Questions"
        kicker="Fair questions"
        title="Personal Training FAQ — Halifax, NS"
        lede={
          <p>
            If something is not covered here, use the{" "}
            <Link to="/contact/" className="text-link text-iron">
              contact page
            </Link>{" "}
            to ask directly.
          </p>
        }
        aside={
          <nav aria-label="FAQ topics" className="border-2 border-iron">
            <p className="mono flex justify-between bg-iron px-4 py-2 text-chalk">
              <span>Topics</span>
              <span className="text-brand-light">{faqItems.length} answers</span>
            </p>
            {topicIndex}
          </nav>
        }
      />

      <div className="border-t-2 border-iron">
        <div className="wrap grid gap-12 py-16 lg:grid-cols-12 lg:gap-8 lg:py-24">
          <aside className="hidden lg:col-span-3 lg:block">
            <nav aria-label="Jump to topic" className="sticky top-28">
              <p className="mono text-steel">Jump to</p>
              <ul className="mt-4 border-t-2 border-iron">
                {groups.map((g) => (
                  <li key={g.id} className="border-b border-line">
                    <a href={`#${g.id}`} className="flex items-center justify-between py-3 font-semibold transition-colors hover:text-brand">
                      {g.title}
                      <ArrowDown className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <div className="space-y-16 lg:col-span-9 lg:pl-8 xl:pl-12">
            {groups.map((g, gi) => (
              <section key={g.id} id={g.id} aria-labelledby={`${g.id}-title`} className="scroll-mt-24">
                <div className="flex items-baseline gap-4 border-b-2 border-iron pb-3">
                  <span className="mono text-brand">{String(gi + 1).padStart(2, "0")}</span>
                  <h2 id={`${g.id}-title`} className="display text-[clamp(1.75rem,7vw,2.75rem)]">
                    {g.title}
                  </h2>
                </div>
                {g.items.map((item) => (
                  <details key={item.question} className="border-b border-line">
                    <summary className="flex items-center justify-between gap-6 py-5">
                      <h3 className="heading text-[1.25rem] [font-stretch:100%] [text-wrap:pretty] sm:text-[1.5rem]">{item.question}</h3>
                      <Plus className="faq-icon h-6 w-6 shrink-0 text-brand" aria-hidden="true" />
                    </summary>
                    <p className="max-w-3xl pb-6 text-lg leading-relaxed text-steel">{item.answer}</p>
                  </details>
                ))}
              </section>
            ))}
          </div>
        </div>
      </div>

      <CTASection
        title="Still have a question?"
        description="If your question is not here, reach out directly and Josh will get back to you within 48 hours."
        secondaryLabel="Contact Josh"
        secondaryTo="/contact/"
      />
    </>
  );
}
