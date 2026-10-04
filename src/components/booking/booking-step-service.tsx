import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface BookingStepServiceProps {
  selectedService: string;
  onServiceSelect: (service: string) => void;
}

const SERVICE_PLACEHOLDERS = [
  "Bridal Makeup",
  "Engagement Makeup",
  "Editorial & Occasion Makeup",
] as const;

export function BookingStepService({
  selectedService,
  onServiceSelect,
}: BookingStepServiceProps) {
  const isValid = selectedService !== "";

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-heading text-[24px] leading-[1.3] tracking-tight text-foreground lg:text-[32px]">
          Select Service
        </h2>
        <p className="mt-2 text-base text-muted-foreground lg:text-lg">
          Choose a service category. Verified service details will be added once
          business content is available.
        </p>
      </div>

      <div className="space-y-3">
        {SERVICE_PLACEHOLDERS.map((service) => {
          const isSelected = selectedService === service;
          return (
            <button
              key={service}
              type="button"
              onClick={() => onServiceSelect(service)}
              className={`flex w-full min-h-[44px] items-center justify-between rounded-[4px] border px-4 py-3 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)] ${
                isSelected
                  ? "border-foreground bg-surface-elevated"
                  : "border-border bg-surface hover:border-border-interactive"
              }`}
              aria-pressed={isSelected}
            >
              <span className="text-base text-foreground">{service}</span>
              {isSelected && (
                <Check className="size-5 text-foreground" strokeWidth={1.5} />
              )}
            </button>
          );
        })}
      </div>

    </div>
  );
}
