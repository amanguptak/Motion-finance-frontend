"use client";
import React, { ReactEventHandler, useEffect, useState } from "react";
import Otp from "@/components/OTP";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import axios from "axios";
import {

  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import Spinner from "@/components/Spinner";
import Link from "next/link";
import { useTimer } from "@/hooks/use-timer";
interface VerifyOtpProps {
  verifiedStatus: () => void;
}

const verifyOtp = ({
  verifiedStatus,
  getVerified,
  setGetOtp,
}: VerifyOtpProps & {
  getVerified: boolean;
  setGetOtp: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [otp, setOtp] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [resetOtp, setResetOtp] = useState<boolean>(false);

  const { formattedTimer, isTimerFinished } = useTimer(90);

  //next navigation
  const searchParams = useSearchParams();
  const userEmail = searchParams.get("email");
  const router = useRouter();

  const handleOtpChange = (value: number) => {
    setOtp(value);
  };

  const handleResend = () => {
    router.push("/forgot-password");
  };
  const handleVerify = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = {
        email: userEmail,
        otp: otp.toString(),
      };
      const res = await axios.post("/api/auth/verify", formData);
      setLoading(false);
      if (res.data.valid) {
        setOtp(0);
        toast.success("OTP Verified 😀 Change Your Password");
        setGetOtp(otp);
        setResetOtp((prev) => !prev);
        verifiedStatus();
      }
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <div>
      <form className="space-y-3 mb-5" onSubmit={handleVerify}>
        <label className="text-sm font-semibold">Enter OTP</label>
        <Otp
          length={4}
          otp={otp}
          onOtpChange={handleOtpChange}
          resetOtp={resetOtp}
        />

        <div className="flex  flex-col">
          <Button type="submit" disabled={resetOtp || isTimerFinished}>
            {loading ? <Spinner /> : "Verify"}
          </Button>
          {getVerified ? (
            <> </>
          ) : (
            <>
              <Button
                type="button"
                variant="link"
                disabled={!isTimerFinished}
                onClick={handleResend}
              >
                {isTimerFinished
                  ? "Resend OTP"
                  : `Resend otp in ${formattedTimer} sec`}{" "}
              </Button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default verifyOtp;
