import {BarChart2, Layers, Link2, TrendingDown} from "lucide-react";
import {motion} from "framer-motion";
import {PolicySection} from "@/app/components/terms";
import React from "react";

export const SEOContentSection = () => {
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

  const seoContentItems = [
    {
      icon: Layers,
      iconColor: "text-blue-600 bg-blue-100",
      title: "Comprehensive Inventory Tracking",
      description: "Gain total visibility with real-time stock level monitoring, automatic low stock alerts, precise location tracking across multiple warehouses, batch and serial number tracking, and advanced product variant management."
    },
    {
      icon: BarChart2,
      iconColor: "text-green-600 bg-green-100",
      title: "Advanced Reporting and Analytics",
      description: "Transform data into actionable insights with customizable dashboards, inventory turnover rate analysis, profit margin calculations, seasonal trend identification, and comprehensive financial reporting."
    },
    {
      icon: Link2,
      iconColor: "text-purple-600 bg-purple-100",
      title: "Multi-Channel Synchronization",
      description: "Eliminate inventory discrepancies with seamless integration across e-commerce platforms, point of sale systems, and automatic stock updates. Prevent overselling and maintain real-time accuracy across all sales channels."
    },
    {
      icon: TrendingDown,
      iconColor: "text-red-600 bg-red-100",
      title: "Cost Optimization Tools",
      description: "Maximize efficiency with intelligent reorder point calculations, stock level recommendations, carrying cost analysis, supplier performance tracking, and identification of slow-moving inventory."
    }
  ];
  return (
    <motion.section
      className="py-16 w-[100vw] relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, margin: "-100px"}}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center tracking-tighter"
          variants={itemVariants}
        >
          Why BizStock is the Ultimate Inventory Management Solution
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 sm:gap-6 gap-4"
          variants={containerVariants}
        >
          {seoContentItems.map((item, index) => (
            <PolicySection key={index} className='border' iconClass={item.iconColor} title={item.title}
                           icon={item.icon}>
              <p>{item.description}</p>
            </PolicySection>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
