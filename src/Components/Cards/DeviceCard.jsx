import React from "react";

const DeviceCard = ({ title, image, description }) => {
  return (
    <>
      <li className="md:max-w-[413px] lg:max-w-[480px] max-w-[361px] w-full bg-[#0F0F0F] rounded-[10px] p-[40px]">
        <div className="flex gap-3 mb-[24px] bg-[#111111]">
          <div className="bg-[#111111]">
            <img src={image} alt="Device Icon" />
          </div>
          <h3>{title}</h3>
        </div>
        <p className="text-[#999999]">{description}</p>
      </li>
    </>
  );
};

export default DeviceCard;
