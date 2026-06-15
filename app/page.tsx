import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { WhyMe } from "@/components/sections/why-me";
import { Reviews } from "@/components/sections/reviews";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <WhyMe />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
