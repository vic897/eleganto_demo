interface TestimonialItem {
  quote: string;
  client: string;
  role: string;
}

const testimonials: TestimonialItem[] = [
  {
    quote:
      "The artistry at Eleganto is truly unmatched. My bridal look was luminous, effortless, and lasted impeccably from our morning vows through the final dance.",
    client: "Sophia Laurent",
    role: "Private Bridal Client",
  },
  {
    quote:
      "An oasis of discretion and sheer talent. Their bespoke approach to skin preparation and architectural hair sculpting made me feel like the most confident version of myself.",
    client: "Evelyn Vance",
    role: "Fashion Editorial Director",
  },
  {
    quote:
      "From the intimate champagne consultation to the final touch of gloss, every minute felt curated. I will not trust anyone else for high-profile celebrations.",
    client: "Camille Moreau",
    role: "Atelier Patron",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative w-full bg-[#120e10] py-20 lg:py-32 border-t border-white/[0.06]"
    >
      {/* Background wine atmosphere */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#561423]/10 blur-[140px]"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center space-y-3 max-w-xl mx-auto">
          <div className="inline-flex items-center justify-center gap-2">
            <span className="h-px w-6 bg-[#c88f8f]" />
            <p className="text-[11px] uppercase tracking-[0.25em] font-medium text-[#c88f8f]">
              Client Reflections
            </p>
            <span className="h-px w-6 bg-[#c88f8f]" />
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl lg:text-[56px] font-normal leading-[1.05] tracking-tight text-[#fbf8f5]">
            WORDS OF PRAISE
          </h2>
          <p className="text-xs text-white/40 tracking-wide">
            Sample testimonials shown for demonstration
          </p>
        </div>

        {/* Minimalist Editorial Three-Column Quotes */}
        <div className="grid gap-10 md:grid-cols-3 lg:gap-12">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between border-t border-white/10 pt-8 space-y-6"
            >
              <div className="space-y-4">
                <span className="font-heading text-4xl text-[#d7be9f] font-light leading-none">
                  &ldquo;
                </span>
                <p className="font-heading text-lg sm:text-xl font-normal italic leading-relaxed text-[#fbf8f5]/90">
                  {item.quote}
                </p>
              </div>

              <div className="pt-2">
                <p className="text-xs uppercase tracking-[0.22em] font-medium text-[#fbf8f5]">
                  — {item.client}
                </p>
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#a89a95] mt-1">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
