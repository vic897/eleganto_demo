import { Quote } from "lucide-react";

const demoTestimonials = [
  {
    quote: "Absolutely stunning work! The makeup was flawless and lasted throughout the entire event. (Demo testimonial - replace with verified client feedback)",
    name: "Priya Sharma (Demo Client)",
  },
  {
    quote: "Professional, punctual, and incredibly talented. My bridal look was exactly what I envisioned. (Demo testimonial - replace with verified client feedback)",
    name: "Ananya Desai (Demo Client)",
  },
  {
    quote: "The attention to detail is remarkable. Every look was perfectly tailored to the occasion. (Demo testimonial - replace with verified client feedback)",
    name: "Meera Krishnan (Demo Client)",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto w-full max-w-[1200px] px-4 py-16 lg:py-24">
      <div className="mb-6 space-y-2 lg:mb-8">
        <p className="text-sm uppercase tracking-wider text-muted-foreground">
          Testimonials
        </p>
        <h2 className="font-heading text-[24px] leading-[1.3] tracking-tight text-foreground lg:text-[32px]">
          Kind Words
        </h2>
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
