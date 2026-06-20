const SERVICES = [
  {
    num: "01",
    title: "People and Culture Transformation",
    body: "We help organizations translate their mission and values into measurable behaviors, stronger teams, and sustainable performance.",
  },
  {
    num: "02",
    title: "Recruitment",
    body: "Great organizations are built by the right people. We help you attract and hire talent that fits your strategy, culture, and long-term goals — whether at the executive level or entry level.",
  },
  {
    num: "03",
    title: "Performance Management",
    body: "We partner with organizations to build performance management systems that are equitable, effective, and aligned with business goals, rewarding excellence while developing underperformers into high-impact contributors.",
  },
  {
    num: "04",
    title: "Compensation and Benefit Management",
    body: "We create compensation and benefits frameworks that are competitive, sustainable, and aligned with your budget, helping you attract, motivate, and retain top talent.",
  },
  {
    num: "05",
    title: "General HR Advisory and Support",
    body: "We provide strategic and operational HR support to help organizations build efficient people processes, ensure compliance, and enhance employee experience. Whether you need ongoing advisory or short-term project support, we are your trusted HR partner.",
  },
];

export default function Services() {
  return (
    <section id="ioc-services" className="border-t hairline">
      <div className="mx-auto max-w-content px-6 lg:px-10 py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="section-mark mb-5">What We Do</p>
          <h2 className="font-display text-4xl md:text-5xl text-forest tracking-tight">
            Comprehensive <span className="italic text-brass">HR Solutions</span>{" "}
            built for growth
          </h2>
          <p className="mt-5 text-ink/70 leading-relaxed">
            From culture to compensation, we cover every dimension of your people
            strategy.
          </p>
        </div>

        <div className="mt-16 border-t hairline">
          {SERVICES.map((service) => (
            <div
              key={service.num}
              className="group grid grid-cols-1 md:grid-cols-[100px_1fr_auto] gap-4 md:gap-10 items-start md:items-center border-b hairline py-9"
            >
              <span className="report-number text-2xl text-brass/70 group-hover:text-brass transition-colors">
                {service.num}
              </span>
              <div>
                <h3 className="font-display text-xl md:text-2xl text-forest">
                  {service.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm md:text-[0.95rem] text-ink/70 leading-relaxed">
                  {service.body}
                </p>
              </div>
              <a
                href="#ioc-contact"
                className="text-sm font-medium text-forest whitespace-nowrap underline decoration-brass/40 underline-offset-4 hover:decoration-brass"
              >
                Request Consultation →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
