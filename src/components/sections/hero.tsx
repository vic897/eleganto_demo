import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] w-full flex-col justify-end overflow-hidden lg:min-h-[94vh]">
      {/* Background Photography with Luxury Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1920&q=85"
          alt="Eleganto Haute Makeup Artistry"
          className="h-full w-full object-cover object-top filter brightness-[0.78] contrast-[1.04]"
        />
        {/* Layer 1: Dark espresso bottom-up fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0c0d] via-[#0e0c0d]/70 to-[#0e0c0d]/30" />
        {/* Layer 2: Subtle deep wine glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#3b0a14]/60 via-[#1b080d]/40 to-transparent" />
        {/* Layer 3: Top header fade */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0e0c0d]/90 to-transparent" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1360px] px-4 pb-12 pt-32 sm:px-6 lg:px-8 lg:pb-16 lg:pt-36">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          {/* Main Editorial Text - 8 cols */}
          <div className="space-y-6 lg:col-span-8">
            <div className="inline-flex items-center gap-2 rounded-[2px] border border-[#d7be9f]/25 bg-[#0e0c0d]/60 px-3.5 py-1.5 backdrop-blur-md">
              <Sparkles className="size-3 text-[#d7be9f]" />
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-medium text-[#fbf8f5]">
                Haute Beauty & Salon Atelier
              </span>
            </div>

            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-normal leading-[0.98] tracking-tight text-[#fbf8f5]">
              BEAUTY,
              <br />
              <span className="italic font-light text-[#c88f8f]">REDEFINED.</span>
            </h1>

            <p className="max-w-xl text-base sm:text-lg leading-relaxed text-[#e4dbd4]/90 font-light">
              Where bespoke artistry meets timeless elegance. Eleganto combines
              master-level beauty craftsmanship with an intimate, personalized
              studio experience tailored to celebrate your distinct individuality.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-3 sm:gap-5">
              <Link
                href="/#book"
                className="inline-flex min-h-12 items-center justify-center rounded-[2px] border border-[#d7be9f]/40 bg-[#6e1a2d] px-8 text-xs uppercase tracking-[0.22em] font-medium text-[#fbf8f5] shadow-[0_4px_24px_rgba(110,26,45,0.45)] transition-all duration-300 hover:border-[#d7be9f]/80 hover:bg-[#89273c] hover:shadow-[0_4px_32px_rgba(110,26,45,0.7)]"
              >
                Book an Appointment
              </Link>

              <Link
                href="/#services"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-[2px] border border-white/20 bg-white/[0.04] px-6 text-xs uppercase tracking-[0.2em] font-medium text-[#fbf8f5] backdrop-blur-sm transition-all duration-300 hover:border-[#c88f8f] hover:bg-white/[0.08] hover:text-[#c88f8f]"
              >
                <span>Explore Services</span>
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            <p className="pt-1 text-[11px] tracking-wide text-white/40">
              Demo preview · Curated atelier presentation
            </p>
          </div>

          {/* Supporting Trust & Distinction Metrics - 4 cols */}
          <div className="lg:col-span-4 lg:justify-self-end">
            <div className="grid grid-cols-2 gap-4 border-t border-white/15 pt-6 sm:grid-cols-3 lg:grid-cols-1 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <div className="space-y-1">
                <p className="font-heading text-2xl sm:text-3xl font-normal text-[#d7be9f]">
                  10+
                </p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#a89a95]">
                  Years of Expertise
                </p>
              </div>

              <div className="space-y-1">
                <p className="font-heading text-2xl sm:text-3xl font-normal text-[#c88f8f]">
                  1,200+
                </p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#a89a95]">
                  Curated Looks
                </p>
              </div>

              <div className="col-span-2 sm:col-span-1 space-y-1">
                <p className="font-heading text-2xl sm:text-3xl font-normal text-[#fbf8f5]">
                  100%
                </p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#a89a95]">
                  Private Atelier
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
