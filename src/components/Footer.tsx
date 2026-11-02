import { NavLink } from "react-router-dom";
import { brandPhotos } from "../assets/photoLibrary";
import { business, navigation, socialLinks } from "../content/siteData";

export default function Footer() {
  return (
    <footer className="on-dark bg-iron text-chalk">
      <div className="wrap grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr_1fr] lg:py-16">
        <div>
          <img src={brandPhotos.brandLogo} alt={`${business.name} logo`} className="h-14 w-auto invert" />
          <p className="mt-5 max-w-sm leading-relaxed text-steel-light">
            Personal training and strength coaching with {business.owner}. In person across the HRM, online anywhere.
          </p>
        </div>
        <div>
          <p className="mono text-steel-light">Pages</p>
          <ul className="mt-4 space-y-2">
            {navigation.map((item) => (
              <li key={item.path}>
                <NavLink to={item.path} end className="transition-colors hover:text-brand-light">
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mono text-steel-light">Contact</p>
          <ul className="mt-4 space-y-2">
            <li className="text-steel-light">
              {business.city}, {business.region}
            </li>
            <li>
              <a href={`mailto:${business.email}`} className="break-all transition-colors hover:text-brand-light">
                {business.email}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="mono text-steel-light">Follow</p>
          <ul className="mt-4 space-y-2">
            {socialLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} target="_blank" rel="noreferrer" className="transition-colors hover:text-brand-light">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-line-dark">
        <div className="wrap flex flex-col gap-2 py-5 pb-24 text-steel-light md:flex-row md:justify-between md:gap-8 lg:pb-5">
          <p className="mono">
            © {new Date().getFullYear()} {business.name}
          </p>
          <p className="mono">Serving Halifax, Dartmouth, Bedford, Sackville &amp; the wider HRM</p>
        </div>
      </div>
    </footer>
  );
}
