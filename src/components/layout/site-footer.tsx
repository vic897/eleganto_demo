export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto max-w-[1200px] px-4 py-8 text-center">
        <p className="text-caption text-muted-foreground">
          © {year} Elegentoo Artistry. All rights reserved. (Demo footer - replace with verified business information)
        </p>
      </div>
    </footer>
  );
}
