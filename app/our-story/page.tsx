import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "The story behind IOCONSULTS — why we exist and how we help organizations build lasting people-first cultures.",
};

export default function OurStoryPage() {
  return (
    <>
      <Header />
      <main id="content">
        <section className="border-t hairline bg-paper-texture">
          <div className="mx-auto max-w-content px-6 lg:px-10 pt-20 pb-24 md:pt-28 md:pb-32">
            <p className="section-mark mb-6">Our Story</p>
            <h1 className="font-display text-5xl md:text-6xl font-medium text-forest tracking-tight max-w-3xl">
              Why we built <span className="italic text-brass">IOCONSULTS</span>
            </h1>

            <div className="mt-12 max-w-2xl space-y-6 text-lg text-ink/75 leading-relaxed">
              <p className="border-l-2 border-brass/50 pl-5 text-ink/50 italic text-base">
                Editor&rsquo;s note: this page is a placeholder. The original
                &ldquo;Our Story&rdquo; content from the previous site was not
                available during the rebuild — replace this section with your
                real founding story, mission, and team background.
              </p>
              <p>
                IOCONSULTS was founded on a simple belief: that culture is not
                a poster on the wall or a value statement in a handbook, but a
                performance engine that organizations can deliberately design,
                measure, and sustain.
              </p>
              <p>
                We work at the intersection of business strategy and human
                behavior — partnering with organizations across Lagos and
                beyond to build the people systems that turn ambition into
                lasting results.
              </p>
            </div>

            <a
              href="/#ioc-contact"
              className="mt-12 inline-flex items-center gap-2 bg-forest text-bone text-sm font-medium px-7 py-3.5 hover:bg-ink transition-colors"
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
