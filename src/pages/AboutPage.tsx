import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { brandPhotos } from "../assets/photoLibrary";
import CTASection from "../components/CTASection";
import ExpandableCopy from "../components/ExpandableCopy";
import PageMeta from "../components/PageMeta";
import Section from "../components/Section";
import { aboutStory, business, coachingValues } from "../content/siteData";

export default function AboutPage() {
  return (
    <>
      <PageMeta
        title="About Josh Dunbar | Personal Trainer Halifax, NS | New Scotland Strength"
        description="Josh Dunbar is a Halifax-based personal trainer and strength coach. Learn about New Scotland Strength's coaching approach, philosophy, and in-person and online services for Halifax, Dartmouth, and Bedford."
        path="/about"
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
              { "@type": "ListItem", "position": 2, "name": "About", "item": "https://www.newscotlandstrength.com/about" }
            ]
          })
        }}
      />

      {/* Person schema for Josh Dunbar */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Josh Dunbar",
            "jobTitle": "Personal Trainer and Strength Coach",
            "description": "Josh Dunbar is a personal trainer and strength coach based in Halifax, Nova Scotia. He works with clients in-person in the HRM and online, providing strength training, custom programming, and nutrition planning through New Scotland Strength.",
            "url": "https://www.newscotlandstrength.com/about",
            "image": "https://www.newscotlandstrength.com/og-image.jpg",
            "worksFor": {
              "@type": "LocalBusiness",
              "name": "New Scotland Strength",
              "url": "https://www.newscotlandstrength.com/"
            },
            "knowsAbout": ["Strength Training", "Powerlifting", "Strongman", "Personal Training", "Nutrition Planning", "Online Coaching"],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Halifax",
              "addressRegion": "NS",
              "addressCountry": "CA"
            },
            "sameAs": [
              "https://www.instagram.com/newscotlandstrength",
              "https://www.tiktok.com/@newscotlandstrength",
              "https://www.facebook.com/share/1ChXD9ThrZ/",
              "https://youtube.com/@newscotlandstrength8672"
            ]
          })
        }}
      />

      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="panel p-7 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-accent)]">
              Built Through Strength. Driven by Results.
            </p>
            <p className="mt-5 max-w-4xl text-lg leading-8 text-[var(--color-ink)] sm:text-xl sm:leading-9">
              With multiple Nova Scotia's Strongest wins, an Atlantic title, and three top-five finishes at the national level, I bring proven experience to every client I coach. Whether your goal is to lose weight, get stronger, move better, or compete at a higher level, I am devoted to using the same principles that built my success to help you reach yours!
            </p>
          </div>
        </div>
      </section>

      <Section
        eyebrow="About"
        title="About the coach and the kind of training this brand is built around"
        description="New Scotland Strength is built around straightforward coaching, honest feedback, and plans that people can actually keep up with."
      >
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="panel overflow-hidden p-3">
            <img
              src={brandPhotos.aboutPortrait}
              alt="Josh Dunbar completing a clean during competition"
              loading="lazy"
              className="h-full min-h-[320px] w-full rounded-[1.75rem] object-cover sm:min-h-[520px]"
            />
          </div>
          <div className="space-y-5">
            <ExpandableCopy
              preview="New Scotland Strength is meant for people who want useful coaching, not posturing."
              full={aboutStory.join(" ")}
              buttonLabel="Read full story"
            />
            <div className="panel mt-2 p-5 sm:p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
                Local Coaching
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)] sm:text-base">
                Based in {business.city}, {business.region}, New Scotland Strength works with clients locally in Halifax and nearby communities like Dartmouth and Bedford.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Coaching Philosophy"
        title="What the coaching should feel like in practice"
        className="border-y border-[var(--color-line)] bg-[rgba(255,250,242,0.26)]"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {coachingValues.map((value) => (
            <article key={value.title} className="panel p-5 sm:p-7">
              <CheckCircle2 className="h-5 w-5 text-[var(--color-accent)]" />
              <h2 className="mt-4 text-xl font-semibold text-[var(--color-ink)] sm:mt-5 sm:text-2xl">{value.title}</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)]">{value.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Why Clients Stay"
        title="Why this approach works better than random hard workouts"
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div className="space-y-5">
            <ExpandableCopy
              preview="A good coach does more than count reps. The real job is making sound decisions over time."
              full="A good coach does more than count reps. The real job is making sound decisions over time: when to push, when to back off, what to change, and how to keep someone training when life gets busy. That is the difference between a plan that looks good for a week and one that actually holds up."
              buttonLabel="Read why clients stay"
            />
            <Link to="/contact" className="btn-primary justify-center sm:justify-start">
              Start the Conversation
            </Link>
          </div>
          <div className="panel overflow-hidden p-3">
            <img
              src={brandPhotos.showcaseLift}
              alt="Josh Dunbar pulling a heavy deadlift during competition"
              loading="lazy"
              className="h-full min-h-[320px] w-full rounded-[1.75rem] object-cover sm:min-h-[420px]"
            />
          </div>
        </div>
      </Section>

      <CTASection
        title="Looking for a coach who keeps things straightforward?"
        description="Use the contact page to talk through your goals, training background, and what kind of support makes the most sense."
        secondaryLabel="View Services"
        secondaryTo="/services"
      />
    </>
  );
}
