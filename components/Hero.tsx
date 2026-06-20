import Image from "next/image";

const LOGO_URL =
  "https://res.cloudinary.com/dwe7lkty4/image/upload/v1781986878/4df55acf-088d-4ec8-b87f-641fb10aca08_wxzr0v.jpg";

const TRAITS = [
  {
    icon: "🎯",
    title: "Strategy Led",
    body: "Every engagement is anchored to your business strategy, not generic templates.",
  },
  {
    icon: "🤝",
    title: "People First",
    body: "We build systems that treat talent as your most valuable competitive advantage.",
  },
  {
    icon: "📈",
    title: "Results Driven",
    body: "We measure success the way you do — through performance, retention, and growth.",
  },
];

export default function Hero() {
  return (
    <>
      <section
        className="relative overflow-hidden bg-brand-gradient"
        id="ioc-home"
      >
        {/* Floating logo orb */}
        <div
          aria-hidden="true"
          className="brand-orb hidden lg:flex absolute right-[7vw] top-1/2 -translate-y-1/2 items-center justify-center"
          style={{ width: "min(420px, 36vw)", height: "min(420px, 36vw)" }}
        >
          <div className="relative z-10 w-[55%] max-w-[200px] rounded-xl bg-white/95 p-4">
            <Image
              src={LOGO_URL}
              alt="IOCONSULTS"
              height={120}
              width={200}
              className="h-auto w-full object-contain opacity-90"
            />
          </div>
        </div>

        <span className="sparkle hidden lg:block" style={{ top: "22%", right: "14%", width: 5, height: 5 }} />
        <span className="sparkle hidden lg:block" style={{ top: "18%", right: "28%", width: 4, height: 4, animationDelay: "0.8s" }} />
        <span className="sparkle hidden lg:block" style={{ top: "68%", right: "6%", width: 6, height: 6, animationDelay: "1.4s" }} />

        <div className="relative z-[2] mx-auto max-w-content px-6 lg:px-10 pt-28 pb-20 md:pt-32 md:pb-24">
          <div className="max-w-xl">
            <span className="section-mark on-dark mb-7 inline-flex items-center gap-2">
              <span className="h-[7px] w-[7px] rounded-full bg-brass-light" aria-hidden="true" />
              Strategic HR Consulting · Lagos
            </span>

            <h1 className="font-display text-[2.5rem] leading-[1.12] sm:text-5xl md:text-[3.6rem] font-medium text-white tracking-tight">
              A strong culture is not a slogan. It is a{" "}
              <span className="italic text-brass-light">performance engine.</span>
            </h1>

            <p className="mt-6 max-w-md text-base md:text-lg text-white/70 leading-relaxed font-light">
              We believe organizations that intentionally build culture remain on a
              consistent upward trajectory, and that is why we are here.
            </p>
            <p className="mt-3 max-w-md text-sm md:text-base italic text-white/45">
              If you want this to be your company&rsquo;s experience, let&rsquo;s start
              the conversation.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <a
                href="#ioc-contact"
                className="inline-flex items-center gap-2 rounded-lg bg-white text-forest text-sm font-bold px-6 py-3.5 shadow-[0_6px_24px_rgba(0,0,0,0.18)] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(0,0,0,0.28)] transition-all"
              >
                Start the Conversation
                <span aria-hidden="true">→</span>
              </a>
              <a
                href="#ioc-services"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 text-white/85 text-sm font-semibold px-6 py-3.5 hover:border-white/70 hover:bg-white/10 hover:text-white transition-all"
              >
                Explore Services
              </a>
            </div>
          </div>

          <div className="relative z-[2] mt-14 flex gap-11 max-w-xl border-t border-white/12 pt-8">
            <div>
              <div className="font-display text-3xl md:text-4xl font-medium text-white">50+</div>
              <div className="mt-1 text-[11px] tracking-widest2 uppercase text-white/40">Clients Served</div>
            </div>
            <div>
              <div className="font-display text-3xl md:text-4xl font-medium text-white">10+</div>
              <div className="mt-1 text-[11px] tracking-widest2 uppercase text-white/40">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY STRIP */}
      <div className="border-b hairline bg-white">
        <div className="mx-auto max-w-content grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-line px-6 lg:px-10 py-12">
          {TRAITS.map((trait) => (
            <div key={trait.title} className="flex flex-col gap-2.5 px-0 md:px-9 py-6 md:py-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-mist text-xl">
                {trait.icon}
              </div>
              <div className="font-display text-lg font-medium text-forest mt-1">{trait.title}</div>
              <p className="text-[14.5px] font-light text-slate leading-relaxed">{trait.body}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
