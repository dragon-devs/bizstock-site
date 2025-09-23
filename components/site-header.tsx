'use client';

import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {SiteTagsList} from "@/components/social-tags";
import {Button} from "@/components/ui/button";
import {EditIcon} from "lucide-react";
import {ThemeToggle} from "@/components/ThemeToggle";

export const SiteHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const siteTags = [
    { name: 'Features', href: '/#features' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'FAQ', href: '/#faq' },
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
        isScrolled ? ' backdrop-blur-md bg-background/65' : 'bg-transparent'
      }`}
    >
      <div className="container max-w-[72rem] mx-auto sm:p-4 p-2">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/biz-stock-logo.svg"
              className="w-8 h-8 -mr-1 dark:invert"
              alt="Biz Stock"
              width={100}
              height={100}
            />
            <span className="text-base tracking-tighter font-bold text-foreground bg-clip-text hover:text-primary">
              BizStock
            </span>
          </Link>
          <nav className="hidden md:flex text-sm items-center space-x-8 text-foreground">
            <SiteTagsList tags={siteTags} icon={<EditIcon/>}  />
          </nav>
          <div className="flex items-center sm:space-x-4">
            <ThemeToggle/>
            <Link href="https://app.bizstock.net/auth/signin">
             <Button variant={"ghost"}>Login</Button>
            </Link>
            <Link href="https://app.bizstock.net/auth/register">
            <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
};
