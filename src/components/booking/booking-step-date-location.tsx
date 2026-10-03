import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

interface BookingStepDateLocationProps {
  preferredDate: string;
  location: string;
  onPreferredDateChange: (date: string) => void;
  onLocationChange: (location: string) => void;
}

export function BookingStepDateLocation({
  preferredDate,
  location,
  onPreferredDateChange,
  onLocationChange,
}: BookingStepDateLocationProps) {
  const dateError = preferredDate === "" ? "Preferred date is required" : "";
  const locationError = location === "" ? "Location is required" : "";
  const isValid = !dateError && !locationError;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-heading text-[24px] leading-[1.3] tracking-tight text-foreground lg:text-[32px]">
          Date & Location
        </h2>
        <p className="mt-2 text-base text-muted-foreground lg:text-lg">
          Provide your preferred date and location. This is a request for
          availability, not a confirmed booking.
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label
            htmlFor="preferred-date"
            className="block text-sm font-medium text-foreground"
          >
            Preferred Date <span className="text-destructive">*</span>
          </label>
          <input
            id="preferred-date"
            type="date"
            value={preferredDate}
            onChange={(e) => onPreferredDateChange(e.target.value)}
            min={new Date().toISOString().split("T")[0]}
            className={`w-full min-h-[44px] rounded-[4px] border bg-surface px-4 py-3 text-base text-foreground outline-none transition-colors focus-visible:border-border-interactive focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)] ${
              dateError ? "border-destructive" : "border-border"
            }`}
            aria-describedby={dateError ? "date-error" : undefined}
            aria-invalid={!!dateError}
          />
          {dateError && (
            <p
              id="date-error"
              className="flex items-center gap-1 text-sm text-destructive"
              role="alert"
            >
              <AlertCircle className="size-4" strokeWidth={1.5} />
              {dateError}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="location"
            className="block text-sm font-medium text-foreground"
          >
            Location <span className="text-destructive">*</span>
          </label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={(e) => onLocationChange(e.target.value)}
            placeholder="Enter your location"
            className={`w-full min-h-[44px] rounded-[4px] border bg-surface px-4 py-3 text-base text-foreground outline-none transition-colors focus-visible:border-border-interactive focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)] ${
              locationError ? "border-destructive" : "border-border"
            }`}
            aria-describedby={locationError ? "location-error" : undefined}
            aria-invalid={!!locationError}
          />
          {locationError && (
            <p
              id="location-error"
              className="flex items-center gap-1 text-sm text-destructive"
              role="alert"
            >
              <AlertCircle className="size-4" strokeWidth={1.5} />
              {locationError}
            </p>
          )}
        </div>
      </div>

    </div>
  );
}
