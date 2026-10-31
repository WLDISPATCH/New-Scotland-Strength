import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Booking bar for phones and tablets. On laptop screens and up the sticky header already carries this button.
export default function StickyBar() {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  // Don't show on the contact page — the form is already right there
  const isContactPage = location.pathname === "/contact/";

  useEffect(() => {
    if (isContactPage) {
      setIsVisible(false);
      return;
    }

    const handleScroll = () => {
      // Show after scrolling 400px past the hero
      setIsVisible(window.scrollY > 400);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isContactPage]);

  if (!isVisible || isContactPage) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--color-line)] bg-[var(--color-bg)]/95 backdrop-blur-sm lg:hidden"
      role="complementary"
      aria-label="Book a consultation"
    >
      <div className="wrap flex items-center justify-between gap-4 py-3">
        <p className="text-[0.9375rem] font-medium leading-tight text-[var(--color-ink)]">Ready for a clearer plan?</p>
        <Link to="/contact/" className="btn-primary !min-h-11 shrink-0 !px-4">
          Book
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
