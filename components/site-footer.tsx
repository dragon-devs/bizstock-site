import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { fadeInUp, staggerChildren } from "@/components/animate";
import { ArrowRight } from "lucide-react";

export const SiteFooter = () => {
  const footerLinks = {
    Product: [
      { name: "Features", href: "/#features", icon: ArrowRight },
      { name: "Testimonials", href: "/#testimonials", icon: ArrowRight },
      { name: "FAQ", href: "/#faq", icon: ArrowRight },
    ],
    Company: [
      { name: "About Us", href: "/about", icon: ArrowRight },
      { name: "Careers", href: "/careers", icon: ArrowRight },
    ],
    Resources: [
      { name: "Blog", href: "/blog", icon: ArrowRight },
      { name: "Documentation", href: "/docs", icon: ArrowRight },
      { name: "Support", href: "/support", icon: ArrowRight },
    ],
  };

  const policyLinks = [
    { text: "Privacy Policy", href: "/privacy-policy" },
    { text: "Terms of Service", href: "/terms-of-service" },
    { text: "Cookies", href: "/cookies" },
  ];

  return (
    <motion.footer
      className="bg-background/95 w-[100vw] relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]  text-foreground/70 py-12 border-t border-foreground/10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container max-w-[72rem] mx-auto px-6">
        {/* Top Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          {/* Brand Section */}
          <motion.div variants={fadeInUp}>
            <Link
              href="/"
              className="flex items-center mb-4 group hover:opacity-90 transition-all"
            >
              <Image
                src="/biz-stock-logo.svg"
                alt="BizStock Logo"
                width={40}
                height={40}
                className="h-10 w-10 dark:invert transition-all"
              />
              <span className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                BizStock
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              POS & Inventory solution for modern businesses to manage sales,
              stock, and analytics all in one place.
            </p>
          </motion.div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <motion.nav
              key={section}
              aria-label={section}
              variants={fadeInUp}
              className="space-y-4"
            >
              <h3 className="text-foreground font-semibold text-base">
                {section}
              </h3>
              <ul className="space-y-2">
                {links.map(({ name, href, icon: Icon }) => (
                  <li key={name}>
                    <Link
                      href={href}
                      className="group flex items-center text-sm text-foreground/80 hover:text-primary transition-all"
                    >
                      <Icon className="h-4 w-4 mr-2 opacity-70 group-hover:opacity-100 transition-all" />
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.nav>
          ))}
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-foreground/10 mt-12 pt-6 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <motion.p
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="text-muted-foreground text-center md:text-left"
            >
              &copy; {new Date().getFullYear()}{" "}
              <span className="font-semibold text-foreground">BizStock</span>.
              All rights reserved.
            </motion.p>

            {/* Developer Credit */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-2 text-muted-foreground"
            >
              <span>Developed by</span>
              <Link
                href="https://dragon-devs.vercel.app"
                className="flex items-center hover:text-primary transition-colors"
              >
                <Image
                  src="/dragondevs-logo.png"
                  alt="DragonDevs Logo"
                  width={20}
                  height={20}
                  className="w-5 h-5 rounded-full mr-1 shadow-sm"
                />
                <span className="font-semibold">DragonDevs</span>
              </Link>
            </motion.div>

            {/* Policy Links */}
            <motion.div
              className="flex flex-wrap justify-center md:justify-end gap-6"
              variants={staggerChildren}
              initial="initial"
              animate="animate"
            >
              {policyLinks.map(({ text, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
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
