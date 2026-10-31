// DRAFT CONCEPT — "The Meet Program". A dev-only design proposal for the home page,
// served at /draft/ while running `npm run dev`. It reuses the real site content and photos.
import "@fontsource-variable/archivo/wdth.css";
import "@fontsource/ibm-plex-mono/latin-400.css";
import "@fontsource/ibm-plex-mono/latin-500.css";
import "./draft.css";

import { ArrowRight, Menu, Plus, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/photos/nss-logo.png";
import heroPhoto from "../assets/photos/optimized/josh-log-press.jpg";
import joshPortrait from "../assets/photos/optimized/showcase-deadlift.jpg";
import clientKegCarry from "../assets/photos/optimized/client-keg-carry.jpg";
import clientBeamLift from "../assets/photos/optimized/client-beam-lift.jpg";
import clientFrameDeadlift from "../assets/photos/optimized/client-frame-deadlift.jpg";
import clientKegRun from "../assets/photos/optimized/client-keg-run.jpg";
import teamTrophies from "../assets/photos/optimized/team-trophies.jpg";
import truckPull from "../assets/photos/optimized/truck-pull.jpg";
import clientPlateLift from "../assets/photos/optimized/client-plate-lift.jpg";
import joshKeg from "../assets/photos/optimized/josh-keg-overhead.jpg";
import joshYoke from "../assets/photos/optimized/contact-yk.jpg";
import { business, clientTestimonial, credentials, faqItems, googleProfileUrl, googleReviews, processSteps, socialLinks } from "../content/siteData";

const nav = [
  { label: "About", to: "/about/" },
  { label: "Services", to: "/services/" },
  { label: "Results", to: "/results/" },
  { label: "FAQ", to: "/faq/" },
  { label: "Contact", to: "/contact/" },
];

const credentialTicker = [
  "ACE Certified Personal Trainer",
  "Level 1 Nutrition Coach",
  "Senior Fitness Specialist",
  "Size Inclusive Training",
  "20+ years under the bar",
  "Nova Scotia & Atlantic strongman titles",
  "Top-five national finishes",
  "In person across the HRM",
  "Online, anywhere",
];

// Who the coaching is for. Wording condensed from the site's FAQ answers.
const audiences = [
  {
    title: "First-timers",
    text: "Brand new to lifting? The programming and the pace start where you are, not where you think you should be.",
    photo: clientKegCarry,
    alt: "New Scotland Strength client carrying a keg at a strongman competition",
  },
  {
    title: "Comebacks",
    text: "Returning after time away, or training around an injury. The plan is built around it instead of ignoring it.",
    photo: clientBeamLift,
    alt: "New Scotland Strength client lifting a loaded wooden beam as a judge signals",
  },
  {
    title: "Fat loss that lasts",
    text: "Smart programming plus practical nutrition, so the weight comes off without losing the strength you built.",
    photo: clientFrameDeadlift,
    alt: "New Scotland Strength client deadlifting a loaded frame at a strongman competition",
  },
  {
    title: "Strong for life",
    text: "Older adults staying strong, mobile, and capable. Hard enough to work, sensible enough to keep you training.",
    photo: teamTrophies,
    alt: "New Scotland Strength athletes with their trophies at Nova Scotia's Strongest 2026",
  },
  {
    title: "Meet day",
    text: "A first strongman show or a powerlifting meet. Prep is built around peaking on the right day — by a coach who still competes.",
    photo: clientKegRun,
    alt: "New Scotland Strength client running with a keg at a strongman competition",
  },
];

// The four coaching options as competition "events". Facts taken from the site's services and FAQ.
const programs = [
  {
    event: "01",
    title: "1‑on‑1 Sessions", // non-breaking hyphens keep "1-on-1" on one line
    summary: "Hands-on coaching, direct feedback, and a stronger training routine.",
    specs: [
      ["Format", "In person"],
      ["Where", "Private studio in Herring Cove, plus gyms in Burnside and the North End"],
      ["Includes", "Form correction, progression, clear session structure"],
    ],
    featured: true,
  },
  {
    event: "02",
    title: "Online + Meal Plan",
    summary: "Training and nutrition in one monthly setup, without needing to train in person.",
    specs: [
      ["Format", "Monthly online coaching"],
      ["Where", "Anywhere"],
      ["Includes", "Custom plan, meal plan, shared training log, video form checks"],
    ],
  },
  {
    event: "03",
    title: "Custom Program",
    summary: "A plan you can take into the gym and follow with confidence.",
    specs: [
      ["Format", "Standalone program"],
      ["Where", "Your gym or home setup"],
      ["Includes", "Custom training plan, progression built in"],
    ],
  },
  {
    event: "04",
    title: "Meal Plan",
    summary: "Nutrition support without adding a full coaching package.",
    specs: [
      ["Format", "Standalone nutrition"],
      ["Where", "Anywhere"],
      ["Includes", "Custom meal plan built around your current goal"],
    ],
  },
];

const stripPhotos = [
  { src: joshKeg, alt: "Josh Dunbar lifting a keg overhead at an outdoor strongman competition" },
  { src: clientPlateLift, alt: "New Scotland Strength client lifting a stack of plates by the handle" },
  { src: truckPull, alt: "Athlete in a New Scotland Strength hat pulling a truck" },
  { src: joshYoke, alt: "Josh Dunbar carrying a yoke during competition" },
  { src: clientKegRun, alt: "New Scotland Strength client running with a keg at a strongman competition" },
  { src: teamTrophies, alt: "New Scotland Strength athletes with their trophies at Nova Scotia's Strongest 2026" },
];

const faqPicks = [
  "Do you work with beginners?",
  "Do you train older adults?",
  "Do I need my own gym membership for in-person sessions?",
  "How do online check-ins work?",
];

const shortReviews = googleReviews.filter((r) => r.author === "Andrew Foley" || r.author === "Nicholas Peters");
const averageRating = googleReviews.reduce((sum, r) => sum + r.rating, 0) / googleReviews.length;

function Star({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3.1-5.4 3.1 1.2-6L1.3 7.8l6.1-.7z"
      />
    </svg>
  );
}

function Label({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`d-mono flex items-center gap-2 ${className}`}>
      <span aria-hidden="true">✕</span>
      {children}
    </p>
  );
}

function DraftHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--chalk)]/95 backdrop-blur-sm">
      <div className="d-wrap flex h-16 items-center justify-between gap-6 lg:h-20">
        <Link to="/draft/" aria-label={`${business.name} draft home`}>
          <img src={logo} alt={`${business.name} logo`} className="h-10 w-auto lg:h-12" />
        </Link>
        <nav className="hidden items-center gap-9 lg:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[0.9375rem] font-semibold [font-stretch:108%] text-[var(--steel)] transition-colors hover:text-[var(--iron)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/contact/" className="d-btn d-btn-blue !min-h-11 !px-4 text-[0.8125rem] sm:!px-5">
            Book a consult
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open ? (
        <nav className="border-t border-[var(--line)] lg:hidden" aria-label="Main">
          <ul className="d-wrap py-2">
            {nav.map((item) => (
              <li key={item.to} className="border-b border-[var(--line)] last:border-0">
                <Link to={item.to} className="d-heading block py-4 text-2xl uppercase">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

export default function DraftHome() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    document.title = "Draft concept — New Scotland Strength";
  }, []);

  return (
    <div className="d-root min-h-screen">
      <div className="bg-[var(--iron)] text-[var(--chalk)]">
        <p className="d-wrap d-mono py-2 text-center !text-[0.6875rem] text-[var(--steel-on-iron)]">
          Draft concept · “The Meet Program” · dev preview only, not part of the live site
        </p>
      </div>

      <DraftHeader />

      <main>
        {/* ── Hero ───────────────────────────────────────── */}
        <section className="d-wrap pb-16 pt-8 sm:pt-12 lg:pb-24">
          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-2 border-b-2 border-[var(--iron)] pb-3 text-[var(--steel)]">
            <Label>Nova Scotia · Latin for “New Scotland”</Label>
            <p className="d-mono">Personal training &amp; strength coaching · Halifax, N.S.</p>
          </div>

          <h1 className="d-display relative mt-8 text-[clamp(2.6rem,12.5vw,3.5rem)] sm:mt-10 sm:text-[clamp(3.1rem,9.4vw,9.25rem)]">
            <span className="block">Start strong.</span>
            <span className="block text-[var(--blue)]">Stay strong.</span>
            {/* Nova Scotia's saltire, as a flag panel beside the first line */}
            <span
              className="d-saltire absolute right-0 top-[0.04em] hidden h-[1.72em] w-[34%] border-2 border-[var(--iron)] bg-[var(--chalk)] lg:block"
              aria-hidden="true"
            />
          </h1>

          <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-12 lg:gap-8">
            <figure className="lg:col-span-6">
              <img
                src={heroPhoto}
                alt="Josh Dunbar pressing a log overhead at an outdoor strongman competition"
                className="relative aspect-[4/5] w-full object-cover object-top sm:aspect-[5/4] lg:aspect-[6/5]"
              />
              <figcaption className="d-mono mt-3 text-[var(--steel)]">Josh Dunbar · log press · outdoor strongman</figcaption>
            </figure>

            <div className="flex flex-col justify-between gap-10 lg:col-span-6 lg:pl-8 xl:pl-16">
              <div>
                <p className="d-heading text-[1.75rem] sm:text-[2.25rem]">
                  Coaching for people who want to get stronger and train with more direction.
                </p>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--steel)]">
                  New Scotland Strength helps busy people build strength, move better, and stay consistent — in person
                  across the HRM, or online from anywhere.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link to="/contact/" className="d-btn d-btn-blue">
                    Book a consultation <ArrowRight className="d-arrow h-4 w-4" aria-hidden="true" />
                  </Link>
                  <a href="#programs" className="d-btn d-btn-line">
                    See the programs
                  </a>
                </div>
              </div>

              <dl className="grid grid-cols-2 border-t-2 border-[var(--iron)]">
                {[
                  ["Coach", business.owner],
                  ["In person", "Herring Cove · Burnside · North End"],
                  ["Online", "Anywhere"],
                  ["On Google", `${averageRating.toFixed(1)} ★ · ${googleReviews.length} reviews`],
                ].map(([k, v], i) => (
                  <div
                    key={k}
                    className={`border-b border-[var(--line)] py-4 ${i % 2 === 0 ? "pr-4" : "border-l pl-4"}`}
                  >
                    <dt className="d-mono text-[var(--steel)]">{k}</dt>
                    <dd className="mt-1 font-semibold leading-snug">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* ── Credential ticker ──────────────────────────── */}
        <section className="d-ticker overflow-hidden bg-[var(--iron)] py-4 text-[var(--chalk)]" aria-label="Credentials">
          <div className="d-ticker-track">
            {[0, 1].map((copy) => (
              <ul key={copy} className={`flex shrink-0 ${copy === 1 ? "d-ticker-copy" : ""}`} aria-hidden={copy === 1}>
                {credentialTicker.map((item) => (
                  <li key={item} className="d-mono flex items-center gap-6 whitespace-nowrap px-6 !text-[0.8125rem]">
                    {item}
                    <span className="text-[var(--sky)]" aria-hidden="true">
                      ✕
                    </span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </section>

        {/* ── Built for ──────────────────────────────────── */}
        <section className="d-wrap py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <Label className="text-[var(--blue)]">Who it's for</Label>
                <h2 className="d-display mt-4 text-[clamp(2.5rem,5.2vw,4.75rem)]">
                  Built for every&shy;day strong.
                </h2>
                <p className="mt-5 max-w-md text-lg leading-relaxed text-[var(--steel)]">
                  Strongman is where Josh proves the methods. The coaching is for anyone who wants to get stronger, wherever they're starting from.
                </p>
                <div className="relative mt-8 hidden aspect-[4/5] max-h-[30rem] overflow-hidden bg-[var(--chalk-2)] lg:block">
                  {audiences.map((a, i) => (
                    <img
                      key={a.title}
                      src={a.photo}
                      alt={i === active ? a.alt : ""}
                      aria-hidden={i !== active}
                      loading="lazy"
                      className={`d-swap absolute inset-0 h-full w-full object-cover ${i === active ? "opacity-100" : "opacity-0"}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <ol className="border-t-2 border-[var(--iron)] lg:col-span-7">
              {audiences.map((a, i) => (
                <li
                  key={a.title}
                  onMouseEnter={() => setActive(i)}
                  className={`group grid grid-cols-[3rem_1fr] gap-x-4 border-b border-[var(--line)] py-7 transition-colors sm:grid-cols-[4.5rem_1fr] lg:py-9 ${
                    i === active ? "lg:bg-[var(--chalk-2)]" : ""
                  }`}
                >
                  <span className="d-mono pt-2 text-[var(--blue)] lg:pl-4">{String(i + 1).padStart(2, "0")}</span>
                  <div className="lg:pr-6">
                    <h3 className="d-heading text-[1.75rem] uppercase sm:text-[2.5rem]">{a.title}</h3>
                    <p className="mt-2 max-w-xl text-lg leading-relaxed text-[var(--steel)]">{a.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Programs ───────────────────────────────────── */}
        <section id="programs" className="scroll-mt-24 bg-[var(--chalk-2)] py-20 lg:py-28">
          <div className="d-wrap">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <Label className="text-[var(--blue)]">The programs</Label>
                <h2 className="d-display mt-4 text-[clamp(2.5rem,5.2vw,4.75rem)]">Pick your event.</h2>
              </div>
              <p className="max-w-md text-lg leading-relaxed text-[var(--steel)]">
                Four ways to train with Josh. Not sure which fits? The consultation sorts that out.
              </p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {programs.map((p) => (
                <article
                  key={p.title}
                  className={`flex flex-col border-2 p-6 sm:p-7 ${
                    p.featured
                      ? "d-on-blue border-[var(--blue)] bg-[var(--blue)] text-white"
                      : "border-[var(--iron)] bg-[var(--chalk)]"
                  }`}
                >
                  <p className={`d-mono ${p.featured ? "text-white/80" : "text-[var(--steel)]"}`}>Event {p.event}</p>
                  <h3 className="d-heading mt-8 text-[2rem] uppercase leading-[0.95]">{p.title}</h3>
                  <p className={`mt-3 leading-relaxed ${p.featured ? "text-white/90" : "text-[var(--steel)]"}`}>{p.summary}</p>
                  <dl className={`mt-6 border-t ${p.featured ? "border-white/30" : "border-[var(--line)]"}`}>
                    {p.specs.map(([k, v]) => (
                      <div
                        key={k}
                        className={`grid grid-cols-[5.5rem_1fr] gap-3 border-b py-3 ${p.featured ? "border-white/30" : "border-[var(--line)]"}`}
                      >
                        <dt className={`d-mono pt-0.5 ${p.featured ? "text-white/75" : "text-[var(--steel)]"}`}>{k}</dt>
                        <dd className="text-[0.9375rem] font-medium leading-snug">{v}</dd>
                      </div>
                    ))}
                  </dl>
                  <Link
                    to="/contact/"
                    className={`mt-auto flex items-center justify-between pt-8 font-bold uppercase tracking-[0.04em] [font-stretch:112%] ${
                      p.featured ? "text-white" : "text-[var(--iron)]"
                    }`}
                  >
                    Ask about this <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Meet Josh ──────────────────────────────────── */}
        <section className="d-on-iron bg-[var(--iron)] py-20 text-[var(--chalk)] lg:py-28">
          <div className="d-wrap grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <img
                src={joshPortrait}
                alt="Josh Dunbar pulling a heavy deadlift during competition"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </div>
            <div className="flex flex-col lg:col-span-7 lg:pl-8 xl:pl-16">
              <Label className="text-[var(--sky)]">The coach</Label>
              <h2 className="d-display mt-4 text-[clamp(2.5rem,5.2vw,4.75rem)]">Josh Dunbar</h2>
              <p className="d-heading mt-8 max-w-2xl text-[1.5rem] font-medium leading-snug [font-stretch:100%] sm:text-[1.875rem]">
                “I am devoted to using the same principles that built my success to help you reach yours.”
              </p>

              <div className="mt-10 grid gap-8 sm:grid-cols-[auto_1fr] sm:gap-12">
                <div>
                  <p className="d-display text-[5.5rem] text-[var(--sky)] sm:text-[7rem]">20+</p>
                  <p className="d-mono mt-2 text-[var(--steel-on-iron)]">Years of strength training</p>
                </div>
                <ul className="border-t border-[var(--line-on-iron)]">
                  {credentials.map((c) => (
                    <li key={c} className="flex gap-3 border-b border-[var(--line-on-iron)] py-3 leading-snug">
                      <span className="d-mono pt-0.5 text-[var(--sky)]" aria-hidden="true">
                        ✕
                      </span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              <Link to="/about/" className="d-btn mt-10 self-start border-[var(--chalk)] text-[var(--chalk)] hover:bg-[var(--chalk)] hover:text-[var(--iron)]">
                Read Josh's story <ArrowRight className="d-arrow h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── How it works ───────────────────────────────── */}
        <section className="d-wrap py-20 lg:py-28">
          <Label className="text-[var(--blue)]">How it works</Label>
          <h2 className="d-display mt-4 max-w-4xl text-[clamp(2.5rem,5.2vw,4.75rem)]">From first chat to new PRs.</h2>
          <ol className="mt-14 grid gap-px bg-[var(--iron)] sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <li key={step} className="flex flex-col gap-10 bg-[var(--chalk)] p-6 sm:min-h-[16rem] sm:p-8">
                <span className="d-display text-[3.5rem] text-[var(--blue)]">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-auto text-lg font-medium leading-snug">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* ── Proof ──────────────────────────────────────── */}
        <section className="border-t-2 border-[var(--iron)] py-20 lg:py-28">
          <div className="d-wrap grid gap-14 lg:grid-cols-12 lg:gap-8">
            <figure className="min-w-0 lg:col-span-7">
              <Label className="text-[var(--blue)]">Client results</Label>
              <blockquote className="d-heading mt-6 text-[1.625rem] font-semibold leading-[1.2] [font-stretch:100%] sm:text-[2.125rem]">
                “{clientTestimonial.quote}”
              </blockquote>
              <figcaption className="d-mono mt-6 text-[var(--steel)]">
                {clientTestimonial.author} · New Scotland Strength client
              </figcaption>
            </figure>

            <div className="min-w-0 lg:col-span-4 lg:col-start-9">
              <a
                href={googleProfileUrl}
                target="_blank"
                rel="noreferrer"
                className="group block border-2 border-[var(--iron)] p-6 transition-colors hover:bg-[var(--iron)] hover:text-[var(--chalk)]"
              >
                <p className="d-mono">Google reviews</p>
                <div className="mt-4 flex flex-wrap items-end gap-x-4 gap-y-1">
                  <span className="d-display text-[4rem] sm:text-[5rem]">{averageRating.toFixed(1)}</span>
                  <span className="mb-3 flex text-[var(--blue)] group-hover:text-[var(--sky)]" aria-label={`${averageRating} out of 5 stars`} role="img">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-6 w-6" />
                    ))}
                  </span>
                </div>
                <p className="mt-2 flex items-center gap-2 font-semibold">
                  Read all {googleReviews.length} reviews <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </p>
              </a>
              <ul className="mt-6 space-y-6">
                {shortReviews.map((r) => (
                  <li key={r.author} className="border-l-2 border-[var(--blue)] pl-5">
                    <p className="leading-relaxed">“{r.text}”</p>
                    <p className="d-mono mt-2 text-[var(--steel)]">{r.author} · Google</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="d-scroll mt-16 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-4 sm:px-8 lg:mt-20">
            {stripPhotos.map((p) => (
              <figure key={p.src} className="w-[72vw] shrink-0 snap-start sm:w-[22rem]">
                <img src={p.src} alt={p.alt} loading="lazy" className="aspect-[4/5] w-full object-cover" />
              </figure>
            ))}
          </div>
        </section>

        {/* ── FAQ ────────────────────────────────────────── */}
        <section className="bg-[var(--chalk-2)] py-20 lg:py-28">
          <div className="d-wrap grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <Label className="text-[var(--blue)]">Questions</Label>
              <h2 className="d-display mt-4 text-[clamp(2rem,10vw,3rem)] lg:text-[clamp(2.5rem,4.2vw,4rem)]">Fair questions.</h2>
              <Link to="/faq/" className="d-btn d-btn-line mt-8">
                All {faqItems.length} answers <ArrowRight className="d-arrow h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="border-t-2 border-[var(--iron)] lg:col-span-7">
              {faqItems
                .filter((f) => faqPicks.includes(f.question))
                .map((f, i) => (
                  <details key={f.question} className="border-b border-[var(--line)]" open={i === 0}>
                    <summary className="flex items-center justify-between gap-6 py-6">
                      <span className="d-heading text-[1.375rem] [font-stretch:100%] sm:text-[1.625rem]">{f.question}</span>
                      <Plus className="d-faq-icon h-6 w-6 shrink-0 text-[var(--blue)]" aria-hidden="true" />
                    </summary>
                    <p className="max-w-2xl pb-6 text-lg leading-relaxed text-[var(--steel)]">{f.answer}</p>
                  </details>
                ))}
            </div>
          </div>
        </section>

        {/* ── Closing call to action ─────────────────────── */}
        <section className="d-on-blue relative overflow-hidden bg-[var(--blue)] text-white">
          <div
            className="d-saltire pointer-events-none absolute inset-0 opacity-[0.14] [--saltire-band:6%] [--saltire-color:#fff]"
            aria-hidden="true"
          />
          <div className="d-wrap relative py-24 lg:py-32">
            <Label className="text-white/80">Your first rep</Label>
            <h2 className="d-display mt-5 text-[clamp(1.5rem,7.2vw,6.5rem)]">It starts with a conversation.</h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90">
              Tell Josh about your goals, your schedule, and your training history. He'll follow up within 48 hours.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link to="/contact/" className="d-btn d-btn-chalk">
                Book a consultation <ArrowRight className="d-arrow h-4 w-4" aria-hidden="true" />
              </Link>
              <a href={`mailto:${business.email}`} className="d-mono break-all px-1 py-3 text-white underline underline-offset-4">
                {business.email}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="d-on-iron bg-[var(--iron)] text-[var(--chalk)]">
        <div className="d-wrap grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <img src={logo} alt={`${business.name} logo`} className="h-14 w-auto invert" />
            <p className="mt-5 max-w-sm leading-relaxed text-[var(--steel-on-iron)]">
              Personal training and strength coaching with {business.owner}. Halifax, Dartmouth, Bedford, Sackville and
              online.
            </p>
          </div>
          <div>
            <p className="d-mono text-[var(--steel-on-iron)]">Pages</p>
            <ul className="mt-4 space-y-2">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="hover:text-[var(--sky)]">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="d-mono text-[var(--steel-on-iron)]">Follow</p>
            <ul className="mt-4 space-y-2">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer" className="hover:text-[var(--sky)]">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-[var(--line-on-iron)]">
          <p className="d-wrap d-mono py-5 text-[var(--steel-on-iron)]">
            © {new Date().getFullYear()} {business.name} · {business.city}, {business.region}
          </p>
        </div>
      </footer>
    </div>
  );
}
