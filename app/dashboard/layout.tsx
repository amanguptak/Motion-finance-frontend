import Navbar from '@/components/Navbar';
import React from 'react'
import SideBar from './_components/SideBar';

const layout = ({children}: Readonly<{children: React.ReactNode;}>) => {
  return (

    <main className="h-screen lg:overflow-hidden flex">
    <div className=" hidden  lg:block md:flex  sticky  flex-col inset-y-0">
        <SideBar/>
    </div>

    <div className=" w-screen scrollbar-thin scrollbar-rounded scrollbar-thumb-amber-200 scroll md:overflow-y-scroll ">
      <Navbar />
      <div className="scrollbar-thin scrollbar-rounded scrollbar-thumb-amber-200 scroll overflow-y-scroll ">
      {children}
      </div>
    
    </div>
  </main>
  )
}

export default layout