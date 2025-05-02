import React, {useEffect, useRef, useState} from "react";
import {motion} from "framer-motion";
import {Quote} from "lucide-react";

export const TestimonialsSection = () => {
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
  
  const testimonials = [
    {
      quote: "BizStock's POS system is lightning fast. Generating sales receipts and sharing invoices on WhatsApp has made checkout seamless!",
      name: "Sarah Johnson",
      company: "RetailPro Solutions"
    },
    {
      quote: "We love how easy it is to scan and manage product barcodes. Inventory tracking is accurate and reliable now.",
      name: "Mike Thompson",
      company: "Global Traders Inc."
    },
    {
      quote: "The multi variant inventory and barcode generation helped us standardize our products across branches effortlessly.",
      name: "Emily Rodriguez",
      company: "Coastal Craft Supplies"
    },
    {
      quote: "BizStock’s customer ledger system keeps all payment histories organized. It’s perfect for tracking dues in real time.",
      name: "David Chen",
      company: "Nationwide Distribution Partners"
    },
    {
      quote: "The real time dashboard gives us instant insights into sales and stock flow. It’s a game changer for daily decision making.",
      name: "Lisa Patel",
      company: "Tech Innovations Retail"
    },
    {
      quote: "Managing invoices has never been easier. I can print, share, and even track due invoices in one place!",
      name: "Robert Williams",
      company: "Online Marketplace Solutions"
    },
    {
      quote: "With BizStock's region based customer grouping, we can now filter ledgers and invoices by location—so helpful!",
      name: "Jessica Lee",
      company: "Smart Logistics Co."
    },
    {
      quote: "I track my business expenses and profit all in one app. The reports are clean and export ready. Fantastic for accounting!",
      name: "Carlos Garcia",
      company: "Metro Supplies"
    },
    {
      quote: "BizStock has completely streamlined our purchasing and reporting. Exporting to PDF or Excel saves us hours.",
      name: "Priya Desai",
      company: "Elegant Decor Ltd."
    },
    {
      quote: "All our modules—inventory, customers, vendors, expenses—are connected. It's the only tool we need to run the business.",
      name: "Alex Carter",
      company: "Green Earth Enterprises"
    },
    {
      quote: "Switching to BizStock saved us from costly stockouts. The real time tracking and alerts are super accurate.",
      name: "Sophia Nguyen",
      company: "Urban Outfitters Supply"
    },
    {
      quote: "Our team manages the full POS system on their phones. The mobile experience is smooth and responsive.",
      name: "Ethan Brooks",
      company: "Mobile Marketplaces"
    },
    {
      quote: "BizStock made our seasonal stock planning much easier. We prepare ahead thanks to inventory analytics.",
      name: "Emma Davis",
      company: "Holiday Retailers"
    },
    {
      quote: "We started on the smallest subscription and scaled as we grew. Flexible pricing made a big difference.",
      name: "Olivia White",
      company: "Startup Supplies"
    },
    {
      quote: "Audits are stress free now. The system logs every transaction clearly with full traceability.",
      name: "Noah Harris",
      company: "Compliant Logistics LLC"
    },
    {
      quote: "The sales forecasting module helps us plan smarter. Our inventory turnover has never been this optimized.",
      name: "Mia King",
      company: "Precision Tech Distributors"
    },
    {
      quote: "Syncing with our accounting software was flawless. It bridged the gap between inventory and finance.",
      name: "Liam Scott",
      company: "Streamline Enterprises"
    },
    {
      quote: "The barcode scanner sped up our stock intake by 2x. It’s now our favorite tool during inventory checks.",
      name: "Grace Turner",
      company: "Swift Warehousing Solutions"
    }
  ];
  
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);

  // Handle scrolling animation
  useEffect(() => {
    const container = containerRef.current;
    let scrollInterval: string | number | NodeJS.Timeout | undefined;

    if (!isPaused) {
      scrollInterval = setInterval(() => {
        if (container) {
          // @ts-ignore
          container.scrollLeft += 1.5; // Adjust speed by changing the increment
          // @ts-ignore
          if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
            // @ts-ignore
            container.scrollLeft = 0; // Reset to loop
          }
        }
      }, 20); // Adjust speed by changing the interval delay
    }

    return () => clearInterval(scrollInterval);
  }, [isPaused]);

  return (
    <motion.section
      className="py-20"
      id="testimonials"
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, margin: "-100px"}}
      variants={{
        hidden: {opacity: 0},
        visible: {opacity: 1, transition: {duration: 0.5}}
      }}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          className="text-4xl font-bold mb-6 sm:mb-12 text-center tracking-tighter"
          variants={{
            hidden: {opacity: 0, y: -20},
            visible: {opacity: 1, y: 0, transition: {duration: 0.5}}
          }}
        >
          Trusted by Businesses Worldwide
        </motion.h2>
        <div
          ref={containerRef}
          className="flex overflow-hidden sm:gap-6 gap-4 p-4 sm:p-8 scrollbar-hide"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                rotate: index % 1 === 0 ? 1 : -1,
                transition: {duration: 0.2}
              }}
              className="min-w-full md:min-w-[400px] p-4 sm:p-6 inline-block rounded-xl hover:border  hover:sm:shadow-lg hover:shadow-blue-500/50 hover:border-blue-500/50 transition-all duration-300 transform relative"
            >
              <motion.p
                className="font-light mb-4 text-gray-700 text-lg"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{delay: 0.3, duration: 0.5}}
              >
                &ldquo;{testimonial.quote}&rdquo;
              </motion.p>
              <div className="font-semibold">
                <Quote
                  className="absolute bottom-6 right-6 text-blue-500 opacity-20"
                  size={100}
                />

                <motion.p
                  initial={{x: -20, opacity: 0}}
                  whileInView={{x: 0, opacity: 1}}
                  transition={{delay: 0.3, duration: 0.5}}
                >
                  {testimonial.name}
                </motion.p>
                <motion.p
                  className="text-gray-600 text-sm"
                  initial={{x: -20, opacity: 0}}
                  whileInView={{x: 0, opacity: 1}}
                  transition={{delay: 0.5, duration: 0.5}}
                >
                  {testimonial.company}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
