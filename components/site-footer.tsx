import {motion} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import {SiteTags} from "@/components/social-tags";
import {fadeInUp, staggerChildren} from "@/components/animate";

export const SiteFooter = () => {
  const footerLinks = {
    Product: [
      {name: "Features", href: "/#features"},
      {name: "Testimonials", href: "/#testimonials"},
      {name: "FAQ", href: "/#faq"},
    ],
    Company: [
      {name: "About Us", href: "/about"},
      {name: "Careers", href: "/careers"},
    ],
    Resources: [
      {name: "Blog", href: "/blog"},
      {name: "Documentation", href: "/docs"},
      {name: "Support", href: "/support"},
    ],
  };

  const linkVariants = {
    hover: {x: 5, color: "f"},
  };

  return (
    <motion.footer
      className="bg-background/90 w-[100vw] relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] text-foreground/50 py-12"
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
            <Link href="#header" className="flex items-center -ml-2 mb-4">
              <Image
                src="/biz-stock-logo.svg"
                className="h-8 w-8 mr-4 filter invert"
                alt="Biz Stock"
                width={100}
                height={100}
              />
              <div className="text-base -ml-4 font-semibold text-foreground tracking-tighter">
                BizStock
              </div>
            </Link>
            <p className="text-sm">POS & Inventory solution for modern businesses.</p>
          </motion.div>

          {Object.entries(footerLinks).map(([section, links]) => (
            <motion.div key={section} variants={fadeInUp}>
              <p className="text-foreground font-semibold mb-4">{section}</p>
              <ul className="space-y-2">
                {links.map(({name, href}) => (
                  <motion.li key={name} variants={fadeInUp}>
                    <SiteTags href={href} name={name} className="text-foreground/60 hover:text-foreground"/>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="border-t border-foreground/30 mt-12 pt-8 text-sm"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 0.5}}
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
                  className="flex items-center hover:underline hover:text-foreground transition-all font-semibold"
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
                {text: "Privacy Policy", href: "/privacy-policy"},
                {text: "Terms of Service", href: "/terms-of-service"},
                {text: "Cookies", href: "/cookies"},
              ].map(({text, href}) => (
                <Link key={href} href={href} className="hover:text-foreground transition-colors">
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
