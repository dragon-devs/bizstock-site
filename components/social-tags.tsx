import Link from "next/link";
import {motion} from "framer-motion";
import React from "react";


export const SiteTags = ({ href, name, className = 'text-foreground hover:text-primary' }: any) => {
  return (
    <Link href={href} className={`${className} transition-colors`}>
      {name}
    </Link>
  );
};

export const SiteTagsList = ({ tags }: any) => {
  return (
    <>
      {tags.map((item: any, index: any) => (
        <motion.span
          key={index}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <SiteTags href={item.href} name={item.name} />
        </motion.span>
      ))}
    </>
  );
};

