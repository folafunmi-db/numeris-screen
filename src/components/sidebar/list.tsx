"use client";

import { motion } from "framer-motion";
import { ItemType } from ".";

export const List = ({ items }: { items: ItemType[] }) => {
  return items.map((el, index) => (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1, ease: "easeInOut" }}
      key={el.label}
      className="w-full"
    >
      <a
        href={el.link}
        className="bg-white w-full text-[#697598] px-4 py-3.5 flex rounded-[32px] relative z-[2] 
							before:absolute before:bg-white before:inset-0 before:z-[1] before:rounded-[inherit]
							after:z-[-1] after:inset-0 after:rounded-[inherit] after:absolute after:w-full 
							after:h-full after:content-[''] after:bg-[#F8F8FB]
							after:transition-transform after:duration-200 after:ease-out after:transform after:scale-100
							after:transform-origin-center 
							hover:after:scale-x-[1.05] hover:after:scale-y-[1.2]"
      >
        <span className="flex items-center gap-2 z-[2] whitespace-nowrap">
          {el.icon}
          {el.label}
        </span>
      </a>
    </motion.li>
  ));
};
