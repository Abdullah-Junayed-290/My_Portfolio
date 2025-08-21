import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle.jsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  const linkBase =
    "px-3 py-2 rounded-md text-sm font-medium transition-colors border-b-2 border-transparent";
  const linkClasses = ({ isActive }) =>
    `${linkBase} ${
      isActive
        ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 border-indigo-600 dark:border-indigo-400"
        : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/70 dark:bg-slate-900/70 backdrop-blur border-b border-slate-200 dark:border-slate-800">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" aria-label="Main">
        <div className="flex h-16 items-center justify-between gap-3">
          <Link to="/" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-indigo-600 text-white font-bold">
              M
            </span>
            <span className="text-slate-900 dark:text-white font-semibold">Md. Portfolio</span>
          </Link>

          <div className="hidden md:flex md:items-center md:gap-1">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === "/"} className={linkClasses}>
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-600 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-expanded={open}
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
            >
              <svg className={`h-6 w-6 ${open ? "hidden" : "block"}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
              </svg>
              <svg className={`h-6 w-6 ${open ? "block" : "hidden"}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <div className="space-y-1 px-4 py-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="pt-2">
              <ThemeToggle className="w-full justify-center" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}