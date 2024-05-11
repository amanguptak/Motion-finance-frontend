"use client";
import React from "react";

import {
  LayoutDashboard,
  BadgeIndianRupee,
  CircleUserRound,
  Hotel,
  Settings,
  Bot,
} from "lucide-react";

import NavbarItems from "@/components/NavbarItems";

const UserRoutes = [
  {
    href: "/user",
    name: "Profile",
    icon: CircleUserRound,
  },
  {
    href: "/user/tax-calculater",
    name: "Tax Calculation",
    icon: BadgeIndianRupee,
  },

  {
    href: "/user/settings",
    name: "Settings",
    icon: Settings,
  },
  {
    href: "/ai-docs",
    name: "Ai-Pdf",
    icon: Bot,
  },

  {
    href: "/user/total-expenses",
    name: "Total Expenses",
    icon: Hotel,
  },
];

const SideBar = () => {
  return (
    <div className="border-none m-4 shadow-xl rounded-lg py-3 px-2 bg-[#fe4f5a]">
      {UserRoutes.map((route, index) => (
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

export default SideBar;
