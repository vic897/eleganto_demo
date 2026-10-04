"use client";

import { useState } from "react";
import { EnquiryCard } from "@/components/dashboard/enquiry-card";
import { EnquiryDetail } from "@/components/dashboard/enquiry-detail";
import { mockEnquiries } from "@/data/mock";
import type { BookingEnquiry } from "@/types/booking-enquiry";
import { Inbox } from "lucide-react";

export default function DashboardPage() {
  const [enquiries, setEnquiries] = useState<BookingEnquiry[]>(mockEnquiries);
  const [selectedEnquiryId, setSelectedEnquiryId] = useState<string | null>(
    null
  );

  const selectedEnquiry = enquiries.find((e) => e.id === selectedEnquiryId);

  const handleUpdateStatus = (id: string, newStatus: "accepted" | "rejected") => {
    setEnquiries((prev) =>
      prev.map((enquiry) =>
        enquiry.id === id ? { ...enquiry, status: newStatus } : enquiry
      )
    );
  };

  const pendingCount = enquiries.filter((e) => e.status === "pending").length;
  const acceptedCount = enquiries.filter((e) => e.status === "accepted").length;
  const rejectedCount = enquiries.filter((e) => e.status === "rejected").length;

  return (
    <div className="mx-auto w-full max-w-[1200px] px-4 py-8 lg:py-12">
      {/* Dashboard Header */}
      <div className="mb-8 lg:mb-12 space-y-2 border-b border-white/[0.08] pb-6">
        <div className="inline-flex items-center gap-2">
          <span className="h-px w-5 bg-[#c88f8f]" />
          <span className="text-[11px] uppercase tracking-[0.25em] font-medium text-[#c88f8f]">
            Eleganto Atelier
          </span>
        </div>
        <h1 className="font-heading text-[28px] leading-[1.2] tracking-tight text-[#fbf8f5] lg:text-[40px]">
          Reservation Dashboard
        </h1>
        <p className="text-sm text-[#a89a95]">
          View and manage booking enquiries from atelier clients.
        </p>
      </div>

      {/* Status Summary */}
      <div className="mb-8 grid grid-cols-3 gap-4 lg:mb-12 lg:gap-6">
        <div className="rounded-[2px] border border-white/[0.08] bg-[#171315] p-4 lg:p-6">
          <p className="text-xs uppercase tracking-[0.18em] text-[#a89a95]">Pending</p>
          <p className="mt-2 font-heading text-2xl text-[#b87c35] lg:text-3xl">
            {pendingCount}
          </p>
        </div>
        <div className="rounded-[2px] border border-white/[0.08] bg-[#171315] p-4 lg:p-6">
          <p className="text-xs uppercase tracking-[0.18em] text-[#a89a95]">Accepted</p>
          <p className="mt-2 font-heading text-2xl text-[#3f6e4a] lg:text-3xl">
            {acceptedCount}
          </p>
        </div>
        <div className="rounded-[2px] border border-white/[0.08] bg-[#171315] p-4 lg:p-6">
          <p className="text-xs uppercase tracking-[0.18em] text-[#a89a95]">Rejected</p>
          <p className="mt-2 font-heading text-2xl text-[#88222b] lg:text-3xl">
            {rejectedCount}
          </p>
        </div>
      </div>

      {/* Enquiry list or detail view */}
      {selectedEnquiry ? (
        <EnquiryDetail
          enquiry={selectedEnquiry}
          onBack={() => setSelectedEnquiryId(null)}
          onUpdateStatus={handleUpdateStatus}
        />
      ) : (
        <div>
          <h2 className="font-heading text-xl text-[#fbf8f5] lg:text-2xl mb-1">
            Enquiry Register
          </h2>
          <p className="text-xs text-[#a89a95] mb-6 uppercase tracking-[0.15em]">
            {enquiries.length} total reservation{enquiries.length !== 1 ? "s" : ""}
          </p>

          {enquiries.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-[2px] border border-white/[0.08] bg-[#171315] p-12 text-center">
              <Inbox
                className="size-12 text-[#a89a95] lg:size-16"
                strokeWidth={1.5}
                aria-hidden
              />
              <p className="mt-4 text-sm text-[#a89a95]">
                No reservation enquiries yet.
              </p>
            </div>
          ) : (
            <div className="space-y-3 lg:space-y-4">
              {enquiries.map((enquiry) => (
                <EnquiryCard
                  key={enquiry.id}
                  enquiry={enquiry}
                  onClick={() => setSelectedEnquiryId(enquiry.id)}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
