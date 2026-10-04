import { MapPin, Globe, Compass } from "lucide-react";

export function Travel() {
  return (
    <section
      id="travel"
      className="relative w-full bg-[#0e0c0d] py-16 lg:py-24 border-t border-white/[0.06]"
    >
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2px] border border-white/10 bg-[#171315] p-8 sm:p-12 lg:p-16 shadow-2xl">
          {/* Subtle wine gradient backdrop */}
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#561423]/20 blur-[100px]"
            aria-hidden
          />

          <div className="relative z-10 grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="space-y-4 lg:col-span-7">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#c88f8f]" />
                <p className="text-[11px] uppercase tracking-[0.25em] font-medium text-[#c88f8f]">
                  Atelier & Destination
                </p>
              </div>

              <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-normal leading-[1.1] tracking-tight text-[#fbf8f5]">
                PRIVATE ATELIER &
                <br />
                <span className="italic font-light text-[#d7be9f]">
                  BESPOKE TRAVEL
                </span>
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-[#b5a8a3] font-light max-w-xl">
                Our flagship studio provides serene, undisturbed appointments.
                For destination nuptials, editorial productions, and private estates,
                our master artists are available for on-location travel throughout the
                metropolitan area and worldwide destinations.
              </p>

              <p className="text-[11px] tracking-wide text-white/40 italic pt-2">
                Demo travel policy — specific mileage and booking terms are confirmed during personal consultation.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:col-span-5 border-t border-white/10 pt-6 lg:border-t-0 lg:border-l lg:border-white/10 lg:pl-8 lg:pt-0">
              <div className="space-y-2">
                <MapPin className="size-5 text-[#d7be9f]" strokeWidth={1.5} />
                <h3 className="font-heading text-base font-normal text-[#fbf8f5]">
                  City Atelier
                </h3>
                <p className="text-xs text-[#a89a95] font-light">
                  Private studio suites for quiet, personalized focus.
                </p>
              </div>

              <div className="space-y-2">
                <Compass className="size-5 text-[#c88f8f]" strokeWidth={1.5} />
                <h3 className="font-heading text-base font-normal text-[#fbf8f5]">
                  On-Location
                </h3>
                <p className="text-xs text-[#a89a95] font-light">
                  Direct on-site beauty styling for weddings and galas.
                </p>
              </div>

              <div className="space-y-2">
                <Globe className="size-5 text-[#fbf8f5]" strokeWidth={1.5} />
                <h3 className="font-heading text-base font-normal text-[#fbf8f5]">
                  Destination
                </h3>
                <p className="text-xs text-[#a89a95] font-light">
                  Available for global destination travel upon request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
