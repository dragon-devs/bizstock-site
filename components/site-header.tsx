'use client';

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { SiteTagsList } from "@/components/social-tags";
import { Button } from "@/components/ui/button";
import {
  EditIcon,
  LogInIcon,
  Star,
  MessageCircleQuestion,
  Sparkles, Rocket,
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export const SiteHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const siteTags = [
    { name: 'Features', href: '/#features', icon: <Sparkles className="w-4 h-4" /> },
    { name: 'Testimonials', href: '/#testimonials', icon: <Star className="w-4 h-4" /> },
    { name: 'FAQ', href: '/#faq', icon: <MessageCircleQuestion className="w-4 h-4" /> },
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
        isScrolled ? 'backdrop-blur-md bg-background/65' : 'bg-transparent'
      }`}
    >
      <div className="container max-w-[72rem] mx-auto sm:p-4 p-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
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

          {/* Navigation Links */}
          <nav className="hidden md:flex text-sm items-center space-x-8 text-foreground">
            {siteTags.map((tag) => (
              <Link
                key={tag.name}
                href={tag.href}
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                {tag.icon}
                {tag.name}
              </Link>
            ))}
          </nav>
          {/* Action Buttons */}
          <div className="flex items-center gap-1.5 md:gap-3">
            <ThemeToggle />
            {/* Login Button */}
            <Link href="https://app.bizstock.net/auth/signin">
              <Button
                variant="outline"
                className="flex items-center gap-2 md:w-auto w-9 px-2 py-1 sm:px-4 sm:py-2 bg-transparent border-0 md:border md:border-input md:bg-background shadow-none"
              >
                <LogInIcon className="w-4 h-4" />
                <span className="hidden sm:inline">Login</span>
              </Button>
            </Link>

            {/* Get Started Button */}
            <Link href="https://app.bizstock.net/auth/register">
              <Button className="flex items-center gap-2">
                <Rocket className="w-4 h-4" />
                <span>Get Started</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
};
