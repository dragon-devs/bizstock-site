import {
  Building2,
  CloudCog,
  Database,
  LineChart,
  Settings2,
  Shield,
} from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: <Database className="w-8 h-8 text-blue-500" />,
      title: "Live Inventory Management",
      description:
        "Track every product in real-time with instant updates, auto stock alerts, and variant-level control — never run out or overstock again.",
    },
    {
      icon: <LineChart className="w-8 h-8 text-rose-500" />,
      title: "Smart Sales & Profit Analytics",
      description:
        "Visualize your revenue, profits, and best-selling items instantly. Make faster decisions with easy-to-read dashboards and daily performance reports.",
    },
    {
      icon: <CloudCog className="w-8 h-8 text-green-500" />,
      title: "Cloud Sync & Integrations",
      description:
        "Access your business anytime, anywhere — simply open your browser or use our mobile app. Seamlessly sync with platforms for a fully connected workflow.",
    },
    {
      icon: <Building2 className="w-8 h-8 text-purple-500" />,
      title: "Multi-Branch Management",
      description:
        "Manage inventory, staff, and sales across multiple stores or warehouses from a single dashboard — all in real-time.",
    },
    {
      icon: <Shield className="w-8 h-8 text-indigo-500" />,
      title: "Enterprise-Grade Security",
      description:
        "Your data is protected with bank-level encryption, multi-user permissions, and daily encrypted backups — giving you full control and peace of mind.",
    },
    {
      icon: <Settings2 className="w-8 h-8 text-amber-500" />,
      title: "Flexible & Customizable",
      description:
        "Easily tailor workflows, invoice formats, barcode settings, and user roles to match your exact business operations.",
    },
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };
  
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };
  
  return (
    <motion.section
      id="features"
      className="py-20 w-[100vw] relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] bg-background/80"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="container max-w-[72rem] mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-4 text-center tracking-tighter"
          variants={itemVariants}
        >
          Built for Business. Packed with Power.
        </motion.h2>
        <motion.p
          className="text-foreground text-center mb-16 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Whether you run a retail shop, wholesale business, or multi-branch
          operation — BizStock gives you everything to manage stock, sales,
          reports, and more in one intuitive system.
        </motion.p>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-6 gap-4"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileInView={{ scale: 1 }}
              className="p-6 bg-background rounded-xl hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 transform origin-center"
            >
              <motion.div
                className="mb-4"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                {feature.icon}
              </motion.div>
              <motion.h3
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-xl font-semibold mb-2 tracking-tighter"
              >
                {feature.title}
              </motion.h3>
              <motion.p
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-foreground/80"
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
