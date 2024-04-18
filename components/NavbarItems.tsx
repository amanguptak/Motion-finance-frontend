import { LucideIcon } from "lucide-react";
import React from "react";
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
  const isActive = pathName === href;

  return (
    <>
      <div
        className={cn(
          "py-3 my-3 rounded-md group",
          isActive
            ? "bg-slate-300 rounded-sm text-amber-400"
            : "hover:text-white",
          !isFirst && "px-2"
        )}
      >
        {/* <Link href={href} className="text-sm flex group text-white transition duration-300">
          <Icon className="mx-1" size={12} />
          <span>{label}</span>
          <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-[2px] bg-white'></span>
        </Link> */}
        <Link
          href={href}
          className="group text-white text-sm transition duration-300 px-2"
        >
          <div className="flex items-center">
            <Icon className="mx-1" size={12} />
            <span className="hover:text-white">{label}</span>
          </div>

          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[2px] bg-white"></span>
        </Link>
      </div>
    </>
  );
};

export default NavbarItems;
