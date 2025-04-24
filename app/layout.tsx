import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import React from "react";
import SocialShareWidget from "@/app/components/social-share-widgets";
import { SiteHeader } from "@/app/components/site-header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "BizStock - POS & Inventory Management for Modern Businesses",
  description:
    "BizStock is a powerful POS and inventory management system with real-time dashboard, barcode scanning, multi-variant stock, customer ledger, expenses tracking, fully printable invoices, and exportable reports. Send invoices via WhatsApp/SMS with encrypted PDF access. 100% mobile responsive, blazing fast, built with Next.js.",
  metadataBase: new URL("https://www.bizstock.net"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.bizstock.net",
    title: "BizStock - POS & Inventory Management for Modern Businesses",
    description:
      "All-in-one POS and inventory solution with stock management, sales, customer tracking, barcode scanning, ledgers, WhatsApp sharing, real-time insights and more.",
    siteName: "BizStock",
    images: [
      {
        url: "/bizstock-dashboard-light.png",
        width: 1200,
        height: 630,
        alt: "BizStock - POS & Inventory Management Dashboard",
      },
      {
        url: "/bizstock-mobile-view-dark.png",
        width: 1200,
        height: 630,
        alt: "BizStock - Inventory Management Dashboard",
      },
      {
        url: "/bizstock-dashboard-dark.png",
        width: 1200,
        height: 630,
        alt: "BizStock - POS & Inventory Management Dashboard",
      },
      {
        url: "/bizstock-mobile-view-light.png",
        width: 1200,
        height: 630,
        alt: "BizStock - Inventory Management Dashboard",
      },
      {
        url: "/bizstock-mobile-pos-light.png",
        width: 800,
        height: 1200,
        alt: "BizStock - Mobile POS Interface",
      },
      {
        url: "/bizstock-mobile-pos-dark.png",
        width: 800,
        height: 1200,
        alt: "BizStock - Mobile POS Interface",
      },
      {
        url: "/bizstock-desktop-pos.png",
        width: 1200,
        height: 630,
        alt: "BizStock - Desktop POS Interface",
      },
    ],,
  },
  twitter: {
    card: "summary_large_image",
    title: "BizStock - POS & Inventory Management for Modern Businesses",
    description:
      "POS and inventory management system with sales tracking, barcode scanning, printable receipts, WhatsApp invoice sharing, and mobile-ready dashboard.",
    images: [
      "/bizstock-dashboard-dark.png",
      "/bizstock-desktop-pos.png",
      "/bizstock-mobile-view-light.png",
      "/bizstock-dashboard-light.png",
      "/bizstock-mobile-view-dark.png",
      "/bizstock-mobile-pos-light.png",
    ],
    creator: "@dragondevs_", // Update if needed
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon-512x512.png", sizes: "512x512" },
    ],
    shortcut: "/icon-192x192.png",
    apple: "/icon-512x512.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  keywords: [
    "POS system",
    "Inventory Management",
    "Business Dashboard",
    "Customer Ledger",
    "Barcode Scanner",
    "Real-time Sales Tracker",
    "Small Business Management",
    "Stock Management",
    "Printable Receipts",
    "Mobile POS",
    "Next.js POS App",
    "Product Variants",
    "Vendor Management",
    "Expense Tracker",
    "Sales Invoices",
    "WhatsApp Invoice",
    "SMS Invoice Link",
    "Encrypted PDF Invoice",
    "CSV Export",
    "PDF Export",
    "Mini Receipt Printer",
    "Responsive POS System",
    "BizStock",
    "dragondevs",
    "bizstock",
  ],
  // Optional: Uncomment and add when ready
  // verification: {
  //   google: 'your-google-site-verification-code',
  //   yandex: 'your-yandex-verification-code',
  // },
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" sizes="48x48" />
      <link rel="apple-touch-icon" href="/apple-icon.png" />
      <link rel="canonical" href="https://www.bizstock.net" />
      <meta name="theme-color" content="#0f172a" />
    </head>
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
    >
    <SiteHeader />
    {children}
    <SocialShareWidget
      url="https://www.bizstock.net"
      title="BizStock - POS & Inventory Management System"
    />
    </body>
    </html>
  );
}
