import { BookingFormData } from "@/types/booking";

interface BookingStepReviewProps {
  formData: BookingFormData;
  isSubmitting: boolean;
}

export function BookingStepReview({
  formData,
  isSubmitting,
}: BookingStepReviewProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-heading text-[24px] leading-[1.3] tracking-tight text-foreground lg:text-[32px]">
          Review Your Enquiry
        </h2>
        <p className="mt-2 text-base text-muted-foreground lg:text-lg">
          Please verify your information before submitting. This is a request for
          availability, not a confirmed booking.
        </p>
      </div>

      <div className="space-y-4 rounded-[4px] border border-border bg-surface p-6">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Service</p>
          <p className="text-base text-foreground">{formData.service}</p>
        </div>

        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Preferred Date</p>
          <p className="text-base text-foreground">{formData.preferredDate}</p>
        </div>

        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Location</p>
          <p className="text-base text-foreground">{formData.location}</p>
        </div>

        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Name</p>
          <p className="text-base text-foreground">{formData.name}</p>
        </div>

        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Phone</p>
          <p className="text-base text-foreground">{formData.phone}</p>
        </div>

        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Email</p>
          <p className="text-base text-foreground">{formData.email}</p>
        </div>
      </div>

    </div>
  );
}
