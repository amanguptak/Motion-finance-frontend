import React from 'react'
import ChangePassword from './_components/change-password';
import SideImg from '@/components/SideImg';
import SettingsImg from '@/public/images/Settings.png'
import Image from 'next/image';
import DeleteAccount from './_components/delete-account';




const Settings = () => {
  return (
    <div className='m-3 flex justify-between'>
      <main className='w-1/2' >
      <h3 className="font-semibold text-rose-500 text-2xl m-1 mb-4 mx-0">
            User Settings
          </h3>
       <div className=' '>
       <ChangePassword/>

      <DeleteAccount/>
       </div>
      </main>

    <Image  src={SettingsImg} alt="img" width={400} height={400}/>
       
       
    </div>
  )
}

export default Settings