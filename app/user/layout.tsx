import Header from "@/components/Header";
import React from "react";
import BreadcrumbC from "@/components/Breadcrumb";
import SideBar from "./_components/sidebar";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main>
      <Header />
      <BreadcrumbC />
      <div className="flex">
        <div className="w-1/6">
          <SideBar />
        </div>
        <div className="w-3/4">{children}</div>
      </div>
    </main>
  );
};

export default layout;
