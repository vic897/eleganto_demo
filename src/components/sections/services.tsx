import { Button } from "@/components/ui/button";
import Link from "next/link";

const placeholderServices = [
  {
    title: "Service Category",
    description:
      "Service description will be added once verified business content is available.",
  },
  {
    title: "Service Category",
    description:
      "Service description will be added once verified business content is available.",
  },
  {
    title: "Service Category",
    description:
      "Service description will be added once verified business content is available.",
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
        {placeholderServices.map((service, index) => (
          <div
            key={index}
            className="flex flex-col rounded-[4px] border border-border bg-surface"
          >
            {/* 3:4 image placeholder */}
            <div className="aspect-[3/4] w-full bg-surface-elevated" />

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
