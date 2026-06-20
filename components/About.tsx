const POINTS = [
  "Bespoke HR solutions aligned to your organization's unique strategy and culture",
  "Experienced consultants with cross-industry expertise and deep sector knowledge",
  "End-to-end support from diagnostic through implementation and measurement",
];

export default function About() {
  return (
    <section id="ioc-about" className="border-t hairline bg-forest text-bone">
      <div className="mx-auto max-w-content px-6 lg:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="section-mark mb-5 text-brass-light">Who We Are</p>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight">
              Where purpose meets{" "}
              <span className="italic text-brass-light">people strategy</span>
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p className="text-bone/85 leading-relaxed text-lg">
              IOCONSULTS is a strategic HR consulting firm dedicated to helping
              organizations build the people systems and cultures that fuel
              lasting success. We operate at the intersection of business
              strategy and human behavior, turning people challenges into
              performance solutions.
            </p>
            <p className="mt-5 text-bone/85 leading-relaxed text-lg">
              Our team brings deep expertise across recruitment, culture
              transformation, performance management, and compensation design —
              combining analytical rigor with practical wisdom earned in real
              organizations.
            </p>

            <ul className="mt-10 space-y-5 border-t border-bone/15 pt-10">
              {POINTS.map((point) => (
                <li key={point} className="flex gap-4 text-bone/90">
                  <span className="text-brass-light shrink-0 font-mono text-sm mt-1">
                    →
                  </span>
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

            <a
              href="#ioc-contact"
              className="mt-10 inline-flex items-center gap-2 bg-brass text-ink text-sm font-medium px-7 py-3.5 hover:bg-brass-light transition-colors"
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
