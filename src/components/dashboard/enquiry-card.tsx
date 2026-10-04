import { BookingEnquiry } from "@/types/booking-enquiry";
import { StatusBadge } from "@/components/ui/status-badge";
import { CalendarDays, MapPin, User } from "lucide-react";

interface EnquiryCardProps {
  enquiry: BookingEnquiry;
  onClick?: () => void;
}

export function EnquiryCard({ enquiry, onClick }: EnquiryCardProps) {
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
    <button
      onClick={onClick}
      className="w-full rounded-[2px] border border-white/[0.08] bg-[#171315] p-4 text-left transition-all duration-200 hover:border-[#c88f8f]/40 hover:bg-[#1e1215] lg:p-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#d7be9f]"
      type="button"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 space-y-3">
          {/* Client name + status */}
          <div className="flex items-center gap-3">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#221a1d] border border-white/[0.08]">
              <User className="size-4 text-[#c88f8f]" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-heading text-base font-normal text-[#fbf8f5] lg:text-lg">
                {enquiry.contact.fullName}
              </h3>
              <p className="text-[11px] uppercase tracking-[0.15em] text-[#a89a95]">
                {enquiry.serviceId}
              </p>
            </div>
            <div className="ml-auto">
              <StatusBadge status={enquiry.status} />
            </div>
          </div>

          {/* Meta row */}
          <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-[#a89a95]">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="size-3.5 text-[#d7be9f]" strokeWidth={1.5} />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="size-3.5 text-[#d7be9f]" strokeWidth={1.5} />
              {enquiry.dateLocation.location}
            </span>
          </div>

          <p className="text-[11px] text-white/30 tracking-wide">
            Submitted {formattedSubmitted}
          </p>
        </div>
      </div>
    </button>
  );
}
