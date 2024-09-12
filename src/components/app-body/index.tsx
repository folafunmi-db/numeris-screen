import { GridIcon } from "../icons/grid";
import { Navbar } from "../navbar";

export const AppBody = () => {
  const metricsList = [
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

  return (
    <div className="px-10 max-w-[80rem] mx-auto gap-10 flex flex-col w-full">
      <Navbar />
      <div className="w-full flex justify-between items-center gap-2 flex-wrap">
        <p className="font-medium text-[32px] text-[#1F1F23] leading-[39.78px]">
          Invoice
        </p>
        <div className="flex justify-end items-center gap-[32px] flex-wrap">
          <button className="uppercase text-sm leading-[17.4px] py-[24px] px-[86px] outline-offset-[-1px] transition bg-[#FFFFFF] hover:bg-[#E3E6EF]/10 outline outline-1 outline-[#E3E6EF] text-[#697598] font-medium rounded-[40px]">
            see what’s new
          </button>
          <button className="uppercase text-base leading-[19.89px] py-[24px] px-[86px] transition bg-[#003EFF] hover:bg-[#003EFF]/[.90] text-white rounded-[40px] font-medium">
            CREATE
          </button>
        </div>
      </div>
      <div className="w-full gap-[24px] grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
        {metricsList.map((el) => (
          <div
            key={el.title}
            className="px-[40px] py-[32px] bg-white rounded-[24px] flex flex-col justify-start items-start gap-4"
          >
            {el.icon}
            <div className="flex flex-col justify-start items-start gap-2">
              <div className="flex justify-start items-center gap-2">
                <p className="text-xs leading-[20px] text-[#697598]">
                  {el.title}
                </p>
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
          </div>
        ))}
      </div>
    </div>
  );
};
