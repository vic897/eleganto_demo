import { Image as ImageIcon } from "lucide-react";

const portfolioPlaceholders = Array.from({ length: 6 });

export function Portfolio() {
  return (
    <section id="portfolio" className="mx-auto w-full max-w-[1200px] px-4 py-16 lg:py-24">
      <div className="mb-6 space-y-2 lg:mb-8">
        <p className="text-sm uppercase tracking-wider text-muted-foreground">
          Portfolio
        </p>
        <h2 className="font-heading text-[24px] leading-[1.3] tracking-tight text-foreground lg:text-[32px]">
          Work
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {portfolioPlaceholders.map((_, index) => (
          <div
            key={index}
            className="aspect-[4/5] w-full bg-surface-elevated"
          >
            <div className="flex h-full items-center justify-center">
              <ImageIcon
                className="size-12 text-muted-foreground"
                strokeWidth={1.5}
                aria-hidden
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
