import { mockEnquiries } from "@/data/mock/enquiries";
import type { ArtistDashboardData } from "@/types/artist-dashboard";

function buildSummary(): ArtistDashboardData["summary"] {
  return mockEnquiries.reduce(
    (acc, enquiry) => {
      if (enquiry.status === "pending") acc.pendingCount += 1;
      if (enquiry.status === "accepted") acc.acceptedCount += 1;
      if (enquiry.status === "rejected") acc.rejectedCount += 1;
      return acc;
    },
    { pendingCount: 0, acceptedCount: 0, rejectedCount: 0 },
  );
}

export const mockArtistDashboard: ArtistDashboardData = {
  summary: buildSummary(),
  enquiries: mockEnquiries,
};
