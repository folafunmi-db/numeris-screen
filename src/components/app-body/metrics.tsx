"use client";

import { motion } from "framer-motion";
import { MetricListType } from ".";

export const MetricList = ({ list }: { list: MetricListType[] }) => {
  return list.map((el, index) => (
    <motion.li
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
      key={el.title}
      className="px-[40px] py-[32px] bg-white rounded-[24px] flex flex-col justify-start items-start gap-4"
    >
      {el.icon}
      <div className="flex flex-col justify-start items-start gap-2">
        <div className="flex justify-start items-center gap-2">
          <p className="text-xs leading-[20px] text-[#697598]">{el.title}</p>
          <span
            className="px-4 py-3 rounded-[24px] text-sm leading-[17.4px] text-[#373B47] font-medium"
            style={{ background: el.colour }}
          >
            {Number(el.number).toLocaleString().padStart(2, "0")}
          </span>
        </div>
        <div className="text-[#1F1F23] font-medium text-[28px] leading-[34.8px] flex justify-start items-end">
          {el.amount.currency}
          {Number(el.amount.base).toLocaleString()}
          {"."}
          <span className="text-[14px] leading-[17.4px] font-medium text-[#697598] transform translate-y-[-4px]">
            {Number(el.amount.fraction).toLocaleString().padStart(2, "0")}
          </span>
        </div>
      </div>
    </motion.li>
  ));
};
