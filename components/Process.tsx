const STEPS = [
  {
    num: "§ 01",
    title: "Discovery",
    body: "We begin with a deep diagnostic, understanding your organization's current state, culture gaps, and strategic goals.",
  },
  {
    num: "§ 02",
    title: "Strategy Design",
    body: "We co-create a tailored roadmap aligned to your priorities, not a generic one-size-fits-all approach.",
  },
  {
    num: "§ 03",
    title: "Implementation",
    body: "We work alongside your team to execute the plan, build capability, and embed new ways of working.",
  },
  {
    num: "§ 04",
    title: "Measure & Sustain",
    body: "We track outcomes, refine the approach, and ensure your transformation is sustainable long after our engagement ends.",
  },
];

export default function Process() {
  return (
    <section id="ioc-process" className="border-t hairline">
      <div className="mx-auto max-w-content px-6 lg:px-10 py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="section-mark mb-5">How We Work</p>
          <h2 className="font-display text-4xl md:text-5xl text-forest tracking-tight">
            A clear path to{" "}
            <span className="italic text-brass">lasting transformation</span>
          </h2>
        </div>

        <ol className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-12">
          {STEPS.map((step, i) => (
            <li key={step.num} className="relative pl-0">
              <span className="report-number text-3xl text-brass/60">
                {step.num}
              </span>
              <h3 className="mt-4 font-display text-xl text-forest">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-ink/70 leading-relaxed">
                {step.body}
              </p>
              {i < STEPS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="hidden md:block absolute top-3 -right-4 w-2 h-px bg-line"
                />
              )}
            </li>
          ))}
        </ol>

        <div className="mt-20 border-t hairline pt-16 text-center">
          <h3 className="font-display text-3xl md:text-4xl text-forest max-w-2xl mx-auto tracking-tight">
            Ready to build a{" "}
            <span className="italic text-brass">high-performance culture?</span>
          </h3>
          <p className="mt-4 text-ink/70 max-w-lg mx-auto leading-relaxed">
            Your people are your most powerful asset. Let&rsquo;s design the
            systems and culture that unlock their full potential.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#ioc-contact"
              className="inline-flex items-center gap-2 bg-forest text-bone text-sm font-medium px-7 py-3.5 hover:bg-ink transition-colors"
            >
              Book a Consultation →
            </a>
            <a
              href="#ioc-services"
              className="inline-flex items-center gap-2 border hairline text-ink text-sm font-medium px-7 py-3.5 hover:border-forest hover:text-forest transition-colors"
            >
              View Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
