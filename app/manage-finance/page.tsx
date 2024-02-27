"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
const ManageFinance = () => {
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

      const res = await axios.post(
        "/api/auth/logout",
        {},
      
      );
      // { withCredentials: true }
      console.log(res);
      toast.info("Logged out");
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Button onClick={handleLogOut}>LogOut</Button>
    </div>
  );
};

export default ManageFinance;
