import { HelpIcon } from "../icons/help";
import { HouseIcon } from "../icons/house";
import { InvoiceIcon } from "../icons/invoice";
import { Logo } from "../icons/logo";
import { SettingsIcon } from "../icons/settings";
import { SmallGridIcon } from "../icons/small-grid";
import { SmallPeopleIcon } from "../icons/small-people";

export const Sidebar = () => {
  const items = [
    {
      label: "Getting Started",
      icon: <HouseIcon />,
      link: "#",
    },
    {
      label: "Overview",
      icon: <SmallGridIcon />,
      link: "#",
    },
    {
      label: "Accounts",
      icon: <HouseIcon />,
      link: "#",
    },
    {
      label: "Invoice",
      icon: <InvoiceIcon />,
      link: "#",
    },
    {
      label: "Beneficiary Management",
      icon: <SmallPeopleIcon />,
      link: "#",
    },
    {
      label: "Help Center",
      icon: <HelpIcon />,
      link: "#",
    },
    {
      label: "Settings",
      icon: <SettingsIcon />,
      link: "#",
    },
  ];

  return (
    <div className="gap-10 text-sm bg-white hidden md:flex min-h-full w-[280px] py-10 px-6 flex-col">
      <Logo />
      <ul className="flex w-full flex-col gap-3">
        {items.map((el) => (
          <li key={el.label} className="w-full">
            <a
              href={el.link}
              className="bg-white w-full text-[#697598] px-4 py-3.5 flex rounded-[32px] relative z-[2] 
							before:absolute before:bg-white before:inset-0 before:z-[1] before:rounded-[inherit]
							after:z-[-1] after:inset-0 after:rounded-[inherit] after:absolute after:w-full 
							after:h-full after:content-[''] after:bg-[#F8F8FB]
							after:transition-transform after:duration-200 after:ease-out after:transform after:scale-100
							after:transform-origin-center 
							hover:after:scale-x-[1.05] hover:after:scale-y-[1.2]"
            >
              <span className="flex items-center gap-2 z-[2] whitespace-nowrap">
                {el.icon}
                {el.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
