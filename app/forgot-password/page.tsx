"use client"
import React from 'react'
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import axios from "axios"
import Banner from "@/public/images/Forgotpassword.png"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { ForgetSchemaType ,forgetSchema } from '@/schema/validation';
import Link from 'next/link';
import SideImg from '@/components/SideImg';
import { useRouter } from 'next/navigation'
import { toast } from "sonner";
const ForgetPassword = () => {
    const form = useForm<ForgetSchemaType>({
        resolver: zodResolver(forgetSchema),
        defaultValues: {
          email: ''
        }
      });
  const router = useRouter()
  const onSubmit = async(values: ForgetSchemaType) => {
    try{
 
      const res = await axios.post( `/api/auth/login`, values)
      // console.log(res)
      form.reset()
      toast.success("Logged In Successfully")
    
      router.push("/manage-finance")
     }catch(err){
      console.error(err)
     }
  }
  return (
    <div className='flex flex-col lg:flex-row items-center justify-center h-screen overflow-hidden lg:gap-9'>

     
      <SideImg imageName={Banner}/>
     
     
       <div className=' shadow-2xl rounded-lg p-7 lg:w-[30%] cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out'>
        <h3 className='font-semibold text-rose-500 text-2xl m-5 mx-0'>
            Forgot Password
        </h3>
       <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mb-2">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
       
        <Button type="submit" >Send OTP</Button>
      </form>
    </Form>
    <Link href="/login" className='text-rose-500 text-xs cursor-pointer'>Login Here</Link>
       </div>
            
    </div>
  )
}

export default ForgetPassword