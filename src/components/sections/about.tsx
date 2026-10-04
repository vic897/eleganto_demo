import { Sparkles } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-[#0e0c0d] py-20 lg:py-32 border-t border-white/[0.06]"
    >
      {/* Ambient wine glow */}
      <div
        className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[#561423]/15 blur-[120px]"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          {/* Editorial Photography Composition — 6 cols desktop, full mobile */}
          <div className="relative lg:col-span-6">
            {/* Primary Portrait */}
            <div className="relative aspect-[3/4] w-full max-w-sm mx-auto overflow-hidden rounded-[2px] border border-white/10 shadow-2xl lg:max-w-none lg:mx-0">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=900&q=80"
                alt="Eleganto Lead Artist — Beauty Philosophy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0c0d]/60 via-transparent to-transparent" />
            </div>

            {/* Overlapping Atelier Secondary Frame — desktop only, positioned absolutely */}
            <div className="hidden lg:block absolute -bottom-10 -right-6 z-10 w-52 xl:w-64 aspect-[4/3] overflow-hidden rounded-[2px] border border-[#d7be9f]/30 bg-[#171315] shadow-2xl transition-transform duration-500 hover:-translate-y-1">
              <img
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=700&q=80"
                alt="Eleganto Private Atelier Interior"
                className="h-full w-full object-cover filter brightness-[0.85]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0c0d]/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[9px] uppercase tracking-[0.22em] text-[#d7be9f]">
                <span>The Atelier</span>
                <span>Private Suites</span>
              </div>
            </div>
          </div>

          {/* Editorial Brand Narrative — 6 cols desktop */}
          <div className="space-y-8 lg:col-span-6 lg:pl-8 xl:pl-12">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#c88f8f]" />
                <p className="text-[11px] uppercase tracking-[0.25em] font-medium text-[#c88f8f]">
                  Our Philosophy
                </p>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[60px] font-normal leading-[1.04] tracking-tight text-[#fbf8f5]">
                YOUR BEAUTY.
                <br />
                <span className="italic font-light text-[#d7be9f]">
                  OUR ARTISTRY.
                </span>
              </h2>
            </div>

            <blockquote className="border-l-2 border-[#6e1a2d] pl-5 font-heading text-lg sm:text-xl italic leading-relaxed text-[#fbf8f5]/85">
              &ldquo;True glamour is never an imitation — it is the confident
              revelation of your most radiant, timeless self through thoughtful
              technique and intimate consultation.&rdquo;
            </blockquote>

            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#b5a8a3] font-light">
              <p>
                Eleganto Artistry brings a refined, editorial sensibility to every
                service. Founded on the principle that luxury beauty should feel
                deeply personal, we blend couture artistry with advanced cosmetology
                to enhance natural harmony rather than mask it.
              </p>
              <p>
                From private bridal suites to VIP destination assignments, every
                appointment is approached as a bespoke collaboration. We work with
                the world&apos;s most coveted hypoallergenic formulations and bespoke
                pigments to ensure effortless, long-wearing radiance.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-5 pt-2 border-t border-white/10">
              <div className="flex items-center gap-2.5 text-xs tracking-wider uppercase text-[#fbf8f5]">
                <Sparkles className="size-4 shrink-0 text-[#c88f8f]" />
                <span>Bespoke Palette Matching</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs tracking-wider uppercase text-[#fbf8f5]">
                <Sparkles className="size-4 shrink-0 text-[#d7be9f]" />
                <span>Cruelty-Free Couture Formulations</span>
              </div>
            </div>

            <p className="text-[11px] tracking-wide text-white/35 italic">
              Sample artist philosophy shown for demonstration — replaced with verified profile before production.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
