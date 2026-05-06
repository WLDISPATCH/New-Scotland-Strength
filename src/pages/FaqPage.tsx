import { useState } from "react";
import { ChevronDown } from "lucide-react";
import CTASection from "../components/CTASection";
import PageMeta from "../components/PageMeta";
import Section from "../components/Section";
import { faqItems } from "../content/siteData";

function FaqItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <div className="panel overflow-hidden">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
      >
        <span className="text-base font-semibold text-[var(--color-ink)] sm:text-lg">{question}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-[var(--color-accent)] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      {isOpen && (
        <div className="border-t border-[var(--color-line)] px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
          <p className="text-sm leading-7 text-[var(--color-text-muted)]">{answer}</p>
        </div>
      )}
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
      <PageMeta
        title="FAQ | Halifax Personal Trainer | New Scotland Strength"
        description="Answers to common questions about personal training, strength coaching, and online coaching with Josh Dunbar at New Scotland Strength in Halifax, Nova Scotia."
        path="/faq"
      />

      {/* BreadcrumbList schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.newscotlandstrength.com/" },
              { "@type": "ListItem", "position": 2, "name": "FAQ", "item": "https://www.newscotlandstrength.com/faq" }
            ]
          })
        }}
      />

      {/* FAQ schema for rich search snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Section
        eyebrow="FAQ"
        titleAs="h1"
        title="Personal Training FAQ — Halifax, NS"
        description="If something is not covered here, use the contact page to ask directly."
      >
        <div className="mx-auto max-w-3xl space-y-3">
          {faqItems.map((item, index) => (
            <FaqItem key={item.question} question={item.question} answer={item.answer} index={index} />
          ))}
        </div>
      </Section>

      <CTASection
        title="Still have a question?"
        description="If your question is not here, reach out directly and Josh will get back to you within 24 hours."
        secondaryLabel="Contact Josh"
        secondaryTo="/contact"
      />
    </>
  );
}
