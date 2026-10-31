import { useState } from "react";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import CTASection from "../components/CTASection";
import PageMeta from "../components/PageMeta";
import Section from "../components/Section";
import { faqItems } from "../content/siteData";

function FaqItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <div className="border-b border-[var(--color-line-strong)]">
      <h2 className="[text-wrap:pretty]">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          className="flex w-full items-center justify-between gap-6 py-5 text-left font-[family-name:var(--font-sans)] text-lg font-semibold leading-snug text-[var(--color-ink)] transition-colors hover:text-[var(--color-accent-strong)]"
        >
          {question}
          <Plus
            className={`h-5 w-5 shrink-0 text-[var(--color-accent)] transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
            aria-hidden="true"
          />
        </button>
      </h2>
      {/* Always in the HTML (just hidden when collapsed) so crawlers can read every answer. */}
      <div hidden={!isOpen} className="pb-6 pr-10">
        <p className="leading-relaxed text-[var(--color-text-muted)]">{answer}</p>
      </div>
    </div>
  );
}

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Section spacing="page">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <header className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow mb-3">FAQ</p>
            <h1 className="font-[family-name:var(--font-display)] text-[2.5rem] font-bold leading-[0.98] tracking-[-0.01em] sm:text-[3.25rem] lg:text-[3.5rem]">
              Personal Training FAQ&nbsp;— Halifax, NS
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-[var(--color-text-muted)]">
              If something is not covered here, use the{" "}
              <Link to="/contact/" className="text-link">
                contact page
              </Link>{" "}
              to ask directly.
            </p>
          </header>
          <div className="border-t-2 border-[var(--color-ink)]">
            {faqItems.map((item, index) => (
              <FaqItem key={item.question} question={item.question} answer={item.answer} index={index} />
            ))}
          </div>
        </div>
      </Section>

      <CTASection
        title="Still have a question?"
        description="If your question is not here, reach out directly and Josh will get back to you within 48 hours."
        secondaryLabel="Contact Josh"
        secondaryTo="/contact/"
      />
    </>
  );
}
