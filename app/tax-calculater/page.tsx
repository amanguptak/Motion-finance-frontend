"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import taximg from "@/public/images/Tax-pana.png";
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
  import { signUpSchema, SignUpSchemaType } from "@/schema/validation";
  import Link from "next/link";
  import SideImg from "@/components/SideImg";
  import { useRouter } from "next/navigation";
  import { toast } from "sonner";
const TaxCalculator = () => {
    const router = useRouter();
    const form = useForm<SignUpSchemaType>({
      resolver: zodResolver(signUpSchema),
      defaultValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    });
    const onSubmit = async (values: SignUpSchemaType) => {
      try {
        const { confirmPassword, ...formData } = values;
        const res = await axios.post("/api/auth/register", formData);
        console.log(res.data);
        form.reset();
        toast.success("Registered Successfully");
  
        router.push("/manage-finance");
      } catch (err: any) {
        toast.error(err?.response?.data?.message);
      }
    };
  return (
    <div className='grid grid-cols-1  md:grid-cols-12 gap-x-2 p-5'>
        <div className='col-span-5 flex h-screen items-center justify-center'>
        <SideImg imageName={taximg} />
        </div>
   

    <div className='tax-form col-span-7 rounded-lg  cursor-pointer p-8 transform  hover:shadow-xl transition-transform duration-300 ease-in-out'>

    <div className=" ">
        <h3 className="font-semibold text-rose-500 text-2xl m-1 mb-4 mx-0">
       Calculate Tax Amount
        </h3>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="First Name"
                      {...field}
                      className="w-full"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Last Name" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Password" type="password" {...field} />
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
                    <Input
                      placeholder="Confirm Password"
                      type="password"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Calculate</Button>
          </form>
        </Form>
    
      </div>
    </div>
     
    </div>
  )
}

export default TaxCalculator