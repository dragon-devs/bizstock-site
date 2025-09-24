import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { PlayCircle, ArrowRight, MessageSquare } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const HeroSection = () => {
  return (
    <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-20 px-4">
      <div className="container mx-auto text-center max-w-6xl">
        {/* Hero Text */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold tracking-tight leading-tight bg-gradient-to-r from-blue-600 via-blue-800 to-green-600 bg-clip-text text-transparent"
          >
            All-in-One POS & Inventory System for Businesses
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Manage stock with variants, scan or generate barcodes, track expenses
            and customer ledgers, send invoices via WhatsApp & SMS, print mini
            receipts, and get real-time reports all from a blazing-fast,
            mobile first dashboard.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          >
            <Link href="https://app.bizstock.net/auth/register" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto">
                <ArrowRight className="w-4 h-4 mr-2" />
                Start Free Trial
              </Button>
            </Link>

            <Link href="https://dragon-devs.vercel.app" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                <MessageSquare className="w-4 h-4 mr-2" />
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Video & Background Image */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="relative mt-12 sm:mt-16 max-w-5xl mx-auto"
        >
          <div className="aspect-video w-full rounded-xl overflow-hidden shadow-xl relative">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/0y_8KbbN0j0"
              title="BizStock POS & Inventory Introduction"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            {/* Floating Play Button */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <PlayCircle className="w-20 h-20 text-white opacity-70" />
            </div>
          </div>

          {/* Background Dashboard Image */}
          <motion.div
            className="sm:rounded-2xl rounded-xl overflow-hidden mt-8 shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/bizstock-background.png"
              alt="BizStock POS & Inventory Dashboard"
              className="w-full object-cover"
              width={2000}
              height={1200}
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
