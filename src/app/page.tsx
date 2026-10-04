import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { WhyEleganto } from "@/components/sections/why-eleganto";
import { Portfolio } from "@/components/sections/portfolio";
import { Testimonials } from "@/components/sections/testimonials";
import { Travel } from "@/components/sections/travel";
import { FooterCTA } from "@/components/sections/footer-cta";
import { BookingForm } from "@/components/booking/booking-form";

export default function Home() {
  return (
    <div className="motion-page-enter">
      <Hero />
      <About />
      <Services />
      <WhyEleganto />
      <Portfolio />
      <Testimonials />
      <Travel />
      <FooterCTA />
      <BookingForm />
    </div>
  );
}
