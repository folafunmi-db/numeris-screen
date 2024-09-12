"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/dialog";

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
    <div ref={ref} className="w-full flex flex-col gap-6">
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent className="w-[90vw] h-[80svh]">
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      {[...Array(4)].map((_, index) => (
        <motion.li
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.3,
            delay: index * 0.1 + 0.4,
            // delay: index * 0.1 + 0.75,
            ease: "easeInOut",
          }}
          key={`${index}-activities`}
          className="flex justify-start items-start gap-4"
        >
          <div className="flex flex-col justify-start items-start w-full gap-1">
            <p className="text-[18px] font-medium leading-[22.37px] text-[#000000]">
              Invoice creation
            </p>
            <p className="text-sm leading-[22.4px] text-[#697598]">
              Yesterday, 12:05 PM
            </p>
            <div className="text-sm bg-[#F6F8FA] rounded-[16px] space-x-1 w-full p-4">
              <span className="text-[#697598]">Created invoice</span>
              <span className="text-[#1F1F23]">
                00239434/Olaniyi Ojo Adewale
              </span>
            </div>
          </div>
        </motion.li>
      ))}
    </div>
  );
};
