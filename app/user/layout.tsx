import Header from "@/components/Header";
import React from "react";
import BreadcrumbC from "@/components/Breadcrumb";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="">
      <Header />
      <BreadcrumbC />
      <div className="">{children}</div>
    </main>
  );
};

export default layout;
