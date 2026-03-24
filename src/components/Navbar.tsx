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
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[rgba(247,241,231,0.88)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-4">
          <div className="flex h-14 w-40 shrink-0 items-center justify-center overflow-hidden rounded-[1.45rem] border border-[var(--color-accent)]/20 bg-[rgba(255,250,242,0.96)] px-3 py-2 shadow-[0_14px_30px_rgba(78,51,25,0.1)] sm:h-16 sm:w-48">
            <img
              src={brandPhotos.brandLogo}
              alt="New Scotland Strength logo"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="min-w-0">
            <p className="hidden text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-[var(--color-text-subtle)] sm:block">
              {business.city}, {business.region}
            </p>
            <p className="truncate text-sm font-semibold text-[var(--color-ink)] sm:text-base">{business.name}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive ? "text-[var(--color-accent-strong)]" : "text-[var(--color-text-subtle)] hover:text-[var(--color-ink)]"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link to={business.consultationPath} className="btn-primary">
            Book Consultation
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--color-line)] bg-[rgba(255,250,242,0.84)] text-[var(--color-ink)] md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-[var(--color-line)] bg-[rgba(247,241,231,0.98)] md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-[rgba(159,103,52,0.12)] text-[var(--color-accent-strong)]"
                      : "text-[var(--color-text-subtle)] hover:bg-[rgba(159,103,52,0.08)] hover:text-[var(--color-ink)]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link to={business.consultationPath} className="btn-primary mt-4 justify-center">
              Book Consultation
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
