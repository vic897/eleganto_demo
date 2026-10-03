import { Palette } from "lucide-react";

export default function Home() {
  return (
    <div className="motion-page-enter mx-auto flex max-w-[600px] flex-col">
      <div className="flex items-start gap-3 rounded-md border border-border bg-surface p-6">
        <Palette
          className="mt-0.5 size-6 shrink-0 text-muted-foreground"
          strokeWidth={1.5}
          aria-hidden
        />
        <div className="space-y-2">
          <h1 className="font-heading text-[32px] leading-[1.2] tracking-tight text-foreground">
            Application foundation
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground">
            V1 architecture is initialized. The public website, booking enquiry
            flow, and artist dashboard will be implemented in later tasks.
            Verified business content is not yet supplied.
          </p>
        </div>
      </div>
    </div>
  );
}
