import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/general/Navbar";
import { Footer } from "@/components/general/Footer";
import { Suspense } from "react";
import { CartProvider } from "@/lib/cart-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next JTL Shop",
  description: "E-commerce frontend connected to JTL Wawi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <CartProvider>
            <Navbar />
            <div className="max-w-[1440px] p-4  min-h-screen items-center mx-auto">
              {/*
            The main content area where children components will be rendered.
            This is where your pages will be displayed.
          */}
              {children}
            </div>
            <Footer />
          </CartProvider>
        </Suspense>
      </body>
    </html>
  );
}
