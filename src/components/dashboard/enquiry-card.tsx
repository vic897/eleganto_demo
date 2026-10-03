import { BookingEnquiry } from "@/types/booking-enquiry";
import { StatusBadge } from "@/components/ui/status-badge";

interface EnquiryCardProps {
  enquiry: BookingEnquiry;
}

export function EnquiryCard({ enquiry }: EnquiryCardProps) {
  const formattedDate = new Date(enquiry.dateLocation.preferredDate).toLocaleDateString(
    "en-US",
    {
      month: "short",
      day: "numeric",
      year: "numeric",
    }
  );

  const formattedSubmitted = new Date(enquiry.createdAt).toLocaleDateString(
    "en-US",
    {
      month: "short",
      day: "numeric",
      year: "numeric",
    }
  );

  return (
    <div className="rounded-[4px] border border-border bg-surface p-4 lg:p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 space-y-3">
          <div className="flex items-center gap-2">
            <h3 className="font-heading text-base font-medium text-foreground lg:text-lg">
              {enquiry.contact.fullName}
            </h3>
            <StatusBadge status={enquiry.status} />
          </div>

          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Service:</span>{" "}
              {enquiry.serviceId}
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Date:</span>{" "}
              {formattedDate}
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Location:</span>{" "}
              {enquiry.dateLocation.location}
            </p>
          </div>

          <p className="text-xs text-muted-foreground">
            Submitted {formattedSubmitted}
          </p>
        </div>
      </div>
    </div>
  );
}
