"use client";
import React from "react";
import DataCard from "@/components/DataCard";
import Nav from "./_components/Nav";
import {HandCoins,TrendingUp,TrendingDown} from "lucide-react";
const Home = () => {
  return (
    <div>
      <Nav />
      <main className=" mt-[-8rem] ">
        <div className="flex items-center justify-between  p-14  ">
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
    </div>
  );
};

export default Home;
