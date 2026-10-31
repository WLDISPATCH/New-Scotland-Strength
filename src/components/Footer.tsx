import { NavLink } from "react-router-dom";
import { brandPhotos } from "../assets/photoLibrary";
import { business, navigation, socialLinks } from "../content/siteData";

const headingClass = "eyebrow !text-[var(--color-text-subtle)]";
const linkClass = "text-[0.9375rem] text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-ink)]";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg-alt)]">
      <div className="wrap grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_1fr_0.7fr] lg:gap-12 lg:py-16">
        <div className="sm:col-span-2 lg:col-span-1">
          <img src={brandPhotos.brandLogo} alt={`${business.name} logo`} className="h-14 w-auto lg:h-16" />
          <p className="mt-5 max-w-xs text-[0.9375rem] leading-relaxed text-[var(--color-text-muted)]">
            Personal training and strength coaching with {business.owner} in {business.city}, {business.region}.
          </p>
        </div>

        <div className="hidden lg:block">
          <p className={headingClass}>Pages</p>
          <ul className="mt-4 space-y-2.5">
            {navigation.map((item) => (
              <li key={item.path}>
                <NavLink to={item.path} className={linkClass}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className={headingClass}>Contact</p>
          <ul className="mt-4 space-y-2.5">
            <li className="text-[0.9375rem] text-[var(--color-text-muted)]">
              {business.city}, {business.region}, {business.country}
            </li>
            <li>
              <a href={`mailto:${business.email}`} className={`${linkClass} break-all`}>
                {business.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className={headingClass}>Follow</p>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2.5 lg:flex-col">
            {socialLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} target="_blank" rel="noreferrer" className={linkClass}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--color-line)]">
        <div className="wrap flex flex-col gap-1.5 py-5 pb-24 text-[0.8125rem] text-[var(--color-text-subtle)] md:flex-row md:justify-between md:gap-6 lg:pb-5">
          <p>© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
          <p>Serving Halifax, Dartmouth, Bedford, Sackville, and the wider Halifax Regional Municipality (HRM).</p>
        </div>
      </div>
    </footer>
  );
}
