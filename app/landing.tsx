import React from 'react'
import Image from 'next/image'
import boy from "@/public/images/boy.jpg"
const Landing = () => {
  return (
    <div className='h-screen flex items-center justify-normal'>
        <div>
            <Image src={boy} alt="landig-image" className='h-fit w-fit'/>
        </div>

        <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorum eligendi eaque ad porro voluptates praesentium, a aliquam id numquam!
        </div>
    </div>
  )
}

export default Landing