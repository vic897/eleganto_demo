import type { EnquiryStatus } from "@/types/enquiry-status";

interface StatusBadgeProps {
  status: EnquiryStatus;
}

const STATUS_CONFIG: Record<
  EnquiryStatus,
  { label: string; className: string }
> = {
  pending: {
    label: "Pending",
    className: "bg-[#b87c35]/15 text-[#b87c35] border border-[#b87c35]/30",
  },
  accepted: {
    label: "Accepted",
    className: "bg-[#3f6e4a]/15 text-[#4e9960] border border-[#3f6e4a]/30",
  },
  rejected: {
    label: "Rejected",
    className: "bg-[#88222b]/15 text-[#c44b57] border border-[#88222b]/30",
  },
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = STATUS_CONFIG[status];

  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-[2px] px-2 py-1 text-[10px] font-medium uppercase tracking-[0.18em] ${config.className}`}
    >
      {config.label}
    </span>
  );
}
