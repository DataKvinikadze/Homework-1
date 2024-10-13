import React from "react";
import NavBar from "./NavBar";
import { headerTitle } from "../constants";

const Header = () => {
  return (
    <>
      <div className="h-fit md:bg-[url('./Assets/Background.png')] bg-[url('./Assets/PhoneBg.png')]  bg-center bg-no-repeat md:mb-[130px]">
        <NavBar />
        <div className="mx-auto flex flex-col justify-center items-center text-center text-[#FFFFFF] mt-[300px] md:mt-[501px]">
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
