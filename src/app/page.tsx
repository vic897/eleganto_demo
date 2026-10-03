import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Portfolio } from "@/components/sections/portfolio";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <div className="motion-page-enter">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
    </div>
  );
}
