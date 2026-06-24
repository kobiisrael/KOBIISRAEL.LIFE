import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/data/site";
import { HOME } from "@/constants/testIds";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-ki-bg/85 backdrop-blur-md border-b border-ki-border"
          : "bg-gradient-to-b from-ki-bg/70 via-ki-bg/30 to-transparent"
      }`}
    >
      <div className="container-ki flex items-center justify-between py-5 md:py-6">
        <Link
          to="/"
          data-testid={HOME.navBrand}
          className="font-serif text-base md:text-lg tracking-[0.18em] uppercase text-ki-fg hover:text-ki-gold transition-colors duration-300"
          aria-label="Kobi Israel — Home"
        >
          Kobi&nbsp;Israel
        </Link>

        <nav
          data-testid={HOME.navDesktop}
          aria-label="Primary"
          className="hidden lg:flex items-center gap-7"
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.slug}
              to={item.to}
              end={item.to === "/"}
              data-testid={HOME.navLink(item.slug)}
              className={({ isActive }) =>
                `text-[11px] uppercase tracking-[0.24em] transition-colors duration-300 ${
                  isActive ? "text-ki-gold" : "text-ki-fg/70 hover:text-ki-fg"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          data-testid={HOME.navMobileToggle}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
          className="lg:hidden text-ki-fg p-2 -mr-2 hover:text-ki-gold transition-colors"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          data-testid={HOME.navMobileDrawer}
          className="lg:hidden fixed inset-0 top-0 z-50 bg-ki-bg/97 backdrop-blur-xl flex flex-col"
        >
          <div className="container-ki flex items-center justify-between py-5">
            <Link
              to="/"
              className="font-serif text-base tracking-[0.18em] uppercase text-ki-fg"
              onClick={() => setOpen(false)}
            >
              Kobi&nbsp;Israel
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="text-ki-fg p-2 -mr-2"
            >
              <X size={22} />
            </button>
          </div>
          <nav
            aria-label="Mobile primary"
            className="container-ki flex-1 flex flex-col justify-center gap-6 pb-24"
          >
            {NAV_ITEMS.map((item, i) => (
              <NavLink
                key={item.slug}
                to={item.to}
                end={item.to === "/"}
                data-testid={`${HOME.navLink(item.slug)}-mobile`}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `font-serif text-3xl tracking-tight transition-colors ${
                    isActive ? "text-ki-gold" : "text-ki-fg hover:text-ki-gold"
                  }`
                }
                style={{ animation: `fade-up 0.5s ${i * 0.05}s both` }}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
