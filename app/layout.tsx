import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import React from "react";
import Script from "next/script";
import SocialShareWidget from "@/components/social-share-widgets";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";

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
	title: "BizStock - Smart POS & Inventory Management",
	description:
		"BizStock is a fast, mobile-friendly POS and inventory system. Manage stock, sales, expenses, and invoices with real-time insights and WhatsApp sharing.",
	metadataBase: new URL("https://www.bizstock.net"),
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://www.bizstock.net",
		title: "BizStock - Smart POS & Inventory Management",
		description:
			"All-in-one POS and inventory management solution with real-time reporting, barcode scanning, customer tracking, and WhatsApp invoice sharing.",
		siteName: "BizStock",
		images: [
			{
				url: "/bizstock-post.png",
				width: 700,
				height: 1200,
				alt: "BizStock - POS & Inventory Management",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "BizStock - Smart POS & Inventory Management",
		description:
			"Modern POS and inventory system with barcode scanning, receipts, WhatsApp invoices, and real-time dashboard.",
		images: ["/bizstock-post.png"],
		creator: "@dragondevs_",
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
		"Small Business POS",
		"Stock Management",
		"Printable Receipts",
		"Mobile POS",
		"Product Variants",
		"Expense Tracker",
		"Sales Invoices",
		"WhatsApp Invoice",
		"Encrypted PDF Invoice",
		"CSV Export",
		"PDF Export",
		"Mini Receipt Printer",
		"Responsive POS System",
		"BizStock",
		"DragonDevs",
	],
};

export default function RootLayout({
	                                   children,
                                   }: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
		<head>
			{/* ✅ Google Tag Manager (using Next.js Script for proper hydration) */}
			<Script
				id="google-tag-manager"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MFMJGB58');
            `,
				}}
			/>
			<link rel="icon" type="image/x-icon" href="/favicon.ico" sizes="48x48" />
			<link rel="apple-touch-icon" href="/apple-icon.png" />
			<link rel="canonical" href="https://www.bizstock.net" />
			<meta name="theme-color" content="#0f172a" />
		</head>
		<body
			className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
		>
		{/* ✅ Google Tag Manager (noscript) */}
		<noscript>
			<iframe
				src="https://www.googletagmanager.com/ns.html?id=GTM-MFMJGB58"
				height="0"
				width="0"
				style={{ display: "none", visibility: "hidden" }}
			></iframe>
		</noscript>

		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
		>
			<SiteHeader />
			{children}
			<SocialShareWidget
				url="https://www.bizstock.net"
				title="BizStock - POS & Inventory Management System"
			/>
		</ThemeProvider>
		</body>
		</html>
	);
}
