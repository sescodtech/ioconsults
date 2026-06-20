const TRAITS = [
  {
    mark: "§ 01",
    title: "Strategy Led",
    body: "Every engagement is anchored to your business strategy, not generic templates.",
  },
  {
    mark: "§ 02",
    title: "People First",
    body: "We build systems that treat talent as your most valuable competitive advantage.",
  },
  {
    mark: "§ 03",
    title: "Results Driven",
    body: "We measure success the way you do — through performance, retention, and growth.",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper-texture" id="ioc-home">
      <div className="mx-auto max-w-content px-6 lg:px-10 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="max-w-3xl">
          <p className="section-mark mb-6">Strategic HR Consulting · Lagos</p>

          <h1 className="font-display text-[2.75rem] leading-[1.08] sm:text-6xl md:text-7xl font-medium text-forest tracking-tight">
            A strong culture is not a slogan.
            <br />
            It is a{" "}
            <span className="italic font-normal text-brass">performance engine.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg text-ink/75 leading-relaxed">
            We believe organizations that intentionally build culture remain on a
            consistent upward trajectory, and that is why we are here.
          </p>
          <p className="mt-3 max-w-xl text-lg text-ink/75 leading-relaxed">
            If you want this to be your company&rsquo;s experience, let&rsquo;s start
            the conversation.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#ioc-contact"
              className="inline-flex items-center gap-2 bg-forest text-bone text-sm font-medium px-7 py-3.5 hover:bg-ink transition-colors"
            >
              Start the Conversation
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="#ioc-services"
              className="inline-flex items-center gap-2 border hairline text-ink text-sm font-medium px-7 py-3.5 hover:border-forest hover:text-forest transition-colors"
            >
              Explore Services
            </a>
          </div>
        </div>

        <dl className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-px bg-line border hairline">
          {TRAITS.map((trait) => (
            <div key={trait.title} className="bg-bone px-7 py-8">
              <dt className="report-number">{trait.mark}</dt>
              <dd className="mt-3 font-display text-lg text-forest">{trait.title}</dd>
              <dd className="mt-2 text-sm text-ink/70 leading-relaxed">{trait.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
