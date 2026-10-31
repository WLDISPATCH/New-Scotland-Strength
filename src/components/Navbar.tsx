import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { brandPhotos } from "../assets/photoLibrary";
import { business, navigation } from "../content/siteData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[var(--color-bg)]/95 backdrop-blur-sm">
      <div className="wrap flex h-16 items-center justify-between gap-6 lg:h-[4.5rem]">
        <Link to="/" className="shrink-0" aria-label={`${business.name} home`}>
          <img src={brandPhotos.brandLogo} alt={`${business.name} logo`} className="h-10 w-auto lg:h-11" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative py-1 text-[0.9375rem] font-medium transition-colors ${
                  isActive
                    ? "text-[var(--color-ink)] after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:bg-[var(--color-accent)]"
                    : "text-[var(--color-text-muted)] hover:text-[var(--color-ink)]"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link to={business.consultationPath} className="btn-primary hidden !min-h-10 !px-5 !text-[0.9375rem] lg:inline-flex">
          Book Consultation
        </Link>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="-mr-2 inline-flex h-11 w-11 shrink-0 items-center justify-center text-[var(--color-ink)] lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-[var(--color-line)] bg-[var(--color-bg)] lg:hidden">
          <nav className="wrap flex flex-col py-3" aria-label="Main">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `border-b border-[var(--color-line)] py-3.5 font-[family-name:var(--font-display)] text-xl font-semibold transition-colors ${
                    isActive ? "text-[var(--color-accent-strong)]" : "text-[var(--color-ink)]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link to={business.consultationPath} className="btn-primary mb-2 mt-5 justify-center">
              Book Consultation
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
