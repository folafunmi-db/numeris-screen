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

  const getStyle = (arg: string) => {
    switch (arg) {
      case "paid":
        return "border-[#12904333] bg-[#E6FFF0] px-[12px] py-[7.5px] rounded-[18px] text-[7.5px] text-[#129043] leading-[12px]";
      case "overdue":
        return "border-[#FF566333] bg-[#FFF4F5] px-[24px] py-[7.5px] rounded-[24px] text-[10px] text-[#FF5663] leading-[12.43px]";
      case "draft":
        return "border-[#373B4733] bg-[#F6F8FA] px-[24px] py-[7.5px] rounded-[24px] text-[10px] text-[#373B47] leading-[12.43px]";
      case "pending payment":
        return "border-[#D98F0033] bg-[#FFF8EB] px-[24px] py-[7.5px] rounded-[24px] text-[10px] text-[#D98F00] leading-[12.43px]";

      default:
        return "";
    }
  };

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

                <DialogContent className="w-[95vw] h-[80svh]">
                  <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
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
                <span
                  className={`border uppercase rounded-[24px] font-medium ${getStyle(
                    inner.type
                  )}`}
                >
                  {inner.type}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.li>
      ))}
    </ul>
  );
};
