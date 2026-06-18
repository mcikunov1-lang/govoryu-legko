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
import { Divider } from "@/components/divider";

export default function Home() {
  return (
    <>
      <Header />
      <main className="page-surface overflow-x-hidden">
        <Hero />
        <Stats />
        <Divider />
        <About />
        <Divider />
        <Services />
        <Divider />
        <Process />
        <Divider />
        <Gallery />
        <Band />
        <WhyMe />
        <Divider />
        <Reviews />
        <Divider />
        <Faq />
        <Divider />
        <Contact />
        <Divider />
        <BookingCalendar />
        <Divider />
        <LocationMap />
      </main>
      <Footer />
    </>
  );
}
