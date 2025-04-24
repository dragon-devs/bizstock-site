import React, {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {ChevronDown} from "lucide-react";

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  
  const faqs = [
    {
      question: "Do you offer a free trial?",
      answer: "Yes, we offer a 14-day free trial with full access to all features. No payment method required to start your trial."
    },
    {
      question: "Can I manage inventory with barcodes and variants?",
      answer:
        "Yes! BizStock supports product variants (like size or color) and barcodes. You can scan products using a barcode scanner or your mobile camera for quick access and updates."
    },
    {
      question: "Does BizStock support real-time updates?",
      answer:
        "Absolutely. From stock levels to dashboard widgets and notifications, BizStock keeps everything in sync with real-time updates — no need to refresh the page."
    },
    {
      question: "Can I use BizStock as a complete POS system?",
      answer:
        "Yes. BizStock includes a full-featured Point of Sale (POS) system with invoice generation, discount support, multiple payment types, and customer linking — ideal for both desktop and tablet use."
    },
    {
      question: "Can I manage inventory across multiple locations?",
      answer:
        "Yes. BizStock is designed to handle inventory across multiple warehouses or branches. You can track stock movement, transfers, and availability per location."
    },
    {
      question: "How does customer and vendor management work?",
      answer:
        "You can easily manage vendors and customers with complete profiles, ledgers, regions, and contact info. The system also supports categorization and smart filtering for easier access."
    },
    {
      question: "Can I export data from BizStock?",
      answer:
        "Yes. Reports, ledgers, invoices, and stock data can be exported in PDF, CSV, or TXT formats for backups, audits, or sharing."
    },
    {
      question: "Is BizStock mobile-friendly?",
      answer:
        "Yes. The system is fully responsive and works seamlessly on phones, tablets, and desktops. The mobile interface is optimized for ease of use on smaller screens."
    },
    {
      question: "Do you support data backups and security?",
      answer:
        "Yes. We ensure your data is backed up regularly with secure, encrypted storage. We also follow industry best practices for security and privacy."
    },
    {
      question: "Can I track business expenses and financials?",
      answer:
        "BizStock includes modules for expense tracking, customer/vendor ledgers, and finance reports so you can keep an eye on cash flow and profit."
    },
    {
      question: "Do you offer support and onboarding?",
      answer:
        "Yes! We offer onboarding sessions, and fast customer support to help you get the most out of BizStock."
    }
  ];

  
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

  const contentVariants = {
    hidden: {height: 0, opacity: 0},
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        height: {
          duration: 0.3
        },
        opacity: {
          duration: 0.25,
          delay: 0.15
        }
      }
    }
  };

  return (
    <motion.section
      id="faq"
      className="py-20 w-[100vw] relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, margin: "-100px"}}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-4xl font-bold mb-4 tracking-tighter">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Find answers to common questions about BizStock
          </p>
        </motion.div>

        <motion.div
          className="space-y-4"
          variants={containerVariants}
        >
          {faqs.map((faq, index : any) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="rounded-lg"
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center"
                whileHover={{scale: 1.005}}
                whileTap={{scale: 0.995}}
                initial={{y: 20, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{delay: 0.2, duration: 0.5}}
              >
                <p className="sm:text-lg text-base font-semibold pr-4 leading-none">{faq.question}</p>
                <motion.div
                  animate={{rotate: openIndex === index ? 180 : 0}}
                  transition={{duration: 0.3}}
                >
                  <ChevronDown className="flex-shrink-0"/>
                </motion.div>
              </motion.button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={contentVariants}
                    className="overflow-hidden"
                  >
                    <motion.div
                      className="px-6 pb-4 text-gray-600 leading-tight"
                      initial={{opacity: 0, y: 10}}
                      animate={{opacity: 1, y: 0}}
                      exit={{opacity: 0, y: -10}}
                      transition={{duration: 0.3}}
                    >
                      {faq.answer}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
