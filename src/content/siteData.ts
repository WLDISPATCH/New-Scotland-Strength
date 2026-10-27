export type NavItem = {
  label: string;
  path: string;
};

export type ServiceItem = {
  title: string;
  summary: string;
  details: string;
  features: string[];
};

export type GoogleReview = {
  author: string;
  meta?: string;
  avatarColor: string;
  rating: number;
  // Approximate year posted; Google only shows "x years ago".
  year: number;
  text?: string;
};

export type SocialLink = {
  label: string;
  href: string;
};


// Web3Forms access key for the contact form. This value is public by design
// (Web3Forms keys are meant to be used in client-side code). Generate one for
// newscotlandstrength@gmail.com at https://web3forms.com and paste it below,
// or provide it at build time via the VITE_WEB3FORMS_KEY environment variable.
export const web3formsKey =
  import.meta.env.VITE_WEB3FORMS_KEY ?? "9a93aaab-8aa7-4eaa-9792-5649384d92c1";

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
  consultationPath: "/contact/",
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
  { label: "About", path: "/about/" },
  { label: "Services", path: "/services/" },
  { label: "Results", path: "/results/" },
  { label: "FAQ", path: "/faq/" },
  { label: "Contact", path: "/contact/" },
];

export const homeStats = [
  { value: "In-Person", label: "Hands-on training for people in the HRM who want coaching, not guesswork." },
  { value: "Online", label: "Remote programming and check-ins for clients who need flexibility." },
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
  },
];

export const processSteps = [
  "Start with a conversation about your goals, schedule, and training background.",
  "Choose the coaching option that makes the most sense for where you are now.",
  "Follow a plan that is built around steady progress, not random workouts.",
  "Adjust as needed, based on the client's feedback, schedule, and results.",
];

export const credentials = [
  "ACE Certified Personal Trainer",
  "Level 1 Nutrition Coach",
  "Senior Fitness Specialist",
  "Size Inclusive Training certified",
  "20+ years of strength training experience",
  "Competitive strongman: multiple Nova Scotia and Atlantic titles, multiple top-five national finishes",
];

