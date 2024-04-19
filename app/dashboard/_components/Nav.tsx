"use client";
import React from "react";

import NavbarRoutes from "@/components/NavbarRoutes";

const Nav = () => {
  return (
    <div className="bg-gradient-to-r p-14 pt-6  from-[#fd4e59] to-rose-500 text-white ">
     
      <div className="user-details mt-1">
        <p className="text-3xl font-extrabold">Welcome Back , Aman 👋🏻</p>
        <p className="text-xs  text-slate-200">
          This is your monthly overview report
        </p>
      </div>

      <div className="hidden lg:block">
        <NavbarRoutes />
      </div>
    </div>
  );
};

export default Nav;
