import React from "react";
import DeviceCard from "./DeviceCard";
import { iPhone } from "../Assets";

const Devices = () => {
  return (
    <>
      <div className="max-w-[1440px] flex justify-center w-full mx-auto">
        <div className="text-[#ffffff] max-w-[1280px] w-full">
          <div className="">
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
          <div className="flex flex-wrap gap-[20px]">
            <DeviceCard
              image={iPhone}
              title={"SmartPhones"}
              description={
                "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
              }
            />
            <DeviceCard
              image={iPhone}
              title={"SmartPhones"}
              description={
                "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
              }
            />
            <DeviceCard
              image={iPhone}
              title={"SmartPhones"}
              description={
                "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
              }
            />
            <DeviceCard
              image={iPhone}
              title={"SmartPhones"}
              description={
                "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
              }
            />
            <DeviceCard
              image={iPhone}
              title={"SmartPhones"}
              description={
                "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
              }
            />
            <DeviceCard
              image={iPhone}
              title={"SmartPhones"}
              description={
                "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Devices;
