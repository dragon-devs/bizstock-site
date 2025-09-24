"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Minus,
  HelpCircle,
  Barcode,
  RefreshCw,
  ShoppingBag,
  MapPin,
  Users,
  FileDown,
  Smartphone,
  ShieldCheck,
  Wallet,
  HeadphonesIcon
} from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
  icon: React.ElementType;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: "Do you offer a free trial?",
      answer:
        "Yes, we offer a 14-day free trial with full access to all features. No payment method required to start your trial.",
      icon: HelpCircle
    },
    {
      question: "Can I manage inventory with barcodes and variants?",
      answer:
        "Yes! BizStock supports product variants (like size or color) and barcodes. You can scan products using a barcode scanner or your mobile camera for quick access and updates.",
      icon: Barcode
    },
    {
      question: "Does BizStock support real-time updates?",
      answer:
        "Absolutely. From stock levels to dashboard widgets and notifications, BizStock keeps everything in sync with real-time updates — no need to refresh the page.",
      icon: RefreshCw
    },
    {
      question: "Can I use BizStock as a complete POS system?",
      answer:
        "Yes. BizStock includes a full-featured Point of Sale (POS) system with invoice generation, discount support, multiple payment types, and customer linking — ideal for both desktop and tablet use.",
      icon: ShoppingBag
    },
    {
      question: "Can I manage inventory across multiple locations?",
      answer:
        "Yes. BizStock is designed to handle inventory across multiple warehouses or branches. You can track stock movement, transfers, and availability per location.",
      icon: MapPin
    },
    {
      question: "How does customer and vendor management work?",
      answer:
        "You can easily manage vendors and customers with complete profiles, ledgers, regions, and contact info. The system also supports categorization and smart filtering for easier access.",
      icon: Users
    },
    {
      question: "Can I export data from BizStock?",
      answer:
        "Yes. Reports, ledgers, invoices, and stock data can be exported in PDF, CSV, or TXT formats for backups, audits, or sharing.",
      icon: FileDown
    },
    {
      question: "Is BizStock mobile-friendly?",
      answer:
        "Yes. The system is fully responsive and works seamlessly on phones, tablets, and desktops. The mobile interface is optimized for ease of use on smaller screens.",
      icon: Smartphone
    },
    {
      question: "Do you support data backups and security?",
      answer:
        "Yes. We ensure your data is backed up regularly with secure, encrypted storage. We also follow industry best practices for security and privacy.",
      icon: ShieldCheck
    },
    {
      question: "Can I track business expenses and financials?",
      answer:
        "BizStock includes modules for expense tracking, customer/vendor ledgers, and finance reports so you can keep an eye on cash flow and profit.",
      icon: Wallet
    },
    {
      question: "Do you offer support and onboarding?",
      answer:
        "Yes! We offer onboarding sessions, and fast customer support to help you get the most out of BizStock.",
      icon: HeadphonesIcon
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  /** Animations */
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  const contentVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        height: { duration: 0.3 },
        opacity: { duration: 0.25, delay: 0.1 }
      }
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.25 }
    }
  };

  return (
    <motion.section
      id="faq"
      className="bg-background/90 w-[100vw] relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] text-foreground/50 py-12"

      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-foreground text-4xl font-bold mb-4 tracking-tight sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-xl">
            Find answers to the most common questions about BizStock.
          </p>
        </motion.div>

        {/* FAQ List */}
        <motion.div className="space-y-6" variants={containerVariants}>
          {faqs.map((faq, index) => {
            const Icon = faq.icon;
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="border-b border-border pb-4"
              >
                {/* Question Row */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center text-left focus:outline-none group"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-base sm:text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                      {faq.question}
                    </span>
                  </div>

                  {/* Plus / Minus Icon */}
                  {isOpen ? (
                    <Minus className="w-5 h-5 text-primary transition-transform duration-300" />
                  ) : (
                    <Plus className="w-5 h-5 text-primary transition-transform duration-300" />
                  )}
                </button>

                {/* Answer Section */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={contentVariants}
                      className="overflow-hidden"
                    >
                      <div className="pl-8 pr-2 pt-3 text-muted-foreground text-base leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};
