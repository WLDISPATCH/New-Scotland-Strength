import brandLogo from "./photos/nss-logo.png";
import aboutPortrait from "./photos/optimized/about-oh.jpg";
import contactPortrait from "./photos/optimized/contact-yk.jpg";
import heroPortrait from "./photos/optimized/hero-bts.jpg";
import resultsWide from "./photos/optimized/results-wide.jpg";
import servicesEnvironment from "./photos/optimized/services-gym.jpg";
import showcaseLift from "./photos/optimized/showcase-deadlift.jpg";
import showcaseCarry from "./photos/optimized/showcase-carry.jpg";
import joshOverheadPress from "./photos/optimized/josh-overhead-press.jpg";
import joshLogPress from "./photos/optimized/josh-log-press.jpg";
import joshKegOverhead from "./photos/optimized/josh-keg-overhead.jpg";
import clientBeamLift from "./photos/optimized/client-beam-lift.jpg";
import clientFrameDeadlift from "./photos/optimized/client-frame-deadlift.jpg";
import clientKegCarry from "./photos/optimized/client-keg-carry.jpg";
import clientKegRun from "./photos/optimized/client-keg-run.jpg";
import clientPlateLift from "./photos/optimized/client-plate-lift.jpg";
import truckPull from "./photos/optimized/truck-pull.jpg";
import teamTrophies from "./photos/optimized/team-trophies.jpg";

export type Photo = {
  src: string;
  alt: string;
};

export const brandPhotos = { brandLogo };

// Portrait photos of Josh, used by the rotating Home, About, and Contact slots.
export const joshPhotos: Photo[] = [
  { src: heroPortrait, alt: "Josh Dunbar competing in a strongman event" },
  { src: showcaseCarry, alt: "Josh Dunbar getting set for a carry during competition" },
  { src: aboutPortrait, alt: "Josh Dunbar completing a clean during competition" },
  { src: contactPortrait, alt: "Josh Dunbar carrying a yoke during competition" },
  { src: showcaseLift, alt: "Josh Dunbar pulling a heavy deadlift during competition" },
  { src: joshOverheadPress, alt: "Josh Dunbar pressing a barbell overhead in a strongman gym" },
  { src: joshLogPress, alt: "Josh Dunbar pressing a log overhead at an outdoor strongman competition" },
  { src: joshKegOverhead, alt: "Josh Dunbar lifting a keg overhead at an outdoor strongman competition" },
];

// Landscape photos for wide banner slots.
export const widePhotos: Photo[] = [
  { src: truckPull, alt: "Athlete in a New Scotland Strength hat pulling a truck" },
  { src: clientPlateLift, alt: "New Scotland Strength client lifting a stack of plates by the handle" },
  { src: servicesEnvironment, alt: "Inside the New Scotland Strength training studio" },
];

export const galleryPhotos: Photo[] = [
  ...joshPhotos,
  { src: teamTrophies, alt: "New Scotland Strength athletes with their trophies at Nova Scotia's Strongest 2026" },
  { src: clientFrameDeadlift, alt: "New Scotland Strength client deadlifting a loaded frame at a strongman competition" },
  { src: clientKegRun, alt: "New Scotland Strength client running with a keg at a strongman competition" },
  { src: clientBeamLift, alt: "New Scotland Strength client lifting a loaded wooden beam as a judge signals" },
  { src: clientKegCarry, alt: "New Scotland Strength client carrying a keg at a strongman competition" },
  { src: clientPlateLift, alt: "New Scotland Strength client lifting a stack of plates by the handle" },
  { src: truckPull, alt: "Athlete in a New Scotland Strength hat pulling a truck" },
  { src: resultsWide, alt: "Strongman athlete pulling a sled in front of a crowd" },
];

export function shuffled<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
