import {motion} from "framer-motion";
import Link from "next/link";
import React from "react";
import {fadeInUp, staggerChildren} from "@/components/animate";
import {Button} from "@/components/ui/button";

export const CtaSection = () => {

  return (
    <motion.section
      className="py-20 w-[100vw] left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]  text-foreground overflow-hidden relative"
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
          className="text-xl mb-8 text-foreground/80"
          variants={fadeInUp}
        >
          Join thousands of businesses that trust BizStock for their inventory management
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={staggerChildren}
        >
          <Link  href="https://app.bizstock.net">
            <Button size={"lg"}> Start <span className="font-bold">14-Days</span> Free Trial</Button>
          </Link>
          <Link href="https://github.com/dragon-devs/bizstock-app/raw/refs/heads/master/src-tauri/target/release/bundle/nsis/BizStock_1.5.7_x64-setup.exe">
          <Button variant={"outline"} size={"lg"}>Download Bizstock.exe App</Button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};
