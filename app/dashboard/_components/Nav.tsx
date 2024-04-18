import React from "react";
import Header from "@/components/Header";
import NavbarRoutes from "@/components/NavbarRoutes";

const Nav = () => {
  return (
    <div className="bg-gradient-to-r p-14 pt-6 from-[#fd4e59] to-rose-500 text-white ">
      <Header />

      <div className="user-details mt-9">
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
