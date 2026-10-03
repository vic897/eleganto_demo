import { Quote } from "lucide-react";

const testimonialPlaceholders = Array.from({ length: 3 });

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
        {testimonialPlaceholders.map((_, index) => (
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
              Client testimonial will be added once verified business content is
              available.
            </p>
            <p className="text-caption text-muted-foreground">
              Client Name
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
