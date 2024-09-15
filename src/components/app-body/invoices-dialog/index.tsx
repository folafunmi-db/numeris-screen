"use client";

import { motion } from "framer-motion";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/dropdown";

import { Button } from "../../button";
import { Badge } from "../../badge";
import { Tick } from "./tick";
import { InvoicesDetails } from "./invoice-details";
import { InvoiceActivity } from "./invoice-activity";

export const InvoicesDialog = () => {
  const remindersList = [
    {
      text: (
        <p className="flex flex-row gap-2.5">
          14 days before due date <Tick />
        </p>
      ),
      completed: true,
    },
    {
      text: (
        <p className="flex flex-row gap-2.5">
          7 days before due date <Tick />
        </p>
      ),
      completed: true,
    },
    {
      text: <p className="flex flex-row gap-2.5">3 days before due date</p>,
      completed: false,
    },
    {
      text: <p className="flex flex-row gap-2.5">24 hours before due date</p>,
      completed: false,
    },
    {
      text: <p className="flex flex-row gap-2.5">On the due date</p>,
      completed: false,
    },
  ];

  return (
    <DialogContent className="flex gap-4 flex-col w-[95vw] max-w-[1334px] max-h-[1567px] h-[80svh]">
      <div className="animate-fadeIn flex h-fit flex-row w-full justify-between gap-4">
        <DialogHeader className="h-fit flex flex-col">
          <DialogTitle>Invoice - 1023494 - 2304</DialogTitle>
          <DialogDescription>
            View the details and activity of this invoice
          </DialogDescription>
        </DialogHeader>
        <div className="flex h-fit justify-end items-center gap-6">
          <Button variant={2} className="!leading-[16px] !text-[#003EFF]">
            Download as pdf
          </Button>

          <Button className="!leading-[16px]">Send invoice</Button>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button
                as="div"
                variant={2}
                className="!px-[24px] !text-[#373B47]"
              >
                More
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[262px]" align="end">
              <DropdownMenuItem>Duplicate invoice</DropdownMenuItem>
              <DropdownMenuItem>get sharable link</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="animate-fadeIn ">
        <Badge type={"partial payment"} />
      </div>
      <div className="animate-fadeIn mt-4 flex justify-between items-center gap-3 border-[#E3E6EF] rounded-[24px] border p-[24px]">
        <p className="uppercase text-[#666F77] text-xs">Reminders</p>
        <ul className="flex flex-row justify-end gap-3">
          {remindersList.map((el, index) => (
            <motion.li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.35,
                delay: index * 0.1 + 0.3,
                ease: "easeInOut",
              }}
              key={`${index}-activities`}
              className="flex flex-col justify-start items-start gap-6"
            >
              <Badge
                className={
                  el.completed
                    ? "border-[#E6FFF0] bg-[#E6FFF0] px-[24px] py-[7.5px] rounded-[24px] text-[14px] text-[#373B47] flex"
                    : "border-[#E3E6EF] bg-[#FFFFFF] px-[24px] py-[7.5px] rounded-[24px] text-[14px] text-[#373B47] flex"
                }
              >
                {el.text}
              </Badge>
            </motion.li>
          ))}
        </ul>
      </div>
      <div className="mt-4 overflow-y-auto w-full grid grid-cols-11 gap-[55px]">
        <InvoicesDetails />
        <InvoiceActivity />
      </div>
    </DialogContent>
  );
};
