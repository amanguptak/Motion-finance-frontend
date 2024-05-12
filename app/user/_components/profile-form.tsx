"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
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
import { ProfileSchema, ProfileSchemaType } from "@/schema/validation";


interface ProfileFormProps{
    profileDetails:ProfileSchemaType
}

export function ProfileForm({profileDetails}:ProfileFormProps) {


  const form = useForm<ProfileSchemaType>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      firstName: profileDetails?.firstName || "",
      lastName: profileDetails?.lastName || "",
      email: profileDetails?.email || "",
      imageName: profileDetails?.imageName || "",
      imageUrl: profileDetails?.imageUrl || "",
    },
  });

  

 
  // 2. Define a submit handler.
  function onSubmit(values: ProfileSchemaType) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
  }

  return (
    <>
     <h3 className="font-semibold text-rose-500 text-2xl m-1 mb-4 mx-0">
            Account Info
          </h3>
      <Form {...form}>
        
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 my-1 ">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>FirstName</FormLabel>
              <FormControl>
                <Input placeholder={profileDetails?.firstName} {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>LastName</FormLabel>
              <FormControl>
                <Input placeholder={profileDetails?.lastName} {...field} />
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
                <Input placeholder={profileDetails?.email} {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Update</Button>
      </form>
    </Form>
    </>
  
  );
}
