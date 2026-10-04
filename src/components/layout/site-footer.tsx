import Link from "next/link";
import { NAV_LINKS, BOOK_NOW_LINK } from "@/lib/nav-links";
import { MessageCircle, MapPin, Clock } from "lucide-react";

function InstagramIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-white/[0.08] bg-[#090808] text-[#fbf8f5]">
      <div className="mx-auto w-full max-w-[1360px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand Column - 5 cols */}
          <div className="space-y-4 lg:col-span-5">
            <Link href="/" className="inline-block">
              <span className="font-heading text-2xl tracking-[0.25em] font-normal text-[#fbf8f5]">
                ELEGANTO
              </span>
              <span className="block text-[9px] tracking-[0.35em] uppercase text-[#c88f8f] font-sans font-medium">
                Haute Beauty Atelier
              </span>
            </Link>

            <p className="max-w-sm text-xs sm:text-sm leading-relaxed text-[#b5a8a3] font-light">
              Where master beauty craftsmanship meets bespoke luxury. Dedicated
              to unveiling your authentic elegance through thoughtful technique
              and private consultation.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-[2px] border border-white/10 bg-white/5 text-[#d7be9f] transition-colors hover:border-[#c88f8f] hover:bg-white/10 hover:text-[#fbf8f5]"
                aria-label="Follow Eleganto on Instagram"
              >
                <InstagramIcon className="size-4" />
              </a>
              <Link
                href="/#book"
                className="flex size-10 items-center justify-center rounded-[2px] border border-white/10 bg-white/5 text-[#d7be9f] transition-colors hover:border-[#c88f8f] hover:bg-white/10 hover:text-[#fbf8f5]"
                aria-label="Direct WhatsApp Concierge"
              >
                <MessageCircle className="size-4" />
              </Link>
            </div>
          </div>

          {/* Navigation Links - 3 cols */}
          <div className="space-y-3 lg:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.22em] font-medium text-[#d7be9f]">
              Atelier Directory
            </p>
            <ul className="space-y-2 text-xs uppercase tracking-[0.16em] text-[#a89a95]">
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-[#fbf8f5]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={BOOK_NOW_LINK.href}
                  className="text-[#c88f8f] font-medium transition-colors hover:text-[#fbf8f5]"
                >
                  {BOOK_NOW_LINK.label}
                </Link>
              </li>
            </ul>
          </div>

          {/* Atelier Hours & Location - 4 cols */}
          <div className="space-y-4 lg:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.22em] font-medium text-[#d7be9f]">
              Atelier Information
            </p>

            <div className="space-y-3 text-xs text-[#a89a95]">
              <div className="flex items-start gap-2.5">
                <MapPin className="size-4 shrink-0 text-[#c88f8f] mt-0.5" />
                <span>
                  Private Suite, Downtown Fashion District
                  <br />
                  Metropolitan Availability & On-Location Travel
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="size-4 shrink-0 text-[#c88f8f] mt-0.5" />
                <span>
                  Tuesday – Saturday: 10:00 – 19:00
                  <br />
                  Sunday – Monday: Exclusive VIP Bookings Only
                </span>
              </div>
            </div>

            <div className="pt-2">
              <span className="inline-block text-[10px] uppercase tracking-widest text-[#d7be9f] border border-[#d7be9f]/30 px-3 py-1 bg-[#120a0d]">
                By Private Appointment Only
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.08] pt-8 text-center sm:flex-row sm:text-left text-[11px] text-[#a89a95]/70">
          <p>© {year} Eleganto Artistry Atelier. All rights reserved.</p>
          <p className="italic">
            Curated presentation · Replace with verified client credentials before deployment
          </p>
        </div>
      </div>
    </footer>
  );
}
