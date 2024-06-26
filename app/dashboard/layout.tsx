import React from "react";
import Nav from "./_components/Nav";
import Header from "@/components/Header";
const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="">
   <Header />
    <Nav />
    <div className="">{children}</div>
  </main>
  );
};

export default layout;