export const aboutStory = [
  "New Scotland Strength is built around straightforward coaching for people in Halifax, Nova Scotia who want to get stronger without getting buried in gym culture nonsense.",
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

// A client testimonial sent to Josh directly (not a Google review). Wording verbatim.
export const clientTestimonial = {
  author: "Kyle M.",
  quote:
    "After years of floundering with self-guided training and big-box gym trainers, NSS finally delivered real results for me. Josh built a program around both my goals and my constraints. I didn't just hit my targets, I’ve surpassed them and have been able to train in a sustainable way, which has resulted in long-term benefits.",
};

export const googleProfileUrl = "https://share.google/cfzvPC917do13ClwO";

// Copied verbatim from the Google Business Profile. Keep wording exactly as posted.
export const googleReviews: GoogleReview[] = [
  {
    author: "Ashley Josephson",
    meta: "Local Guide · 22 reviews",
    avatarColor: "#795548",
    rating: 5,
    year: 2023,
    text: "The folks at New Scotland Strength have amazing experience and provide safe and proper technique for all styles of training offered. I have been working with them for several years now and I have never felt more confident in my fitness and strength! They are always knowledgeable, focused on your goals, and most importantly create such a fun environment!",
  },
  {
    author: "Andrew Foley",
    meta: "1 review",
    avatarColor: "#EF6C00",
    rating: 5,
    year: 2023,
    text: "Great facility with knowledge training and training plans made to fit you and whatever you want to work on. After only a few months they got me to my fittest, strongest and most muscle mass. Couldn't recommend enough.",
  },
  {
    author: "Nicholas Peters",
    meta: "Local Guide · 20 reviews",
    avatarColor: "#1E88E5",
    rating: 5,
    year: 2022,
    text: "Awesome set up and great personnel. Haven't hit the gym in years and as a 30yo had my reservations. Josh made me feel comfortable going at my own pace and offered tons of expertise and encouragement. Highly recommend NSS!",
  },
  {
    author: "Steve Gaudon",
    meta: "3 reviews",
    avatarColor: "#689F38",
    rating: 5,
    year: 2025,
    text: "Amazing training,\nResults make you both mentally and physically stronger!",
  },
  {
    author: "Samantha MacFarlane",
    avatarColor: "#5E35B1",
    rating: 5,
    year: 2025,
  },
  {
    author: "Kyle MacInnis",
    meta: "1 review",
    avatarColor: "#00897B",
    rating: 5,
    year: 2025,
  },
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

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "Where is New Scotland Strength located?",
    answer:
      "New Scotland Strength is based in Halifax, Nova Scotia. In-person sessions run out of a private studio in Herring Cove, with additional gym access in Burnside and Halifax's north end. The service area covers the Halifax Regional Municipality — Halifax, Dartmouth, Bedford, and Sackville — and online coaching is available province-wide and beyond.",
  },
  {
    question: "Do you offer personal training in Dartmouth or Bedford?",
    answer:
      "Yes. Clients from Dartmouth, Bedford, and the rest of the HRM train in-person at the Herring Cove studio or at gyms in Burnside and Halifax's north end. If the location does not work, online coaching is available with the same custom programming and check-ins.",
  },
  {
    question: "What experience does Josh Dunbar have as a coach?",
    answer:
      "Josh has over 20 years of strength training experience and is an ACE Certified Personal Trainer, a Level 1 Nutrition Coach, a Senior Fitness Specialist, and Size Inclusive Training certified. On top of that, he is an active competitive strongman with multiple Nova Scotia and Atlantic titles, as well as multiple top-five finishes at the national level — proof that the methods used with clients are the same ones that produced real results under pressure.",
  },
  {
    question: "Do you work with beginners?",
    answer:
      "Yes. Coaching is built around where you are right now, not where you think you should be. If you are brand new or returning after time away, the programming and pace will reflect that.",
  },
  {
    question: "Do you train older adults?",
    answer:
      "Absolutely. Strength training is one of the most effective tools for staying strong, mobile, and capable as you get older. Programming is adjusted for training history, recovery, and any limitations, so the work is hard enough to produce results without creating new problems. Josh holds a Senior Fitness Specialist certification.",
  },
  {
    question: "Can you help with weight loss, not just strength training?",
    answer:
      "Yes. Weight loss is a regular focus for clients, and Josh has extensive experience helping people drop body fat sustainably without losing the strength they have built. Coaching combines smart programming with practical nutrition support, so the result holds up after the initial drop.",
  },
  {
    question: "Do you train athletes preparing for competition?",
    answer:
      "Yes — this is a specialty. Whether the goal is a first strongman show, a powerlifting meet, or a higher-level competition, programming is built around peaking on the right day. Josh competes himself at a national level, so the prep is informed by direct experience under the bar.",
  },
  {
    question: "Is online coaching available outside Halifax?",
    answer:
      "Yes. Online coaching is not tied to location. Clients train remotely from Halifax, across Nova Scotia and Canada, and anywhere else with check-ins, custom programming, and consistent support.",
  },
  {
    question: "What happens in the first session or check-in?",
    answer:
      "The first step is a conversation — about your training history, what has worked, what has not, your schedule, and what you want to get out of coaching. From there, a plan is built around that context.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "It depends on the goal. Strength and technique improvements often show up within a few weeks of consistent training. Significant body composition or performance changes take longer. Honest coaching means setting realistic timelines.",
  },
  {
    question: "What if I have an injury or physical limitation?",
    answer:
      "Training can be adapted for most limitations. If you have a current injury or a condition that affects how you move, mention it upfront and programming will be built around it rather than ignoring it.",
  },
  {
    question: "How often should I train per week with a coach?",
    answer:
      "It depends on the individual, the goal, and what the rest of life looks like. Most clients see strong results training 2 to 3 sessions per week with a coach. The schedule is matched to recovery, work, and the actual goal — not a rigid template.",
  },
  {
    question: "Do I need my own gym membership for in-person sessions?",
    answer:
      "No. In-person sessions run out of a private studio in Herring Cove, with additional access to gyms in Burnside and Halifax's north end. There is no separate membership required to train with Josh.",
  },
  {
    question: "What equipment do I need for online coaching?",
    answer:
      "Very little. Programming can be built around minimal or no equipment, full home gyms, or a commercial gym setup. The amount of equipment available expands the options but is not a requirement to start training and making real progress.",
  },
  {
    question: "How do online check-ins work?",
    answer:
      "Clients update a shared Google Sheet that Josh monitors and adjusts week to week. Form checks are handled by sending video over WhatsApp, and there is 24/7 support through WhatsApp for questions, adjustments, and accountability between sessions.",
  },
  {
    question: "How do I pay for coaching?",
    answer:
      "Online coaching, programs, and meal plans are paid by e-transfer. In-person sessions can be paid by e-transfer or by Stripe (credit or debit card). Payment details are confirmed when the service is booked.",
  },
  {
    question: "Can I pause or change my plan?",
    answer:
      "Yes. Life changes and training should adapt with it. If your schedule, capacity, or goals shift, the plan changes too. That is part of the job.",
  },
  {
    question: "What makes New Scotland Strength different from a regular gym trainer?",
    answer:
      "Two things: a quiet, focused training environment without the chaos of a busy commercial floor, and over 20 years of hands-on strength experience behind every program. Coaching here is not a script — it is built around the actual person training, with adjustments made as the work moves forward.",
  },
  {
    question: "Should I hire a personal trainer or follow a free program online?",
    answer:
      "Hire a professional. A free program is fine until it stops working — usually right when life changes, an injury shows up, or the easy progress runs out. A coach builds the plan around your actual goals, schedule, and history, then adjusts in real time. Having someone in your corner who is invested in your progress makes the difference between guessing and getting somewhere.",
  },
];
