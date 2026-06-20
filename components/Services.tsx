const SERVICES = [
  {
    num: "01",
    icon: "🌱",
    title: "People and Culture Transformation",
    body: "We help organizations translate their mission and values into measurable behaviors, stronger teams, and sustainable performance.",
  },
  {
    num: "02",
    icon: "🔍",
    title: "Recruitment",
    body: "Great organizations are built by the right people. We help you attract and hire talent that fits your strategy, culture, and long-term goals — whether at the executive level or entry level.",
  },
  {
    num: "03",
    icon: "⚡",
    title: "Performance Management",
    body: "We partner with organizations to build performance management systems that are equitable and effective, rewarding excellence while developing underperformers into high-impact contributors.",
  },
  {
    num: "04",
    icon: "💰",
    title: "Compensation and Benefit Management",
    body: "We create compensation and benefits frameworks that are competitive, sustainable, and aligned with your budget, helping you attract, motivate, and retain top talent.",
  },
  {
    num: "05",
    icon: "🛡️",
    title: "General HR Advisory and Support",
    body: "We provide strategic and operational HR support to help organizations build efficient people processes, ensure compliance, and enhance employee experience. Whether you need ongoing advisory or short-term project support, we are your trusted HR partner.",
    wide: true,
  },
];

export default function Services() {
  return (
    <section id="ioc-services" className="border-t hairline bg-mist">
      <div className="mx-auto max-w-content px-6 lg:px-10 py-24 md:py-28">
        <div className="mx-auto max-w-xl text-center">
          <span className="section-mark">What We Do</span>
          <h2 className="mt-5 font-display text-3xl md:text-5xl text-ink tracking-tight leading-tight">
            Comprehensive <span className="italic text-brass">HR Solutions</span>
            <br />
            Built for Growth
          </h2>
          <p className="mt-4 text-[15.5px] text-slate-light leading-relaxed font-light">
            From culture to compensation, we cover every dimension of your people
            strategy.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service) => (
            <div
              key={service.num}
              className={`group relative overflow-hidden rounded-2xl border hairline bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-brass/30 hover:shadow-[0_24px_60px_rgba(45,27,105,0.11)] ${
                service.wide ? "lg:col-span-2" : ""
              }`}
            >
              <span
                aria-hidden="true"
                className="absolute left-0 right-0 top-0 h-[3px] origin-left scale-x-0 bg-brand-button transition-transform duration-300 group-hover:scale-x-100"
              />
              <span
                aria-hidden="true"
                className="absolute right-5 top-4 font-display text-5xl font-normal text-brass/5"
              >
                {service.num}
              </span>

              <div className="flex h-[50px] w-[50px] items-center justify-center rounded-xl bg-mist text-xl">
                {service.icon}
              </div>

              <h3 className="mt-5 font-display text-lg font-medium text-ink leading-snug">
                {service.title}
              </h3>
              <p className="mt-3 text-sm text-slate leading-relaxed">{service.body}</p>

              <a
                href="#ioc-contact"
                className="mt-4 inline-flex translate-x-[-6px] items-center gap-1.5 text-[13px] font-semibold text-brass opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
              >
                Request Consultation <span aria-hidden="true">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
