"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef } from "react";
import { X, Sparkles } from "lucide-react";
import { BOOK_NOW_LINK, NAV_LINKS } from "@/lib/nav-links";

type MobileNavProps = {
  menuId: string;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
};

export function MobileNav({ menuId, onClose, triggerRef }: MobileNavProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const handleClose = useCallback(() => {
    onClose();
    requestAnimationFrame(() => {
      triggerRef.current?.focus();
    });
  }, [onClose, triggerRef]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    const getFocusableElements = (): HTMLElement[] => {
      const panel = panelRef.current;
      if (!panel) return [];

      const focusableSelectors = [
        'button:not([disabled])',
        'a[href]',
        'input:not([disabled])',
        'select:not([disabled])',
        'textarea:not([disabled])',
        '[tabindex]:not([tabindex="-1"])',
      ];

      return Array.from(
        panel.querySelectorAll<HTMLElement>(focusableSelectors.join(','))
      ).filter(
        (el) =>
          getComputedStyle(el).display !== 'none' &&
          getComputedStyle(el).visibility !== 'hidden' &&
          !el.hasAttribute('disabled') &&
          el.getAttribute('aria-hidden') !== 'true'
      );
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        handleClose();
        return;
      }

      if (event.key === "Tab") {
        const focusableElements = getFocusableElements();
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [handleClose]);

  return (
    <div
      id={menuId}
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
      className="fixed inset-0 z-50 flex flex-col bg-[#0e0c0d] text-[#fbf8f5] lg:hidden"
    >
      <div className="flex h-16 shrink-0 items-center justify-between border-b border-white/10 px-6">
        <div className="flex flex-col">
          <span className="font-heading text-lg tracking-[0.25em] text-[#fbf8f5]">
            ELEGANTO
          </span>
          <span className="text-[8px] tracking-[0.3em] uppercase text-[#c88f8f]">
            Haute Beauty Atelier
          </span>
        </div>
        <button
          ref={closeButtonRef}
          type="button"
          onClick={handleClose}
          className="inline-flex size-11 min-h-11 min-w-11 items-center justify-center rounded-[2px] text-[#fbf8f5] outline-none transition-colors hover:bg-white/10 hover:text-[#c88f8f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d7be9f]"
          aria-label="Close menu"
        >
          <X className="size-6" strokeWidth={1.5} aria-hidden />
        </button>
      </div>

      <nav className="flex flex-1 flex-col justify-between overflow-y-auto px-6 py-8" aria-label="Primary">
        <ul className="flex flex-col space-y-4">
          {NAV_LINKS.map((item, idx) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group flex min-h-11 items-center justify-between border-b border-white/[0.06] pb-3 text-lg font-heading tracking-[0.05em] text-[#fbf8f5] outline-none transition-colors hover:text-[#c88f8f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#d7be9f]"
                onClick={handleClose}
              >
                <span>{item.label}</span>
                <span className="text-xs font-sans text-white/30 tracking-widest group-hover:text-[#c88f8f]">
                  0{idx + 1}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-8 space-y-6 pt-6 border-t border-white/10">
          <Link
            href={BOOK_NOW_LINK.href}
            className="flex min-h-12 w-full items-center justify-center rounded-[2px] border border-[#d7be9f]/40 bg-[#6e1a2d] px-6 text-xs uppercase tracking-[0.25em] font-medium text-[#fbf8f5] shadow-lg transition-all hover:bg-[#89273c]"
            onClick={handleClose}
          >
            {BOOK_NOW_LINK.label}
          </Link>

          <div className="flex items-center justify-between text-xs text-[#a89a95]">
            <span>Metropolitan Atelier & Travel</span>
            <span className="flex items-center gap-1 text-[#c88f8f]">
              <Sparkles className="size-3" />
              By Appointment Only
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}
