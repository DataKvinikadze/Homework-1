import React from "react";

const PlanCard = ({ cardId, cardTitle, price, duration, content }) => {
  return (
    <>
      <li className="md:max-w-[413px] lg:max-w-[512px] max-w-[358px] w-full md:p-[40px] lg:p-[50px] p-[24px] bg-[#1A1A1A] rounded-[10px]">
        <h1 className="md:text-[20px] text-[18px] lg:text-[24px] font-bold md:mb-3 lg:mb-4 mb-[10px] text-[#FFFFFF]">
          {cardTitle}
        </h1>
        <p className="md:text-[16px] lg:text-[18px] text-[14px] text-[#999999] mb-[40px]">
          {content}
        </p>
        <div className="mb-10">
          <span className="md:text-[30px] text-[24px] lg:text-[40px] font-semibold">
            {price}
          </span>
          <span className="text-[#999999] lg:text-[18px] md:text-[16px] text-[14px]">
            {duration}
          </span>
        </div>
        <div className="flex max-w-[412px] w-full justify-between">
          <button className="md:py-[18px] md:px-[35px] px-[25px] py-[14px] text-[14px] bg-[#141414] text-[#FFFFFF] rounded-[8px]">
            Start Free Trial
          </button>
          <button className="md:py-[18px] md:px-[35px] px-[25px] py-[14px] text-[14px] bg-[#E50000] text-[#FFFFFF] rounded-[8px]">
            Choose Plan
          </button>
        </div>
      </li>
    </>
  );
};

export default PlanCard;
