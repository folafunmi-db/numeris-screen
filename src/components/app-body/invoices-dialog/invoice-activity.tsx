"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { InvoiceActivityCard } from "../invoice-activity-card";

export const InvoiceActivity = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const list = [
    {
      name: "You",
      time: "Today, 12:20 PM",
      message: (
        <>
          <span className="text-[#697598]">Created invoice</span>
          <span className="text-[#1F1F23] font-medium">
            00239434/Olaniyi Ojo Adewale
          </span>
        </>
      ),
    },
    {
      name: "You",
      time: "Today, 12:20 PM",
      message: (
        <>
          <span className="text-[#697598]">Sent invoice</span>
          <span className="text-[#1F1F23] font-medium">
            00239434/Olaniyi Ojo Adewale
          </span>
          <span className="text-[#697598]">to</span>
          <span className="text-[#1F1F23] font-medium">
            00239434/Olaniyi Ojo Adewale
          </span>
        </>
      ),
    },
    {
      name: "Payment Confirmed",
      time: "Today, 12:20 PM",
      message: (
        <>
          <span className="text-[#697598]">
            You manually confirmed a partial payment of
          </span>
          <span className="text-[#1F1F23] font-medium"> $503,000.00</span>
        </>
      ),
    },
    {
      name: "Payment Confirmed",
      time: "Today, 12:20 PM",
      message: (
        <>
          <span className="text-[#697598]">
            You manually confirmed a partial payment of
          </span>
          <span className="text-[#1F1F23] font-medium"> $6,000,000.00</span>
        </>
      ),
    },
    {
      name: "You",
      time: "Today, 12:20 PM",
      message: (
        <>
          <span className="text-[#697598]">Sent invoice</span>
          <span className="text-[#1F1F23] font-medium">
            00239434/Olaniyi Ojo Adewale
          </span>
          <span className="text-[#697598]">to</span>
          <span className="text-[#1F1F23] font-medium">
            00239434/Olaniyi Ojo Adewale
          </span>
        </>
      ),
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.35,
        delay: 0.4,
        ease: "easeInOut",
      }}
      className="w-full col-span-5 bg-white rounded-[24px] flex flex-col justify-start items-start gap-6"
    >
      <p className="text-[#1F1F23] text-[20px] leading-[24.2px] font-medium">
        Invoice Activity
      </p>
      {list.map((el, index) => (
        <motion.li
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.3,
            delay: index * 0.1 + 0.6,
            ease: "easeInOut",
          }}
          key={`${index}-activities`}
          className="list-none"
        >
          <InvoiceActivityCard date={el.time} title={el.name}>
            {el.message}
          </InvoiceActivityCard>
        </motion.li>
      ))}
    </motion.div>
  );
};
