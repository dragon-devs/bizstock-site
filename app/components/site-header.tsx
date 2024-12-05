'use client';

import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {SiteTagsList} from "@/app/components/social-tags";

export const SiteHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const siteTags = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      id="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container max-w-[72rem] mx-auto sm:p-4 p-2">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/biz-stock-logo.svg"
              className="sm:h-12 sm:w-12 h-10 w-10 -mr-2"
              alt="Biz Stock"
              width={100}
              height={100}
            />
            <span className="text-base tracking-tighter font-bold sm:text-2xl bg-gradient-to-r from-black to-blue-800 bg-clip-text text-transparent">
              BizStock
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <SiteTagsList tags={siteTags} />
          </nav>
          <div className="flex items-center sm:space-x-4">
            <Link className="w-full sm:w-fit" href="https://app.bizstock.net/signin">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:block px-4 rounded-lg py-1 sm:bg-transparent bg-blue-500 text-white sm:text-blue-600 hover:text-gray-200 sm:hover:text-blue-700 transition-colors"
              >
                Login
              </motion.button>
            </Link>
            <Link href="https://app.bizstock.net/register">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundPosition: '100% 0%',
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ backgroundPosition: '0% 0%' }}
                animate={{ backgroundPosition: '50% 50%' }}
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
