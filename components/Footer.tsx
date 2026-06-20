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
    <footer className="border-t hairline bg-forest text-white">
      <div className="mx-auto max-w-content px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Logo variant="light" />
            <p className="mt-5 text-sm text-white/55 leading-relaxed max-w-sm">
              Strategic HR consulting that transforms organizations from the
              inside out. We turn people challenges into lasting competitive
              advantages.
            </p>
            <div className="mt-6 flex gap-2.5">
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/12 text-xs font-semibold text-white/45 hover:border-brass-light hover:text-brass-light hover:bg-brass-light/10 transition-colors"
              >
                in
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/12 text-xs font-semibold text-white/45 hover:border-brass-light hover:text-brass-light hover:bg-brass-light/10 transition-colors"
              >
                𝕏
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/12 text-xs font-semibold text-white/45 hover:border-brass-light hover:text-brass-light hover:bg-brass-light/10 transition-colors"
              >
                ig
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="text-[11px] font-bold uppercase tracking-widest2 text-brass-light mb-5">
              Services
            </p>
            <ul className="space-y-3 text-sm text-white/55">
              {SERVICE_LINKS.map((s) => (
                <li key={s}>
                  <a href="#ioc-services" className="hover:text-white transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-[11px] font-bold uppercase tracking-widest2 text-brass-light mb-5">
              Company
            </p>
            <ul className="space-y-3 text-sm text-white/55">
              <li><a href="#ioc-about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#ioc-process" className="hover:text-white transition-colors">Our Process</a></li>
              <li><a href="#ioc-contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><Link href="/our-story" className="hover:text-white transition-colors">Our Story</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-[11px] font-bold uppercase tracking-widest2 text-brass-light mb-5">
              Contact
            </p>
            <ul className="space-y-3 text-sm text-white/55">
              <li><a href="tel:+2348029641714" className="hover:text-white transition-colors">+234 802 964 1714</a></li>
              <li><a href="mailto:contact@ioconsults.com.ng" className="hover:text-white transition-colors break-all">contact@ioconsults.com.ng</a></li>
              <li>Lagos, Nigeria</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-white/12 pt-8 text-xs text-white/35">
          <p>© {year} IOCONSULTS. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brass-light transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brass-light transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
