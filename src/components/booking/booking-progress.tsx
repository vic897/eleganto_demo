interface BookingProgressProps {
  currentStep: number;
  totalSteps: number;
}

export function BookingProgress({ currentStep, totalSteps }: BookingProgressProps) {
  return (
    <div className="mb-6" role="status" aria-live="polite">
      <div className="flex items-center justify-between gap-2">
        {Array.from({ length: totalSteps }).map((_, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;
          const isUpcoming = stepNumber > currentStep;

          return (
            <div
              key={stepNumber}
              className="flex-1"
            >
              <div className="flex items-center gap-2">
                <div
                  className={`h-2 flex-1 rounded-full transition-colors ${
                    isCompleted
                      ? "bg-accent"
                      : isCurrent
                      ? "bg-accent"
                      : "bg-border"
                  }`}
                />
                {stepNumber < totalSteps && (
                  <div
                    className={`h-2 w-2 rounded-full ${
                      isCompleted ? "bg-accent" : "bg-border"
                    }`}
                  />
                )}
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Step {stepNumber} of {totalSteps}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
