import React from "react";
import NavBar from "./NavBar";
import { headerTitle } from "../constants";

const Header = () => {
  return (
    <>
      <div className="h-[836px] bg-[url('./Assets/Background.png')] bg-contain bg-center bg-no-repeat mb-[130px]">
        <NavBar />
        <div className="mx-auto flex flex-col justify-center items-center text-center text-[#FFFFFF] mt-[501px]">
          <h1 className="text-[48px] leading-[72px] font-bold mb-[10px] ">
            {headerTitle.title}
          </h1>
          <p className="text-[14px] px-2 mb-[40px] leading-[21px] max-w-[1140px] w-full text-[#999999]">
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
