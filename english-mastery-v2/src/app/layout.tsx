import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import VersionIndicator from "@/components/VersionIndicator";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "منصة مسار التعليمية",
  description: "A premium adaptive learning experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${outfit.variable} font-sans bg-background text-foreground transition-colors duration-500 min-h-screen antialiased overflow-x-hidden`}>
        {children}
        <VersionIndicator />
      </body>
    </html>
  );
}
