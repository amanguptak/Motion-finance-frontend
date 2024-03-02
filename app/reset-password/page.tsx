"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Banner from "@/public/images/Reset-password.png";
import VerifyOtp from "./_components/verifyOtp";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ResetPasswordType, resetPasswordSchema } from "@/schema/validation";
import Link from "next/link";
import SideImg from "@/components/SideImg";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";

interface CustomError extends Error {
  response?: {
    data?: {
      message?: string;
    };
  };
}
const ResetPassword = () => {
    const [verified, setVerified] = useState<boolean>(false);
    const [getOtp , setGetOtp] = useState<number>(0);

    // const pathName = usePathname()
    const searchParams = useSearchParams()
    const userEmail = searchParams.get("email")
 
  const form = useForm<ResetPasswordType>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      newPassword: "", // Provide a string value for newPassword
      confirmPassword: "", // Provide a string value for confirmPassword
    },
  });

  const router = useRouter();

  const onSubmit = async(values: ResetPasswordType) => {
 
   
     console.log("Checking otp" , getOtp)
    try{
      const formData = {
        email: userEmail,
        otp: getOtp.toString(),
        newPassword: values.newPassword
      }
      // console.log(formData);
      const res = await axios.post("/api/auth/reset-password",formData);
      if(res?.data?.passwordUpdated){
        toast.success(`${res?.data?.user?.firstName}Password Updated Successfully`)
        form.reset()
        setTimeout(() =>{
          router.push("/login")
        },2000)
        // router.push("/login");
      }
 
    }catch (err:any) {
      const customErr = err as CustomError; // Type assertion
      console.log(customErr?.response?.data?.message);
      toast.error(customErr?.response?.data?.message);}
   };
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center h-screen overflow-hidden lg:gap-9">
      <div className=" shadow-2xl rounded-lg p-7 lg:w-[30%] cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <h3 className="font-semibold text-rose-500 text-2xl m-5 mx-0">
          Reset Password
        </h3>
        <VerifyOtp verifiedStatus={()=>{setVerified(true)}} getVerified={verified} setGetOtp={setGetOtp}/>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mb-2"
          >
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Password</FormLabel>
                  <FormControl>
                    <Input placeholder="new password" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input placeholder="confirm new password" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={!verified}>
              Reset
            </Button>
          </form>
        </Form>
      </div>

      <SideImg imageName={Banner} />
    </div>
  );
};

export default ResetPassword;
