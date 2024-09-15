export const Badge = ({
  type,
  className,
  children,
}: {
  type?: string;
  className?: string;
  children?: React.ReactNode;
}) => {
  const getStyle = (arg: string) => {
    switch (arg) {
      case "paid":
        return "uppercase border-[#12904333] bg-[#E6FFF0] px-[12px] py-[7.5px] rounded-[18px] text-[7.5px] text-[#129043] leading-[12px]";
      case "overdue":
        return "uppercase border-[#FF566333] bg-[#FFF4F5] px-[24px] py-[7.5px] rounded-[24px] text-[10px] text-[#FF5663] leading-[12.43px]";
      case "draft":
        return "uppercase border-[#373B4733] bg-[#F6F8FA] px-[24px] py-[7.5px] rounded-[24px] text-[10px] text-[#373B47] leading-[12.43px]";
      case "pending payment":
        return "uppercase border-[#D98F0033] bg-[#FFF8EB] px-[24px] py-[7.5px] rounded-[24px] text-[10px] text-[#D98F00] leading-[12.43px]";
      case "partial payment":
        return "uppercase border-[#003EFF33] bg-[#F2FBFF] px-[24px] py-[7.5px] rounded-[24px] text-[10px] text-[#003EFF] leading-[12.43px]";
      default:
        return className;
    }
  };

  return (
    <span
      className={`border rounded-[24px] font-medium ${getStyle(type ?? "")}`}
    >
      {children ?? type}
    </span>
  );
};
