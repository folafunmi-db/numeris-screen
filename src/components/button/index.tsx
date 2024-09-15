export const Button = ({
  variant = 1,
  children,
  className,
  ...props
}: { variant?: number } & React.ComponentPropsWithRef<"button">) => {
  const getStyle = (arg: number) => {
    switch (arg) {
      case 1:
        return "uppercase text-base leading-[19.89px] py-[24px] px-[86px] transition bg-[#003EFF] hover:bg-[#003EFF]/[.90] text-white rounded-[40px] font-medium";
      case 2:
        return "uppercase text-sm leading-[17.4px] py-[24px] px-[86px] outline-offset-[-1px] transition bg-[#FFFFFF] hover:bg-[#E3E6EF]/10 outline outline-1 outline-[#E3E6EF] text-[#697598] font-medium rounded-[40px]";

      default:
        return "";
    }
  };
  return (
    <button {...props} className={`${getStyle(variant)} ${className}`}>
      {children}
    </button>
  );
};
