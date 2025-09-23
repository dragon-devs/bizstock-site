'use client';

import {Barcode, BarChart2, Layers, Link2, TrendingUp, Users, ReceiptText, Zap} from 'lucide-react';
import {motion} from 'framer-motion';
import {PolicySection} from '@/components/terms';
import React from 'react';

export const SEOContentSection = () => {
  const containerVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  
  const seoContentItems = [
    {
      icon: Layers,
      iconColor: "text-blue-600 bg-blue-100",
      title: "Full POS Integration",
      description: "Blazing fast POS with real-time inventory sync, barcode scanner (manual & camera), sales receipts (POS-size & full page), WhatsApp & SMS invoice sharing, offline feel, and mobile responsiveness."
    },
    {
      icon: Barcode,
      iconColor: "text-purple-600 bg-purple-100",
      title: "Smart Inventory & Barcode System",
      description: "Manage multiple product variants, auto-generate barcodes, scan items, and track stock levels in real time with alert systems and batch-wise organization."
    },
    {
      icon: Users,
      iconColor: "text-green-600 bg-green-100",
      title: "Customers, Regions & Ledgers",
      description: "Handle customers with region grouping, auto-updated ledgers, full invoice history (paid, partial, pending), and printable/shareable ledger statements."
    },
    {
      icon: ReceiptText,
      iconColor: "text-yellow-600 bg-yellow-100",
      title: "Invoices & Real-Time Dashboard",
      description: "Generate detailed sales invoices, track statuses, print/share instantly, and view live analytics including stock movement, sales trends, and more."
    },
    {
      icon: Link2,
      iconColor: "text-teal-600 bg-teal-100",
      title: "Multi-Module Ecosystem",
      description: "Everything your business needs products, vendors, customers, expenses, invoices, reporting all deeply connected in one streamlined system."
    },
    {
      icon: BarChart2,
      iconColor: "text-red-600 bg-red-100",
      title: "Advanced Business Reports",
      description: "Get comprehensive financial reports, export as PDF, CSV, or TXT, and gain real insights for smart decision making with printable formats ready."
    },
    {
      icon: TrendingUp,
      iconColor: "text-pink-600 bg-pink-100",
      title: "Expense & Profit Tracking",
      description: "Track business expenses with receipts, monitor profits, and optimize spending. Print your reports for accounting or review anytime."
    },
    {
      icon: Zap,
      iconColor: "text-indigo-600 bg-indigo-100",
      title: "Lightning Fast Experience",
      description: "Powered by Next.js and Zustand for seamless state management. Feels like an offline app fast, fluid, and reliable for daily use."
    }
  ];
  
  return (
    <motion.section
      className="py-16 w-[100vw] relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] bg-background/50"
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, margin: "-100px"}}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center tracking-tighter"
          variants={itemVariants}
        >
          Why BizStock is Built for Real Business Needs
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 sm:gap-6 gap-4"
          variants={containerVariants}
        >
          {seoContentItems.map((item, index) => (
            <PolicySection
              key={index}
              className="border"
              iconClass={item.iconColor}
              title={item.title}
              icon={item.icon}
            >
              <p>{item.description}</p>
            </PolicySection>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
