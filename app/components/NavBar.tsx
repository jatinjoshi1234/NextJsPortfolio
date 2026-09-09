"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "../data/site";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="text-xl font-bold tracking-tight"
        >
          <span className="text-white">{siteConfig.personal.name}</span>{" "}
          <span className="text-sky-400">{siteConfig.personal.lastName}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-slate-400 transition hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Resume */}
        <a
          href={siteConfig.resume.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-lg border border-sky-400/50 px-4 py-2 text-sm font-medium text-sky-400 transition hover:bg-sky-400 hover:text-slate-950 lg:block"
        >
          {siteConfig.resume.label}
        </a>

        {/* Mobile button */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-lg border border-slate-700 p-2 text-slate-300 transition hover:border-sky-400 hover:text-sky-400 lg:hidden"
        >
          {mobileMenuOpen ? (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-800 bg-slate-950 lg:hidden">
          <nav className="mx-auto max-w-7xl px-6 py-5">
            <div className="flex flex-col">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className="border-b border-slate-800/60 py-4 text-sm text-slate-300 transition hover:text-sky-400"
                >
                  {item.name}
                </Link>
              ))}

              <a
                href={siteConfig.resume.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 rounded-lg bg-sky-400 px-4 py-3 text-center text-sm font-semibold text-slate-950"
              >
              {siteConfig.resume.label} Download
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
