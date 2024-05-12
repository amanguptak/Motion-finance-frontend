"use client";
import ImageUpload from "@/components/image-upload";

import Image from "next/image";
import { ProfileForm } from "./_components/profile-form";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import Spinner from "@/components/Spinner";
import ProfileImg from "@/public/images/Profile.png"

const Profile = () => {
  const [profileDetails, setProfileDetails] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const getUser = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get("/api/user");
      setProfileDetails(res.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  const profileDate = useMemo(() => {
    const date = new Date(profileDetails?.createdAt);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }, [profileDetails?.createdAt]);
  return (
    <>
      {isLoading ? (
    "Loading..."
      ) : (
        <>
          <div className="m-3 flex justify-between gap-5">
            <div className="w-1/3 h-fit">
              <p className="text-sm my-1">
                Created At:
                <span className="text-rose-500  mx-2">{profileDate}</span>
              </p>

              <div className="relative  aspect-square rounded-md w-full h-full cursor-pointer shadow-md overflow-hidden">
                <Image
                  src={
                    "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW91bnQlMjBmdWppfGVufDB8fDB8fHww"
                  }
                  alt="user-img"
                  fill
                  className="object-cover hover:scale-125 ease-out duration-300 transition"
                />
              </div>

              <ImageUpload />
            </div>
            <div className="w-1/2">
              <ProfileForm profileDetails={profileDetails} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
