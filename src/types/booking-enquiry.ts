import type { EnquiryStatus } from "@/types/enquiry-status";

export interface BookingEnquiryContact {
  fullName: string;
  email: string;
  phone: string;
}

export interface BookingEnquiryDateLocation {
  /** ISO 8601 date (YYYY-MM-DD). */
  preferredDate: string;
  location: string;
}

/** Booking enquiry submitted through the client flow (mock/local in V1). */
export interface BookingEnquiry {
  id: string;
  serviceId: string;
  status: EnquiryStatus;
  contact: BookingEnquiryContact;
  dateLocation: BookingEnquiryDateLocation;
  /** ISO 8601 timestamp. */
  createdAt: string;
  clientNotes?: string;
}
