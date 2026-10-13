import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { WhyCustom } from "@/components/why-custom";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhyCustom />
        <Services />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
