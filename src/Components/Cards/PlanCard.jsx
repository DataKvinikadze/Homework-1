import React from "react";

const PlanCard = ({ cardId, cardTitle, price, duration, content }) => {
  return (
    <>
      <li className="max-w-[413px] w-full p-[40px] bg-[#1A1A1A] rounded-[10px]">
        <h1 className="text-[20px] font-bold mb-3 text-[#FFFFFF]">
          {cardTitle}
        </h1>
        <p className="text-[16px] text-[#999999] mb-[40px]">{content}</p>
        <div className="mb-10">
          <span className="text-[30px] font-semibold">{price}</span>
          <span className="text-[#999999]">{duration}</span>
        </div>
        <div className="flex max-w-[412px] w-full justify-between">
          <button className="py-[18px] px-[35px] bg-[#141414] text-[#FFFFFF] rounded-[8px]">
            Start Free Trial
          </button>
          <button className="py-[18px] px-[35px] bg-[#E50000] text-[#FFFFFF] rounded-[8px]">
            Choose Plan
          </button>
        </div>
      </li>
    </>
  );
};

export default PlanCard;
