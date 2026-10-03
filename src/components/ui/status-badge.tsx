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
    className: "bg-[color-mix(in_srgb,theme(colors.warning)_10%,transparent)] text-warning",
  },
  accepted: {
    label: "Accepted",
    className: "bg-[color-mix(in_srgb,theme(colors.success)_10%,transparent)] text-success",
  },
  rejected: {
    label: "Rejected",
    className: "bg-[color-mix(in_srgb,theme(colors.destructive)_10%,transparent)] text-destructive",
  },
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = STATUS_CONFIG[status];

  return (
    <span
      className={`inline-flex items-center rounded-[4px] px-2 py-1 text-xs font-medium ${config.className}`}
    >
      {config.label}
    </span>
  );
}
