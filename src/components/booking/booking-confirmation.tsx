import { Button } from "@/components/ui/button";
import { BookingEnquiry } from "@/types/booking";
import { WHATSAPP_CONFIG } from "@/lib/booking-config";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

interface BookingConfirmationProps {
  enquiry: BookingEnquiry;
}

export function BookingConfirmation({ enquiry }: BookingConfirmationProps) {
  const generateWhatsAppMessage = (): string => {
    const message = `New Booking Enquiry

Service: ${enquiry.service}
Preferred Date: ${enquiry.preferredDate}
Location: ${enquiry.location}

Contact Details:
Name: ${enquiry.name}
Phone: ${enquiry.phone}
Email: ${enquiry.email}

Submitted: ${enquiry.submittedAt.toLocaleDateString()}`;

    return encodeURIComponent(message);
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${generateWhatsAppMessage()}`;

  return (
    <div className="mx-auto w-full max-w-[600px] px-4 py-16 lg:py-24">
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <CheckCircle2
            className="size-16 text-success"
            strokeWidth={1.5}
            aria-hidden
          />
        </div>

        <div>
          <h2 className="font-heading text-[24px] leading-[1.3] tracking-tight text-foreground lg:text-[32px]">
            Thank You
          </h2>
          <p className="mt-4 text-base text-muted-foreground lg:text-lg">
            Your enquiry has been submitted successfully. This is a request for
            availability, not a confirmed booking. We will review your enquiry
            and get back to you soon.
          </p>
        </div>

        <div className="space-y-4 rounded-[4px] border border-border bg-surface p-6 text-left">
          <h3 className="font-heading text-lg text-foreground">
            Enquiry Summary
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Service</span>
              <span className="text-sm text-foreground">{enquiry.service}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">
                Preferred Date
              </span>
              <span className="text-sm text-foreground">
                {enquiry.preferredDate}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Location</span>
              <span className="text-sm text-foreground">{enquiry.location}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Button
            nativeButton={false}
            render={
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-11 uppercase tracking-wider"
              />
            }
          >
            Continue on WhatsApp
          </Button>
          <Button
            nativeButton={false}
            render={
              <Link
                href="/"
                className="min-h-11 uppercase tracking-wider"
              />
            }
            variant="outline"
          >
            Return to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
