import React from 'react'
import SearchBox from './Search'
import Link from 'next/link'
import Profile from './Profile'

const Header = () => {
  return (
    <div className='flex px-14 py-3 items-center justify-between text-white bg-gradient-to-r  from-[#fd4e59] to-rose-500'>
       <Link href="/" className='font-bold text-lg cursor-pointer'>
        Motion-Finance
        </Link> 

    <div className='flex items-center justify-between gap-4'>
    <SearchBox searchValue='Search anything...'/>
    <Profile/>
    </div>
       
      
    </div>
  )
}

export default Header