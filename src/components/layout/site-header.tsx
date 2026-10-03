"use client";

import Link from "next/link";
import { useId, useRef, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/mobile-nav";
import { BOOK_NOW_LINK, NAV_LINKS } from "@/lib/nav-links";
import { cn } from "@/lib/utils";

const desktopNavLinkClassName =
  "inline-flex min-h-11 items-center rounded-[4px] px-2 text-sm text-foreground outline-none transition-colors hover:text-muted-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)]";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const menuTriggerRef = useRef<HTMLButtonElement>(null);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-surface shadow-sm">
      <div className="mx-auto max-w-[1200px] px-4">
        {/* Mobile & tablet (<1024px) */}
        <div className="relative grid h-14 grid-cols-[44px_1fr_44px] items-center md:flex md:justify-between lg:hidden">
          <button
            ref={menuTriggerRef}
            type="button"
            className={cn(
              "col-start-1 row-start-1 inline-flex size-11 min-h-11 min-w-11 items-center justify-center justify-self-start rounded-[4px] text-foreground outline-none transition-colors hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)] md:order-2 md:col-auto md:ml-auto",
              menuOpen && "invisible",
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
            className="col-start-2 row-start-1 justify-self-center font-heading text-base tracking-tight text-foreground outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)] md:order-1 md:col-auto md:justify-self-auto"
          >
            Elegentoo Artistry
          </Link>

          <div className="col-start-3 md:hidden" aria-hidden />
        </div>

        {/* Desktop (1024px+) */}
        <div className="hidden h-14 items-center lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-8">
          <Link
            href="/"
            className="justify-self-start font-heading text-base tracking-tight text-foreground outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)]"
          >
            Elegentoo Artistry
          </Link>

          <nav className="justify-self-center" aria-label="Primary">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={desktopNavLinkClassName}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="justify-self-end">
            <Button
              nativeButton={false}
              render={
                <Link
                  href={BOOK_NOW_LINK.href}
                  className="min-h-11 uppercase tracking-wider"
                />
              }
            >
              {BOOK_NOW_LINK.label}
            </Button>
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
