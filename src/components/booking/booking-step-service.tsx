import { Check, Sparkles } from "lucide-react";

interface BookingStepServiceProps {
  selectedService: string;
  onServiceSelect: (service: string) => void;
}

const SERVICE_OPTIONS = [
  {
    title: "Bridal & Occasion Makeup",
    description: "Couture red carpet & bridal makeup with custom palette matching",
  },
  {
    title: "Hair Styling & Architecture",
    description: "Hollywood waves, modern textured updos, and editorial styling",
  },
  {
    title: "Haute Manicure",
    description: "Japanese gel overlays, Russian cuticle care, and nail sculpting",
  },
  {
    title: "Luxury Pedicure",
    description: "Restorative botanical foot spa with deep hydration and gel finish",
  },
  {
    title: "Advanced Cosmetology",
    description: "Targeted dermal rejuvenation, lymphatic contouring, and peels",
  },
  {
    title: "Beauty Treatments & Skin Radiance",
    description: "Micro-current event glow protocol and LED light rejuvenation",
  },
] as const;

export function BookingStepService({
  selectedService,
  onServiceSelect,
}: BookingStepServiceProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 text-[#c88f8f]">
          <Sparkles className="size-3.5" />
          <span className="text-[10px] uppercase tracking-[0.25em] font-medium">
            Step 1 · Selection
          </span>
        </div>
        <h2 className="font-heading text-2xl sm:text-3xl font-normal tracking-tight text-[#fbf8f5]">
          Select Atelier Service
        </h2>
        <p className="text-xs sm:text-sm text-[#b5a8a3] font-light">
          Choose your desired service discipline. Specific package tiers and custom
          add-ons will be tailored during your consultation.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-1">
        {SERVICE_OPTIONS.map((item) => {
          const isSelected = selectedService === item.title;
          return (
            <button
              key={item.title}
              type="button"
              onClick={() => onServiceSelect(item.title)}
              className={`group flex w-full min-h-[56px] items-center justify-between rounded-[2px] border p-4 text-left transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#d7be9f] ${
                isSelected
                  ? "border-[#d7be9f] bg-[#250912] shadow-[0_0_20px_rgba(215,190,159,0.15)]"
                  : "border-white/10 bg-[#120a0d] hover:border-white/25 hover:bg-[#1a0f14]"
              }`}
              aria-pressed={isSelected}
            >
              <div className="space-y-1">
                <span className={`block font-heading text-base font-normal tracking-wide transition-colors ${
                  isSelected ? "text-[#fbf8f5]" : "text-[#fbf8f5]/90 group-hover:text-[#fbf8f5]"
                }`}>
                  {item.title}
                </span>
                <span className="block text-xs text-[#a89a95] font-light">
                  {item.description}
                </span>
              </div>

              <div
                className={`flex size-6 shrink-0 items-center justify-center rounded-full border transition-all ${
                  isSelected
                    ? "border-[#d7be9f] bg-[#d7be9f] text-[#0e0c0d]"
                    : "border-white/20 bg-transparent text-transparent group-hover:border-white/40"
                }`}
              >
                <Check className="size-3.5 stroke-[2.5]" />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
