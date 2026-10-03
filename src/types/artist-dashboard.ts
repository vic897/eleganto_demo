import type { BookingEnquiry } from "@/types/booking-enquiry";

export interface ArtistDashboardSummary {
  pendingCount: number;
  acceptedCount: number;
  rejectedCount: number;
}

/** Read-only dashboard view model backed by local mock data in V1. */
export interface ArtistDashboardData {
  summary: ArtistDashboardSummary;
  enquiries: BookingEnquiry[];
}
