import {motion} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import {fadeInUp, staggerContainer} from "@/app/components/animate";


export const HeroSection = () => {
  return (
    <section className="pt-32 pb-8 sm:pb-16 px-4">

      <div className="container mx-auto text-center">
        <motion.div
          className="max-w-3xl mx-auto space-y-4"
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
        >
          <motion.h1
            className="text-5xl md:text-6xl pb-2 leading-none font-black tracking-tighter bg-gradient-to-r from-blue-600 via-blue-800 to-red-600 bg-clip-text text-transparent"
            initial={{y: -20, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{delay: 0.1, duration: 0.5}}
          >
            Revolutionize Your Inventory Management
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8, delay: 0.4}}
          >
            Revolutionize your inventory management with cutting-edge tools, real-time analytics, and seamless
            integrations to transform the way you handle your stock.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <Link className="w-full sm:w-fit" href='https://app.bizstock.net/auth/register'>
              <motion.button
                className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                variants={fadeInUp}
              >
                Start Free Trial
              </motion.button>
            </Link>
            <Link className="w-full sm:w-fit" href='https://dragon-devs.vercel.app'>
              <motion.button
                className="w-full sm:w-auto px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all"
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                variants={fadeInUp}
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          className="sm:mt-16 mt-8 relative"
          initial={{opacity: 0, y: 40}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8, delay: 0.6}}
        >
          <div
            className="absolute rounded-2xl inset-0 sm:bg-gradient-to-b from-white/20 via-transparent to-white/20 z-10"></div>
          <motion.div
            className="sm:rounded-2xl rounded-lg overflow-hidden shadow-2xl border border-b-gray-100"
            whileHover={{y: -10}}
            transition={{duration: 0.3}}
          >
            <Image
              src="/bizstock-reports.png"
              alt="BizStock Dashboard"
              className="w-full sm:block hidden object-cover"
              width={2000}
              height={2000}
            />
            <Image
              src="/bizstock-mobile.png"
              alt="BizStock Dashboard"
              className="w-full sm:hidden block object-cover"
              width={2000}
              height={2000}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
