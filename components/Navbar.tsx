"use client"
import React from 'react'
import { Button } from "@/components/ui/button";

import axios from "axios";
import { redirect, useRouter } from "next/navigation";
import { toast } from "sonner";
import SearchBox from './Search';
import NavbarRoutes from './NavbarRoutes';
const Navbar = () => {

 const router = useRouter();
  const handleLogOut = async () => {
    try {
      /* 
                    // The second parameter axios takes on a post request is the body of
                     the request and not the options, so currently you send { withCredentials: true }
                      as body, and not the cookies. So passport doesn't have the cookie and can't destroy
                       the session. This should work:
                       axios.post(process.env.ACCOUNT_HOST + `/logout`, {}, {withCredentials: true})

          */

      const res = await axios.post("/api/auth/logout", {});
      // { withCredentials: true }

      toast.info("Logged out");
        router.push("/")
   
    } catch (err:any) {
      console.log(err?.response?.message);
    }
  };
  return (
    <nav className='shadow-xl bg-slate-50 flex items-center py-2 px-6 justify-between '>
  
        <SearchBox searchValue='Search'/>
  
        <Button onClick={handleLogOut}>LogOut</Button>
    </nav>
  )
}

export default Navbar