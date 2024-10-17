import React from "react";
import NavBar from "./NavBar";
import { headerTitle } from "../constants";

const Header = () => {
  return (
    <>
      <div className="h-[100dvh] bg-[url('./Assets/Background.png')] bg-center bg-no-repeat flex flex-col justify-between pb-[200px]">
        <NavBar />
        <div className="mx-auto flex flex-col justify-center items-center text-center text-[#FFFFFF]">
          <h1 className="md:text-[48px] text-[28px] font-bold mb-[10px] ">
            {headerTitle.title}
          </h1>
          <p className="text-[14px] mb-[30px] md:mb-[40px] md:max-w-[1120px] w-full text-[#999999]">
            {headerTitle.subTitle}
          </p>
          <button className="py-[14px] px-[24px] bg-[#E50000] rounded-lg">
            Start Watching Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
