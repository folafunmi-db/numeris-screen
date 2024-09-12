"use client";

import { motion } from "framer-motion";
import { ActivitesCard } from "./activities-cards";

export const RecentActivites = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: 0.7,
        ease: "easeInOut",
      }}
      className="w-full col-span-5 p-[32px] bg-white rounded-[24px] flex flex-col justify-start items-start gap-6"
    >
      <div className="w-full flex justify-between items-center gap-6">
        <p className="text-[#1F1F23] text-[20px] font-medium leading-[24.86px]">
          Recent Activites
        </p>
        <button className="uppercase whitespace-nowrap text-xs leading-[16px] py-[24px] px-[86px] outline-offset-[-1px] transition bg-[#FFFFFF] hover:bg-[#E3E6EF]/10 outline outline-1 outline-[#E3E6EF] text-[#003EFF] font-medium rounded-[40px]">
          View All
        </button>
      </div>
      <div className="w-full flex flex-col gap-6">
        <ActivitesCard />
      </div>
    </motion.div>
  );
};
