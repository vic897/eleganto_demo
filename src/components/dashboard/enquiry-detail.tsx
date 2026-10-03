import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/status-badge";
import { WHATSAPP_CONFIG } from "@/lib/booking-config";
import type { BookingEnquiry } from "@/types/booking-enquiry";
import { ArrowLeft, MessageCircle } from "lucide-react";

interface EnquiryDetailProps {
  enquiry: BookingEnquiry;
  onBack: () => void;
  onUpdateStatus: (id: string, status: "accepted" | "rejected") => void;
}

export function EnquiryDetail({
  enquiry,
  onBack,
  onUpdateStatus,
}: EnquiryDetailProps) {
  const formattedDate = new Date(enquiry.dateLocation.preferredDate).toLocaleDateString(
    "en-US",
    {
      weekday: "long",
      month: "long",
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
      hour: "2-digit",
      minute: "2-digit",
    }
  );

  const handleAccept = () => {
    onUpdateStatus(enquiry.id, "accepted");
  };

  const handleReject = () => {
    onUpdateStatus(enquiry.id, "rejected");
  };

  const generateWhatsAppMessage = (): string => {
    const message = `Re: Booking Enquiry from ${enquiry.contact.fullName}

Service: ${enquiry.serviceId}
Preferred Date: ${formattedDate}
Location: ${enquiry.dateLocation.location}

Contact:
Phone: ${enquiry.contact.phone}
Email: ${enquiry.contact.email}

Submitted: ${formattedSubmitted}`;

    return encodeURIComponent(message);
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${generateWhatsAppMessage()}`;

  const canAccept = enquiry.status === "pending";
  const canReject = enquiry.status === "pending";

  return (
    <div>
      <button
        onClick={onBack}
        className="mb-6 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground lg:mb-8"
      >
        <ArrowLeft className="size-4" strokeWidth={1.5} aria-hidden />
        Back to enquiries
      </button>

      <div className="rounded-[4px] border border-border bg-surface p-6 lg:p-8">
        <div className="mb-6 flex items-start justify-between gap-4 lg:mb-8">
          <div>
            <h2 className="font-heading text-xl text-foreground lg:text-2xl">
              {enquiry.contact.fullName}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Enquiry ID: {enquiry.id}
            </p>
          </div>
          <StatusBadge status={enquiry.status} />
        </div>

        <div className="space-y-6 lg:space-y-8">
          <div>
            <h3 className="mb-3 font-heading text-base text-foreground lg:text-lg">
              Service Details
            </h3>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Service:</span>{" "}
                {enquiry.serviceId}
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Preferred Date:</span>{" "}
                {formattedDate}
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Location:</span>{" "}
                {enquiry.dateLocation.location}
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-3 font-heading text-base text-foreground lg:text-lg">
              Contact Information
            </h3>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Phone:</span>{" "}
                {enquiry.contact.phone}
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Email:</span>{" "}
                {enquiry.contact.email}
              </p>
            </div>
          </div>

          <div className="border-t border-border pt-6 lg:pt-8">
            <p className="text-xs text-muted-foreground">
              Submitted: {formattedSubmitted}
            </p>
          </div>

          <div className="flex flex-col gap-3 pt-4 lg:flex-row lg:pt-6">
            {enquiry.status === "pending" && (
              <>
                <Button
                  onClick={handleAccept}
                  className="min-h-11 uppercase tracking-wider lg:flex-1"
                >
                  Accept Enquiry
                </Button>
                <Button
                  onClick={handleReject}
                  variant="outline"
                  className="min-h-11 uppercase tracking-wider lg:flex-1"
                >
                  Reject Enquiry
                </Button>
              </>
            )}

            <Button
              nativeButton={false}
              render={
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-11 uppercase tracking-wider lg:flex-1"
                />
              }
              variant={enquiry.status === "pending" ? "outline" : "default"}
            >
              <MessageCircle className="mr-2 size-4" strokeWidth={1.5} aria-hidden />
              Open WhatsApp
            </Button>
          </div>

          {enquiry.status === "accepted" && (
            <p className="text-sm text-success">
              This enquiry has been accepted.
            </p>
          )}

          {enquiry.status === "rejected" && (
            <p className="text-sm text-destructive">
              This enquiry has been rejected.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
