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
        <Search size={20} className='absolute top-2.5 left-3 text-white z-10 '/>
        <Input placeholder={searchValue} className='pl-9 h-9 bg-white/30 border border-gray-200 rounded-lg  shadow-sm backdrop-blur-md placeholder-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500'/>
    </div>
  )
}

export default SearchBox