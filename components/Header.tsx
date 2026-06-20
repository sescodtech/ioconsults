"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Process", href: "#process" },
  { label: "Our Story", href: "/our-story" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b hairline bg-bone/90 backdrop-blur supports-[backdrop-filter]:bg-bone/80">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="shrink-0" aria-label="IOCONSULTS home">
            <Logo className="text-2xl" />
          </Link>

          <nav className="hidden md:flex items-center gap-9">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-ink/80 hover:text-forest transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-forest text-bone text-sm font-medium px-5 py-2.5 hover:bg-ink transition-colors"
            >
              Get in Touch
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            <span className={`block h-px w-6 bg-ink transition-transform ${open ? "translate-y-[6.5px] rotate-45" : ""}`} />
            <span className={`block h-px w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-6 bg-ink transition-transform ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
          </button>
        </div>

        {open && (
          <nav className="md:hidden border-t hairline py-6 flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-ink/80"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 bg-forest text-bone text-sm font-medium px-5 py-3 w-fit"
            >
              Get in Touch →
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
