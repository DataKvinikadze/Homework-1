import React from "react";

const DeviceCard = ({ title, image, description }) => {
  return (
    <>
      <div className="max-w-[413px] w-full bg-[#0F0F0F] rounded-[10px] p-[40px]">
        <div className="flex gap-3 mb-[24px] bg-[#111111]">
          <div className="bg-[#111111]">
            <img src={image} alt="Device Icon" description />
          </div>
          <h3>{title}</h3>
        </div>
        <p className="text-[#999999]">{description}</p>
      </div>
    </>
  );
};

export default DeviceCard;
