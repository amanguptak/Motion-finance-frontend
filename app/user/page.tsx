"use client"
import ImageUpload from "@/components/image-upload";

import Image from "next/image";
import { ProfileForm } from "./_components/profile-form";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
const Profile = () => {
    const [profileDetails, setProfileDetails] = useState<any>({});
  const getUser = async () => {
    try {
      const res = await axios.get("/api/user");
      setProfileDetails(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(()=>{
    getUser()
  },[])
  const profileDate = useMemo(() => {
    const date = new Date(profileDetails?.createdAt);
    return date.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' });
}, [profileDetails?.createdAt]);
  return (
    <div className="m-3 flex justify-between ">
      <div className="w-1/3">
     <p >Created At:<span className="text-rose-500 text-sm mx-2">{profileDate}</span></p> 
       
      <div className="relative  aspect-square rounded-md w-full h-full cursor-pointer border-[#fe4f5a] border-2 overflow-hidden">
        <Image
        src={profileDetails?.imageUrl || "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW91bnQlMjBmdWppfGVufDB8fDB8fHww"} 
          alt="user-img"
          fill
          className="object-cover hover:scale-125 ease-out duration-300 transition"
        />
      </div>
       
        <ImageUpload />
      </div>
    <div className="w-1/2">
    <ProfileForm profileDetails={profileDetails}/>
    </div>

    </div>
  );
};

export default Profile;
