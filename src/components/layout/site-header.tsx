"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { Menu } from "lucide-react";
import { MobileNav } from "@/components/layout/mobile-nav";
import { BOOK_NOW_LINK, NAV_LINKS } from "@/lib/nav-links";
import { cn } from "@/lib/utils";

const desktopNavLinkClassName =
  "inline-flex min-h-11 items-center px-3 text-[12px] uppercase tracking-[0.22em] font-medium text-[#e4dbd4] outline-none transition-colors hover:text-[#c88f8f] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[#d7be9f]";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuId = useId();
  const menuTriggerRef = useRef<HTMLButtonElement>(null);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        isScrolled
          ? "border-b border-white/10 bg-[#0e0c0d]/90 backdrop-blur-md shadow-2xl py-2"
          : "border-b border-white/[0.06] bg-[#0e0c0d]/80 backdrop-blur-sm py-3.5"
      )}
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        {/* Mobile & tablet (<1024px) */}
        <div className="relative flex h-12 items-center justify-between lg:hidden">
          <button
            ref={menuTriggerRef}
            type="button"
            className={cn(
              "inline-flex size-11 min-h-11 min-w-11 items-center justify-center rounded-[2px] text-[#fbf8f5] outline-none transition-colors hover:bg-white/5 hover:text-[#c88f8f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d7be9f]",
              menuOpen && "invisible"
            )}
            aria-label={menuOpen ? "Menu open" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls={menuId}
            onClick={openMenu}
          >
            <Menu className="size-6" strokeWidth={1.5} aria-hidden />
          </button>

          <Link
            href="/"
            className="flex flex-col items-center outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d7be9f]"
          >
            <span className="font-heading text-lg tracking-[0.25em] font-normal text-[#fbf8f5]">
              ELEGANTO
            </span>
            <span className="text-[8px] tracking-[0.3em] uppercase text-[#c88f8f] font-sans">
              Artistry Atelier
            </span>
          </Link>

          <Link
            href={BOOK_NOW_LINK.href}
            className="inline-flex min-h-11 items-center rounded-[2px] border border-[#d7be9f]/30 bg-[#6e1a2d] px-3 text-[10px] uppercase tracking-[0.15em] font-medium text-[#fbf8f5] transition-all hover:bg-[#89273c]"
          >
            Book
          </Link>
        </div>

        {/* Desktop (1024px+) */}
        <div className="hidden h-14 items-center justify-between lg:flex">
          <Link
            href="/"
            className="group flex flex-col outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d7be9f]"
          >
            <span className="font-heading text-2xl tracking-[0.24em] font-normal text-[#fbf8f5] transition-colors group-hover:text-[#c88f8f]">
              ELEGANTO
            </span>
            <span className="text-[9px] tracking-[0.35em] uppercase text-[#c88f8f] font-sans font-medium">
              Haute Beauty Atelier
            </span>
          </Link>

          <nav aria-label="Primary">
            <ul className="flex items-center gap-x-1 xl:gap-x-2">
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={desktopNavLinkClassName}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href={BOOK_NOW_LINK.href}
              className="inline-flex min-h-11 items-center justify-center rounded-[2px] border border-[#d7be9f]/30 bg-[#6e1a2d] px-6 text-[11px] uppercase tracking-[0.22em] font-medium text-[#fbf8f5] shadow-sm transition-all duration-300 hover:border-[#d7be9f]/60 hover:bg-[#89273c] hover:shadow-[0_0_20px_rgba(200,143,143,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d7be9f]"
            >
              {BOOK_NOW_LINK.label}
            </Link>
          </div>
        </div>
      </div>

      {menuOpen ? (
        <MobileNav
          menuId={menuId}
          onClose={closeMenu}
          triggerRef={menuTriggerRef}
        />
      ) : null}
    </header>
  );
}
