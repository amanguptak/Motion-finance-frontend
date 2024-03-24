import React from "react";
import Image from "next/image";
import boy from "@/public/images/Finance.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Landing = () => {
  return (
    <div className="h-screen relative overflow-hidden">
      <div className="grid grid-cols-12 place-items-center  p-5 pb-0 ">
        <div className="lg:col-span-6 col-span-12">
          <Image src={boy} alt="landing-image" className="h-auto w-fit cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out " />
        </div>

        <div className="lg:col-span-6 col-span-12 ">
          <h2 className="text-4xl font-bold text-[#fe4f5a]">Motion Finance</h2>
          <p className="text-rose-400 font-medium">
            Empowering Your Financial Journey, One Transaction at a Time.
          </p>
          <Button className="mt-5">
            {" "}
            <Link href="/login">Let&apos;s Start</Link>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 overflow-hidden  w-full">

        {/* <Image src={boy} alt="landing-img" width={500} height={500}/> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 280"
          className="w-full cursor-pointer transform  hover:scale-125  transition-transform duration-300 ease-in-out"
        >
          <path
            fill="#fe4f5a"
            fillOpacity="1"
            d="M0,96L30,96C60,96,120,96,180,117.3C240,139,300,181,360,202.7C420,224,480,224,540,234.7C600,245,660,267,720,229.3C780,192,840,96,900,85.3C960,75,1020,149,1080,154.7C1140,160,1200,96,1260,74.7C1320,53,1380,75,1410,85.3L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>

  </div>
    </div>
  );
};

export default Landing;
