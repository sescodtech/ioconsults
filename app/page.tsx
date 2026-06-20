import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="content">
        <Hero />
        <Services />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
