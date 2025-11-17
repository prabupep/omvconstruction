import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OM Vinayaga Constructions - Professional Construction Solutions",
  description: "OM Vinayaga Constructions delivers residential, commercial, and industrial projects with premium craftsmanship, transparent processes, and on-time delivery.",
  keywords: "construction, building, renovation, construction services, construction company",
  authors: [{ name: "OM Vinayaga Constructions" }],
  robots: "index, follow",
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
