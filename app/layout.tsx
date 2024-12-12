import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import React from "react";
import SocialShareWidget from "@/app/components/social-share-widgets";
import {SiteHeader} from "@/app/components/site-header";

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
  description: "An inventory management system for businesses of all sizes.",
  metadataBase: new URL('https://www.bizstock.net'), // Replace with your actual domain
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.bizstock.net',
    title: 'BizStock - Inventory Management System',
    description: 'An inventory management system for businesses of all sizes.',
    siteName: 'BizStock',
    images: [
      {
        url: '/bizstock-reports.png', // Add your OG image
        width: 1200,
        height: 630,
        alt: 'BizStock - Inventory Management System',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BizStock - Inventory Management System',
    description: 'An inventory management system for businesses of all sizes.',
    images: ['/bizstock-reports.png'],
    creator: '@dragondevs_', // Replace with your Twitter handle
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
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // verification: {
  //   google: 'your-google-site-verification', // Add your Google verification code
  //   yandex: 'your-yandex-verification', // Optional
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
      <link
        rel="icon"
        type="image/x-icon"
        href="/favicon.ico"
        sizes="48x48"
      />
      <link rel="apple-touch-icon" href="/apple-icon.png"/>
      <link rel="canonical" href="https://www.bizstock.net"/>
    </head>
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
    >
    <SiteHeader/>
    {children}
    <SocialShareWidget
      url="https://www.bizstock.net"
      title="BizStock - Inventory Management System"
    />
    </body>
    </html>
  );
}