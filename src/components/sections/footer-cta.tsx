import Link from "next/link";
import { Sparkles } from "lucide-react";

export function FooterCTA() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#24060d] via-[#3d0b17] to-[#1a0409] py-20 lg:py-28 border-t border-[#d7be9f]/20">
      {/* Subtle atmospheric glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#89273c]/20 blur-[150px]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-[1360px] px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-[2px] border border-[#d7be9f]/30 bg-[#0e0c0d]/40 px-3.5 py-1.5 backdrop-blur-md">
            <Sparkles className="size-3 text-[#d7be9f]" />
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-medium text-[#fbf8f5]">
              Private Reservations
            </span>
          </div>

          <h2 className="font-heading text-4xl sm:text-6xl lg:text-[72px] font-normal leading-[1] tracking-tight text-[#fbf8f5]">
            READY FOR YOUR
            <br />
            <span className="italic font-light text-[#d7be9f]">
              NEXT LOOK?
            </span>
          </h2>

          <p className="mx-auto max-w-xl text-base sm:text-lg leading-relaxed text-[#e4dbd4]/90 font-light">
            Reserve your appointment with our beauty specialists. We look forward
            to curating your signature aesthetic.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#book"
              className="inline-flex min-h-12 w-full sm:w-auto items-center justify-center rounded-[2px] border border-[#d7be9f]/40 bg-[#6e1a2d] px-8 text-xs uppercase tracking-[0.22em] font-medium text-[#fbf8f5] shadow-[0_4px_30px_rgba(110,26,45,0.6)] transition-all duration-300 hover:border-[#d7be9f]/80 hover:bg-[#89273c] hover:shadow-[0_4px_40px_rgba(137,39,60,0.8)]"
            >
              Book Your Appointment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
