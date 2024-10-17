import React from "react";
import DeviceCard from "./Cards/DeviceCard";
import { iPhone } from "../Assets";
import { device } from "../constants";

const Devices = () => {
  return (
    <>
      <div className="md:max-w-[1440px] lg:max-w-[1920px] flex justify-center w-full mx-auto md:mb-[120px]">
        <div className="text-[#ffffff] md:max-w-[1260px] px-[10px] lg:max-w-[1600px] w-full">
          <div className="mb-[40px] md:mb-[60px] lg-mb-[80px]">
            <h2 className="md:text-[28px] lg:text-[38px] text-[20px] text-[#ffffff] font-bold">
              {device.title}
            </h2>
            <p className="text-[#999999] text-[14px] lg-[18px]">
              {device.subTitle}
            </p>
          </div>
          <ul className="flex justify-center md:justify-normal flex-wrap gap-[20px] lg:gap-[30px]">
            {device.content.map((item, index) => (
              <DeviceCard
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Devices;
