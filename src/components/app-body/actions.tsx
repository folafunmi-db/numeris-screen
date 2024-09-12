"use client";

import { motion } from "framer-motion";
import { ActionListType } from ".";

export const ActionList = ({ list }: { list: ActionListType[] }) => {
  return list.map((el, index) => (
    <motion.li
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1 + 0.3,
        ease: "easeInOut",
      }}
      key={el.title}
      className="px-[40px] py-[32px] bg-white rounded-[24px] flex flex-col justify-start items-start gap-4"
      style={{ background: el.type === 1 ? "#003EFF" : "#FFFFFF" }}
    >
      {el.icon}
      <p
        className="text-[22px] leading-[27.35px] font-medium"
        style={{ color: el.type === 1 ? "#FFFFFF" : "#373B47" }}
      >
        {el.title}
      </p>
      <p
        className="text-sm leading-[22.4px]"
        style={{ color: el.type === 1 ? "#FFFFFF" : "#697598" }}
      >
        {el.sub}
      </p>
    </motion.li>
  ));
};
