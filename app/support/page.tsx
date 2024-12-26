'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, FileText, MessageCircle, Phone, Mail, Clock, BookOpen, Users, BarChart } from 'lucide-react';

const SupportPage = () => {
  const fadeInUp = {
    initial: {y: 20, opacity: 0},
    whileInView: {y: 0, opacity: 1},
    transition: {delay: 0.4, duration: 0.5}
  };

  const stagger = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { staggerChildren: 0.2 }
  };

  const scaleIn = {
    initial: { scale: 0.9, opacity: 0 },
    whileInView: { scale: 1, opacity: 1 },
    transition: { duration: 0.5 }
  };

  const resources = [
    { icon: BookOpen, title: "Knowledge Base", description: "Comprehensive guides and tutorials" },
    { icon: Users, title: "Community Forum", description: "Connect with other BizStock users" },
    { icon: BarChart, title: "Best Practices", description: "Optimize your inventory workflow" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <motion.div
        className="relative overflow-hidden bg-white py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="text-center"
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold tracking-tighter text-gray-900 sm:text-6xl">
              How can we help you today?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Access our comprehensive support resources to maximize your BizStock experience
            </p>
          </motion.div>

          <motion.div
            className="mt-12 flex justify-center"
          >
            <div className="relative w-full max-w-2xl">
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search our knowledge base..."
                className="h-12 w-full rounded-full border border-gray-300 pl-12 pr-4 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        className="py-16 px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              className="relative overflow-hidden rounded-2xl bg-blue-50 p-8 hover:bg-blue-100 transition-colors"
              variants={fadeInUp}
            >
              <MessageCircle className="h-8 w-8 text-blue-600 mb-4"/>
              <p className="text-xl font-semibold text-gray-900">Live Chat Support</p>
              <p className="mt-2 text-gray-600">Get real-time assistance from our expert support team</p>
              <button
                className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700"
                onClick={() => window.open('https://wa.me/923466955928', '_blank')}
              >
                Start Chat
                <span className="ml-2">→</span>
              </button>
            </motion.div>

            <motion.div
              className="relative overflow-hidden rounded-2xl bg-green-50 p-8 hover:bg-green-100 transition-colors"
              variants={fadeInUp}
            >
              <Phone className="h-8 w-8 text-green-600 mb-4"/>
              <p className="text-xl font-semibold text-gray-900">Phone Support</p>
              <p className="mt-2 text-gray-600">Speak directly with our dedicated support specialists</p>
              <button
                className="mt-4 inline-flex items-center text-green-600 hover:text-green-700"
                onClick={() => window.open('tel:+923466955928')}
              >
                Call Now
                <span className="ml-2">→</span>
              </button>
            </motion.div>

            <motion.div
              className="relative overflow-hidden rounded-2xl bg-purple-50 p-8 hover:bg-purple-100 transition-colors"
              variants={fadeInUp}
            >
              <Mail className="h-8 w-8 text-purple-600 mb-4"/>
              <p className="text-xl font-semibold text-gray-900">Email Support</p>
              <p className="mt-2 text-gray-600">Get detailed responses to complex inquiries</p>
              <button
                className="mt-4 inline-flex items-center text-purple-600 hover:text-purple-700"
                onClick={() => window.open('mailto:dragonfourtyseven@gmail.com')}
              >
                Send Email
                <span className="ml-2">→</span>
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Resources Section */}
      <motion.div
        className="bg-gray-50 py-16 px-6 lg:px-8"
        variants={stagger}
        initial="initial"
        whileInView="whileInView"
        viewport={{once: true}}
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl">
              Self-Service Resources
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Access our comprehensive knowledge base and community resources
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <resource.icon className="h-8 w-8 text-blue-600 mb-4"/>
                <p className="text-xl font-semibold text-gray-900">{resource.title}</p>
                <p className="mt-2 text-gray-600">{resource.description}</p>
                <button className="mt-4 text-blue-600 hover:text-blue-700">
                  Learn More →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Support Hours */}
      <motion.div
        className="py-16 px-6 lg:px-8"
        {...fadeInUp}
      >
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl bg-blue-600 p-8 md:p-12 lg:p-16">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-white mb-8 md:mb-0">
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">24/7 Support Available</h3>
                <p className="mt-2 text-blue-100">
                  Our global support team is here to help you succeed
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Clock className="h-8 w-8 text-blue-100" />
                <div className="text-white">
                  <p className="font-semibold">Support Hours</p>
                  <p className="text-blue-100">Always Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SupportPage;