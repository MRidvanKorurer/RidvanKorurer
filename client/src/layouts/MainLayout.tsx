import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface IProps {
  children: ReactNode;
}

const MainLayout: React.FC<IProps> = ({ children }) => {
  return (
    <div className=" bg-black h-screen bg-opacity-95 text-white">
      <div className=" w-11/12  mx-auto h-screen bg-black bg-opacity-40 flex flex-col justify-between items-start">
        <div className=" w-full flex flex-col gap-y-10">
          <Header />
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
