import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { CtaBanner } from "@/components/cta-banner";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { MobileCallBar } from "@/components/mobile-call-bar";
import { Navbar } from "@/components/navbar";
import { Reviews } from "@/components/reviews";
import { Services } from "@/components/services";
import { getServiceSchema } from "@/lib/business";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Reviews />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <MobileCallBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getServiceSchema()) }}
      />
    </>
  );
}
