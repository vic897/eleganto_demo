"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BOOK_NOW_LINK, NAV_LINKS } from "@/lib/nav-links";
import { cn } from "@/lib/utils";

type MobileNavProps = {
  menuId: string;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
};

const navLinkClassName =
  "flex min-h-11 items-center rounded-[4px] px-3 text-base text-foreground outline-none transition-colors hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)]";

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
          // Shift+Tab: if on first element, move to last
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          // Tab: if on last element, move to first
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
      className="fixed inset-0 z-50 flex flex-col bg-background lg:hidden"
    >
      <div className="flex h-14 shrink-0 items-center justify-end border-b border-border px-4">
        <button
          ref={closeButtonRef}
          type="button"
          onClick={handleClose}
          className="inline-flex size-11 min-h-11 min-w-11 items-center justify-center rounded-[4px] text-foreground outline-none transition-colors hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)]"
          aria-label="Close menu"
        >
          <X className="size-6" strokeWidth={1.5} aria-hidden />
        </button>
      </div>

      <nav className="flex flex-1 flex-col overflow-y-auto px-4 py-6" aria-label="Primary">
        <ul className="flex flex-col gap-1">
          {NAV_LINKS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={navLinkClassName}
                onClick={handleClose}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-8 border-t border-border pt-6">
          <Button
            nativeButton={false}
            render={
              <Link
                href={BOOK_NOW_LINK.href}
                className="w-full uppercase tracking-wider"
                onClick={handleClose}
              />
            }
          >
            {BOOK_NOW_LINK.label}
          </Button>
        </div>
      </nav>
    </div>
  );
}
