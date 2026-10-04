import { BookingFormData } from "@/types/booking";
import { CheckCircle2, FileText } from "lucide-react";

interface BookingStepReviewProps {
  formData: BookingFormData;
  isSubmitting: boolean;
}

export function BookingStepReview({
  formData,
  isSubmitting,
}: BookingStepReviewProps) {
  const details = [
    { label: "Selected Discipline", value: formData.service },
    { label: "Preferred Date", value: formData.preferredDate },
    { label: "Location / Venue", value: formData.location },
    { label: "Full Name", value: formData.name },
    { label: "Phone / WhatsApp", value: formData.phone },
    { label: "Email Address", value: formData.email },
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 text-[#c88f8f]">
          <FileText className="size-3.5" />
          <span className="text-[10px] uppercase tracking-[0.25em] font-medium">
            Step 4 · Verification
          </span>
        </div>
        <h2 className="font-heading text-2xl sm:text-3xl font-normal tracking-tight text-[#fbf8f5]">
          Review Your Reservation
        </h2>
        <p className="text-xs sm:text-sm text-[#b5a8a3] font-light">
          Please confirm your details before dispatching. This transmits a formal
          reservation request for calendar availability.
        </p>
      </div>

      <div className="rounded-[2px] border border-white/10 bg-[#120a0d] p-5 sm:p-6 divide-y divide-white/[0.08]">
        {details.map((item, idx) => (
          <div
            key={idx}
            className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 py-3 ${
              idx === 0 ? "pt-0" : ""
            } ${idx === details.length - 1 ? "pb-0" : ""}`}
          >
            <span className="text-xs uppercase tracking-[0.16em] text-[#a89a95]">
              {item.label}
            </span>
            <span className="font-heading text-sm sm:text-base font-normal text-[#fbf8f5]">
              {item.value || "—"}
            </span>
          </div>
        ))}
      </div>

      <div className="rounded-[2px] border border-[#d7be9f]/20 bg-[#250912]/40 p-4 text-xs leading-relaxed text-[#d7be9f] flex items-start gap-3">
        <CheckCircle2 className="size-4 shrink-0 text-[#c88f8f] mt-0.5" />
        <span>
          Upon review, our concierge will respond within 24 hours to confirm date
          lock, artist assignment, and consultation scheduling.
        </span>
      </div>

      {isSubmitting && (
        <p className="text-center text-xs text-[#d7be9f] animate-pulse">
          Transmitting reservation inquiry to Eleganto Atelier...
        </p>
      )}
    </div>
  );
}
