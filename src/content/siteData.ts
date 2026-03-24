export type NavItem = {
  label: string;
  path: string;
};

export type ServiceItem = {
  title: string;
  summary: string;
  details: string;
  features: string[];
  audience: string;
};

export type TestimonialItem = {
  name: string;
  role: string;
  quote: string;
  outcome: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type PricingItem = {
  title: string;
  price: string;
  cadence?: string;
  note: string;
};

export const business = {
  name: "New Scotland Strength",
  owner: "Josh Dunbar",
  phone: "(902) 000-0000",
  email: "newscotlandstrength@gmail.com",
  city: "Halifax",
  region: "Nova Scotia",
  country: "Canada",
  areasServed: [
    "Halifax",
    "Dartmouth",
    "Bedford",
    "Halifax Regional Municipality",
  ],
  consultationPath: "/contact",
};

export const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/newscotlandstrength?igsh=dTQ0N2VvcmlhaDh6",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@newscotlandstrength?is_from_webapp=1&sender_device=pc",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1ChXD9ThrZ/?mibextid=wwXIfr",
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@newscotlandstrength8672?si=IAYesrOyCvtl0cRD",
  },
];

export const navigation: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Results", path: "/results" },
  { label: "Contact", path: "/contact" },
];

export const homeStats = [
  { value: "In Person", label: "Hands-on training for people who want coaching, not guesswork." },
  { value: "Online", label: "Remote programming and check-ins for clients who need flexibility." },
  { value: "Halifax", label: "Local coaching for Halifax, Dartmouth, Bedford, and the wider HRM." },
];

export const services: ServiceItem[] = [
  {
    title: "Online Training + Meal Plan",
    summary:
      "Online coaching for people who want structure, accountability, and both training and nutrition support in one place.",
    details:
      "This option is built for clients who want a full monthly setup without needing to train in person. It combines programming, check-ins, and meal plan support.",
    features: [
      "Custom training plan",
      "Meal plan included",
      "Check-ins and feedback",
    ],
    audience: "Best for clients who want complete support and the flexibility to train from anywhere.",
  },
  {
    title: "Custom Program",
    summary:
      "A standalone training program for people who want a plan they can take into the gym and follow with confidence.",
    details:
      "This is for someone who wants structured programming without ongoing online coaching or in-person sessions.",
    features: [
      "A custom training plan",
      "Progression built in",
      "Programming matched to your goal",
    ],
    audience: "Best for people who want clear programming and are comfortable training on their own.",
  },
  {
    title: "Meal Plan",
    summary:
      "A standalone meal plan for people who want nutrition support without adding a full coaching package.",
    details:
      "This option keeps nutrition simple and practical for clients who want more direction around food.",
    features: [
      "Custom meal plan",
      "Built around your current goal",
      "Simple structure you can follow",
    ],
    audience: "Best for people who want help with nutrition as a separate service.",
  },
  {
    title: "1-on-1 Sessions",
    summary:
      "In-person sessions for people who want hands-on coaching, direct feedback, and a stronger training routine.",
    details:
      "Each session is built around where you are right now, how you move, and what you are trying to improve.",
    features: [
      "Hands-on coaching",
      "Form correction and progression",
      "Clear session structure",
    ],
    audience: "Best for Halifax-area clients who want in-person coaching and accountability.",
  },
];

export const pricing: PricingItem[] = [
  {
    title: "Online Training + Meal Plan",
    price: "$150",
    cadence: "/month",
    note: "Includes meal plan support.",
  },
  {
    title: "1-on-1 Sessions",
    price: "$70",
    cadence: "/session",
    note: "Standard one-on-one session rate.",
  },
  {
    title: "3+ Sessions Per Week",
    price: "$60",
    cadence: "/session",
    note: "Reduced per-session rate for higher weekly frequency.",
  },
  {
    title: "Custom Program",
    price: "$100",
    note: "Standalone personalized training program.",
  },
  {
    title: "Meal Plan",
    price: "$100",
    note: "Standalone nutrition planning add-on.",
  },
];

export const processSteps = [
  "Start with a conversation about your goals, schedule, and training background.",
  "Choose the coaching option that makes the most sense for where you are now.",
  "Follow a plan that is built around steady progress, not random workouts.",
  "Adjust as needed based on how training, recovery, and life are actually going.",
];

export const aboutStory = [
  "New Scotland Strength is built around straightforward coaching for people who want to get stronger without getting buried in gym culture nonsense.",
  "The idea is simple: train hard, train with a reason, and build a plan you can actually keep up with alongside work, family, and everything else.",
  "That means looking honestly at what you can recover from, what you can stay consistent with, and what will move you forward over time.",
];

export const coachingValues = [
  {
    title: "Clarity over confusion",
    description:
      "You should know what you are doing, why you are doing it, and what comes next.",
  },
  {
    title: "Consistency over intensity",
    description:
      "A good plan should still work when life gets busy, not just when everything is perfect.",
  },
  {
    title: "Strength that carries over",
    description:
      "Training should help you feel stronger in the gym and more capable outside it.",
  },
];

export const testimonials: TestimonialItem[] = [
  {
    name: "Daniel M.",
    role: "Halifax professional, age 37",
    quote:
      "Josh gave me a clear plan, coached the details, and kept me focused on what mattered. I got stronger without feeling beat up all the time.",
    outcome: "Added consistency, improved technique, and rebuilt confidence in the gym.",
  },
  {
    name: "Sarah T.",
    role: "Dartmouth client, age 31",
    quote:
      "The programming felt personal from the start. I always knew what I was doing, why I was doing it, and how to keep progressing.",
    outcome: "Built strength steadily while balancing work and family demands.",
  },
  {
    name: "Mark R.",
    role: "Online coaching client, age 42",
    quote:
      "Remote coaching was far more detailed than I expected. The structure and feedback kept me moving forward instead of guessing every week.",
    outcome: "Dropped inconsistency, trained with purpose, and made measurable progress again.",
  },
];

export const resultHighlights = [
  { value: "Client wins", label: "Need real case studies or before-and-after examples from the client." },
  { value: "Reviews", label: "Need approved testimonials from real clients." },
  { value: "Proof", label: "Need measurable results Josh is comfortable publishing." },
];

export const faqPreview = [
  {
    question: "Do you work with beginners?",
    answer:
      "Yes. Coaching can be scaled for someone brand new or someone getting back into training after time away.",
  },
  {
    question: "Is online coaching available outside Halifax?",
    answer:
      "Yes. Online coaching is not limited to Halifax.",
  },
  {
    question: "What kind of goals do you coach for?",
    answer:
      "Most people are looking to get stronger, be more consistent, improve body composition, or stop feeling lost when they train.",
  },
];
