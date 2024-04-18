"use client";
import React from "react";
import DataCard from "@/components/DataCard";
import Nav from "./_components/Nav";
import { HandCoins, TrendingUp, TrendingDown } from "lucide-react";
import ChartData from "@/components/ChartData";
const Home = () => {
  return (
    <div>
      <Nav />
      <main className=" lg:mt-[-8rem] mt-[-4rem]">
        <div className=" flex flex-col lg:flex-row items-center justify-between gap-4  lg:p-14  p-4 md:p-8 ">
          <DataCard
            label="Income"
            date="02/24"
            value="1000$"
            period="-43%from last period"
            icon={TrendingUp}
            bgColor="green"
          />
          <DataCard
            label="Expenses"
            date="02/24"
            value="1000$"
            period="-43%from last period"
            icon={TrendingDown}
            bgColor="rose"
          />

          <DataCard
            label="Savings"
            date="02/24"
            value="1000$"
            period="-43%from last period"
            icon={HandCoins}
            bgColor="amber"
          />
        </div>
       
      </main>
      <div className="p-14 pt-4"  >
          <ChartData />
        
        </div>
    </div>
  );
};

export default Home;
