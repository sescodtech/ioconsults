import Link from "next/link";
import Logo from "./Logo";

const SERVICE_LINKS = [
  "People and Culture",
  "Recruitment",
  "Performance Management",
  "Compensation and Benefits",
  "HR Advisory",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t hairline bg-forest text-bone">
      <div className="mx-auto max-w-content px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Logo variant="light" className="text-xl" />
            <p className="mt-5 text-sm text-bone/70 leading-relaxed max-w-sm">
              Strategic HR consulting that transforms organizations from the
              inside out. We turn people challenges into lasting competitive
              advantages.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-mono uppercase tracking-widest2 text-brass-light mb-4">
              Services
            </p>
            <ul className="space-y-3 text-sm text-bone/70">
              {SERVICE_LINKS.map((s) => (
                <li key={s}>
                  <a href="#ioc-services" className="hover:text-bone transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs font-mono uppercase tracking-widest2 text-brass-light mb-4">
              Company
            </p>
            <ul className="space-y-3 text-sm text-bone/70">
              <li><a href="#ioc-about" className="hover:text-bone transition-colors">About Us</a></li>
              <li><a href="#ioc-process" className="hover:text-bone transition-colors">Our Process</a></li>
              <li><a href="#ioc-contact" className="hover:text-bone transition-colors">Contact</a></li>
              <li><Link href="/our-story" className="hover:text-bone transition-colors">Our Story</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs font-mono uppercase tracking-widest2 text-brass-light mb-4">
              Contact
            </p>
            <ul className="space-y-3 text-sm text-bone/70">
              <li><a href="tel:+2348029641714" className="hover:text-bone transition-colors">+234 802 964 1714</a></li>
              <li><a href="mailto:contact@ioconsults.com.ng" className="hover:text-bone transition-colors break-all">contact@ioconsults.com.ng</a></li>
              <li>Lagos, Nigeria</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-bone/15 text-xs text-bone/50">
          © {year} IOCONSULTS. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
