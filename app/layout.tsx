import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import React from "react";
import { SiteHeader } from "@/app/page";

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
  title: "BizStock - Inventory Management System",
  description: "An Inventory management system for all size of businesses.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/x-icon"
          href="/favicon.ico"
          sizes="48x48"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
