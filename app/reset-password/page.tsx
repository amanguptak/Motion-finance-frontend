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
import { useRouter } from "next/navigation";
import { toast } from "sonner";
const ResetPassword = () => {
    const [verified, setVerified] = useState<boolean>(false);

  const form = useForm<ResetPasswordType>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      newPassword: "", // Provide a string value for newPassword
      confirmPassword: "", // Provide a string value for confirmPassword
    },
  });

  const router = useRouter();
  const onSubmit = (values: ResetPasswordType) => {
    console.log(values);
    router.push("/login");
    // try{

    //   const res = await axios.post( `/api/auth/login`, values)
    //   // console.log(res)
    //   form.reset()
    //   toast.success("Logged In Successfully")

    //  }catch(err){
    //   console.error(err)
    //  }
  };
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center h-screen overflow-hidden lg:gap-9">
      <div className=" shadow-2xl rounded-lg p-7 lg:w-[30%] cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <h3 className="font-semibold text-rose-500 text-2xl m-5 mx-0">
          Reset Password
        </h3>
        <VerifyOtp verifiedStatus={()=>{setVerified(true)}}/>
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
