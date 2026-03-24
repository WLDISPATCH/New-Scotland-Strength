import type { FormEvent } from "react";
import { Mail, MapPin } from "lucide-react";
import { brandPhotos } from "../assets/photoLibrary";
import CTASection from "../components/CTASection";
import PageMeta from "../components/PageMeta";
import Section from "../components/Section";
import { business, socialLinks } from "../content/siteData";

export default function ContactPage() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <PageMeta
        title="Contact | Book a Consultation | New Scotland Strength"
        description="Contact New Scotland Strength to book a consultation for personal training or strength coaching in Halifax, Nova Scotia."
        path="/contact"
      />

      <Section
        eyebrow="Contact"
        title="Book a consultation and outline what you want from coaching"
        description="Use this page to start the conversation and give Josh enough context to respond properly."
      >
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="order-2 space-y-6 lg:order-1">
            <div className="panel p-5 sm:p-7">
              <h2 className="text-2xl font-semibold text-[var(--color-ink)]">Contact details</h2>
              <div className="mt-5 space-y-4 text-sm text-[var(--color-text-muted)] sm:mt-6 sm:space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent)]" />
                  <span>
                    {business.city}, {business.region}, {business.country}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent)]" />
                  <a href={`mailto:${business.email}`} className="transition hover:text-[var(--color-ink)]">
                    {business.email}
                  </a>
                </div>
              </div>
              <div className="mt-6 border-t border-[var(--color-line)] pt-5">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-text-subtle)]">
                  Social
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {socialLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-[var(--color-line)] bg-[rgba(255,250,242,0.74)] px-4 py-2 text-sm text-[var(--color-text-muted)] transition hover:border-[rgba(123,69,25,0.24)] hover:text-[var(--color-ink)]"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="hidden panel overflow-hidden p-3 lg:block">
              <img
                src={brandPhotos.contactPortrait}
                alt="Josh Dunbar carrying a yoke during competition"
                className="h-full min-h-[360px] w-full rounded-[1.75rem] object-cover"
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="order-1 panel p-5 sm:p-8 lg:order-2">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="field-label">
                First name
                <input className="field-input" type="text" name="firstName" placeholder="Josh" />
              </label>
              <label className="field-label">
                Last name
                <input className="field-input" type="text" name="lastName" placeholder="Dunbar" />
              </label>
            </div>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <label className="field-label">
                Email
                <input
                  className="field-input"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                />
              </label>
              <label className="field-label">
                Phone
                <input className="field-input" type="tel" name="phone" placeholder="(902) 000-0000" />
              </label>
            </div>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <label className="field-label">
                Coaching interest
                <select className="field-input" name="service" defaultValue="1-on-1 Sessions">
                  <option>1-on-1 Sessions</option>
                  <option>Online Training + Meal Plan</option>
                  <option>Custom Program</option>
                  <option>Meal Plan</option>
                  <option>Not sure yet</option>
                </select>
              </label>
              <label className="field-label">
                Training experience
                <select className="field-input" name="experience" defaultValue="Brand new">
                  <option>Brand new</option>
                  <option>Some experience</option>
                  <option>Training consistently</option>
                  <option>Returning after a break</option>
                </select>
              </label>
            </div>
            <div className="mt-5">
              <label className="field-label">
                Primary goal
                <input
                  className="field-input"
                  type="text"
                  name="goal"
                  placeholder="Build strength, lose body fat, improve consistency"
                />
              </label>
            </div>
            <div className="mt-5">
              <label className="field-label">
                Tell Josh about your current situation
                <textarea
                  className="field-input min-h-36 resize-y"
                  name="message"
                  placeholder="Share your goals, schedule, previous training history, injuries, or anything else that would help shape the consultation."
                />
              </label>
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-6 text-[var(--color-text-subtle)]">
                Next step: review your goals, talk through fit, and figure out the best way to move forward.
              </p>
              <button type="submit" className="btn-primary justify-center">
                Send Inquiry
              </button>
            </div>
          </form>
        </div>
      </Section>

      <CTASection
        title="Prefer to review services before reaching out?"
        description="You can also review the services first, then come back once you know what kind of support you want."
        primaryLabel="View Services"
        primaryTo="/services"
        secondaryLabel="See Results"
        secondaryTo="/results"
      />
    </>
  );
}
