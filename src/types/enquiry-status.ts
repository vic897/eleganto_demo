/** Local demo status for booking enquiries (not persisted). */
export type EnquiryStatus = "pending" | "accepted" | "rejected";

export const ENQUIRY_STATUSES: readonly EnquiryStatus[] = [
  "pending",
  "accepted",
  "rejected",
] as const;
