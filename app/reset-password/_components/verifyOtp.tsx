"use client";
import React, { ReactEventHandler, useState } from "react";
import Otp from "@/components/OTP";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

interface VerifyOtpProps {
    verifiedStatus: () => void;
}

const verifyOtp = ({verifiedStatus}:VerifyOtpProps) => {
    const [otp, setOtp] = useState<number>(0);
 
    const [resetOtp, setResetOtp] = useState<boolean>(false);
    const handleOtpChange = (value: number) => {
      setOtp(value);
    };
    const handleVerify= (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
      console.log("Verify", otp);
      setOtp(0);
      toast.success("OTP Verified 😀 Change Your Password");
   
      setResetOtp(true)
      verifiedStatus()
    };
 
  return (
    <div >
    <form className="space-y-3 mb-5" onSubmit={handleVerify} >
    <label  className="text-sm font-semibold">
        Enter OTP
      </label>
      <Otp
        length={4}
        otp={otp}
        onOtpChange={handleOtpChange}
        resetOtp={resetOtp}
      />
      <Button type="submit">
        Verify
      </Button>
    </form>
   
  </div>
  )
}

export default verifyOtp