import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { fadeInUp, staggerContainer } from "@/app/components/animate";

export const HeroSection = () => {
  return (
    <section className="pt-32 pb-8 sm:pb-16 px-4">
      <div className="container mx-auto text-center">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-5xl md:text-6xl pb-2 leading-none font-bold tracking-tighter bg-gradient-to-r from-blue-600 via-blue-800 to-green-600 bg-clip-text text-transparent"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            All-in-One POS & Inventory System for Businesses
          </motion.h1>
          <motion.p
            className="sm:text-base text-sm mt-6 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            All-in-One POS & Inventory System for Businesses, Run your entire business from one place — manage stock with multiple variants, scan or generate barcodes, handle expenses, track customer ledgers, send invoices via WhatsApp & SMS, print mini receipts, and get real-time reports — all from a mobile-first, blazing-fast dashboard.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:py-12 py-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <Link className="w-full sm:w-fit" href="https://app.bizstock.net/auth/register">
              <motion.button
                className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={fadeInUp}
              >
                Start Free Trial
              </motion.button>
            </Link>
            <Link className="w-full sm:w-fit" href="https://dragon-devs.vercel.app">
              <motion.button
                className="w-full sm:w-auto px-6 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={fadeInUp}
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="absolute rounded-2xl inset-0 sm:bg-gradient-to-b from-white/20 via-transparent to-white/20 z-10" />
          <motion.div
            className="sm:rounded-2xl rounded-xl overflow-hidden shadow-2xl border border-b-gray-100"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/bizstock-dashboard.png"
              alt="BizStock POS & Inventory Dashboard"
              className="w-full sm:block hidden object-cover"
              width={2000}
              height={1200}
              priority
            />
            <Image
              src="/bizstock-mobile-dashboard.png"
              alt="BizStock Mobile Dashboard"
              className="w-full sm:hidden block object-cover"
              width={1000}
              height={1600}
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
