import React from 'react'
import SearchBox from './Search'

const Header = () => {
  return (
    <div className='flex items-center justify-between'>
       <p className='font-bold text-lg'>
        Motion-Finance
        </p> 

        <SearchBox searchValue='Search anything...'/>
      
    </div>
  )
}

export default Header