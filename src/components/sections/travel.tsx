import { MapPin } from "lucide-react";

export function Travel() {
  return (
    <section
      id="travel"
      className="mx-auto w-full max-w-[1200px] px-4 py-16 lg:py-24"
    >
      <div className="rounded-[4px] border border-border bg-surface-elevated p-6 lg:p-8">
        <div className="mb-6 space-y-2 lg:mb-8">
          <p className="text-sm uppercase tracking-wider text-muted-foreground">
            Travel
          </p>
          <h2 className="font-heading text-[24px] leading-[1.3] tracking-tight text-foreground lg:text-[32px]">
            Service Area
          </h2>
        </div>

        <div className="flex items-start gap-4">
          <MapPin
            className="mt-1 size-6 shrink-0 text-muted-foreground"
            strokeWidth={1.5}
            aria-hidden
          />
          <p className="text-base leading-relaxed text-muted-foreground lg:text-lg">
            Available for on-location services within the metropolitan area. Travel arrangements for destination events can be discussed during the enquiry process. (Demo travel information - replace with verified service area and travel policy)
          </p>
        </div>
      </div>
    </section>
  );
}
