import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { joshPhotos, shuffled } from "../assets/photoLibrary";
import CTASection from "../components/CTASection";
import ExpandableCopy from "../components/ExpandableCopy";
import PageMeta from "../components/PageMeta";
import Section from "../components/Section";
import { aboutStory, business, coachingValues, credentials } from "../content/siteData";

export default function AboutPage() {
  const [[portrait, secondary]] = useState(() => shuffled(joshPhotos));

  return (
    <>
      <PageMeta path="/about/" />

      {/* BreadcrumbList schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://newscotlandstrength.ca/" },
              { "@type": "ListItem", "position": 2, "name": "About", "item": "https://newscotlandstrength.ca/about/" }
            ]
          })
        }}
      />

      <Section spacing="page">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <p className="eyebrow mb-3">About</p>
            <h1 className="max-w-3xl font-[family-name:var(--font-display)] text-[2.5rem] font-bold leading-[0.98] tracking-[-0.01em] sm:text-[3.25rem] lg:text-[4rem]">
              About Josh Dunbar&nbsp;— Personal Trainer in Halifax, NS
            </h1>
            <p className="lede mt-6 max-w-2xl !text-[var(--color-ink-soft)]">
              With multiple Nova Scotia and Atlantic titles, as well as multiple top-five finishes at the national
              level, I bring proven experience to every client I coach. Whether your goal is to lose weight, get
              stronger, move better, or compete at a higher level, I am devoted to using the same principles that
              built my success to help you reach yours!
            </p>
            <ExpandableCopy
              className="mt-6 max-w-2xl border-l-2 border-[var(--color-accent)] pl-5"
              textClassName="leading-relaxed text-[var(--color-text-muted)] sm:text-lg"
              preview="New Scotland Strength is meant for people who want useful coaching, not posturing."
              full={aboutStory.join(" ")}
              buttonLabel="Read full story"
            />
            <div className="mt-10 max-w-2xl border-t border-[var(--color-line-strong)] pt-6">
              <p className="eyebrow">Local Coaching</p>
              <p className="mt-2 leading-relaxed text-[var(--color-text-muted)]">
                Based in {business.city}, {business.region}, New Scotland Strength works with clients locally in
                Halifax and nearby communities like Dartmouth and Bedford.
              </p>
            </div>
          </div>
          <img
            src={portrait.src}
            alt={portrait.alt}
            className="photo aspect-[4/5] object-[center_30%] sm:aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[36rem]"
          />
        </div>
      </Section>

      <Section tone="alt" spacing="tight">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <h2 className="heading">Credentials</h2>
          <ul className="grid border-b border-[var(--color-line-strong)] sm:grid-cols-2 sm:gap-x-10">
            {credentials.map((item) => (
              <li
                key={item}
                className="flex gap-3 border-t border-[var(--color-line-strong)] py-4 text-lg font-medium leading-snug text-[var(--color-ink)]"
              >
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-[var(--color-accent)]" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section eyebrow="Coaching Philosophy" title="What the coaching should feel like in practice">
        <div className="grid gap-x-10 md:grid-cols-3">
          {coachingValues.map((value) => (
            <article key={value.title} className="border-t-2 border-[var(--color-ink)] py-6">
              <h3 className="font-[family-name:var(--font-display)] text-[1.75rem] font-bold leading-tight">{value.title}</h3>
              <p className="mt-3 text-lg leading-relaxed text-[var(--color-text-muted)]">{value.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="alt">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="eyebrow mb-3">Why Clients Stay</p>
            <h2 className="heading max-w-xl">Why this approach works better than random hard workouts</h2>
            <ExpandableCopy
              className="mt-6 max-w-xl"
              textClassName="text-lg leading-relaxed text-[var(--color-text-muted)]"
              preview="A good coach does more than count reps. The real job is making sound decisions over time."
              full="A good coach does more than count reps. The real job is making sound decisions over time: when to push, when to back off, what to change, and how to keep someone training when life gets busy. That is the difference between a plan that looks good for a week and one that actually holds up."
              buttonLabel="Read why clients stay"
            />
            <Link to="/contact/" className="btn-primary mt-8 justify-center">
              Start the Conversation
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <img
            src={secondary.src}
            alt={secondary.alt}
            loading="lazy"
            className="photo aspect-[4/3] object-[center_30%] lg:aspect-[5/6]"
          />
        </div>
      </Section>

      <CTASection
        title="Looking for a coach who keeps things straightforward?"
        description="Use the contact page to talk through your goals, training background, and what kind of support makes the most sense."
        secondaryLabel="View Services"
        secondaryTo="/services/"
      />
    </>
  );
}
