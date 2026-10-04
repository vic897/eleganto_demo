export function WhyEleganto() {
  const points = [
    {
      number: "01",
      title: "Experienced Artists",
      tagline: "Mastery of Tone, Texture & Light",
      description:
        "Our resident specialists bring more than a decade of international editorial, runway, and bridal artistry. Each technique is executed with microscopic precision to guarantee flawless endurance and camera-ready poise.",
    },
    {
      number: "02",
      title: "Personalized Service",
      tagline: "One-on-One Private Consultation",
      description:
        "We reject standardized formulas. Every appointment begins with an in-depth dialogue examining your bone structure, skin undertones, lighting context, and personal aesthetic to curate a signature expression.",
    },
    {
      number: "03",
      title: "Premium Experience",
      tagline: "Serene Atelier Hospitality",
      description:
        "Enter an atmosphere of discretion and calm. From private styling suites and champagne refreshments to hypoallergenic couture beauty formulations, every detail is orchestrated for quiet luxury.",
    },
  ];

  return (
    <section
      id="why-us"
      className="relative w-full bg-[#120e10] py-20 lg:py-32 border-t border-white/[0.06]"
    >
      {/* Subtle wine atmospheric glow */}
      <div
        className="pointer-events-none absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#561423]/15 blur-[120px]"
        aria-hidden
      />

      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="h-px w-6 bg-[#c88f8f]" />
            <p className="text-[11px] uppercase tracking-[0.25em] font-medium text-[#c88f8f]">
              The Eleganto Distinction
            </p>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl lg:text-[56px] font-normal leading-[1.05] tracking-tight text-[#fbf8f5]">
            WHY ELEGANTO
          </h2>
          <p className="text-base text-[#b5a8a3] font-light">
            Rooted in artisanal rigor, elevated by intimate consultation. We redefine
            the beauty salon experience into an art of transformation.
          </p>
        </div>

        {/* Editorial Three-Column Layout (Hairline Dividers, Large Numbers, No Generic Cards) */}
        <div className="grid gap-12 divide-y divide-white/10 lg:grid-cols-3 lg:gap-12 lg:divide-y-0 lg:divide-x lg:divide-white/10">
          {points.map((point, index) => (
            <div
              key={point.number}
              className={`flex flex-col justify-between space-y-6 ${
                index > 0 ? "pt-10 lg:pl-10 lg:pt-0" : ""
              }`}
            >
              <div className="space-y-6">
                <div className="flex items-baseline justify-between">
                  <span className="font-heading text-4xl sm:text-5xl font-light tracking-tight text-[#d7be9f]">
                    {point.number}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                    Pillar
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-heading text-2xl sm:text-3xl font-normal text-[#fbf8f5]">
                    {point.title}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.18em] font-medium text-[#c88f8f]">
                    {point.tagline}
                  </p>
                </div>

                <p className="text-sm leading-relaxed text-[#b5a8a3] font-light">
                  {point.description}
                </p>
              </div>

              <div className="pt-4">
                <div className="h-px w-12 bg-[#6e1a2d]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
