import React from "react";
import { freeTrail } from "../constants";

const FreeTrail = () => {
  return (
    <>
      <div className="max-w-[1440px] w-full mx-auto mb-[120px] flex justify-center ">
        <div className="max-w-[1280px] w-full h-[236px] px-[60px] flex justify-between items-center bg-[url('./Assets/FreeTrail.png')]">
          <div className="min-h-[76px]">
            <h1 className="text-[28px] text-[#FFFFFF] font-bold">
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
