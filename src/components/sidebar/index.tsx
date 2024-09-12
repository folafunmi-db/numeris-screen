import { HelpIcon } from "../icons/help";
import { HouseIcon } from "../icons/house";
import { InvoiceIcon } from "../icons/invoice";
import { Logo } from "../icons/logo";
import { SettingsIcon } from "../icons/settings";
import { SmallGridIcon } from "../icons/small-grid";
import { SmallPeopleIcon } from "../icons/small-people";
import { List } from "./list";

export type ItemType = {
  label: string;
  icon: JSX.Element;
  link: string;
};

export const Sidebar = () => {
  const items: ItemType[] = [
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
    <div className="fixed top-0 gap-10 text-sm bg-white hidden md:flex min-h-full w-[280px] py-10 px-6 flex-col">
      <div className="animate-fadeIn">
        <Logo />
      </div>
      <ul className="flex w-full flex-col gap-3">
        <List items={items} />
      </ul>
    </div>
  );
};
