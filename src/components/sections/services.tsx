import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  gridSpan: string;
  aspectRatio: string;
}

const servicesData: ServiceItem[] = [
  {
    id: "makeup",
    number: "01",
    title: "Bridal & Occasion Makeup",
    subtitle: "High-Fashion & Red Carpet Artistry",
    description:
      "Bespoke makeup styling tailored to your facial architecture and event lighting. Includes preview consultation and long-lasting couture formulations.",
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1200&q=85",
    gridSpan: "md:col-span-2 lg:col-span-8",
    aspectRatio: "aspect-[4/3] sm:aspect-[16/9] lg:aspect-[16/9]",
  },
  {
    id: "hair",
    number: "02",
    title: "Hair Styling & Architecture",
    subtitle: "Couture Updos & Waves",
    description:
      "Sculpted editorial waves, modern bridal updos, and effortless textured finishes created to complement your personal silhouette.",
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=85",
    gridSpan: "lg:col-span-4",
    aspectRatio: "aspect-[4/5]",
  },
  {
    id: "manicure",
    number: "03",
    title: "Haute Manicure",
    subtitle: "Precision Nail Art & Sculpting",
    description:
      "Aesthetic cuticle restoration, Japanese gel overlays, and bespoke minimalist nail artistry utilizing organic restorative serums.",
    image:
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800&q=85",
    gridSpan: "lg:col-span-4",
    aspectRatio: "aspect-[4/5]",
  },
  {
    id: "pedicure",
    number: "04",
    title: "Luxury Pedicure",
    subtitle: "Foot Wellness & Reflexology",
    description:
      "Comprehensive aesthetic foot therapy featuring botanical soaks, gentle exfoliating peels, deep hydration, and flawless polish finish.",
    image:
      "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=800&q=85",
    gridSpan: "lg:col-span-4",
    aspectRatio: "aspect-[4/5]",
  },
  {
    id: "cosmetology",
    number: "05",
    title: "Advanced Cosmetology",
    subtitle: "Facial Sculpting & Dermal Care",
    description:
      "Non-invasive dermal therapies, lymphatic drainage massage, and targeted vitamin infusions designed to revitalize your skin barrier.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=85",
    gridSpan: "lg:col-span-4",
    aspectRatio: "aspect-[4/5]",
  },
  {
    id: "treatments",
    number: "06",
    title: "Beauty Treatments & Skin Radiance",
    subtitle: "Glow Protocols & Preparation",
    description:
      "Holistic event-ready rituals including micro-current toning, LED light rejuvenation, and deep moisture sealing for unblemished radiance.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=85",
    gridSpan: "md:col-span-2 lg:col-span-12",
    aspectRatio: "aspect-[4/3] sm:aspect-[21/9] lg:aspect-[21/8]",
  },
];


export function Services() {
  return (
    <section
      id="services"
      className="relative w-full bg-[#0e0c0d] py-20 lg:py-32 border-t border-white/[0.06]"
    >
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end lg:mb-16">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="h-px w-6 bg-[#c88f8f]" />
              <p className="text-[11px] uppercase tracking-[0.25em] font-medium text-[#c88f8f]">
                The Atelier Offerings
              </p>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-[60px] font-normal leading-[1.05] tracking-tight text-[#fbf8f5]">
              OUR SERVICES
            </h2>
          </div>

          <div className="max-w-md space-y-2">
            <p className="text-sm leading-relaxed text-[#b5a8a3]">
              Each discipline is executed with couture precision, using only the
              finest formulation palettes and dedicated private appointments.
            </p>
            <p className="text-[11px] tracking-wide text-white/40">
              Sample service categories shown for demonstration
            </p>
          </div>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className={`group relative overflow-hidden rounded-[2px] border border-white/10 bg-[#171315] shadow-xl transition-all duration-500 hover:border-[#c88f8f]/50 ${service.gridSpan}`}
            >
              {/* Image Container with subtle zoom on hover */}
              <div className={`relative w-full overflow-hidden ${service.aspectRatio}`}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.82] contrast-[1.03]"
                />

                {/* Dark espresso base gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0c0d] via-[#0e0c0d]/60 to-transparent" />

                {/* Dark wine overlay transition on hover */}
                <div className="absolute inset-0 bg-[#561423]/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Top Corner Index Number */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
                  <span className="font-heading text-sm tracking-widest text-[#d7be9f] border border-[#d7be9f]/30 bg-[#0e0c0d]/70 px-2.5 py-1 backdrop-blur-sm">
                    {service.number}
                  </span>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col justify-end p-5 sm:p-7">
                  <div className="space-y-1.5">
                    <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-medium text-[#c88f8f]">
                      {service.subtitle}
                    </p>
                    <h3 className="font-heading text-xl sm:text-2xl lg:text-[28px] font-normal leading-tight text-[#fbf8f5]">
                      {service.title}
                    </h3>
                  </div>

                  <p className="mt-2.5 line-clamp-2 text-xs sm:text-sm leading-relaxed text-[#b5a8a3] opacity-80 group-hover:opacity-100 transition-opacity">
                    {service.description}
                  </p>

                  {/* Hover Action Reveal */}
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                    <Link
                      href="/#book"
                      className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] font-medium text-[#d7be9f] transition-all duration-300 group-hover:text-[#fbf8f5] group-hover:translate-x-1"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <span className="text-[11px] tracking-wider text-white/40">
                      Bespoke Inquiry
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
