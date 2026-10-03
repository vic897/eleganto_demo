import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FooterCTA() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-4 py-16 lg:py-24">
      <div className="text-center">
        <h2 className="font-heading text-[24px] leading-[1.3] tracking-tight text-foreground lg:text-[32px]">
          Ready to Book?
        </h2>
        <p className="mb-6 mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
          Begin your booking enquiry today.
        </p>
        <div className="flex justify-center">
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
    </section>
  );
}
