"use client"
import React from 'react'
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import axios from "axios"
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
import { LoginSchemaType ,loginSchema } from '@/schema/validation';
import Link from 'next/link';
import SideImg from '@/components/SideImg';
import { useRouter } from 'next/navigation'
import { toast } from "sonner";
const Auth = () => {
  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
     email : '',
     password: '',
    },
  })
  const router = useRouter()
  const onSubmit = async(values: LoginSchemaType) => {
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

     
      <SideImg/>
     
     
       <div className=' shadow-2xl rounded-lg p-7 lg:w-[30%] cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out'>
        <h3 className='font-semibold text-rose-500 text-2xl m-5 mx-0'>Login</h3>
       <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="password" type='password' {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Login</Button>
      </form>
    </Form>
    <Link href="/sign-up" className='text-rose-500 text-xs cursor-pointer mt-14'>Create an Account</Link>
       </div>
            
    </div>
  )
}

export default Auth