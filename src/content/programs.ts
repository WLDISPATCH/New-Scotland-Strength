// Presentation data for the "Meet Program" design: the four coaching options as competition
// "events", and the kinds of people the coaching is for. Facts come from siteData and the FAQ.
import clientBeamLift from "../assets/photos/optimized/client-beam-lift.jpg";
import clientFrameDeadlift from "../assets/photos/optimized/client-frame-deadlift.jpg";
import clientKegCarry from "../assets/photos/optimized/client-keg-carry.jpg";
import clientKegRun from "../assets/photos/optimized/client-keg-run.jpg";
import teamTrophies from "../assets/photos/optimized/team-trophies.jpg";
import { services } from "./siteData";
import type { ServiceItem } from "./siteData";

export type Program = ServiceItem & {
  event: string;
  // Short display name used on cards and in the compare table.
  name: string;
  specs: [label: string, value: string][];
  featured?: boolean;
};

const byTitle = (title: string) => {
  const service = services.find((s) => s.title === title);
  if (!service) throw new Error(`Unknown service: ${title}`);
  return service;
};

export const programs: Program[] = [
  {
    ...byTitle("1-on-1 Sessions"),
    event: "01",
    name: "1‑on‑1 Sessions", // non-breaking hyphens keep "1-on-1" on one line
    featured: true,
    specs: [
      ["Format", "In person, hands-on"],
      ["Where", "Private studio in Herring Cove, plus gyms in Burnside and the North End"],
      ["Includes", "Form correction, progression, clear session structure"],
      ["Payment", "E-transfer or card (Stripe)"],
    ],
  },
  {
    ...byTitle("Online Training + Meal Plan"),
    event: "02",
    name: "Online + Meal Plan",
    specs: [
      ["Format", "Monthly online coaching"],
      ["Where", "Anywhere — little or no equipment needed"],
      ["Includes", "Custom plan, meal plan, shared training log, video form checks, WhatsApp support"],
      ["Payment", "E-transfer"],
    ],
  },
  {
    ...byTitle("Custom Program"),
    event: "03",
    name: "Custom Program",
    specs: [
      ["Format", "Standalone program"],
      ["Where", "Your gym or home setup"],
      ["Includes", "Custom training plan, progression built in"],
      ["Payment", "E-transfer"],
    ],
  },
  {
    ...byTitle("Meal Plan"),
    event: "04",
    name: "Meal Plan",
    specs: [
      ["Format", "Standalone nutrition"],
      ["Where", "Anywhere"],
      ["Includes", "Custom meal plan built around your current goal"],
      ["Payment", "E-transfer"],
    ],
  },
];

// Who the coaching is for. Wording condensed from the FAQ answers.
export const audiences = [
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

export const credentialTicker = [
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
