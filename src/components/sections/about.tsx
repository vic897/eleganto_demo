
export function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-[1200px] px-4 py-16 lg:py-24">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
        {/* Demo portrait - 3:4 aspect ratio */}
        <div className="aspect-[3/4] w-full lg:order-2">
          <img
            src="https://images.unsplash.com/photo-1595959183082-7b570b7e1dfa?w=800&q=80"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        {/* Demo biography */}
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
            Elegentoo Artistry brings a refined, editorial approach to professional makeup services. With a focus on enhancing natural beauty through timeless techniques, each look is crafted to celebrate individuality while maintaining sophisticated elegance. (Demo biography - replace with verified artist information)
          </p>
        </div>
      </div>
    </section>
  );
}
