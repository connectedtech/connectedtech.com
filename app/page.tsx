import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Opportunities } from "@/components/opportunities";
import { Approach } from "@/components/approach";
import { Results } from "@/components/results";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Opportunities />
        <Approach />
        <Results />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
