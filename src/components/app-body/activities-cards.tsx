"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { InvoiceActivityCard } from "./invoice-activity-card";

export const ActivitesCard = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="w-full flex flex-col gap-6">
      {[...Array(4)].map((_, index) => (
        <motion.li
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.3,
            delay: index * 0.1 + 0.4,
            ease: "easeInOut",
          }}
          key={`${index}-activities`}
          className="list-none"
        >
          <InvoiceActivityCard
            date="Yesterday, 12:05 PM"
            title="Invoice creation"
          >
            <span className="text-[#697598]">Created invoice</span>
            <span className="text-[#1F1F23] font-medium">
              00239434/Olaniyi Ojo Adewale
            </span>
          </InvoiceActivityCard>
        </motion.li>
      ))}
    </div>
  );
};
