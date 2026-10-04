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
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-[2px] focus:bg-[#6e1a2d] focus:px-4 focus:py-2 focus:text-[#fbf8f5] focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[#d7be9f]"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content" className="w-full flex-1">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
