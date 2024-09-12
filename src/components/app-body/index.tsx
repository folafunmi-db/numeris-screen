import Image from "next/image";
import { GridIcon } from "../icons/grid";
import { Navbar } from "../navbar";
import { MetricList } from "./metrics";
import Money from "@/assets/money.png";
import { ChangeIcon } from "../icons/change";
import { PeopleIcon } from "../icons/people";
import { ActionList } from "./actions";
import { RecentInvoices } from "./recent-invoices";
import { RecentActivites } from "./recent-activities";

export type MetricListType = {
  title: string;
  icon: JSX.Element;
  colour: string;
  number: number;
  amount: {
    base: number;
    fraction: number;
    currency: string;
  };
};

export type ActionListType = {
  icon: JSX.Element;
  title: string;
  sub: string;
  type: 1 | 2;
};

export const AppBody = () => {
  const metricsList: MetricListType[] = [
    {
      title: "Total Paid",
      icon: <GridIcon />,
      colour: "#B6FDD3",
      number: 1289,
      amount: {
        base: 4120102,
        fraction: 76,
        currency: "$",
      },
    },
    {
      title: "Total Overdue",
      icon: <GridIcon />,
      colour: "#FFB7BD",
      number: 13,
      amount: {
        base: 23000,
        fraction: 13,
        currency: "$",
      },
    },
    {
      title: "Total Draft",
      icon: <GridIcon />,
      colour: "#D9D9E0",
      number: 8,
      amount: {
        base: 12200,
        fraction: 0,
        currency: "$",
      },
    },
    {
      title: "Total Unpaid",
      icon: <GridIcon />,
      colour: "#F8E39B",
      number: 6,
      amount: {
        base: 87102,
        fraction: 0,
        currency: "$",
      },
    },
  ];

  const actionsList: ActionListType[] = [
    {
      icon: <Image alt="money" src={Money} />,
      title: "Create New Invoice",
      sub: "Create new invoices easily",
      type: 1,
    },
    {
      icon: <ChangeIcon />,
      title: "Change Invoice settings",
      sub: "Customise your invoices",
      type: 2,
    },
    {
      icon: <PeopleIcon />,
      title: "Manage Customer list",
      sub: "Add and remove customers",
      type: 2,
    },
  ];

  return (
    <div className="pl-[280px] flex justify-center w-full">
      <div className="px-10 max-w-[90rem] mx-auto gap-10 flex flex-col w-full">
        <Navbar />

        <div className="animate-fadeIn w-full flex justify-between items-center gap-2 flex-wrap">
          <p className="font-medium text-[32px] text-[#1F1F23] leading-[39.78px]">
            Invoice
          </p>
          <div className="animate-fadeIn flex justify-end items-center gap-[32px] flex-wrap">
            <button className="uppercase text-sm leading-[17.4px] py-[24px] px-[86px] outline-offset-[-1px] transition bg-[#FFFFFF] hover:bg-[#E3E6EF]/10 outline outline-1 outline-[#E3E6EF] text-[#697598] font-medium rounded-[40px]">
              see what’s new
            </button>
            <button className="uppercase text-base leading-[19.89px] py-[24px] px-[86px] transition bg-[#003EFF] hover:bg-[#003EFF]/[.90] text-white rounded-[40px] font-medium">
              CREATE
            </button>
          </div>
        </div>

        <div className="w-full gap-[24px] grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
          <MetricList list={metricsList} />
        </div>

        <div className="animate-fadeIn w-full flex justify-start items-center gap-6 flex-wrap">
          <p className="font-medium text-[20px] leading-[24.86px] text-[#1F1F23]">
            Invoice
          </p>
          <div className="h-[2px] bg-white flex-1" />
        </div>

        <div className="w-full gap-[24px] grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))]">
          <ActionList list={actionsList} />
        </div>

        <div className="w-full grid grid-cols-11 gap-8 mb-10">
          <RecentInvoices />
          <RecentActivites />
        </div>
      </div>
    </div>
  );
};
