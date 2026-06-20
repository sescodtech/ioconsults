const POINTS = [
  "Bespoke HR solutions aligned to your organization's unique strategy and culture",
  "Experienced consultants with cross-industry expertise and deep sector knowledge",
  "End-to-end support from diagnostic through implementation and measurement",
];

export default function About() {
  return (
    <section id="ioc-about" className="border-t hairline bg-white">
      <div className="mx-auto max-w-content px-6 lg:px-10 py-24 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="section-mark mb-5 inline-block">Who We Are</span>
            <h2 className="mt-5 font-display text-3xl md:text-5xl text-ink tracking-tight leading-tight">
              Where purpose meets{" "}
              <span className="italic text-brass">people strategy</span>
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p className="text-slate leading-relaxed text-[15.5px]">
              IOCONSULTS is a strategic HR consulting firm dedicated to helping
              organizations build the people systems and cultures that fuel
              lasting success. We operate at the intersection of business
              strategy and human behavior, turning people challenges into
              performance solutions.
            </p>
            <p className="mt-4 text-slate leading-relaxed text-[15.5px]">
              Our team brings deep expertise across recruitment, culture
              transformation, performance management, and compensation design —
              combining analytical rigor with practical wisdom earned in real
              organizations.
            </p>

            <ul className="mt-8 space-y-3">
              {POINTS.map((point) => (
                <li
                  key={point}
                  className="flex gap-3.5 rounded-[10px] border-l-[3px] border-brass bg-mist px-4 py-3.5 text-slate transition-colors hover:bg-[#F0ECFC]"
                >
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brass" aria-hidden="true" />
                  <span className="text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

            <a
              href="#ioc-contact"
              className="mt-9 inline-flex items-center gap-2 rounded-lg bg-brand-button text-white text-sm font-bold px-7 py-3.5 shadow-[0_6px_22px_rgba(61,36,144,0.3)] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(61,36,144,0.45)] transition-all"
            >
              Start Your HR Transformation
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
