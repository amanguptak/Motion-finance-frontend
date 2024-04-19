"use client"
import React from 'react'
import { usePathname } from 'next/navigation';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
  
interface BreadcrumbProps{
    currentRoute ?: string;
    homeRoute ?: string;
}

const BreadcrumbC = ({homeRoute , currentRoute}:BreadcrumbProps) => {
    const path = usePathname()
  
    const parts = path.split('/').filter(part => part !== '');
    console.log(parts)
  return (
    <div>

<Breadcrumb className='px-14 py-3 shadow-md'>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
    <BreadcrumbLink href="/components">{parts[0]}</BreadcrumbLink>
    
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage className='text-rose-500 font-bold'>{parts[1]}</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>

    </div>
  )
}

export default BreadcrumbC