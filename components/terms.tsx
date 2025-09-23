'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {ChevronDown, Shield, Lock, Cookie, ExternalLink, CheckCircle, Box, User} from 'lucide-react';

// Shared animations
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 }
  }
};

// Shared Section Component
export const PolicySection = ({ title, icon: Icon, children, className, iconClass = "text-blue-500" }: any) => (

  <motion.div
    whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
    variants={itemVariants}
    className={` bg-white rounded-xl p-6 transition-shadow ${className}`}
  >
    <div className="flex items-center gap-3 mb-4">
      <Icon className={`w-8 h-8 p-1 rounded-md ${iconClass}`} />
      <p className="text-xl font-semibold text-gray-800 tracking-tighter leading-none">{title}</p>
    </div>
    <div className="text-gray-600 space-y-3">
      {children}
    </div>
  </motion.div>
);

// Terms and Service Component
export const TermsOfService = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-4xl mx-auto py-16 px-4"
    >
      <motion.div
        className="text-center mb-12"
        variants={itemVariants}
      >
        <h1 className="text-4xl tracking-tighter font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          Terms of Service
        </h1>
        <p className="text-gray-600 text-lg font-semibold tracking-tight">
          Last updated: December 2, 2024
        </p>
      </motion.div>
      <div className="flex flex-col gap-4 sm:gap-6">
        <PolicySection className='border' title="Service Usage" icon={CheckCircle}>
          <p>By using BizStock's inventory management system, you agree to comply with and be bound by these terms and service.</p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>You must be at least 18 years old to use this service</li>
            <li>You are responsible for maintaining the security of your account credentials</li>
            <li>Usage of the service must comply with all applicable laws and regulations</li>
          </ul>
        </PolicySection>

        <PolicySection className='border' iconClass="text-rose-500" title="Data Management" icon={Lock}>
          <p>As a user of BizStock, you retain all rights to your inventory data.</p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>We process and store your data in accordance with our Privacy Policy</li>
            <li>Regular backups are performed to ensure data safety</li>
            <li>You can export your data at any time</li>
          </ul>
        </PolicySection>

        <PolicySection className='border' iconClass="text-purple-500" title="Subscription and Billing" icon={Shield}>
          <p>Our subscription terms are designed to be transparent and fair.</p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>Monthly or annual billing cycles available</li>
            <li>Automatic renewal unless cancelled</li>
            <li>Pro-rated refunds for cancelled annual subscriptions</li>
          </ul>
        </PolicySection>
      </div>
    </motion.section>
  );
};

// Privacy Policy Component
export const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setActiveSection(activeSection === index ? null : index);
  };

  const sections = [
    {
      title: "Data Collection",
      icon: <User className="w-5 h-5 text-blue-600" />,
      content: (
        <>
          <p className="py-2 text-black">We collect the following types of information:</p>
          <ul className="list-disc pl-5">
            <li>Account information (name, email, business details)</li>
            <li>Inventory data (product details, stock levels, transactions)</li>
            <li>Usage data (login times, feature usage, system logs)</li>
            <li>Payment information (processed securely through our payment partners)</li>
          </ul>
        </>
      ),
    },
    {
      title: "Data Usage",
      icon: <Box className="w-5 h-5 text-purple-600" />,
      content: (
        <>
          <p className="py-2 text-black">Your data is used for:</p>
          <ul className="list-disc pl-5">
            <li>Providing and improving our inventory management services</li>
            <li>Processing transactions and maintaining records</li>
            <li>Sending important service updates and notifications</li>
            <li>Analytics to improve user experience</li>
          </ul>
        </>
      ),
    },
    {
      title: "Data Protection",
      icon: <Shield className="w-5 h-5 text-rose-600" />,
      content: (
        <>
          <p className="py-2 text-black">We implement strong security measures:</p>
          <ul className="list-disc pl-5">
            <li>End-to-end encryption for data transmission</li>
            <li>Regular security audits and penetration testing</li>
            <li>Multi-factor authentication options</li>
            <li>Regular backup procedures</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
      }}
      className="max-w-4xl mx-auto py-16 px-4"
    >
      <motion.div
        className="text-center mb-12"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
      >
        <h1 className="text-4xl tracking-tighter font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        <p className="text-gray-600">Protecting your data is our top priority</p>
      </motion.div>

      <div className="space-y-4">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="bg-white rounded-xl overflow-hidden"
          >
            <button
              onClick={() => toggleSection(index)}
              className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50"
            >
              <div className="flex items-center gap-3">
                {section.icon}
                <h3 className="text-xl font-semibold text-gray-800">
                  {section.title}
                </h3>
              </div>
              <motion.div
                animate={{ rotate: activeSection === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5 text-gray-500" />
              </motion.div>
            </button>

            <AnimatePresence>
              {activeSection === index && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 bg-gray-50 border-t pb-4 text-gray-600">
                    {section.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

// Cookie Policy Component
export const CookiePolicy = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-4xl mx-auto py-16 px-4"
    >
      <motion.div
        className="text-center mb-12"
        variants={itemVariants}
      >
        <h1 className="text-4xl tracking-tighter font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
          Cookie Policy
        </h1>
        <p className="text-gray-600 ">
          Understanding how we use cookies to improve your experience
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
        <PolicySection className='border' title="Essential Cookies" icon={Cookie}>
          <p>Required for basic functionality.</p>
          <ul className="list-disc pl-5">
            <li>Authentication</li>
            <li>Security features</li>
            <li>Session management</li>
          </ul>
        </PolicySection>
        <PolicySection className='border' iconClass="text-rose-500" title="Third-Party Cookies" icon={ExternalLink}>
          <p>Used for enhanced features:</p>
          <ul className="list-disc pl-5">
            <li>Analytics</li>
            <li>Performance monitoring</li>
            <li>Feature optimization</li>
          </ul>
        </PolicySection>
      </div>
      <motion.div
        variants={itemVariants}
        className="mt-8 bg-blue-50 p-6 rounded-xl"
      >
        <h3 className="text-xl font-semibold mb-4 tracking-tight">Cookie Management</h3>
        <p className="text-gray-700 mb-4">
          You can manage your cookie preferences through your browser settings.
          However, please note that disabling certain cookies may affect the functionality of BizStock.
        </p>
        <div className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
          <Shield className="w-5 h-5" />
          <span className="font-medium">Learn more about browser cookie settings</span>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default {
  TermsOfService,
  PrivacyPolicy,
  CookiePolicy
};