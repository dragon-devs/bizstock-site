'use client';
import React, {useEffect, useRef, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {
  BarChart2,
  Building2,
  CheckCircle2,
  ChevronDown,
  CloudCog,
  Database,
  Layers,
  LineChart,
  Link2, Quote,
  Settings2,
  Shield,
  TrendingDown
} from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import {PolicySection} from "@/app/components/terms";

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


export const SiteHeader = () => {
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
        isScrolled ? 'bg-white/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container max-w-[72rem] mx-auto sm:p-4 p-2">
        <div className="flex items-center justify-between">
          <Link
            href="#"
            className="flex items-center space-x-2"
          >
            <Image
              src="/biz-stock-logo.svg"
              className="sm:h-12 sm:w-12 h-10 w-10 -mr-2  "
              alt="Biz Stock"
              width={100}
              height={100}
            />
            <span
              className="text-base tracking-tighter font-bold sm:text-2xl bg-gradient-to-r from-black to-blue-800 bg-clip-text text-transparent">
              BizStock
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            {['Features', 'Pricing', 'FAQ'].map((item, index) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <motion.span
                  whileHover={{scale: 1.1}}
                  whileTap={{scale: 0.95}}
                  initial={{opacity: 0, x: -20}}
                  animate={{opacity: 1, x: 0}}
                  transition={{delay: index * 0.1}}
                >
                  {item}
                </motion.span>
              </Link>
            ))}
          </nav>
          <div className="flex items-center sm:space-x-4">
            <Link className="w-full sm:w-fit" href='https://app.bizstock.net/signin'>
              <motion.button
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                className=" hidden md:block  px-4 rounded-lg py-1 sm:bg-transparent bg-blue-500 text-white sm:text-blue-600 hover:text-gray-200 sm:hover:text-blue-700 transition-colors"
              >
                Login
              </motion.button>
            </Link>
            <Link className=" " href='https://app.bizstock.net/register'>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundPosition: "100% 0%",
                }}
                whileTap={{scale: 0.95}}
                initial={{backgroundPosition: "0% 0%"}}
                animate={{backgroundPosition: "50% 50%"}}
                className="w-28 py-2 text-sm text-white rounded-lg bg-gradient-to-r from-blue-600 to-rose-600 bg-[length:200%_200%] transition-all"
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
    <section className="pt-32 pb-8 sm:pb-16 px-4">

      <div className="container mx-auto text-center">
        <motion.div
          className="max-w-3xl mx-auto space-y-4"
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
        >
          <motion.h1
            className="text-5xl md:text-6xl pb-2 leading-none font-black tracking-tighter bg-gradient-to-r from-blue-600 via-blue-800 to-red-600 bg-clip-text text-transparent"
            initial={{y: -20, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{delay: 0.1, duration: 0.5}}
          >
            Revolutionize Your Inventory Management
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8, delay: 0.4}}
          >
              Revolutionize your inventory management with cutting-edge tools, real-time analytics, and seamless
              integrations to transform the way you handle your stock.
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
          className="sm:mt-16 mt-8 relative"
          initial={{opacity: 0, y: 40}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8, delay: 0.6}}
        >
          <div
            className="absolute rounded-2xl inset-0 sm:bg-gradient-to-b from-white/20 via-transparent to-white/20 z-10"></div>
          <motion.div
            className="sm:rounded-2xl rounded-lg overflow-hidden shadow-2xl border border-b-gray-100"
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
                transition={{delay: 0.3, duration: 0.5}}
              >
                {feature.icon}
              </motion.div>
              <motion.h3
                initial={{x: -20, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{delay: 0.4, duration: 0.5}}
                className="text-xl font-semibold mb-2 tracking-tighter">
                {feature.title}
              </motion.h3>
              <motion.p
                initial={{x: -20, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{delay: 0.5, duration: 0.5}}
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

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "4900",
      description: "Perfect for small businesses",
      features: [
        "Up to 1,000 SKUs",
        "1 User Accounts",
        "Basic Analytics",
        "Email Support",
        "Cloud Backup",
      ]
    },
    {
      name: "Professional",
      price: "9900",
      description: "Ideal for growing companies",
      features: [
        "Up to 5,000 SKUs",
        "5 User Accounts",
        "Advanced Analytics",
        "Priority Support",
        "API Access",
        "Custom Reports"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "24900",
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
          <h2 className="text-4xl font-bold mb-4 tracking-tighter">Simple, Transparent Pricing</h2>
          <p className="text-gray-600">Choose the perfect plan for your business needs</p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{once: true}}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative p-8 rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-shadow ${
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
                <span className="text-4xl font-bold">{plan.price}<span className="text-sm font-bold ">PKR</span></span>
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
              <Link href='#'>
                <motion.button
                  whileHover={{scale: 1.05}}
                  whileTap={{scale: 0.95}}
                  className={`w-full px-4 py-2 rounded-lg transition-colors ${
                    plan.popular
                      ? 'bg-white text-blue-600 hover:bg-blue-50'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Get Started
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const SEOContentSection = () => {
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


const TestimonialsSection = () => {
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
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } }
      }}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          className="text-4xl font-bold mb-6 sm:mb-12 text-center tracking-tighter"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
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
                  transition={{delay: 0.4, duration: 0.5}}
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

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

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
    },
    {
      question: "Can I customize the system to fit my business needs?",
      answer: "Yes, BizStock is highly customizable. You can configure modules, reports, and workflows to match your unique business requirements."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer 24/7 customer support through chat, email, and phone. Our knowledge base and video tutorials are also available to help you navigate the platform."
    },
    {
      question: "Does BizStock integrate with other tools?",
      answer: "Yes, BizStock integrates seamlessly with a variety of tools, including accounting software, e-commerce platforms, and payment gateways."
    },
    {
      question: "Is BizStock suitable for small businesses?",
      answer: "Definitely. BizStock is designed to be scalable, making it suitable for small businesses, growing companies, and large enterprises alike."
    },
    {
      question: "Can I access BizStock on mobile devices?",
      answer: "Yes, BizStock is fully responsive and can be accessed on any device, including smartphones and tablets, for on-the-go convenience."
    },
    {
      question: "How often do you release updates or new features?",
      answer: "We regularly release updates based on user feedback and industry trends. All updates are automatically applied at no additional cost."
    },
    {
      question: "What happens if I decide to stop using BizStock?",
      answer: "If you decide to discontinue, you can export all your data in a compatible format. We ensure a hassle-free exit process."
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
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="rounded-lg "
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center"
                whileHover={{scale: 1.005}}
                whileTap={{scale: 0.995}}
              >
                <h3 className="sm:text-lg text-base font-semibold pr-4 leading-none">{faq.question}</h3>
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
          className="text-4xl font-bold mb-6 tracking-tighter"
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
              className="px-6 w-full py-2 bg-white text-blue-600 rounded-lg"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Start <span className="font-bold">30-Days</span> Free Trial
            </motion.button>
          </Link>
          <Link className="w-full sm:w-fit"
                href="https://github.com/dragon-devs/bizstock-app/raw/refs/heads/master/src-tauri/target/release/bundle/nsis/BizStock_1.5.7_x64-setup.exe">
            <motion.button
              className="px-6 w-full py-2 border border-white text-white rounded-lg"
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
  const footerLinks = {
    Product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "FAQ", href: "#faq" },
    ],
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
    ],
    Resources: [
      { name: "Blog", href: "/blog" },
      { name: "Documentation", href: "/docs" },
      { name: "Support", href: "/support" },
    ],
  };

  const linkVariants = {
    hover: { x: 5, color: "#ffffff" },
  };

  return (
    <motion.footer
      className="bg-gray-900 w-[100vw] relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] text-gray-400 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container max-w-[72rem] mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp}>
            <Link href="/" className="flex items-center -ml-2 mb-4">
              <Image
                src="/biz-stock-logo.svg"
                className="sm:h-12 sm:w-12 h-10 w-10 mr-4 filter invert"
                alt="Biz Stock"
                width={100}
                height={100}
              />
              <div className="text-base sm:text-2xl -ml-4 font-bold text-white tracking-tighter">
                BizStock
              </div>
            </Link>
            <p className="text-sm">Modern inventory management for modern business.</p>
          </motion.div>

          {Object.entries(footerLinks).map(([section, links]) => (
            <motion.div key={section} variants={fadeInUp}>
              <h3 className="text-white font-semibold mb-4">{section}</h3>
              <ul className="space-y-2">
                {links.map(({ name, href }) => (
                  <motion.li key={name} variants={fadeInUp}>
                    <Link href={href} className="block hover:text-white transition-all">
                      {name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="border-t border-gray-800 mt-12 pt-8 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="flex gap-2 flex-col md:flex-row justify-center items-center leading-none"
            >
              <span>&copy; 2024 BizStock. All rights reserved.</span>
              <span className="flex gap-1 items-center">
                <span className="text-muted-foreground">developed by</span>
                <Link
                  className="flex items-center hover:underline hover:text-white transition-all font-semibold"
                  href="https://dragon-devs.vercel.app"
                >
                  <Image
                    src="/dragondevs-logo.png"
                    alt="dragon"
                    width={100}
                    height={100}
                    className="w-4 h-4 rounded-full mr-1"
                  />
                  <span className="drop-shadow-[0_5px_10px_rgba(59,130,246,1)]">dragondevs</span>
                </Link>
              </span>
            </motion.p>
            <motion.div
              className="flex space-x-6 mt-4 md:mt-0"
              variants={staggerChildren}
              initial="initial"
              animate="animate"
            >
              {[
                { text: "Privacy Policy", href: "/privacy-policy" },
                { text: "Terms & Conditions", href: "/terms-and-conditions" },
                { text: "Cookies", href: "/cookies" },
              ].map(({ text, href }) => (
                <Link key={href} href={href} className="hover:text-white transition-colors">
                  {text}
                </Link>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default function Home() {
  return (
    <div className="bg-gradient-to-l from-blue-500/40 to-white/0">

      <div className="flex max-w-[72rem] mx-auto flex-col">
        <main className="flex-1 ">
          <div
            className="absolute -z-10 transition-all -top-5 sm:-left-20 right-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"/>
          <div
            className="absolute -z-10 transition-all -top-5 right-0 w-72 h-72 bg-rose-500/20 rounded-full blur-3xl"/>
          <HeroSection/>
          <FeaturesSection/>
          <PricingSection/>
          <SEOContentSection/>
          <TestimonialsSection/>
          <FaqSection/>
          <CtaSection/>
        </main>
        <SiteFooter/>
      </div>
    </div>

  );
}