import React from "react";
import DeviceCard from "./DeviceCard";
import { iPhone } from "../Assets";
import { device } from "../constants";

const Devices = () => {
  return (
    <>
      <div className="max-w-[1440px] flex justify-center w-full mx-auto mb-[120px]">
        <div className="text-[#ffffff] max-w-[1280px] w-full">
          <div className=" mb-[60px]">
            <h2 className="text-[28px] text-[#ffffff] font-bold">
              We Provide you streaming experience across various devices.
            </h2>
            <p className="text-[#999999]">
              With StreamVibe, you can enjoy your favorite movies and TV shows
              anytime, anywhere. Our platform is designed to be compatible with
              a wide range of devices, ensuring that you never miss a moment of
              entertainment.
            </p>
          </div>
          <ul className="flex flex-wrap gap-[20px]">
            {device.content.map((item) => (
              <DeviceCard
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
