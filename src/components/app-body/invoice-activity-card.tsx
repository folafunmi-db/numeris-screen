import User from "@/assets/human.png";
import Image from "next/image";

type Props = {
  title: string;
  date: string;
  children: React.ReactNode;
};

export const InvoiceActivityCard = (props: Props) => {
  return (
    <div className="flex justify-start items-start gap-4">
      <Image src={User} alt="user" />
      <div className="flex flex-col justify-start items-start w-full gap-1">
        <p className="text-[18px] font-medium leading-[22.37px] text-[#000000]">
          {props.title}
        </p>
        <p className="text-sm leading-[22.4px] text-[#697598]">{props.date}</p>
        <div className="text-sm bg-[#F6F8FA] rounded-[16px] space-x-1 w-full p-4">
          {props.children}
        </div>
      </div>
    </div>
  );
};
