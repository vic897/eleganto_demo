import { User } from "lucide-react";

export function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-[1200px] px-4 py-16 lg:py-24">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
        {/* Image placeholder - 3:4 aspect ratio */}
        <div className="aspect-[3/4] w-full bg-surface-elevated lg:order-2">
          <div className="flex h-full items-center justify-center">
            <User
              className="size-16 text-muted-foreground"
              strokeWidth={1.5}
              aria-hidden
            />
          </div>
        </div>

        {/* Biography placeholder */}
        <div className="space-y-6 lg:order-1">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-wider text-muted-foreground">
              About
            </p>
            <h2 className="font-heading text-[24px] leading-[1.3] tracking-tight text-foreground lg:text-[32px]">
              The Artist
            </h2>
          </div>
          <p className="text-base leading-relaxed text-muted-foreground lg:text-lg">
            Verified artist biography and credentials will be added here. This
            section will showcase professional experience, artistic philosophy,
            and the unique approach that defines Elegentoo Artistry.
          </p>
        </div>
      </div>
    </section>
  );
}
