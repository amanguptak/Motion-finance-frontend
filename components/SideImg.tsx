import React from "react";
import Image, { StaticImageData } from "next/image";

interface SideImgProps {
  imageName: StaticImageData;
}

const SideImg = ({ imageName }: SideImgProps) => {
  return (
    <div>
      <h2 className=" font-bold text-[#fe4f5a] lg:hidden block m-5 text-3xl">
        Motion Finance
      </h2>
      <Image
        src={imageName}
        className="hidden lg:block cursor-pointer  "
        alt="login-img"
        width={700}
        height={700}
      />
    </div>
  );
};

export default SideImg;
