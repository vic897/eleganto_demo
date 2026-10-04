"use client";

import { useState } from "react";
import { BookingProgress } from "./booking-progress";
import { BookingStepService } from "./booking-step-service";
import { BookingStepDateLocation } from "./booking-step-date-location";
import { BookingStepContact } from "./booking-step-contact";
import { BookingStepReview } from "./booking-step-review";
import { BookingConfirmation } from "./booking-confirmation";
import { BookingFormData, BookingStep } from "@/types/booking";
import type { BookingEnquiry } from "@/types/booking-enquiry";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";

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
    <section id="book" className="relative w-full bg-[#0e0c0d] py-16 lg:py-24 border-t border-white/[0.06]">
      {/* Background ambient light */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-[#561423]/15 blur-[120px]"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-[760px] px-4 sm:px-6">
        {/* Reservation Container */}
        <div className="rounded-[2px] border border-[#d7be9f]/25 bg-[#160a0f] p-6 sm:p-10 lg:p-12 pb-28 lg:pb-12 shadow-2xl">
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

          {/* Desktop inline action bar */}
          <div className="hidden lg:flex items-center justify-between mt-10 pt-6 border-t border-white/10">
            {currentStep !== "service" ? (
              <button
                type="button"
                onClick={handleBack}
                disabled={isSubmitting}
                className="inline-flex min-h-11 items-center gap-2 rounded-[2px] border border-white/15 bg-white/5 px-6 text-xs uppercase tracking-[0.2em] font-medium text-[#fbf8f5] transition-colors hover:bg-white/10 hover:text-[#c88f8f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#d7be9f]"
              >
                <ArrowLeft className="size-3.5" />
                <span>Back</span>
              </button>
            ) : (
              <div />
            )}

            {currentStep === "review" ? (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="inline-flex min-h-12 items-center gap-2 rounded-[2px] border border-[#d7be9f]/40 bg-[#6e1a2d] px-8 text-xs uppercase tracking-[0.22em] font-medium text-[#fbf8f5] shadow-[0_4px_24px_rgba(110,26,45,0.45)] transition-all duration-300 hover:border-[#d7be9f] hover:bg-[#89273c] disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#d7be9f]"
              >
                <Sparkles className="size-3.5 text-[#d7be9f]" />
                <span>{isSubmitting ? "Transmitting..." : "Submit Reservation"}</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={handleNext}
                disabled={!canProceed}
                className="inline-flex min-h-12 items-center gap-2 rounded-[2px] border border-[#d7be9f]/40 bg-[#6e1a2d] px-8 text-xs uppercase tracking-[0.22em] font-medium text-[#fbf8f5] shadow-[0_4px_24px_rgba(110,26,45,0.45)] transition-all duration-300 hover:border-[#d7be9f] hover:bg-[#89273c] disabled:pointer-events-none disabled:opacity-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#d7be9f]"
              >
                <span>Continue</span>
                <ArrowRight className="size-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Mobile sticky action bar */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-[#0e0c0d]/95 backdrop-blur-md p-4 pb-[calc(1rem+env(safe-area-inset-bottom))] shadow-2xl">
          <div className="mx-auto max-w-[600px]">
            {currentStep === "service" && (
              <button
                type="button"
                onClick={handleNext}
                disabled={!canProceed}
                className="flex w-full min-h-12 items-center justify-center gap-2 rounded-[2px] border border-[#d7be9f]/40 bg-[#6e1a2d] px-6 text-xs uppercase tracking-[0.22em] font-medium text-[#fbf8f5] transition-all disabled:opacity-40"
              >
                <span>Continue</span>
                <ArrowRight className="size-4" />
              </button>
            )}

            {(currentStep === "date-location" ||
              currentStep === "contact") && (
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex flex-1 min-h-12 items-center justify-center gap-1.5 rounded-[2px] border border-white/15 bg-white/5 text-xs uppercase tracking-[0.2em] font-medium text-[#fbf8f5]"
                >
                  <ArrowLeft className="size-4" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!canProceed}
                  className="flex flex-1 min-h-12 items-center justify-center gap-1.5 rounded-[2px] border border-[#d7be9f]/40 bg-[#6e1a2d] text-xs uppercase tracking-[0.22em] font-medium text-[#fbf8f5] disabled:opacity-40"
                >
                  <span>Continue</span>
                  <ArrowRight className="size-4" />
                </button>
              </div>
            )}

            {currentStep === "review" && (
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={isSubmitting}
                  className="flex flex-1 min-h-12 items-center justify-center gap-1.5 rounded-[2px] border border-white/15 bg-white/5 text-xs uppercase tracking-[0.2em] font-medium text-[#fbf8f5]"
                >
                  <ArrowLeft className="size-4" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="flex flex-1 min-h-12 items-center justify-center gap-1.5 rounded-[2px] border border-[#d7be9f]/40 bg-[#6e1a2d] text-xs uppercase tracking-[0.22em] font-medium text-[#fbf8f5] disabled:opacity-50"
                >
                  <Sparkles className="size-4 text-[#d7be9f]" />
                  <span>{isSubmitting ? "Transmitting..." : "Submit"}</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
