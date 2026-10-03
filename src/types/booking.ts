export type BookingStep = "service" | "date-location" | "contact" | "review" | "submit" | "confirmation";

export interface BookingFormData {
  service: string;
  preferredDate: string;
  location: string;
  name: string;
  phone: string;
  email: string;
}

export interface BookingEnquiry extends BookingFormData {
  id: string;
  submittedAt: Date;
}
