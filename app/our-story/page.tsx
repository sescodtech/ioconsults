import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "The story behind IOCONSULTS — why we exist and how we help organizations build lasting people-first cultures.",
};

const VALUES = [
  {
    title: "Strategy First",
    body: "We don't deal in templates. Every recommendation is built around your organization's actual goals, constraints, and culture.",
  },
  {
    title: "People as Partners",
    body: "We treat your team as collaborators in the process, not subjects of it — change sticks when people help design it.",
  },
  {
    title: "Measured Outcomes",
    body: "We define success in numbers you already track: retention, performance, engagement, and growth.",
  },
];

export default function OurStoryPage() {
  return (
    <>
      <Header />
      <main id="content">
        <section className="bg-brand-gradient">
          <div className="mx-auto max-w-content px-6 lg:px-10 pt-28 pb-20 md:pt-32 md:pb-24">
            <span className="section-mark on-dark">Our Story</span>
            <h1 className="mt-6 font-display text-4xl md:text-6xl font-medium text-white tracking-tight max-w-3xl leading-tight">
              Why we built <span className="italic text-brass-light">IOCONSULTS</span>
            </h1>
            <p className="mt-7 max-w-xl text-white/70 text-lg leading-relaxed font-light">
              A strategic HR consulting firm built on the belief that culture is
              not a poster on the wall — it is a performance engine an
              organization can deliberately design, measure, and sustain.
            </p>
          </div>
        </section>

        <section className="border-t hairline bg-white">
          <div className="mx-auto max-w-content px-6 lg:px-10 py-20 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-5">
                <span className="section-mark">How We Started</span>
                <h2 className="mt-5 font-display text-3xl md:text-4xl text-ink tracking-tight leading-tight">
                  Built at the intersection of{" "}
                  <span className="italic text-brass">strategy and people</span>
                </h2>
              </div>
              <div className="lg:col-span-7 space-y-5 text-slate text-[15.5px] leading-relaxed">
                <p>
                  IOCONSULTS was founded on a simple observation: organizations
                  across Lagos and beyond were investing heavily in strategy,
                  technology, and growth — but treating their people systems as
                  an afterthought. The result was predictable: talented teams
                  working inside structures that quietly worked against them.
                </p>
                <p>
                  We started IOCONSULTS to close that gap — partnering directly
                  with leadership teams to build recruitment, performance, and
                  compensation systems that are designed on purpose, not
                  inherited by accident.
                </p>
                <p>
                  Today, we work across industries, bringing the same
                  discipline to every engagement: understand the business
                  first, then design the people strategy that serves it.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t hairline bg-mist">
          <div className="mx-auto max-w-content px-6 lg:px-10 py-20 md:py-24">
            <div className="mx-auto max-w-xl text-center">
              <span className="section-mark">What We Stand For</span>
              <h2 className="mt-5 font-display text-3xl md:text-4xl text-ink tracking-tight leading-tight">
                The principles behind{" "}
                <span className="italic text-brass">every engagement</span>
              </h2>
            </div>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
              {VALUES.map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl border hairline bg-white p-8"
                >
                  <h3 className="font-display text-lg font-medium text-ink">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate leading-relaxed">
                    {value.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t hairline bg-white">
          <div className="mx-auto max-w-content px-6 lg:px-10 py-20 md:py-24 text-center">
            <h2 className="font-display text-3xl md:text-4xl text-ink tracking-tight max-w-xl mx-auto leading-tight">
              Let&rsquo;s write the next chapter of{" "}
              <span className="italic text-brass">your culture</span>
            </h2>
            <a
              href="/#ioc-contact"
              className="mt-9 inline-flex items-center gap-2 rounded-lg bg-brand-button text-white text-sm font-bold px-7 py-3.5 shadow-[0_6px_22px_rgba(61,36,144,0.3)] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(61,36,144,0.45)] transition-all"
            >
              Start the Conversation
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
