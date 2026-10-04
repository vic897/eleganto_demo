import { Button } from "@/components/ui/button";
import Link from "next/link";

const demoServices = [
  {
    title: "Bridal Makeup",
    description:
      "Complete bridal makeup services for your special day. Includes trial session and on-location service. (Demo category - replace with verified service details)",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
  },
  {
    title: "Engagement Makeup",
    description:
      "Elegant engagement and pre-wedding event makeup. Perfect for photoshoots and ceremonies. (Demo category - replace with verified service details)",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80",
  },
  {
    title: "Editorial & Occasion Makeup",
    description:
      "Professional makeup for editorial shoots, parties, and special occasions. (Demo category - replace with verified service details)",
    image: "https://images.unsplash.com/photo-1503236823255-94609f598e71?w=600&q=80",
  },
];

export function Services() {
  return (
    <section id="services" className="mx-auto w-full max-w-[1200px] px-4 py-16 lg:py-24">
      <div className="mb-6 space-y-2 lg:mb-8">
        <p className="text-sm uppercase tracking-wider text-muted-foreground">
          Services
        </p>
        <h2 className="font-heading text-[24px] leading-[1.3] tracking-tight text-foreground lg:text-[32px]">
          Offerings
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {demoServices.map((service, index) => (
          <div
            key={index}
            className="flex flex-col rounded-[4px] border border-border bg-surface"
          >
            {/* 3:4 demo image */}
            <div className="aspect-[3/4] w-full overflow-hidden">
              <img
                src={service.image}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col space-y-4 p-4">
              <div className="space-y-2">
                <h3 className="font-heading text-lg font-medium leading-tight text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>

              <div className="mt-auto pt-4">
                <Button
                  nativeButton={false}
                  render={
                    <Link
                      href="/#book"
                      className="w-full min-h-11 uppercase tracking-wider"
                    />
                  }
                >
                  Enquire
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
