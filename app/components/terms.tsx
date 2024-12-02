'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Shield, Lock, Cookie, ExternalLink, CheckCircle } from 'lucide-react';

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
const PolicySection = ({ title, icon: Icon, children }: any) => (
  <motion.div
    variants={itemVariants}
    className="mb-8 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
  >
    <div className="flex items-center gap-3 mb-4">
      <Icon className="w-6 h-6 text-blue-500" />
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    </div>
    <div className="text-gray-600 space-y-3">
      {children}
    </div>
  </motion.div>
);

// Terms and Conditions Component
export const TermsAndConditions = () => {
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
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          Terms and Conditions
        </h1>
        <p className="text-gray-600">
          Last updated: December 2, 2024
        </p>
      </motion.div>

      <PolicySection title="1. Service Usage" icon={CheckCircle}>
        <p>By using BizStock's inventory management system, you agree to comply with and be bound by these terms and conditions.</p>
        <ul className="list-disc pl-5 mt-2 space-y-2">
          <li>You must be at least 18 years old to use this service</li>
          <li>You are responsible for maintaining the security of your account credentials</li>
          <li>Usage of the service must comply with all applicable laws and regulations</li>
        </ul>
      </PolicySection>

      <PolicySection title="2. Data Management" icon={Lock}>
        <p>As a user of BizStock, you retain all rights to your inventory data.</p>
        <ul className="list-disc pl-5 mt-2 space-y-2">
          <li>We process and store your data in accordance with our Privacy Policy</li>
          <li>Regular backups are performed to ensure data safety</li>
          <li>You can export your data at any time</li>
        </ul>
      </PolicySection>

      <PolicySection title="3. Subscription and Billing" icon={Shield}>
        <p>Our subscription terms are designed to be transparent and fair.</p>
        <ul className="list-disc pl-5 mt-2 space-y-2">
          <li>Monthly or annual billing cycles available</li>
          <li>Automatic renewal unless cancelled</li>
          <li>Pro-rated refunds for cancelled annual subscriptions</li>
        </ul>
      </PolicySection>
    </motion.section>
  );
};

// Privacy Policy Component
export const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (index: any) => {
    setActiveSection(activeSection === index ? null : index);
  };

  const sections = [
    {
      title: "Data Collection",
      content: `We collect the following types of information:
        • Account information (name, email, business details)
        • Inventory data (product details, stock levels, transactions)
        • Usage data (login times, feature usage, system logs)
        • Payment information (processed securely through our payment partners)`
    },
    {
      title: "Data Usage",
      content: `Your data is used for:
        • Providing and improving our inventory management services
        • Processing transactions and maintaining records
        • Sending important service updates and notifications
        • Analytics to improve user experience`
    },
    {
      title: "Data Protection",
      content: `We implement strong security measures:
        • End-to-end encryption for data transmission
        • Regular security audits and penetration testing
        • Multi-factor authentication options
        • Regular backup procedures`
    }
  ];

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
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        <p className="text-gray-600">
          Protecting your data is our top priority
        </p>
      </motion.div>

      <div className="space-y-4">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <button
              onClick={() => toggleSection(index)}
              className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50"
            >
              <h3 className="text-xl font-semibold text-gray-800">{section.title}</h3>
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
                  <div className="px-6 pb-4 text-gray-600 whitespace-pre-line">
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
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-rose-600 bg-clip-text text-transparent">
          Cookie Policy
        </h1>
        <p className="text-gray-600">
          Understanding how we use cookies to improve your experience
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          variants={itemVariants}
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Cookie className="w-5 h-5 text-blue-500" />
            Essential Cookies
          </h3>
          <p className="text-gray-600">
            Required for basic functionality:
            • Authentication
            • Security features
            • Session management
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <ExternalLink className="w-5 h-5 text-purple-500" />
            Third-Party Cookies
          </h3>
          <p className="text-gray-600">
            Used for enhanced features:
            • Analytics
            • Performance monitoring
            • Feature optimization
          </p>
        </motion.div>
      </div>

      <motion.div
        variants={itemVariants}
        className="mt-8 bg-blue-50 p-6 rounded-xl"
      >
        <h3 className="text-xl font-semibold mb-4">Cookie Management</h3>
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
  TermsAndConditions,
  PrivacyPolicy,
  CookiePolicy
};