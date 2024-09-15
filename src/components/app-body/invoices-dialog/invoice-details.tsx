"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Leaf from "@/assets/leaf.png";

const listVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.4,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

const paymentInfo = [
  {
    name: "Account name",
    value: "1023902390",
  },
  {
    name: "account number",
    value: "March 30th, 2023",
  },
  {
    name: "Ach routing no",
    value: "May 19th, 2023",
  },
  {
    name: "Bank Name",
    value: "USD ($)",
  },
  {
    name: "bank address",
    value: "1023902390",
  },
  {
    name: "account number",
    value: "March 30th, 2023",
  },
];

const invoiceInfo = [
  {
    name: "invoice no",
    value: "1023902390",
  },
  {
    name: "Issue date",
    value: "March 30th, 2023",
  },
  {
    name: "Due date",
    value: "May 19th, 2023",
  },
  {
    name: "Billing currency",
    value: "USD ($)",
  },
];

export const InvoicesDetails = () => {
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
      className="border-[#E3E6EF] rounded-[24px] border w-full col-span-6 p-[32px] bg-white flex flex-col justify-start items-start gap-6"
    >
      <div className="animate-fadeIn w-full bg-[#FCDDEC] rounded-[24px] px-[24px] py-[16px] text-base leading-[19.57px] text-[#666F77] flex flex-col gap-[32px]">
        <div className="w-full flex justify-between gap-2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={listVariants}
            className="text-base leading-[19.57px] text-[#666F77] flex flex-col gap-4"
          >
            <motion.span
              variants={childVariants}
              className="font-medium text-[#697598] text-[12px] leading-[14.92xp] uppercase"
            >
              Sender
            </motion.span>
            <motion.div variants={childVariants} className="gap-4 flex">
              <div className="flex object-contain justify-center items-center rounded-[16px] w-[60px] h-[60px] bg-white">
                <Image quality={100} alt="leaf" src={Leaf} />
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-medium text-base text-[#1F1F23] leading-[19.89px]">
                  Fabulous Enterprise
                </p>
                <p className="text-[12px] text-[#697598] leading-[14.68px]">
                  +386 989 271 3115
                </p>
                <p className="text-[12px] text-[#697598] leading-[14.68px]">
                  1331 Hart Ridge Road 48436 Gaines, MI{" "}
                </p>
                <p className="text-[12px] text-[#697598] leading-[14.68px]">
                  info@fabulousenterise.co
                </p>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={listVariants}
            className="text-base leading-[19.57px] text-[#666F77] flex flex-col gap-4"
          >
            <motion.span
              variants={childVariants}
              className="font-medium text-[#697598] text-[12px] leading-[14.92xp] uppercase"
            >
              Customer
            </motion.span>
            <motion.div
              variants={childVariants}
              className="flex flex-col gap-2"
            >
              <p className="font-medium text-base text-[#1F1F23] leading-[19.89px]">
                Olaniyi Ojo Adewale
              </p>
              <p className="text-[12px] text-[#697598] leading-[14.68px]">
                +386 989 271 3115
              </p>
              <p className="text-[12px] text-[#697598] leading-[14.68px]">
                info@fabulousenterise.co
              </p>
            </motion.div>
          </motion.div>
        </div>
        <div className="w-full text-base leading-[19.57px] text-[#666F77] flex flex-col gap-2">
          <span className="font-medium text-[#697598] text-[12px] leading-[14.92xp] uppercase">
            Invoice details
          </span>
          <ul className="grid grid-cols-4 gap-4 w-full">
            {invoiceInfo.map((el, index) => (
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.2,
                  delay: index * 0.1 + 0.4,
                  ease: "easeInOut",
                }}
                key={`${el.name} ${index}`}
                className="flex flex-col gap-1"
              >
                <p className="text-[10px] leading-[20px] text-[#666F77] uppercase">
                  {el.name}
                </p>
                <p className="text-[12px] leading-[20px] text-[#1F1F23] font-medium">
                  {el.value}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full bg-[#FFFFFF] border border-[#E3E6EF] rounded-[24px] px-[24px] py-[16px] text-base leading-[19.57px] text-[#666F77] flex flex-col gap-2">
        <span className="font-medium text-[#697598] text-[12px] leading-[14.92xp] uppercase">
          Payment information
        </span>
        <ul className="grid grid-cols-4 gap-4 w-full">
          {paymentInfo.map((el, index) => (
            <motion.li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.2,
                delay: index * 0.1 + 0.4,
                ease: "easeInOut",
              }}
              key={`${el.name} ${index}`}
              className="flex flex-col gap-1"
            >
              <p className="text-[10px] leading-[20px] text-[#666F77] uppercase">
                {el.name}
              </p>
              <p className="text-[12px] leading-[20px] text-[#1F1F23] font-medium">
                {el.value}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={listVariants}
        className="w-full min-h-[99px] bg-[#F6F8FA] rounded-[24px] px-[24px] py-[16px] text-base leading-[19.57px] text-[#666F77] flex flex-col"
      >
        <motion.span
          variants={childVariants}
          className="text-[#B7BDCF] text-[14px] leading-[17.12px]"
        >
          NOTE
        </motion.span>
        <motion.p className="" variants={childVariants}>
          Thank you for your patronage
        </motion.p>
      </motion.div>
    </motion.div>
  );
};
