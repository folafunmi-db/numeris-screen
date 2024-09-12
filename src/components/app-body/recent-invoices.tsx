"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { InvoicesCard } from "./invoices-cards";

export const RecentInvoices = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.4,
        delay: 0.25,
        ease: "easeInOut",
      }}
      className="w-full col-span-6 p-[32px] bg-white rounded-[24px] flex flex-col justify-start items-start gap-6"
    >
      <div className="w-full flex justify-between items-center gap-6">
        <p className="text-[#1F1F23] text-[20px] font-medium leading-[24.86px]">
          Recent Invoices
        </p>
        <button className="uppercase whitespace-nowrap text-xs leading-[16px] py-[24px] px-[86px] outline-offset-[-1px] transition bg-[#FFFFFF] hover:bg-[#E3E6EF]/10 outline outline-1 outline-[#E3E6EF] text-[#003EFF] font-medium rounded-[40px]">
          View All invoices
        </button>
      </div>
      <InvoicesCard />
    </motion.div>
  );
};
