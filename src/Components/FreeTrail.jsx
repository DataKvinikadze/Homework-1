import React from "react";
import { freeTrail } from "../constants";

const FreeTrail = () => {
  return (
    <>
      <div className="md:max-w-[1440px] lg:max-w-[1920px] w-full mx-auto mb-[120px] flex justify-center ">
        <div className="max-w-[1260px] w-full h-fit px-[40px] md:px-[90px] py-[50px] flex md:flex-row flex-col md:text-left text-center justify-between items-center bg-[url('./Assets/FreeTrail.png')]">
          <div className=" mb-[50px]">
            <h1 className="md:text-[28px] mb-[10px] text-[24px] lg:text-[48px] text-[#FFFFFF] font-bold">
              {freeTrail.title}
            </h1>
            <p className="text-[#999999]">{freeTrail.subTitle}</p>
          </div>
          <button className="bg-[#E50000] px-[20px] py-[14px] rounded-[8px]">
            Start a Free Trail
          </button>
        </div>
      </div>
    </>
  );
};

export default FreeTrail;
