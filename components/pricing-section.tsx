'use client';

import {motion} from "framer-motion";
import {CheckCircle2} from "lucide-react";
import Link from "next/link";
import React from "react";
import {fadeInUp, staggerContainer} from "@/components/animate";

export const PricingSection = () => {
  const plan = {
    name: "Starter",
    basePrice: 4900,
    description: "Everything you need to kickstart and manage your business effectively.",
    options: [
      {
        label: "1 Month",
        discount: 10,
        price: 4410,
        monthlyPrice: 4410,
        originalPrice: 4900,
      },
      {
        label: "3 Months",
        discount: 15,
        price: 12465,
        monthlyPrice: 12465 / 3,
        originalPrice: 14700,
      },
      {
        label: "6 Months",
        discount: 25,
        price: 22050,
        monthlyPrice: 22050 / 6,
        originalPrice: 29400,
        best: true,
      }
    ],
    features: [
      "1 User Account (Sharing allowed, but not recommended for security reasons)",
      "Real-time Inventory Tracking",
      "POS / Receipts",
      "Sales & Purchase Invoicing",
      "Customer & Vendor Management",
      "Basic Analytics Dashboard",
      "Unlimited SKUs & Security",
      "Cloud Backup & Sync",
      "24/7 Support",
    ],
    note: "14-day free trial included. Registration fee applies after the trial based on your business type.",
  };
  
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
        >
          <h2 className="text-4xl font-bold mb-4 tracking-tight text-foreground">Starter Plan – Transparent & Flexible</h2>
          <p className="text-muted-foreground">
            Get started with powerful tools to run your business — no hidden fees, no surprises.
          </p>
        </motion.div>
        
        <motion.div
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{once: true}}
        >
          <motion.div
            className="relative p-6 rounded-xl bg-background border border-card hover:shadow-xl hover:shadow-blue-500/30 transition-shadow"
            variants={fadeInUp}
            initial={{y: 20, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{delay: 0.3, duration: 0.5}}
          >
            <h3 className="text-2xl font-bold mb-2">{plan.name} Plan</h3>
            <p className="mb-6 text-muted-foreground">{plan.description}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              {plan.options.map((option, index) => (
                <motion.div
                  key={index}
                  className={`relative p-4 border rounded-xl text-center transition-all ${option.best ? 'border-blue-600 border-2 shadow-md shadow-blue-500/20' : 'border-border'}`}
                  whileHover={{
                    y: -5,
                    transition: {duration: 0.2}
                  }}
                  variants={fadeInUp}
                >
                  {option.best && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-background/70 text-foreground px-4 py-1 rounded-full text-xs font-medium">
                      BEST VALUE
                    </div>
                  )}
                  <p className="text-lg font-semibold mt-2">{option.label}</p>
                  <div className="text-sm text-green-600">Rs{option.monthlyPrice.toLocaleString()}/mo</div>
                  <div className="absolute top-2 right-2">
                    <span className="bg-green-50 text-green-600 px-2 py-1 rounded-full text-sm font-medium">
                      {option.discount}% OFF
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-center mt-4">
                    <p className="text-2xl font-bold">
                      ₨{option.price.toLocaleString()}
                    </p>
                    {option.originalPrice && (
                      <span className="text-foreground line-through text-sm">
                        ₨{option.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.ul
              className="space-y-4 mb-6 md:ml-4"
              variants={staggerContainer}
              animate="animate"
              initial={{y: 20, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              transition={{delay: 0.3, duration: 0.5}}
            >
              {plan.features.map((feature, i) => (
                <motion.li
                  key={i}
                  className="flex items-center text-sm"
                  variants={fadeInUp}
                  initial={{y: 20, opacity: 0}}
                  whileInView={{y: 0, opacity: 1}}
                  transition={{delay: 0.3, duration: 0.5}}
                >
                  <CheckCircle2 className="w-5 h-5 mr-2 min-w-5 text-blue-600"/>
                  {feature}
                </motion.li>
              ))}
            </motion.ul>
            
            <p className="text-sm text-gray-500 mb-6 italic">
              {plan.note}
            </p>
            
            <Link href="https://app.bizstock.net/auth/register">
              <motion.button
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                className="w-full px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                Start Free Trial
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};