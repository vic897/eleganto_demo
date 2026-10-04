"use client";

import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  aspectRatio: string;
  colSpan: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: "look-1",
    title: "Bridal Haute Radiance",
    category: "Bridal Artistry",
    description:
      "A luminous complexion paired with delicate bronze accents and soft sculpted lashes for an enduring matrimonial look.",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=85",
    aspectRatio: "aspect-[3/4]",
    colSpan: "lg:col-span-4",
  },
  {
    id: "look-2",
    title: "Architectural Waves & Updo",
    category: "Hair Sculpting",
    description:
      "Precision hollywood wave structure transitioning into a modern, relaxed chignon for black-tie galas.",
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1200&q=85",
    aspectRatio: "aspect-[4/5]",
    colSpan: "lg:col-span-4",
  },
  {
    id: "look-3",
    title: "Editorial Velvet Lip",
    category: "High-Fashion Editorial",
    description:
      "Deep wine matte pigments offset by feathered brows and dew-kissed cheekbone highlights.",
    image:
      "https://images.unsplash.com/photo-1503236823255-94609f598e71?w=1200&q=85",
    aspectRatio: "aspect-[3/4]",
    colSpan: "lg:col-span-4",
  },
  {
    id: "look-4",
    title: "Luminescent Dermal Glow",
    category: "Cosmetology Finish",
    description:
      "Skin-first aesthetic focused on micro-circulation, gentle radiance priming, and seamless nude harmony.",
    image:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=1200&q=85",
    aspectRatio: "aspect-[16/10] sm:aspect-[16/9]",
    colSpan: "lg:col-span-8",
  },
  {
    id: "look-5",
    title: "Bespoke Nail Architecture",
    category: "Haute Manicure",
    description:
      "Flawless cuticle treatment and warm burgundy-sheen Japanese gel overlays on natural almond tips.",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1000&q=85",
    aspectRatio: "aspect-square",
    colSpan: "lg:col-span-4",
  },
  {
    id: "look-6",
    title: "Gala Glamour & Contour",
    category: "Red Carpet Makeup",
    description:
      "Defined bone structure, smoked champagne liner, and sculpted satin lips for evening celebrations.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&q=85",
    aspectRatio: "aspect-[3/4]",
    colSpan: "lg:col-span-6",
  },
  {
    id: "look-7",
    title: "Editorial Golden Hour",
    category: "Creative Atelier",
    description:
      "Monochromatic peach and terracotta washes designed for golden hour natural light photography.",
    image:
      "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=1200&q=85",
    aspectRatio: "aspect-[3/4]",
    colSpan: "lg:col-span-6",
  },
];

