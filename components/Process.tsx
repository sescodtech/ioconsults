const STEPS = [
  {
    num: "01",
    title: "Discovery",
    body: "We begin with a deep diagnostic, understanding your organization's current state, culture gaps, and strategic goals.",
  },
  {
    num: "02",
    title: "Strategy Design",
    body: "We co-create a tailored roadmap aligned to your priorities, not a generic one-size-fits-all approach.",
  },
  {
    num: "03",
    title: "Implementation",
    body: "We work alongside your team to execute the plan, build capability, and embed new ways of working.",
  },
  {
    num: "04",
    title: "Measure & Sustain",
    body: "We track outcomes, refine the approach, and ensure your transformation is sustainable long after our engagement ends.",
  },
];

export default function Process() {
  return (
    <section id="ioc-process" className="border-t hairline bg-brand-gradient-soft">
      <div className="mx-auto max-w-content px-6 lg:px-10 py-24 md:py-28">
        <div className="mx-auto max-w-xl text-center">
          <span className="section-mark on-dark">How We Work</span>
          <h2 className="mt-5 font-display text-3xl md:text-5xl text-white tracking-tight leading-tight">
            A Clear Path to{" "}
            <span className="italic text-brass-light">Lasting Transformation</span>
          </h2>
        </div>

        <ol className="relative mt-16 grid grid-cols-1 gap-y-12 md:grid-cols-4 md:gap-x-6">
          <span
            aria-hidden="true"
            className="absolute top-[26px] hidden h-px bg-white/15 md:block"
            style={{ left: "calc(12.5% + 26px)", right: "calc(12.5% + 26px)" }}
          />
          {STEPS.map((step) => (
            <li key={step.num} className="text-center px-3">
              <div className="mx-auto flex h-[52px] w-[52px] items-center justify-center rounded-full border border-white/20 bg-white/[0.06] font-display text-lg font-medium text-brass-light transition-colors hover:border-brass-light hover:bg-brass-light/15">
                {step.num}
              </div>
              <h3 className="mt-6 font-display text-xl font-medium text-white">
                {step.title}
              </h3>
              <p className="mt-2.5 text-[13.5px] font-light text-white/55 leading-relaxed">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
