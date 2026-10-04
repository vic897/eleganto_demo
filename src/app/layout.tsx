import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Playfair_Display } from "next/font/google";
import { AppShell } from "@/components/layout/app-shell";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eleganto Artistry | Haute Beauty & Salon Atelier",
  description:
    "Bespoke makeup artistry, hair sculpting, manicure, and luxury cosmetology services tailored to your unique elegance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full dark`}>
      <body className="flex min-h-full flex-col bg-background text-foreground selection:bg-[#6e1a2d] selection:text-[#fbf8f5]">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
