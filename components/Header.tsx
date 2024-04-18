import React from 'react'
import SearchBox from './Search'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='flex items-center justify-between'>
       <Link href="/" className='font-bold text-lg cursor-pointer'>
        Motion-Finance
        </Link> 

        <SearchBox searchValue='Search anything...'/>
      
    </div>
  )
}

export default Header