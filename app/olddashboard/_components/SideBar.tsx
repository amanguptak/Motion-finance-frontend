"use client"
import React, { useState } from "react";
import NavbarRoutes from '../../../components/NavbarRoutes';
import { cn } from "@/lib/utils";
import {ArrowBigLeftDash, ArrowBigRightDash} from "lucide-react";

const SideBar = () => {
  const [collapse , setCollapse] = useState(false);
  const handleCollapse =()=>{
    setCollapse((prev)=>(!prev))
  }
  return (
    <div className={cn("w-46 h-screen  bg-slate-50 p-2 lg:block hover:shadow-rose-700 cursor-pointer shadow-2xl relative duration-300 ease-linear", collapse&&"w-20")}>
           <h4 className='text-rose-500 text-lg p-4 font-bold'>Motion Finance</h4>
         <div className="absolute -right-3 top-14 text-rose-500">
         {collapse ? <ArrowBigRightDash onClick={handleCollapse} /> : <ArrowBigLeftDash onClick={handleCollapse}/>}

         </div>
           
           <NavbarRoutes/>
    </div>
  );
};

export default SideBar;
