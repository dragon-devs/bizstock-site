import {Building2, CloudCog, Database, LineChart, Settings2, Shield} from "lucide-react";
import {motion} from "framer-motion";
import React from "react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: <Database className="w-8 h-8 text-blue-500"/>,
      title: "Smart Inventory Tracking",
      description: "Real-time monitoring of stock levels with AI-powered predictions and automated reordering."
    },
    {
      icon: <LineChart className="w-8 h-8 text-rose-500"/>,
      title: "Advanced Analytics",
      description: "Comprehensive insights into sales trends, inventory turnover, and business performance."
    },
    {
      icon: <CloudCog className="w-8 h-8 text-green-500"/>,
      title: "Cloud Integration",
      description: "Seamless integration with popular e-commerce platforms and accounting software."
    },
    {
      icon: <Building2 className="w-8 h-8 text-purple-500"/>,
      title: "Multi-location Support",
      description: "Manage multiple warehouses and retail locations from a single dashboard."
    },
    {
      icon: <Shield className="w-8 h-8 text-indigo-500"/>,
      title: "Enterprise Security",
      description: "Bank-grade encryption and advanced access controls to protect your data."
    },
    {
      icon: <Settings2 className="w-8 h-8 text-amber-500"/>,
      title: "Customizable Workflow",
      description: "Tailor the system to match your specific business processes and requirements."
    }
  ];
  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };


  return (
    <motion.section
      id="features"
      className="py-20 w-[100vw] relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] bg-gray-50/80"
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, margin: "-100px"}}
      variants={containerVariants}
    >
      <div className="container max-w-[72rem] mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-4 text-center tracking-tighter"
          variants={itemVariants}
        >
          Powerful Features for Modern Business
        </motion.h2>
        <motion.p
          className="text-gray-600 text-center mb-16"
          variants={itemVariants}
        >
          Everything you need to streamline your inventory management and boost efficiency.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-6 gap-4"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileInView={{scale: 1}}

              className="p-6 bg-white rounded-xl hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 transform origin-center"
            >
              <motion.div
                className="mb-4"
                initial={{x: -20, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{delay: 0.1, duration: 0.5}}
              >
                {feature.icon}
              </motion.div>
              <motion.h3
                initial={{x: -20, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{delay: 0.2, duration: 0.5}}
                className="text-xl font-semibold mb-2 tracking-tighter">
                {feature.title}
              </motion.h3>
              <motion.p
                initial={{x: -20, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{delay: 0.3, duration: 0.5}}
                className="text-gray-600">
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
