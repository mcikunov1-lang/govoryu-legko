import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Gallery } from "@/components/sections/gallery";
import { Band } from "@/components/sections/band";
import { WhyMe } from "@/components/sections/why-me";
import { Reviews } from "@/components/sections/reviews";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { BookingCalendar } from "@/components/sections/booking-calendar";
import { LocationMap } from "@/components/sections/location-map";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <Stats />
        <About />
        <Services />
        <Process />
        <Gallery />
        <Band />
        <WhyMe />
        <Reviews />
        <Faq />
        <Contact />
        <BookingCalendar />
        <LocationMap />
      </main>
      <Footer />
    </>
  );
}
