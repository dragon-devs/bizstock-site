'use client';
import React, {useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import {Building2, CheckCircle2, CloudCog, Database, LineChart, Settings2, Shield} from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

// Reusable animation variants
const fadeInUp = {
  initial: {opacity: 0, y: 20},
  animate: {opacity: 1, y: 0},
  transition: {duration: 0.5}
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};


const SiteHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{y: -100}}
      animate={{y: 0}}
      transition={{duration: 0.5, ease: "easeOut"}}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container max-w-[72rem] mx-auto sm:p-4 p-2">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
          >
            <Image
              src="/biz-stock-logo.svg"
              className="sm:h-12 sm:w-12 h-10 w-10 -mr-2  "
              alt="Biz Stock"
              width={100}
              height={100}
            />
            <span className="text-base sm:text-2xl font-bold bg-gradient-to-r from-black to-blue-800 bg-clip-text text-transparent">
              BizStock
            </span>
          </motion.div>
          <nav className="hidden md:flex items-center space-x-8">
            {['Features', 'Pricing', 'FAQ'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-blue-600 transition-colors"
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.95}}
                initial={{opacity: 0, x: -20}}
                animate={{opacity: 1, x: 0}}
                transition={{delay: index * 0.1}}
              >
                {item}
              </motion.a>
            ))}
          </nav>
          <div className="flex items-center sm:space-x-4">
            <Link className="w-full sm:w-fit" href='https://app.bizstock.net/signin'>
              <motion.button
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                className=" px-4 py-2 text-blue-600 hover:text-blue-700 transition-colors"
              >
                Login
              </motion.button>
            </Link>
            <Link className="w-full " href='https://app.bizstock.net/signup'>
              <motion.button
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                className=" hidden md:block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4">

      <div className="container mx-auto text-center">
        <motion.div
          className="max-w-3xl mx-auto space-y-4"
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
        >
          <motion.h1
            className="text-5xl md:text-6xl pb-2 leading-none font-bold bg-gradient-to-r from-blue-600 via-blue-800 to-red-600 bg-clip-text text-transparent"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8, delay: 0.2}}
          >
            Revolutionize Your Inventory Management
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8, delay: 0.4}}
          >
            Transform your business with AI-powered inventory control, real-time analytics, and seamless integration
            capabilities.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <Link className="w-full sm:w-fit" href='https://app.bizstock.net/signup'>
              <motion.button
                className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                variants={fadeInUp}
              >
                Start Free Trial
              </motion.button>
            </Link>
            <Link className="w-full sm:w-fit" href='https://dragon-devs.vercel.app'>
              <motion.button
                className="w-full sm:w-auto px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all"
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                variants={fadeInUp}
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          className="mt-16 relative"
          initial={{opacity: 0, y: 40}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8, delay: 0.6}}
        >
          <div
            className="absolute rounded-2xl inset-0 bg-gradient-to-b from-white/90 via-transparent to-white/90 z-10"></div>
          <motion.div
            className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200"
            whileHover={{y: -10}}
            transition={{duration: 0.3}}
          >
            <Image
              src="/bizstock-reports.png"
              alt="BizStock Dashboard"
              className="w-full object-cover"
              width={2000}
              height={2000}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <Database className="w-10 h-10 text-blue-500"/>,
      title: "Smart Inventory Tracking",
      description: "Real-time monitoring of stock levels with AI-powered predictions and automated reordering."
    },
    {
      icon: <LineChart className="w-10 h-10 text-blue-500"/>,
      title: "Advanced Analytics",
      description: "Comprehensive insights into sales trends, inventory turnover, and business performance."
    },
    {
      icon: <CloudCog className="w-10 h-10 text-blue-500"/>,
      title: "Cloud Integration",
      description: "Seamless integration with popular e-commerce platforms and accounting software."
    },
    {
      icon: <Building2 className="w-10 h-10 text-blue-500"/>,
      title: "Multi-location Support",
      description: "Manage multiple warehouses and retail locations from a single dashboard."
    },
    {
      icon: <Shield className="w-10 h-10 text-blue-500"/>,
      title: "Enterprise Security",
      description: "Bank-grade encryption and advanced access controls to protect your data."
    },
    {
      icon: <Settings2 className="w-10 h-10 text-blue-500"/>,
      title: "Customizable Workflow",
      description: "Tailor the system to match your specific business processes and requirements."
    }
  ];

  return (
    <section id="features"
             className="py-20 w-[100vw] relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] bg-gray-50/80">
      <div className="container max-w-[72rem] mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
        >
          <h2 className="text-4xl font-bold mb-4">Powerful Features for Modern Business</h2>
          <p className="text-gray-600">Everything you need to streamline your inventory management and boost
            efficiency.</p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{once: true}}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow"
              variants={fadeInUp}
              whileHover={{
                y: -5,
                transition: {duration: 0.2}
              }}
            >
              <motion.div
                className="mb-4"
                initial={{scale: 0}}
                whileInView={{scale: 1}}
                viewport={{once: true}}
                transition={{delay: index * 0.1}}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "49",
      description: "Perfect for small businesses",
      features: [
        "Up to 1,000 SKUs",
        "2 User Accounts",
        "Basic Analytics",
        "Email Support",
        "Cloud Backup",
        "Mobile App Access"
      ]
    },
    {
      name: "Professional",
      price: "99",
      description: "Ideal for growing companies",
      features: [
        "Up to 10,000 SKUs",
        "10 User Accounts",
        "Advanced Analytics",
        "Priority Support",
        "API Access",
        "Custom Reports"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "249",
      description: "For large scale operations",
      features: [
        "Unlimited SKUs",
        "Unlimited Users",
        "Custom Solutions",
        "24/7 Support",
        "Dedicated Manager",
        "On-premise Option"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
        >
          <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-600">Choose the perfect plan for your business needs</p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{once: true}}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative p-8 rounded-xl ${
                plan.popular ? 'bg-blue-600 text-white' : 'bg-white border border-gray-200'
              }`}
              variants={fadeInUp}
              whileHover={{
                y: -10,
                transition: {duration: 0.2}
              }}
            >
              {plan.popular && (
                <motion.span
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-yellow-400 text-black text-sm rounded-full"
                  initial={{scale: 0}}
                  animate={{scale: 1}}
                  transition={{delay: 0.5}}
                >
                  Most Popular
                </motion.span>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={`mb-6 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className={plan.popular ? 'text-blue-100' : 'text-gray-600'}>/month</span>
              </div>
              <motion.ul
                className="space-y-4 mb-8"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {plan.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center"
                    variants={fadeInUp}
                  >
                    <CheckCircle2 className={`w-5 h-5 mr-2 ${plan.popular ? 'text-blue-100' : 'text-blue-600'}`}/>
                    {feature}
                  </motion.li>
                ))}
              </motion.ul>
              <motion.button
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                className={`w-full py-3 rounded-lg transition-colors ${
                  plan.popular
                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};


const FaqSection = () => {
  const faqs = [
    {
      question: "How easy is it to migrate from my current system?",
      answer: "We provide comprehensive migration tools and dedicated support to ensure a smooth transition from your existing system. Our team will help you import your data and train your staff."
    },
    {
      question: "Is my data secure with BizStock?",
      answer: "Absolutely. We use bank-grade encryption and follow industry best practices for data security. Your data is regularly backed up and stored in secure, redundant locations."
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes, we offer a 30-day free trial with full access to all features. No payment method required to start your trial."
    }
  ];

  return (
    <motion.section
      id="faq"
      className="py-20 w-[100vw] relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] bg-gray-50/80"
      initial="initial"
      whileInView="animate"
      viewport={{once: true, margin: "-100px"}}
    >
      <div className="container max-w-[72rem] mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">Find answers to common questions about BizStock</p>
        </motion.div>
        <motion.div
          className="max-w-3xl mx-auto space-y-6"
          variants={staggerChildren}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-xl transition-shadow"
              variants={fadeInUp}
              whileHover={{scale: 1.02}}
              whileTap={{scale: 0.98}}
            >
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

const CtaSection = () => {
  const buttonVariants = {
    hover: {scale: 1.05},
    tap: {scale: 0.95},
  };

  return (
    <motion.section
      className="py-20 w-[100vw] left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]  bg-gradient-to-r from-blue-600 to-rose-800 text-white overflow-hidden relative"
      initial="initial"
      whileInView="animate"
      viewport={{once: true, margin: "-100px"}}
    >
      <motion.div
        className="absolute inset-0 opacity-30"
        initial={{backgroundPosition: "0% 50%"}}
        animate={{backgroundPosition: "100% 50%"}}
        transition={{duration: 20, repeat: Infinity, repeatType: "reverse"}}
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
        }}
      />
      <div className="container mx-auto px-4 text-center relative">
        <motion.h2
          className="text-4xl font-bold mb-6"
          variants={fadeInUp}
        >
          Ready to Transform Your Business?
        </motion.h2>
        <motion.p
          className="text-xl mb-8 text-blue-100"
          variants={fadeInUp}
        >
          Join thousands of businesses that trust BizStock for their inventory management
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={staggerChildren}
        >
          <Link className="w-full sm:w-fit" href="https://app.bizstock.net">
            <motion.button
              className="px-6 py-2 bg-white text-blue-600 rounded-lg"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Start <span className="font-bold">30-Days</span> Free Trial
            </motion.button>
          </Link>
          <Link className="w-full sm:w-fit" href="https://github.com/dragon-devs/bizstock-app/raw/refs/heads/master/src-tauri/target/release/bundle/nsis/BizStock_1.5.7_x64-setup.exe">
            <motion.button
              className="px-6 py-2 border border-white text-white rounded-lg"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Download BizStock App
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
);
};

const SiteFooter = () => {
  const linkVariants = {
    hover: {x: 5, color: "#ffffff"}
  };

  return (
    <motion.footer
      className="bg-gray-900  w-[100vw] relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] text-gray-400 py-12"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.5}}
    >
      <div className="container max-w-[72rem] mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp}>
            <motion.div
              className="flex items-center -ml-2 mb-4"
              whileHover={{scale: 1.05}}
            >
              <Image
                src="/biz-stock-logo.svg"
                className="sm:h-12 sm:w-12 h-10 w-10 mr-4 filter invert"
                alt="Biz Stock"
                width={100}
                height={100}
              />
              <div className="text-base sm:text-2xl -ml-4 font-bold text-white">BizStock</div>
            </motion.div>
            <p className="text-sm">Modern inventory management for modern business.</p>
          </motion.div>

          {['Product', 'Resources'].map((section, index) => (
            <motion.div key={section} variants={fadeInUp}>
              <h3 className="text-white font-semibold mb-4">{section}</h3>
              <ul className="space-y-2">
                {index === 0 ? (
                  <>
                    <motion.li variants={fadeInUp}>
                      <motion.a
                        href="#"
                        className="block"
                        variants={linkVariants}
                        whileHover="hover"
                      >
                        Careers
                      </motion.a>
                    </motion.li>
                    <motion.li variants={fadeInUp}>
                      <motion.a
                        href="#"
                        className="block"
                        variants={linkVariants}
                        whileHover="hover"
                      >
                        Contact
                      </motion.a>
                    </motion.li>
                  </>
                ) : (
                  <>
                    <motion.li variants={fadeInUp}>
                      <motion.a
                        href="#"
                        className="block"
                        variants={linkVariants}
                        whileHover="hover"
                      >
                        Documentation
                      </motion.a>
                    </motion.li>
                    <motion.li variants={fadeInUp}>
                      <motion.a
                        href="#"
                        className="block"
                        variants={linkVariants}
                        whileHover="hover"
                      >
                        Support
                      </motion.a>
                    </motion.li>
                  </>
                )}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="border-t border-gray-800 mt-12 pt-8 text-sm"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 0.5}}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              variants={fadeInUp}
              initial="initial"
              animate="animate"
            >
              &copy; 2024 BizStock. All rights reserved.
            </motion.p>
            <motion.div
              className="flex space-x-6 mt-4 md:mt-0"
              variants={staggerChildren}
              initial="initial"
              animate="animate"
            >
              {['Privacy Policy', 'Terms of Service', 'Cookies'].map((text) => (
                <motion.a
                  key={text}
                  href="#"
                  variants={linkVariants}
                  whileHover="hover"
                  className="hover:text-white transition-colors"
                >
                  {text}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
        <div
          className="absolute overflow-hidden -z-10 transition-all -top-5 sm:-right-20 right-0 w-72 h-72 bg-rose-500/20 rounded-full blur-3xl"/>
      </div>
    </motion.footer>
  );
};

export default function Home() {
  return (
    <div className="bg-gradient-to-l from-blue-500/40 to-white/0">
      <SiteHeader/>

      <div className="relative flex  max-w-[72rem] mx-auto flex-col">
        <main className="flex-1 ">
          <div
            className="absolute overflow-hidden -z-10 transition-all -top-5 sm:-left-20 right-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"/>
          <div
            className="absolute overflow-hidden -z-10 transition-all -top-5 sm:-right-20 right-0 w-72 h-72 bg-rose-500/20 rounded-full blur-3xl"/>
          <HeroSection/>
          <FeaturesSection/>
          <PricingSection/>
          <FaqSection/>
          <CtaSection/>
        </main>
        <SiteFooter/>
      </div>
    </div>

  );
}