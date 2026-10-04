interface BookingProgressProps {
  currentStep: number;
  totalSteps: number;
}

const STEP_LABELS = [
  "Service",
  "Date & Place",
  "Contact",
  "Review",
  "Submit",
];

export function BookingProgress({ currentStep, totalSteps }: BookingProgressProps) {
  return (
    <div className="mb-8" role="status" aria-live="polite">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[11px] uppercase tracking-[0.22em] text-[#c88f8f] font-medium">
          Step 0{currentStep} of 0{totalSteps}
        </span>
        <span className="text-[11px] uppercase tracking-[0.2em] text-[#d7be9f] font-sans">
          {STEP_LABELS[currentStep - 1] || "Confirmation"}
        </span>
      </div>

      <div className="flex items-center gap-2">
        {Array.from({ length: totalSteps }).map((_, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;

          return (
            <div
              key={stepNumber}
              className={`h-1 flex-1 rounded-[1px] transition-all duration-300 ${
                isCompleted || isCurrent
                  ? "bg-gradient-to-r from-[#89273c] to-[#d7be9f]"
                  : "bg-white/10"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
