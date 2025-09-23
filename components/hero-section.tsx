import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { fadeInUp, staggerContainer } from "@/components/animate";
import {Button} from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="pt-32 pb-8 sm:pb-16 px-4">
      <div className="container mx-auto text-center ">
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
            className="sm:text-base text-sm mt-6 text-foreground"
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
             <Button variant={"default"} size={"lg"}>Start Free Trial</Button>
            </Link>
            <Link className="w-full sm:w-fit" href="https://dragon-devs.vercel.app">
             <Button variant={"outline"} size={"lg"}>Contact Us</Button>
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <section className=" max-w-4xl pb-4 mx-auto">
            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/0y_8KbbN0j0"
                title="BizStock POS & Inventory Introduction"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </section>
          <motion.div
            className="sm:rounded-2xl rounded-xl overflow-hidden"
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
