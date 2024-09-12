"use client";

import { motion } from "framer-motion";
import User from "@/assets/human.png";
import Image from "next/image";

export const ActivitesCard = () => {
  return [...Array(4)].map((_, index) => (
    <motion.li
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: index * 0.1 + 0.75,
        ease: "easeInOut",
      }}
      key={`${index}-activities`}
      className="flex justify-start items-start gap-4"
    >
      <Image src={User} alt="user" />
      <div className="flex flex-col justify-start items-start w-full gap-1">
        <p className="text-[18px] font-medium leading-[22.37px] text-[#000000]">
          Invoice creation
        </p>
        <p className="text-sm leading-[22.4px] text-[#697598]">
          Yesterday, 12:05 PM
        </p>
        <div className="text-sm bg-[#F6F8FA] rounded-[16px] space-x-1 w-full p-4">
          <span className="text-[#697598]">Created invoice</span>
          <span className="text-[#1F1F23]">00239434/Olaniyi Ojo Adewale</span>
        </div>
      </div>
    </motion.li>
  ));
};
