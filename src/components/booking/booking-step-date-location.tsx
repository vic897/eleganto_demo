import { AlertCircle, Calendar, MapPin } from "lucide-react";

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

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 text-[#c88f8f]">
          <Calendar className="size-3.5" />
          <span className="text-[10px] uppercase tracking-[0.25em] font-medium">
            Step 2 · Logistics
          </span>
        </div>
        <h2 className="font-heading text-2xl sm:text-3xl font-normal tracking-tight text-[#fbf8f5]">
          Date & Preferred Location
        </h2>
        <p className="text-xs sm:text-sm text-[#b5a8a3] font-light">
          Specify your event date and venue or indicate if you wish to visit our
          city atelier suite.
        </p>
      </div>

      <div className="space-y-5">
        <div className="space-y-2">
          <label
            htmlFor="preferred-date"
            className="flex items-center justify-between text-xs uppercase tracking-[0.18em] font-medium text-[#fbf8f5]"
          >
            <span>Preferred Date</span>
            <span className="text-[#c88f8f] font-normal">* Required</span>
          </label>
          <div className="relative">
            <input
              id="preferred-date"
              type="date"
              value={preferredDate}
              onChange={(e) => onPreferredDateChange(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
              className={`w-full min-h-[48px] rounded-[2px] border bg-[#120a0d] px-4 py-3 text-sm text-[#fbf8f5] outline-none transition-all placeholder:text-[#a89a95]/60 focus-visible:border-[#d7be9f] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#d7be9f] ${
                dateError ? "border-[#88222b]" : "border-white/10 hover:border-white/20"
              }`}
              aria-describedby={dateError ? "date-error" : undefined}
              aria-invalid={!!dateError}
            />
          </div>
          {dateError && (
            <p
              id="date-error"
              className="flex items-center gap-1.5 text-xs text-[#c88f8f]"
              role="alert"
            >
              <AlertCircle className="size-3.5" strokeWidth={1.5} />
              {dateError}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="location"
            className="flex items-center justify-between text-xs uppercase tracking-[0.18em] font-medium text-[#fbf8f5]"
          >
            <span>Location / Venue</span>
            <span className="text-[#c88f8f] font-normal">* Required</span>
          </label>
          <div className="relative">
            <input
              id="location"
              type="text"
              value={location}
              onChange={(e) => onLocationChange(e.target.value)}
              placeholder="e.g. Eleganto Atelier, The Plaza Hotel, or Private Address"
              className={`w-full min-h-[48px] rounded-[2px] border bg-[#120a0d] px-4 py-3 text-sm text-[#fbf8f5] outline-none transition-all placeholder:text-white/30 focus-visible:border-[#d7be9f] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#d7be9f] ${
                locationError ? "border-[#88222b]" : "border-white/10 hover:border-white/20"
              }`}
              aria-describedby={locationError ? "location-error" : undefined}
              aria-invalid={!!locationError}
            />
            <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-[#a89a95] pointer-events-none" />
          </div>
          {locationError && (
            <p
              id="location-error"
              className="flex items-center gap-1.5 text-xs text-[#c88f8f]"
              role="alert"
            >
              <AlertCircle className="size-3.5" strokeWidth={1.5} />
              {locationError}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
