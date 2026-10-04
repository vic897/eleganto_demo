const demoPortfolioImages = [
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
  "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80",
  "https://images.unsplash.com/photo-1503236823255-94609f598e71?w=600&q=80",
  "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80",
  "https://images.unsplash.com/photo-1595959183082-7b570b7e1dfa?w=600&q=80",
  "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80",
];

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
        {demoPortfolioImages.map((image, index) => (
          <div
            key={index}
            className="aspect-[4/5] w-full overflow-hidden"
          >
            <img
              src={image}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
