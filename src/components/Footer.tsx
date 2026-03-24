import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { brandPhotos } from "../assets/photoLibrary";
import { business, navigation, socialLinks } from "../content/siteData";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(239,228,212,0.72),rgba(229,215,195,0.9))]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.7fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <div className="flex items-center gap-4">
            <div className="flex h-20 w-44 items-center justify-center overflow-hidden rounded-[1.75rem] border border-[var(--color-line)] bg-[rgba(255,250,242,0.88)] px-4 py-3 shadow-[0_14px_34px_rgba(78,51,25,0.08)]">
              <img
                src={brandPhotos.brandLogo}
                alt="New Scotland Strength logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-accent)]">
                New Scotland Strength
              </p>
              <p className="mt-2 text-sm text-[var(--color-text-subtle)]">
                Halifax, Nova Scotia
              </p>
            </div>
          </div>
          <h2 className="mt-4 text-2xl font-semibold text-[var(--color-ink)]">
            Personal training and strength coaching for Halifax clients who want real structure.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--color-text-muted)]">
            Josh Dunbar helps busy adults in Halifax, Dartmouth, Bedford, and the wider HRM train with more clarity, better progression, and a plan that fits real life.
          </p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-ink)]">
            Start a consultation
            <ArrowUpRight className="h-4 w-4 text-[var(--color-accent)]" />
          </Link>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-text-subtle)]">
            Navigation
          </p>
          <div className="mt-4 flex flex-col gap-3">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="text-sm text-[var(--color-text-muted)] transition hover:text-[var(--color-ink)]"
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-text-subtle)]">
            Contact
          </p>
          <div className="mt-4 space-y-4 text-sm text-[var(--color-text-muted)]">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent)]" />
              <span>
                {business.city}, {business.region}, {business.country}
              </span>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent)]" />
              <span>{business.email}</span>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-text-subtle)]">
            Social
          </p>
          <div className="mt-4 flex flex-col gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-[var(--color-text-muted)] transition hover:text-[var(--color-ink)]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--color-line)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-[var(--color-text-subtle)] sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
          <p>Serving Halifax, Dartmouth, Bedford, and Halifax Regional Municipality.</p>
        </div>
      </div>
    </footer>
  );
}
