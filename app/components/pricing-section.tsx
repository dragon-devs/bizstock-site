'use client';

import {motion} from "framer-motion";
import {CheckCircle2} from "lucide-react";
import Link from "next/link";
import React from "react";
import {fadeInUp, staggerContainer} from "@/app/components/animate";

export const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "4900",
      description: "Perfect for small businesses",
      features: [
        "Up to 1,000 SKUs",
        "1 User Accounts",
        "Basic Analytics",
        "Email Support",
        "Cloud Backup",
      ]
    },
    {
      name: "Professional",
      price: "9900",
      description: "Ideal for growing companies",
      features: [
        "Up to 5,000 SKUs",
        "5 User Accounts",
        "Advanced Analytics",
        "Priority Support",
        "API Access",
        "Custom Reports"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "24900",
      description: "For large scale operations",
      features: [
        "Unlimited SKUs",
        "Unlimited Users",
        "Custom Solutions",
        "24/7 Support",
        "Dedicated Manager",
        "On-premise Option"
      ]
    }
  ];

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
          <h2 className="text-4xl font-bold mb-4 tracking-tighter">Simple, Transparent Pricing</h2>
          <p className="text-gray-600">Choose the perfect plan for your business needs</p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{once: true}}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative p-8 rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-shadow ${
                plan.popular ? 'bg-blue-600 text-white' : 'bg-white border border-gray-200'
              }`}
              variants={fadeInUp}
              whileHover={{
                y: -10,
                transition: {duration: 0.2}
              }}
              initial={{y: 20, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              transition={{delay: 0.3, duration: 0.5}}
            >
              {plan.popular && (
                <motion.span
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-yellow-400 text-black text-sm rounded-full"
                  animate={{scale: 1}}
                  initial={{scale: 0, opacity: 0}}
                  whileInView={{scale: 1, opacity: 1}}
                  transition={{delay: 0.3, duration: 0.5}}
                >
                  Most Popular
                </motion.span>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={`mb-6 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}<span className="text-sm font-bold ">PKR</span></span>
                <span className={plan.popular ? 'text-blue-100' : 'text-gray-600'}>/month</span>
              </div>
              <motion.ul
                className="space-y-4 mb-8"
                variants={staggerContainer}
                animate="animate"
                initial={{y: 20, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{delay: 0.3, duration: 0.5}}
              >
                {plan.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center"
                    variants={fadeInUp}
                    initial={{y: 20, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    transition={{delay: 0.3, duration: 0.5}}
                  >
                    <CheckCircle2 className={`w-5 h-5 mr-2 ${plan.popular ? 'text-blue-100' : 'text-blue-600'}`}/>
                    {feature}
                  </motion.li>
                ))}
              </motion.ul>
              <Link href='#'>
                <motion.button
                  whileHover={{scale: 1.05}}
                  whileTap={{scale: 0.95}}
                  className={`w-full px-4 py-2 rounded-lg transition-colors ${
                    plan.popular
                      ? 'bg-white text-blue-600 hover:bg-blue-50'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Get Started
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
