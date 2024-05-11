
import { LucideIcon } from "lucide-react";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavbarItemProps {
  label: string;
  icon: LucideIcon;
  href: string;
  isFirst: boolean;
}

const NavbarItems = ({ label, icon: Icon, href, isFirst }: NavbarItemProps) => {

  const pathName = usePathname();
  const isActive = pathName === href
 
   const routeIndictor = pathName.startsWith("/user")




  return (
    <>
      <div
        className={cn(
          "py-3 my-3  rounded-md group",
          isActive ? "text-amber-400 " : "hover:text-white",
          !isFirst && "px-2" , routeIndictor&& " m-0 p-3 my-0"
        )}
      >
       
        <Link
          href={href}
          className={cn("group text-white text-sm transition duration-300 px-2", routeIndictor&&"m-0 p-0 text-sm")}
        >
          <div className="flex items-center ">
            <Icon className="mx-1" size={12} />
            <span className="hover:text-white">{label}</span>
          
          </div>
          {!isActive ? (
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[2px] bg-white"></span>
          ) : (
            <span className="block max-w-full transition-all duration-500 h-[2px] bg-white"></span>
          )}
         
        </Link>
      </div>
    </>
  );
};

export default NavbarItems;
