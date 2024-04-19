import React from "react";
import Nav from "./_components/Nav";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="">
  
    <Nav />
    <div className="">{children}</div>
  </main>
  );
};

export default layout;
