"use client";
import { LucideIcon } from "lucide-react";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavbarItemProps {
  label: string;
  icon: LucideIcon;
  href: string;
}
const NavbarItems = ({ label, icon: Icon, href }: NavbarItemProps) => {
  const pathName = usePathname();
 
  const isActive = pathName === href;

  return (
    <>
      <div
        className={cn(
          " hover:bg-rose-300 text-green-700 py-3 px-3 my-3 rounded-lg group ",
          isActive&&"bg-rose-500 rounded-lg text-white"
        )}
      >
        <Link href={href} className="text-sm  flex items-center ">
          <Icon className=" group-hover:text-white mx-2" />{" "}
          <span className=" group-hover:text-white ">{label}</span>
        </Link>
      </div>
    </>
  );
};

export default NavbarItems;
