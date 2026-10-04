import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/status-badge";
import { WHATSAPP_CONFIG } from "@/lib/booking-config";
import type { BookingEnquiry } from "@/types/booking-enquiry";
import { ArrowLeft, MessageCircle, CheckCircle2, XCircle } from "lucide-react";

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

  return (
    <div>
      <button
        onClick={onBack}
        className="mb-6 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#a89a95] transition-colors hover:text-[#fbf8f5] lg:mb-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#d7be9f]"
        type="button"
      >
        <ArrowLeft className="size-4" strokeWidth={1.5} aria-hidden />
        Back to Register
      </button>

      <div className="rounded-[2px] border border-white/[0.08] bg-[#171315] p-6 lg:p-8 space-y-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-6 border-b border-white/[0.06]">
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-[#c88f8f] mb-1">Client Enquiry</p>
            <h2 className="font-heading text-xl text-[#fbf8f5] lg:text-2xl">
              {enquiry.contact.fullName}
            </h2>
            <p className="mt-1 text-xs text-[#a89a95] font-mono">
              ID: {enquiry.id.slice(0, 8).toUpperCase()}
            </p>
          </div>
          <StatusBadge status={enquiry.status} />
        </div>

        {/* Service Details */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-[11px] uppercase tracking-[0.22em] font-medium text-[#d7be9f]">
              Reservation Details
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] uppercase tracking-widest text-[#a89a95]">Discipline</span>
                <span className="text-[#fbf8f5]">{enquiry.serviceId}</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] uppercase tracking-widest text-[#a89a95]">Preferred Date</span>
                <span className="text-[#fbf8f5]">{formattedDate}</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] uppercase tracking-widest text-[#a89a95]">Location</span>
                <span className="text-[#fbf8f5]">{enquiry.dateLocation.location}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-[11px] uppercase tracking-[0.22em] font-medium text-[#d7be9f]">
              Client Contact
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] uppercase tracking-widest text-[#a89a95]">Phone / WhatsApp</span>
                <span className="text-[#fbf8f5]">{enquiry.contact.phone}</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] uppercase tracking-widest text-[#a89a95]">Email Address</span>
                <span className="text-[#fbf8f5]">{enquiry.contact.email}</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] uppercase tracking-widest text-[#a89a95]">Submitted</span>
                <span className="text-[#fbf8f5]">{formattedSubmitted}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Row */}
        <div className="border-t border-white/[0.06] pt-6 space-y-4">
          <div className="flex flex-col gap-3 lg:flex-row">
            {enquiry.status === "pending" && (
              <>
                <Button
                  onClick={handleAccept}
                  className="min-h-11 lg:flex-1"
                >
                  <CheckCircle2 className="size-4" />
                  Accept Enquiry
                </Button>
                <Button
                  onClick={handleReject}
                  variant="outline"
                  className="min-h-11 lg:flex-1"
                >
                  <XCircle className="size-4" />
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
                  className="min-h-11 lg:flex-1"
                />
              }
              variant={enquiry.status === "pending" ? "outline" : "default"}
            >
              <MessageCircle className="size-4" aria-hidden />
              Open on WhatsApp
            </Button>
          </div>

          {enquiry.status === "accepted" && (
            <p className="flex items-center gap-2 text-xs text-[#3f6e4a] uppercase tracking-widest">
              <CheckCircle2 className="size-4" />
              This reservation has been accepted.
            </p>
          )}

          {enquiry.status === "rejected" && (
            <p className="flex items-center gap-2 text-xs text-[#88222b] uppercase tracking-widest">
              <XCircle className="size-4" />
              This reservation has been rejected.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
