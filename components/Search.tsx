import React from 'react'

import { Input } from './ui/input';
import { Search } from "lucide-react";
import{
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "./ui/form"

interface SearchProps{
    searchValue: string;
}

const SearchBox = ({searchValue}:SearchProps) => {
  return (
    <div className='relative'>
        <Search size={20} className='absolute top-2.5 left-3 text-rose-500'/>
        <Input placeholder='Search Here...' className='pl-9 focus:outline-none focus-visible:ring-rose-500'/>
    </div>
  )
}

export default SearchBox