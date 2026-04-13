import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function StickyBar() {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  // Don't show on the contact page — the form is already right there
  const isContactPage = location.pathname === "/contact";

  useEffect(() => {
    if (isContactPage) {
      setIsVisible(false);
      return;
    }

    const handleScroll = () => {
      // Show after scrolling 400px past the hero
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isContactPage]);

  if (!isVisible || isContactPage) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-[var(--color-line)] bg-[rgba(247,241,231,0.96)] backdrop-blur-xl"
      role="complementary"
      aria-label="Book a consultation"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <p className="truncate text-sm font-medium text-[var(--color-ink)]">
          Ready to train with a clearer plan?
        </p>
        <Link to="/contact" className="btn-primary shrink-0">
          Book a Consultation
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
