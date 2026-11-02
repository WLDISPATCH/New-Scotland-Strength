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
    <header className="sticky top-0 z-50 border-b border-line bg-chalk/95 backdrop-blur-sm">
      <div className="wrap flex h-16 items-center justify-between gap-6 lg:h-20">
        <Link to="/" className="shrink-0" aria-label={`${business.name} home`}>
          <img src={brandPhotos.brandLogo} alt={`${business.name} logo`} className="h-10 w-auto lg:h-12" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end
              className={({ isActive }) =>
                `relative py-1 text-[0.9375rem] font-semibold [font-stretch:108%] transition-colors ${
                  isActive
                    ? "text-iron after:absolute after:inset-x-0 after:-bottom-1 after:h-[3px] after:bg-brand"
                    : "text-steel hover:text-iron"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link to={business.consultationPath} className="btn btn-brand !min-h-11 !px-4 !text-[0.8125rem] sm:!px-5">
            <span className="sm:hidden">Book</span>
            <span className="hidden sm:inline">Book a consult</span>
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <nav className="border-t border-line bg-chalk lg:hidden" aria-label="Main">
          <ul className="wrap py-2">
            {navigation.map((item, index) => (
              <li key={item.path} className="border-b border-line last:border-0">
                <NavLink
                  to={item.path}
                  end
                  className={({ isActive }) =>
                    `flex items-baseline gap-4 py-4 ${isActive ? "text-brand" : "text-iron"}`
                  }
                >
                  <span className="mono text-steel" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="heading text-2xl uppercase">{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
