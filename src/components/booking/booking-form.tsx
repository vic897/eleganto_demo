"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BookingProgress } from "./booking-progress";
import { BookingStepService } from "./booking-step-service";
import { BookingStepDateLocation } from "./booking-step-date-location";
import { BookingStepContact } from "./booking-step-contact";
import { BookingStepReview } from "./booking-step-review";
import { BookingConfirmation } from "./booking-confirmation";
import { BookingFormData, BookingStep } from "@/types/booking";
import type { BookingEnquiry } from "@/types/booking-enquiry";

const STEPS: BookingStep[] = [
  "service",
  "date-location",
  "contact",
  "review",
  "submit",
  "confirmation",
];

export function BookingForm() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [enquiry, setEnquiry] = useState<BookingEnquiry | null>(null);

  const [formData, setFormData] = useState<BookingFormData>({
    service: "",
    preferredDate: "",
    location: "",
    name: "",
    phone: "",
    email: "",
  });

  const currentStep = STEPS[currentStepIndex];
  const currentStepNumber = currentStepIndex + 1;

  const handleNext = () => {
    if (currentStepIndex < STEPS.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    // Simulate submission delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const newEnquiry: BookingEnquiry = {
      id: crypto.randomUUID(),
      serviceId: formData.service,
      status: "pending",
      contact: {
        fullName: formData.name,
        email: formData.email,
        phone: formData.phone,
      },
      dateLocation: {
        preferredDate: formData.preferredDate,
        location: formData.location,
      },
      createdAt: new Date().toISOString(),
    };

    setEnquiry(newEnquiry);
    setIsSubmitting(false);
    setCurrentStepIndex(currentStepIndex + 1);
  };

  // Validation helpers
  const isServiceValid = formData.service !== "";
  const isDateLocationValid =
    formData.preferredDate !== "" && formData.location !== "";
  const isContactValid =
    formData.name !== "" && formData.phone !== "" && formData.email !== "";

  const canProceed =
    (currentStep === "service" && isServiceValid) ||
    (currentStep === "date-location" && isDateLocationValid) ||
    (currentStep === "contact" && isContactValid) ||
    currentStep === "review";

  // Show confirmation screen if enquiry is submitted
  if (currentStep === "confirmation" && enquiry) {
    return <BookingConfirmation enquiry={enquiry} />;
  }

  return (
    <section id="book" className="mx-auto w-full max-w-[600px] px-4 py-16 lg:py-24">
      <div className="rounded-[4px] border border-border bg-surface p-6 lg:p-8 pb-24 lg:pb-8">
        {currentStep !== "confirmation" && (
          <BookingProgress
            currentStep={currentStepNumber}
            totalSteps={5}
          />
        )}

        {currentStep === "service" && (
          <BookingStepService
            selectedService={formData.service}
            onServiceSelect={(service) =>
              setFormData({ ...formData, service })
            }
          />
        )}

        {currentStep === "date-location" && (
          <BookingStepDateLocation
            preferredDate={formData.preferredDate}
            location={formData.location}
            onPreferredDateChange={(date) =>
              setFormData({ ...formData, preferredDate: date })
            }
            onLocationChange={(location) =>
              setFormData({ ...formData, location })
            }
          />
        )}

        {currentStep === "contact" && (
          <BookingStepContact
            name={formData.name}
            phone={formData.phone}
            email={formData.email}
            onNameChange={(name) => setFormData({ ...formData, name })}
            onPhoneChange={(phone) => setFormData({ ...formData, phone })}
            onEmailChange={(email) => setFormData({ ...formData, email })}
          />
        )}

        {currentStep === "review" && (
          <BookingStepReview
            formData={formData}
            isSubmitting={isSubmitting}
          />
        )}
      </div>

      {/* Mobile sticky action bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 border-t border-border bg-surface p-4 pb-[calc(1rem+env(safe-area-inset-bottom))]">
        <div className="mx-auto max-w-[600px]">
          {currentStep === "service" && (
            <Button
              onClick={handleNext}
              disabled={!canProceed}
              className="w-full min-h-11 uppercase tracking-wider"
            >
              Next
            </Button>
          )}

          {(currentStep === "date-location" ||
            currentStep === "contact") && (
            <div className="flex gap-3">
              <Button
                onClick={handleBack}
                variant="outline"
                className="flex-1 min-h-11 uppercase tracking-wider"
              >
                Back
              </Button>
              <Button
                onClick={handleNext}
                disabled={!canProceed}
                className="flex-1 min-h-11 uppercase tracking-wider"
              >
                Next
              </Button>
            </div>
          )}

          {currentStep === "review" && (
            <div className="flex gap-3">
              <Button
                onClick={handleBack}
                variant="outline"
                disabled={isSubmitting}
                className="flex-1 min-h-11 uppercase tracking-wider"
              >
                Back
              </Button>
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="flex-1 min-h-11 uppercase tracking-wider"
              >
                {isSubmitting ? "Submitting..." : "Submit Enquiry"}
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Desktop inline action bar */}
      <div className="hidden lg:flex justify-between mt-6">
        {currentStep !== "service" && (
          <Button
            onClick={handleBack}
            variant="outline"
            disabled={isSubmitting}
            className="min-h-11 uppercase tracking-wider"
          >
            Back
          </Button>
        )}
        <div className="flex-1" />
        {currentStep === "review" ? (
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="min-h-11 uppercase tracking-wider"
          >
            {isSubmitting ? "Submitting..." : "Submit Enquiry"}
          </Button>
        ) : (
          <Button
            onClick={handleNext}
            disabled={!canProceed}
            className="min-h-11 uppercase tracking-wider"
          >
            Next
          </Button>
        )}
      </div>
    </section>
  );
}
