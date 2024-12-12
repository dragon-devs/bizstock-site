import React, {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {ChevronDown} from "lucide-react";

export const FaqSection = () => {
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
      answer: "Yes, we offer a 14-day free trial with full access to all features. No payment method required to start your trial."
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
          {faqs.map((faq, index : any) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="rounded-lg"
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center"
                whileHover={{scale: 1.005}}
                whileTap={{scale: 0.995}}
                initial={{y: 20, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{delay: 0.2, duration: 0.5}}
              >
                <p className="sm:text-lg text-base font-semibold pr-4 leading-none">{faq.question}</p>
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
