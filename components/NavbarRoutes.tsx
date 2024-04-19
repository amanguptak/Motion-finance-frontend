import React from "react";

import {
  LayoutDashboard,
  BadgeIndianRupee,
  HandCoins,
  ReceiptText,
  CircleUserRound,
  Hotel,
  Settings,
  Bot
} from "lucide-react";


import NavbarItems from "./NavbarItems";



const NavbarRoutes = () => {
  const FinanceRoutes = [
    {
      href: "/dashboard",
      name: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      href: "/user/tax-calculater",
      name: "Tax Calculation",
      icon: BadgeIndianRupee,
    },
   
    {
      href: "/dashboard/hra",
      name: "HRA Calculator",
      icon: Hotel,
    },
    {
      href: "/pending-bills",
      name: "Pending Bills",
      icon: ReceiptText,
    },
    {
      href: "/settings",
      name: "Settings",
      icon: Settings,
    },
    {
      href: "/ai-docs",
      name: "Ai-Pdf",
      icon: Bot,
    },
  
  ];

  return (
    <div className="flex flex-row item center  ">
      {FinanceRoutes.map((route,index) => (
        <NavbarItems
          key={route.href}
          label={route.name}
          href={route.href}
          icon={route.icon}
          isFirst={index === 0}
        />
      ))}
    </div>
  );
};

export default NavbarRoutes;
