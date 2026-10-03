import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end bg-surface-elevated lg:min-h-[600px]">
      <div className="mx-auto w-full max-w-[1200px] px-4 pb-8 pt-32 lg:pb-16 lg:pt-24">
        <div className="max-w-2xl space-y-6">
          <h1 className="font-heading text-[32px] leading-[1.2] tracking-tight text-foreground lg:text-[48px]">
            Luxury Makeup Artistry
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground lg:text-lg">
            Professional makeup services for your special moments. Verified
            business content coming soon.
          </p>
          <div className="pt-2">
            <Button
              nativeButton={false}
              render={
                <Link
                  href="/#book"
                  className="min-h-11 uppercase tracking-wider"
                />
              }
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
