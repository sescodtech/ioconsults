"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "About", href: "#ioc-about" },
  { label: "Services", href: "#ioc-services" },
  { label: "Our Process", href: "#ioc-process" },
  { label: "Our Story", href: "/our-story" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b hairline bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 shadow-[0_2px_20px_rgba(45,27,105,0.06)]">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="shrink-0" aria-label="IOCONSULTS home">
            <Logo />
          </Link>

          <nav className="hidden md:flex items-center gap-9">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate hover:text-brass transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="#ioc-contact"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-button text-white text-sm font-bold px-6 py-2.5 shadow-[0_4px_16px_rgba(61,36,144,0.3)] hover:shadow-[0_8px_24px_rgba(61,36,144,0.4)] hover:-translate-y-0.5 transition-all"
            >
              Get in Touch
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 rounded-full bg-forest transition-transform ${open ? "translate-y-[6.5px] rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 rounded-full bg-forest transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 rounded-full bg-forest transition-transform ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
          </button>
        </div>

        {open && (
          <nav className="md:hidden border-t hairline py-6 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-slate py-3 border-b hairline hover:text-brass transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#ioc-contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-button text-white text-sm font-bold px-5 py-3 w-full"
            >
              Get in Touch
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
