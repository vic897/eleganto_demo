import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

type AppShellProps = {
  children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[var(--focus-ring)]"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main
        id="main-content"
        className="mx-auto w-full max-w-[1200px] flex-1 px-4 py-8"
      >
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
