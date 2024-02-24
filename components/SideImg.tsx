import React from 'react'
import Image from 'next/image';
import Banner from "@/public/images/login.jpg"
const SideImg = () => {
  return (
    <div>
         <h2 className=" font-bold text-[#fe4f5a] lg:hidden block m-5 text-3xl">Motion Finance</h2>
          <Image src={Banner} className='hidden lg:block cursor-pointer  ' alt="login-img" width={700} height={700} />
    </div>
  )
}

export default SideImg