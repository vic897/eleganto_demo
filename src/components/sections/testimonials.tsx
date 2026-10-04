import { Quote } from "lucide-react";

const demoTestimonials = [
  {
    quote: "Absolutely stunning work! The makeup was flawless and lasted throughout the entire event.",
    name: "Priya Sharma",
  },
  {
    quote: "Professional, punctual, and incredibly talented. My bridal look was exactly what I envisioned.",
    name: "Ananya Desai",
  },
  {
    quote: "The attention to detail is remarkable. Every look was perfectly tailored to the occasion.",
    name: "Meera Krishnan",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto w-full max-w-[1200px] px-4 py-16 lg:py-24" style={{ backgroundColor: '#f5e7e5' }}>
      <div className="mb-6 space-y-2 lg:mb-8">
        <p className="text-sm uppercase tracking-wider" style={{ color: '#b98282' }}>
          Testimonials
        </p>
        <h2 className="font-heading text-[24px] leading-[1.3] tracking-tight text-foreground lg:text-[32px]">
          Kind Words
        </h2>
        <p className="text-xs text-muted-foreground">
          Sample testimonials shown for demonstration
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {demoTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col space-y-4 rounded-[4px] border border-border bg-surface p-6"
          >
            <Quote
              className="size-8 text-muted-foreground"
              strokeWidth={1.5}
              aria-hidden
            />
            <p className="text-base italic leading-relaxed text-muted-foreground lg:text-lg">
              {testimonial.quote}
            </p>
            <p className="text-caption text-muted-foreground">
              {testimonial.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
