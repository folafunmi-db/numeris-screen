"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { Dialog, DialogTrigger } from "@/components/dialog";
import { InvoicesDialog } from "./invoices-dialog";
import { Badge } from "../badge";

export const InvoicesCard = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const recentInvoices = [
    {
      group: "today - 27th November, 2022",
      data: [
        {
          id: "1023494 - 2304",
          date: "May 19th, 2023",
          amount: {
            base: 1311750,
            fraction: 12,
            currency: "$",
          },
          type: "paid",
        },
        {
          id: "1023494 - 2304",
          date: "May 19th, 2023",
          amount: {
            base: 1311750,
            fraction: 12,
            currency: "$",
          },
          type: "overdue",
        },
      ],
    },

    {
      group: "8th december, 2022",
      data: [
        {
          id: "1023494 - 2304",
          date: "May 19th, 2023",
          amount: {
            base: 1311750,
            fraction: 12,
            currency: "$",
          },
          type: "draft",
        },
        {
          id: "1023494 - 2304",
          date: "May 19th, 2023",
          amount: {
            base: 1311750,
            fraction: 12,
            currency: "$",
          },
          type: "pending payment",
        },
        {
          id: "1023494 - 2304",
          date: "May 19th, 2023",
          amount: {
            base: 1311750,
            fraction: 12,
            currency: "$",
          },
          type: "paid",
        },
      ],
    },
  ];

  return (
    <ul ref={ref} className="w-full flex flex-col gap-6">
      {recentInvoices.map((el, index) => (
        <motion.li
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.3,
            delay: index * 0.1 + 0.4,
            ease: "easeInOut",
          }}
          key={`${index}-activities`}
          className="flex flex-col justify-start items-start gap-6"
        >
          <p className="uppercase font-medium text-xs leading-[16px] text-[#1F1F23]">
            {el.group}
          </p>

          {el.data.map((inner, innerIndex) => (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.3,
                delay: innerIndex * 0.1 + 0.6,
                ease: "easeInOut",
              }}
              key={`${index}-activities-${innerIndex}`}
              className="pl-8 w-full gap-[4px] grid grid-cols-3"
            >
              <Dialog>
                <DialogTrigger className="font-medium text-[#373B47] text-[14px] leading-[25.2px] flex flex-col justify-start items-start gap-1">
                  <span className="">Invoice -</span>
                  <span className="">{inner.id}</span>
                </DialogTrigger>

                <InvoicesDialog />
              </Dialog>

              <div className="text-[#666F77] text-[10px] leading-[20px] flex flex-col justify-start items-start gap-1">
                <span className="font-normal">DUE DATE</span>
                <span className="text-[14px] font-medium leading-[20px]">
                  {inner.date}
                </span>
              </div>
              <div className="text-[#373B47] text-[14px] leading-[25.2px] flex flex-col justify-start items-end gap-2">
                <span className="text-[18px] font-medium leading-[22.37px]">
                  {inner.amount.currency}
                  {inner.amount.base}.{inner.amount.fraction}
                </span>
                <Badge type={inner.type} />
              </div>
            </motion.div>
          ))}
        </motion.li>
      ))}
    </ul>
  );
};
