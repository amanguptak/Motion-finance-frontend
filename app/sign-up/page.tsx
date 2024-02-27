"use client"
import React from 'react'
import {useForm} from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import axios from "axios"
import SignUpImg from "@/public/images/signup.png"
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
import { signUpSchema , SignUpSchemaType } from '@/schema/validation'
import Link from 'next/link'
import SideImg from '@/components/SideImg'
import { useRouter } from 'next/navigation'
import { toast } from "sonner";
const SignUp = () => {
  const router = useRouter()
    const  form = useForm<SignUpSchemaType>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            firstName:"",
            lastName:"",
            email : '',
            password: '',
            confirmPassword:""
           },
    })
    const onSubmit = async(values: SignUpSchemaType) => {
       try{
        const { confirmPassword, ...formData } = values;
        const res = await axios.post("/api/auth/register", formData)
        console.log(res.data)
        form.reset()
        toast.success("Registered Successfully")
      
        router.push("/manage-finance")
       }catch(err){
        console.error(err)
       }
    }
  return (
    <div className='flex items-center flex-col lg:flex-row justify-center h-screen  overflow-hidden'>

     
    
     
       <div className=' shadow-2xl rounded-lg lg:w-[50%] cursor-pointer m-5 p-10 transform  hover:scale-105 transition-transform duration-300 ease-in-out'>
       <h3 className='font-semibold text-rose-500 text-2xl m-5 mx-0'>Sign UP</h3>
       <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="First Name" {...field} className='w-full'/>
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
                <Input placeholder="Last Name"  {...field} />
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
                <Input placeholder="Password" type='password' {...field} />
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
                <Input placeholder="Confirm Password" type='password' {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
            
          )}
        />
        <Button type="submit">SignUP</Button>
      </form>
    </Form>
    <Link href="/login" className='text-rose-500 text-xs cursor-pointer mt-14'>Already have an account</Link>
       </div>
       <SideImg imageName={SignUpImg}/>  
    </div>
  )
}

export default SignUp