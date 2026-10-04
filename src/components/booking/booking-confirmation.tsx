import { Button } from "@/components/ui/button";
import type { BookingEnquiry } from "@/types/booking-enquiry";
import { WHATSAPP_CONFIG } from "@/lib/booking-config";
import { CheckCircle2, MessageCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface BookingConfirmationProps {
  enquiry: BookingEnquiry;
}

export function BookingConfirmation({ enquiry }: BookingConfirmationProps) {
  const generateWhatsAppMessage = (): string => {
    const message = `Eleganto Atelier - New Reservation Inquiry

Service: ${enquiry.serviceId}
Preferred Date: ${enquiry.dateLocation.preferredDate}
Location: ${enquiry.dateLocation.location}

Client Details:
Name: ${enquiry.contact.fullName}
Phone: ${enquiry.contact.phone}
Email: ${enquiry.contact.email}

Submitted: ${new Date(enquiry.createdAt).toLocaleDateString()}`;

    return encodeURIComponent(message);
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${generateWhatsAppMessage()}`;

  return (
    <section className="relative w-full overflow-hidden bg-[#0e0c0d] py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[640px] px-4">
        <div className="rounded-[2px] border border-[#d7be9f]/30 bg-[#160a0f] p-8 sm:p-12 text-center space-y-8 shadow-2xl">
          <div className="flex justify-center">
            <div className="flex size-16 items-center justify-center rounded-full border border-[#d7be9f]/40 bg-[#250912] shadow-[0_0_30px_rgba(215,190,159,0.2)]">
              <CheckCircle2
                className="size-8 text-[#d7be9f]"
                strokeWidth={1.5}
                aria-hidden
              />
            </div>
          </div>

          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-[#c88f8f]">
              Reservation Inquiry Dispatched
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-normal leading-[1.1] tracking-tight text-[#fbf8f5]">
              THANK YOU FOR CHOOSING ELEGANTO
            </h2>
            <p className="text-sm leading-relaxed text-[#b5a8a3] font-light max-w-md mx-auto">
              Your reservation request has been received. Our atelier team will review
              your dates and prepare a personalized consultation plan.
            </p>
          </div>

          <div className="space-y-3 rounded-[2px] border border-white/10 bg-[#0e0c0d]/70 p-6 text-left">
            <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-[#d7be9f]">
              Inquiry Summary
            </h3>
            <div className="space-y-2 pt-2 text-xs divide-y divide-white/[0.06]">
              <div className="flex justify-between py-1.5">
                <span className="text-[#a89a95]">Discipline</span>
                <span className="font-medium text-[#fbf8f5]">{enquiry.serviceId}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-[#a89a95]">Preferred Date</span>
                <span className="font-medium text-[#fbf8f5]">
                  {enquiry.dateLocation.preferredDate}
                </span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-[#a89a95]">Location</span>
                <span className="font-medium text-[#fbf8f5]">{enquiry.dateLocation.location}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3.5 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-[2px] border border-[#d7be9f]/40 bg-[#6e1a2d] px-6 text-xs uppercase tracking-[0.22em] font-medium text-[#fbf8f5] shadow-lg transition-all duration-300 hover:bg-[#89273c] hover:border-[#d7be9f]"
            >
              <MessageCircle className="size-4" />
              <span>Instant Confirmation on WhatsApp</span>
            </a>

            <Link
              href="/"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[2px] border border-white/10 bg-transparent px-6 text-xs uppercase tracking-[0.2em] font-medium text-[#e4dbd4] transition-colors hover:bg-white/5 hover:text-[#fbf8f5]"
            >
              <ArrowLeft className="size-4" />
              <span>Return to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
