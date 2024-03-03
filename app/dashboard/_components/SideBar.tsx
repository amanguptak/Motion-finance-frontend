"use client"
import React from "react";
import NavbarRoutes from '../../../components/NavbarRoutes';

const SideBar = () => {
  return (
    <div className="w-46 h-screen bg-slate-50 p-2 lg:block hover:shadow-rose-700 cursor-pointer shadow-2xl relative duration-300 ease-linear">
           <h4 className='text-rose-500 text-lg p-4 font-bold'>Motion Finance</h4>
           <NavbarRoutes/>
    </div>
  );
};

export default SideBar;