export function Portfolio() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const handleOpenLightbox = (index: number) => {
    setSelectedIdx(index);
  };

  const handleCloseLightbox = useCallback(() => {
    setSelectedIdx(null);
  }, []);

  const handlePrev = useCallback(() => {
    setSelectedIdx((prev) =>
      prev !== null ? (prev === 0 ? portfolioItems.length - 1 : prev - 1) : null
    );
  }, []);

  const handleNext = useCallback(() => {
    setSelectedIdx((prev) =>
      prev !== null ? (prev === portfolioItems.length - 1 ? 0 : prev + 1) : null
    );
  }, []);

  useEffect(() => {
    if (selectedIdx === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleCloseLightbox();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [selectedIdx, handleCloseLightbox, handlePrev, handleNext]);

  return (
    <section
      id="portfolio"
      className="relative w-full bg-[#0e0c0d] py-20 lg:py-32 border-t border-white/[0.06]"
    >
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end lg:mb-16">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="h-px w-6 bg-[#c88f8f]" />
              <p className="text-[11px] uppercase tracking-[0.25em] font-medium text-[#c88f8f]">
                Curated Gallery
              </p>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-[60px] font-normal leading-[1.05] tracking-tight text-[#fbf8f5]">
              THE ART OF TRANSFORMATION
            </h2>
          </div>

          <div className="max-w-md space-y-2">
            <p className="text-sm leading-relaxed text-[#b5a8a3]">
              A curated anthology of bridal, editorial, and red carpet looks crafted
              in our atelier. Click any portrait to explore in high resolution.
            </p>
            <p className="text-[11px] tracking-wide text-white/40">
              Sample portfolio assets shown for demonstration
            </p>
          </div>
        </div>

        {/* Masonry-Style Asymmetric Image Gallery */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-[2px] border border-white/10 bg-[#171315] shadow-xl ${item.colSpan}`}
            >
              <button
                type="button"
                onClick={() => handleOpenLightbox(index)}
                className={`relative block w-full overflow-hidden text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#d7be9f] ${item.aspectRatio}`}
                aria-label={`View ${item.title} in gallery lightbox`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.88] contrast-[1.02]"
                />

                {/* Dark espresso gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0c0d] via-[#0e0c0d]/30 to-transparent" />

                {/* Wine tone tint on hover */}
                <div className="absolute inset-0 bg-[#561423]/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Magnify icon badge */}
                <div className="absolute top-4 right-4 z-10 size-9 rounded-[2px] border border-white/15 bg-[#0e0c0d]/60 flex items-center justify-center text-[#d7be9f] opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 scale-90">
                  <Maximize2 className="size-4" />
                </div>

                {/* Bottom details overlay */}
                <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6">
                  <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#c88f8f]">
                    {item.category}
                  </p>
                  <h3 className="font-heading text-lg sm:text-xl font-normal text-[#fbf8f5] mt-1">
                    {item.title}
                  </h3>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Accessible Lightbox Modal */}
      {selectedIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Portfolio Image Viewer"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0e0c0d]/95 p-4 backdrop-blur-md sm:p-8"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={handleCloseLightbox}
            className="absolute top-6 right-6 z-50 inline-flex size-12 items-center justify-center rounded-[2px] border border-white/15 bg-white/5 text-[#fbf8f5] transition-colors hover:bg-white/10 hover:text-[#c88f8f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#d7be9f]"
            aria-label="Close image lightbox"
          >
            <X className="size-6" strokeWidth={1.5} />
          </button>

          {/* Previous Arrow */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 z-50 inline-flex size-12 items-center justify-center rounded-[2px] border border-white/15 bg-white/5 text-[#fbf8f5] transition-colors hover:bg-white/10 hover:text-[#c88f8f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#d7be9f]"
            aria-label="Previous portfolio image"
          >
            <ChevronLeft className="size-6" strokeWidth={1.5} />
          </button>

          {/* Next Arrow */}
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-4 sm:right-8 z-50 inline-flex size-12 items-center justify-center rounded-[2px] border border-white/15 bg-white/5 text-[#fbf8f5] transition-colors hover:bg-white/10 hover:text-[#c88f8f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#d7be9f]"
            aria-label="Next portfolio image"
          >
            <ChevronRight className="size-6" strokeWidth={1.5} />
          </button>

          {/* Lightbox Content Container */}
          <div className="relative mx-auto flex max-h-[90vh] max-w-5xl flex-col items-center justify-center overflow-hidden">
            <div className="relative max-h-[75vh] w-auto overflow-hidden rounded-[2px] border border-white/15 shadow-2xl">
              <img
                src={portfolioItems[selectedIdx].image}
                alt={portfolioItems[selectedIdx].title}
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>

            <div className="mt-4 flex w-full max-w-2xl flex-col items-center justify-between gap-2 px-4 text-center sm:flex-row sm:text-left">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#c88f8f]">
                  {portfolioItems[selectedIdx].category}
                </p>
                <h3 className="font-heading text-xl font-normal text-[#fbf8f5]">
                  {portfolioItems[selectedIdx].title}
                </h3>
                <p className="text-xs text-[#b5a8a3] mt-1 max-w-lg">
                  {portfolioItems[selectedIdx].description}
                </p>
              </div>

              <span className="shrink-0 text-xs font-mono text-white/40 tracking-wider">
                {selectedIdx + 1} / {portfolioItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
