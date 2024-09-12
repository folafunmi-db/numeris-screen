import { Bell } from "../icons/bell";
import { ChevronDown } from "../icons/chevron-down";

export const Navbar = () => {
  return (
    <div className="animate-fadeIn py-[18px] border-b border-[#A1B8FF33] w-full flex justify-between items-center gap-2 flex-wrap">
      <h1 className="font-medium text-[28px] text-[#373B47]">INVOICE</h1>
      <div className="flex justify-end items-center gap-6">
        <button className="bg-white rounded-full w-[64px] h-[64px] flex justify-center items-center">
          <Bell />
        </button>
        <button className="bg-white rounded-[40px] p-3 gap-2 flex justify-center items-center">
          <div className="bg-[#003EFF] w-10 h-10 font-bold text-sm text-white grid place-items-center rounded-full">
            KO
          </div>
          <ChevronDown />
        </button>
      </div>
    </div>
  );
};
