import React from "react";

import {
  LayoutDashboard,
  BadgeIndianRupee,
  HandCoins,
  ReceiptText,
  CircleUserRound,
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
      href: "/dashboard/calculate-tax",
      name: "Tax Calculation",
      icon: BadgeIndianRupee,
    },
    {
      href: "/expense-saving",
      name: "Expense&Saving",
      icon: HandCoins,
    },
    {
      href: "/pending-bills",
      name: "Pending Bills",
      icon: ReceiptText,
    },
    {
      href: "/profile",
      name: "Profile",
      icon: CircleUserRound,
    },
  ];

  return (
    <div className="flex flex-col item center">
      {FinanceRoutes.map((route) => (
        <NavbarItems
          key={route.href}
          label={route.name}
          href={route.href}
          icon={route.icon}
        />
      ))}
    </div>
  );
};

export default NavbarRoutes;
