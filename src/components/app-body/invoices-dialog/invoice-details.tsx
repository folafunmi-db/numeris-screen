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

const itemsInfo = [
  {
    title: "Email Marketing",
    sub: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium ",
    quantity: 10,
    amount: "$1500",
    total: "$15,000.00",
  },
  {
    title: "Video looping effect",
    quantity: 6,
    amount: "$1,110,500",
    total: "$6,663,000.00",
  },
  {
    title: "Graphic design for emails",
    sub: "Tsit voluptatem accusantium ",
    quantity: 7,
    amount: "$2,750",
    total: "$19,250.00",
  },
  {
    title: "Video looping effect",
    quantity: 6,
    amount: "$1,110,500",
    total: "$6,663,000.00",
  },
];

const aggregateList = [
  {
    title: "Subtotal",
    amount: "$6,697,200.00",
  },
  {
    title: "Discount (2.5%)",
    amount: "$167,430.00",
  },
  {
    title: "Total amount due",
    amount: "$6,529,770.00",
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
      className="border-[#E3E6EF] rounded-[40px] border w-full col-span-6 p-[32px] bg-white flex flex-col justify-start items-start gap-6"
    >
      <div className="animate-fadeIn w-full bg-[#FCDDEC] rounded-[40px] px-[24px] py-[16px] text-base leading-[19.57px] text-[#666F77] flex flex-col gap-[32px]">
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

      <div className="animate-fadeIn flex items-center gap-10 w-full">
        <p className="font-medium text-[20px] text-[#1F1F23] leading-[24.86px]">
          Items
        </p>
        <div className="flex-1 bg-[#E3E6EF] h-[1px] w-full" />
      </div>

      <div className="gap-6 flex flex-col w-full">
        {itemsInfo.map((el, index) => (
          <motion.li
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.2,
              delay: index * 0.1 + 0.4,
              ease: "easeInOut",
            }}
            key={`${el.amount} ${index}`}
            className="py-[16px] grid grid-cols-10 gap-4"
          >
            <div className="flex gap-1 flex-col col-span-4">
              <p className="text-[16px] leading-[19.57px] text-[#1F1F23]">
                {el.title}
              </p>
              {el.sub && (
                <p className="text-[13px] leading-[15.9px] text-[#666F77]">
                  {el.sub}
                </p>
              )}
            </div>
            <p className="text-center text-[16px] col-span-1 leading-[19.57px] text-[#1F1F23]">
              {el.quantity}
            </p>
            <p className="text-end text-[16px] col-span-2 leading-[19.57px] text-[#1F1F23]">
              {el.amount}
            </p>
            <p className="text-end text-[16px] col-span-3 leading-[19.57px] text-[#1F1F23]">
              {el.total}
            </p>
          </motion.li>
        ))}

        <div className="gap-[25.5px] flex flex-col w-full">
          {aggregateList.map((el, index) => (
            <motion.li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.2,
                delay: index * 0.1 + 0.4,
                ease: "easeInOut",
              }}
              key={`${el.amount} ${index}`}
              className="items-baseline grid grid-cols-3 gap-4"
            >
              <p></p>
              <p
                className={
                  index === 2
                    ? "py-4 text-start text-[18px] uppercase leading-[22.37px] font-medium text-[#373B47]"
                    : "text-start text-[14px] uppercase leading-[17.12px] text-[#B7BDCF]"
                }
              >
                {el.title}
              </p>
              <p
                className={
                  index === 2
                    ? "py-4 text-end text-[25px] leading-[31.5px] font-bold text-[#373B47]"
                    : "text-end text-[20px] leading-[24.46px] text-[#373B47]"
                }
              >
                {el.amount}
              </p>
            </motion.li>
          ))}
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
                delay: index * 0.1 + 0.54,
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
