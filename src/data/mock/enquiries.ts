import type { BookingEnquiry } from "@/types/booking-enquiry";

/**
 * Mock enquiry records for the artist dashboard demo.
 * These are demo/seeded records with obviously safe placeholder values.
 * Replace with real backend data in production.
 */
export const mockEnquiries: BookingEnquiry[] = [
  {
    id: "1",
    serviceId: "Service Category 1",
    status: "pending",
    contact: {
      fullName: "Alex Johnson",
      email: "alex.j@example.com",
      phone: "+1 555-0101",
    },
    dateLocation: {
      preferredDate: "2025-03-15",
      location: "Downtown City Center",
    },
    createdAt: "2025-02-20T10:30:00Z",
  },
  {
    id: "2",
    serviceId: "Service Category 2",
    status: "pending",
    contact: {
      fullName: "Jordan Smith",
      email: "jordan.s@example.com",
      phone: "+1 555-0102",
    },
    dateLocation: {
      preferredDate: "2025-04-10",
      location: "Westside District",
    },
    createdAt: "2025-02-19T14:45:00Z",
  },
  {
    id: "3",
    serviceId: "Service Category 3",
    status: "accepted",
    contact: {
      fullName: "Taylor Davis",
      email: "taylor.d@example.com",
      phone: "+1 555-0103",
    },
    dateLocation: {
      preferredDate: "2025-03-22",
      location: "North Hills",
    },
    createdAt: "2025-02-18T09:15:00Z",
  },
  {
    id: "4",
    serviceId: "Service Category 1",
    status: "rejected",
    contact: {
      fullName: "Morgan Lee",
      email: "morgan.l@example.com",
      phone: "+1 555-0104",
    },
    dateLocation: {
      preferredDate: "2025-05-05",
      location: "Eastside Plaza",
    },
    createdAt: "2025-02-17T16:20:00Z",
  },
  {
    id: "5",
    serviceId: "Service Category 2",
    status: "pending",
    contact: {
      fullName: "Casey Brown",
      email: "casey.b@example.com",
      phone: "+1 555-0105",
    },
    dateLocation: {
      preferredDate: "2025-03-28",
      location: "Central Business District",
    },
    createdAt: "2025-02-16T11:00:00Z",
  },
];
