"use client"
import React from 'react'
import { Input } from './ui/input'
import { Label } from "@/components/ui/label"
import Image from 'next/image'
import girlImg from "@/public//images/upload.png"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  
  
const ImageUpload = () => {
  return (
    <div>
<Dialog>
  <DialogTrigger className='text-center w-screen h-screen text-rose-500'>Profile pic</DialogTrigger>
  <DialogContent>
    <DialogHeader>
   
      <DialogDescription>
      <Label htmlFor="img-upload" className='cursor-pointer'>
      <p className=' text-center  text-rose-500'>Upload Img</p>
        <Image src={girlImg}  alt="upload"/>
      
      
        </Label>

      <Input id="img-upload" className='hidden' type='file'></Input>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>



    </div>
  )
}

export default ImageUpload