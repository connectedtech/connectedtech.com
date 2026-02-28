import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
// import { Outcomes } from "@/components/outcomes"; // hidden — keeping for later
import { AiTicker } from "@/components/ai-ticker";
import { Opportunities } from "@/components/opportunities";
import { Approach } from "@/components/approach";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <AiTicker />
        <Opportunities />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
