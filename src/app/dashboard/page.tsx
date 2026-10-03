import { EnquiryCard } from "@/components/dashboard/enquiry-card";
import { mockEnquiries } from "@/data/mock";
import { Inbox } from "lucide-react";

export default function DashboardPage() {
  const pendingCount = mockEnquiries.filter(
    (e) => e.status === "pending"
  ).length;
  const acceptedCount = mockEnquiries.filter(
    (e) => e.status === "accepted"
  ).length;
  const rejectedCount = mockEnquiries.filter(
    (e) => e.status === "rejected"
  ).length;

  return (
    <div className="mx-auto w-full max-w-[1200px] px-4 py-8 lg:py-12">
      <div className="mb-8 lg:mb-12">
        <h1 className="font-heading text-[28px] leading-[1.2] tracking-tight text-foreground lg:text-[40px]">
          Dashboard
        </h1>
        <p className="mt-2 text-base text-muted-foreground lg:text-lg">
          View and manage booking enquiries
        </p>
      </div>

      {/* Status summary */}
      <div className="mb-8 grid grid-cols-3 gap-4 lg:mb-12 lg:gap-6">
        <div className="rounded-[4px] border border-border bg-surface p-4 lg:p-6">
          <p className="text-sm text-muted-foreground lg:text-base">Pending</p>
          <p className="mt-1 font-heading text-2xl text-foreground lg:text-3xl">
            {pendingCount}
          </p>
        </div>
        <div className="rounded-[4px] border border-border bg-surface p-4 lg:p-6">
          <p className="text-sm text-muted-foreground lg:text-base">Accepted</p>
          <p className="mt-1 font-heading text-2xl text-foreground lg:text-3xl">
            {acceptedCount}
          </p>
        </div>
        <div className="rounded-[4px] border border-border bg-surface p-4 lg:p-6">
          <p className="text-sm text-muted-foreground lg:text-base">Rejected</p>
          <p className="mt-1 font-heading text-2xl text-foreground lg:text-3xl">
            {rejectedCount}
          </p>
        </div>
      </div>

      {/* Enquiry list */}
      <div>
        <h2 className="font-heading text-xl text-foreground lg:text-2xl">
          Enquiries
        </h2>

        {mockEnquiries.length === 0 ? (
          <div className="mt-6 flex flex-col items-center justify-center rounded-[4px] border border-border bg-surface p-12 text-center">
            <Inbox
              className="size-12 text-muted-foreground lg:size-16"
              strokeWidth={1.5}
              aria-hidden
            />
            <p className="mt-4 text-base text-muted-foreground lg:text-lg">
              No enquiries yet
            </p>
          </div>
        ) : (
          <div className="mt-4 space-y-4 lg:mt-6">
            {mockEnquiries.map((enquiry) => (
              <EnquiryCard key={enquiry.id} enquiry={enquiry} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
