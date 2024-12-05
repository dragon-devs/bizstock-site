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
      quote: "BizStock revolutionized our inventory management. We've reduced costs by 30%!",
      name: "Sarah Johnson",
      company: "RetailPro Solutions"
    },
    {
      quote: "The AI predictions are incredibly accurate. We never run out of stock anymore.",
      name: "Mike Thompson",
      company: "Global Traders Inc."
    },
    {
      quote: "As a small business, BizStock has been a game-changer. The inventory tracking is so intuitive and saves us hours of manual work.",
      name: "Emily Rodriguez",
      company: "Coastal Craft Supplies"
    },
    {
      quote: "We operate across multiple warehouses, and BizStock's multi-location inventory management has streamlined our entire supply chain.",
      name: "David Chen",
      company: "Nationwide Distribution Partners"
    },
    {
      quote: "The real-time reporting and analytics have helped us make more informed purchasing decisions. Truly a must-have for any serious business.",
      name: "Lisa Patel",
      company: "Tech Innovations Retail"
    },
    {
      quote: "BizStock's integration capabilities mean we can connect our e-commerce, point of sale, and inventory systems seamlessly. No more manual data entry!",
      name: "Robert Williams",
      company: "Online Marketplace Solutions"
    },
    {
      quote: "We've seen a 20% increase in efficiency since implementing BizStock. It’s the best inventory system we've ever used.",
      name: "Jessica Lee",
      company: "Smart Logistics Co."
    },
    {
      quote: "BizStock’s user-friendly interface made onboarding effortless. Our team got up to speed in no time.",
      name: "Carlos Garcia",
      company: "Metro Supplies"
    },
    {
      quote: "The customer support is phenomenal! They guided us through every step of the implementation process.",
      name: "Priya Desai",
      company: "Elegant Decor Ltd."
    },
    {
      quote: "The customizable dashboards and reports let us track what matters most to our business. It’s a game-changer.",
      name: "Alex Carter",
      company: "Green Earth Enterprises"
    },
    {
      quote: "With BizStock, we've minimized overstocking and stockouts, saving us thousands of dollars annually.",
      name: "Sophia Nguyen",
      company: "Urban Outfitters Supply"
    },
    {
      quote: "I can now manage my entire inventory from my phone. The mobile experience is top-notch!",
      name: "Ethan Brooks",
      company: "Mobile Marketplaces"
    },
    {
      quote: "BizStock has completely transformed how we handle seasonal inventory surges. It's perfect for scaling businesses.",
      name: "Emma Davis",
      company: "Holiday Retailers"
    },
    {
      quote: "Their subscription tiers made it affordable for us to start small and scale up as we grew. Highly recommend it!",
      name: "Olivia White",
      company: "Startup Supplies"
    },
    {
      quote: "The audit trail feature has made compliance and inventory audits so much easier for our business.",
      name: "Noah Harris",
      company: "Compliant Logistics LLC"
    },
    {
      quote: "BizStock's forecasting tools have given us a clear edge over our competitors. Our stock planning is now flawless.",
      name: "Mia King",
      company: "Precision Tech Distributors"
    },
    {
      quote: "I love how it integrates perfectly with our accounting software. Inventory management and accounting are now in sync.",
      name: "Liam Scott",
      company: "Streamline Enterprises"
    },
    {
      quote: "The barcode scanning feature has significantly sped up our warehouse operations. A fantastic tool!",
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
      className="py-16"
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
