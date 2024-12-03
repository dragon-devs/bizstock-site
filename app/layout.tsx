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
      <title>BizStock - Inventory Management Solution</title>
      <meta
        name="description"
        content="Transform your business with AI-powered inventory control. Real-time analytics, seamless integration, and intelligent stock management for modern businesses."
      />
      <meta
        name="keywords"
        content="Inventory management, AI inventory, stock tracking, business analytics, cloud inventory system, multi-location inventory"
      />
      <link rel="canonical" href="https://bizstock.net"/>

      {/* Open Graph Meta Tags for Social Sharing */}
      <meta property="og:title" content="BizStock - Revolutionary Inventory Management"/>
      <meta
        property="og:description"
        content="Streamline your inventory with AI-powered tools. Track, analyze, and optimize your stock in real-time."
      />
      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://bizstock.net"/>
      <meta property="og:image" content="/og-image.png"/>

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:title" content="BizStock - Inventory Management Reimagined"/>
      <meta
        name="twitter:description"
        content="Inventory solutions for businesses of all sizes. Boost efficiency and reduce costs."
      />
      <meta name="twitter:image" content="/twitter-image.png"/>
      <link
        rel="icon"
        type="image/x-icon"
        href="/favicon.ico"
        sizes="48x48"
      />
      <link rel="apple-touch-icon" href="/apple-icon.png"/>
    </head>
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
    >
    <SiteHeader/>

    {children}
    </body>
    </html>
  );
}
