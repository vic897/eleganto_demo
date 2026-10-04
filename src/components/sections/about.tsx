import { Sparkles } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-[#0e0c0d] py-20 lg:py-32 border-t border-white/[0.06]"
    >
      {/* Subtle ambient wine tone background blur */}
      <div
        className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[#561423]/15 blur-[120px]"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          {/* Overlapping Editorial Photography Collage - 6 cols */}
          <div className="relative lg:col-span-6">
            {/* Primary Portrait Frame */}
            <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-[2px] border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=900&q=80"
                alt="Eleganto Lead Artist & Beauty Philosophy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0c0d]/70 via-transparent to-transparent" />
            </div>

            {/* Overlapping Secondary Atelier Frame (asymmetric offset) */}
            <div className="relative -mt-20 ml-auto w-3/5 sm:w-1/2 lg:-mt-28 lg:mr-4 z-10 aspect-[4/3] overflow-hidden rounded-[2px] border border-[#d7be9f]/30 bg-[#171315] shadow-2xl transition-transform duration-700 hover:translate-y-[-4px]">
              <img
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=700&q=80"
                alt="Eleganto Atelier Interior Atmosphere"
                className="h-full w-full object-cover filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0c0d]/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-[#d7be9f]">
                <span>The Atelier</span>
                <span>Private Suites</span>
              </div>
            </div>
          </div>

          {/* Editorial Brand Narrative - 6 cols */}
          <div className="space-y-8 lg:col-span-6 lg:pl-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#c88f8f]" />
                <p className="text-[11px] uppercase tracking-[0.25em] font-medium text-[#c88f8f]">
                  Our Philosophy
                </p>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-normal leading-[1.05] tracking-tight text-[#fbf8f5]">
                YOUR BEAUTY.
                <br />
                <span className="italic font-light text-[#d7be9f]">
                  OUR ARTISTRY.
                </span>
              </h2>
            </div>

            <blockquote className="border-l border-[#6e1a2d] pl-5 font-heading text-lg sm:text-xl italic leading-relaxed text-[#fbf8f5]/90">
              &ldquo;True glamour is never an imitation—it is the confident
              revelation of your most radiant, timeless self through thoughtful
              technique and intimate consultation.&rdquo;
            </blockquote>

            <div className="space-y-4 text-base leading-relaxed text-[#b5a8a3]">
              <p>
                Eleganto Artistry brings a refined, editorial sensibility to
                every service. Founded on the principle that luxury beauty should
                feel deeply personal, we blend couture artistry with state-of-the-art
                cosmetology to enhance natural harmony rather than mask it.
              </p>
              <p>
                From private bridal suites to VIP destination assignments, every
                appointment is approached as a bespoke collaboration. We work
                with the world&apos;s most coveted hypoallergenic formulations and
                bespoke pigments to ensure effortless, long-wearing radiance.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-2 border-t border-white/10">
              <div className="flex items-center gap-2.5 text-xs tracking-wider uppercase text-[#fbf8f5]">
                <Sparkles className="size-4 text-[#c88f8f]" />
                <span>Bespoke Palette Matching</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs tracking-wider uppercase text-[#fbf8f5]">
                <Sparkles className="size-4 text-[#d7be9f]" />
                <span>Cruelty-Free Couture Formulations</span>
              </div>
            </div>

            <p className="text-[11px] tracking-wide text-white/40 italic">
              Sample artist philosophy shown for demonstration. Verified profile to be tailored.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
