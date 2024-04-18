"use client";
import React from "react";
import DataCard from "@/components/DataCard";
import Nav from "./_components/Nav";
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
          />
          <DataCard
            label="income"
            date="02/24"
            value="1000$"
            period="-43%from last period"
          />

          <DataCard
            label="income"
            date="02/24"
            value="1000$"
            period="-43%from last period"
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
