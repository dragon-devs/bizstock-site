"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {PlayCircle, ArrowRight, MessageSquare, XOctagonIcon, XCircleIcon, XIcon} from "lucide-react";

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
const clientLogos = [
  { id: 1, src: "/clients/shopify.png", alt: "Shopify" },
  { id: 2, src: "/clients/stripe.png", alt: "Stripe" },
  { id: 3, src: "/clients/amazon.png", alt: "Amazon" },
  { id: 4, src: "/clients/google.png", alt: "Google" },
  { id: 5, src: "/clients/slack.png", alt: "Slack" },
];

export const HeroSection = () => {
  const [showVideo, setShowVideo] = useState(false);

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
            className="md:p-2 text-4xl md:text-6xl font-bold tracking-tight leading-tight text-foreground"
          >
            All-in-One POS & Inventory System for Businesses
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Manage stock with variants, scan or generate barcodes, track expenses
            and customer ledgers, send invoices via WhatsApp & SMS, print mini
            receipts, and get real-time reports — all from a blazing-fast,
            mobile-first dashboard.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          >
              <Button size="lg" className="w-full sm:w-auto"
                      onClick={() => setShowVideo(true)}
              >
                <PlayCircle className="w-5 h-5" />
                Watch Introduction Video
              </Button>

            <Link href="https://dragon-devs.vercel.app" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                <MessageSquare className="w-4 h-4 mr-2" />
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </motion.div>



        {/* Video Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="relative mt-12 sm:mt-16 max-w-5xl mx-auto"
        >



          {/* Video Reveal */}
          <AnimatePresence>
            {showVideo && (
              <div className="md:px-14">
                <motion.div
                  key="video"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="aspect-video w-full rounded-xl overflow-hidden shadow-xl relative"
                >
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/0y_8KbbN0j0?autoplay=1"
                    title="BizStock POS & Inventory Introduction"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>



                  {/* Close button */}
                  <button
                    onClick={() => setShowVideo(false)}
                    className="text-white absolute top-3 text-sm right-20 flex-col items-center justify-center hover:bg-transparent md:flex hidden"
                  >
                    <XIcon className={"mb-[3px]"} />  Close
                  </button>

                </motion.div>
              </div>
            )}

          </AnimatePresence>

          {/*<motion.div*/}
          {/*  initial="hidden"*/}
          {/*  animate="visible"*/}
          {/*  variants={fadeInUp}*/}
          {/*  className="mt-16"*/}
          {/*>*/}
          {/*  <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">*/}
          {/*    Trusted by leading companies*/}
          {/*  </p>*/}

          {/*  <div className="relative overflow-hidden py-8">*/}
          {/*    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />*/}
          {/*    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />*/}

          {/*    <div className="relative">*/}
          {/*      /!* Infinite Sliding Logos *!/*/}
          {/*      <motion.div*/}
          {/*        className="flex gap-16"*/}
          {/*        animate={{ x: ["0%", "-100%"] }}*/}
          {/*        transition={{*/}
          {/*          duration: 25,*/}
          {/*          repeat: Infinity,*/}
          {/*          ease: "linear",*/}
          {/*        }}*/}
          {/*      >*/}
          {/*        {[...clientLogos, ...clientLogos].map((logo, index) => (*/}
          {/*          <div*/}
          {/*            key={index}*/}
          {/*            className="flex-shrink-0 w-28 sm:w-36 h-16 sm:h-20 flex items-center justify-center bg-muted/30 rounded-xl backdrop-blur-md shadow-sm border border-border transition hover:scale-105 hover:bg-muted/50 hover:grayscale-0 grayscale"*/}
          {/*          >*/}
          {/*            <Image*/}
          {/*              src={logo.src}*/}
          {/*              alt={logo.alt}*/}
          {/*              width={120}*/}
          {/*              height={60}*/}
          {/*              className="object-contain"*/}
          {/*            />*/}
          {/*          </div>*/}
          {/*        ))}*/}
          {/*      </motion.div>*/}
          {/*    </div>*/}
          {/*  </div>*/}

          {/*</motion.div>*/}

          {/* Background Dashboard Image */}
          <motion.div
            className="sm:rounded-2xl rounded-xl overflow-hidden mt-8"
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
