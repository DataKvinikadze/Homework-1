import React from "react";
import PlanCard from "././Cards/PlanCard";
import { plan } from "../constants";

const Plan = () => {
  return (
    <>
      <div className="text-white md:max-w-[1440px] lg:max-w-[1920px] w-full mx-auto flex justify-center mb-[120px]">
        <div className="md:max-w-[1280px] w-full px-[10px]">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between mb-[40px] lg:mb-[80px] md:mb-[60px]">
            <div className="mb-[20px] md:mb-0">
              <h1 className="text-[#FFFFFF] mb:text-[28px] lg:text-[28px] text-[24px] font-bold ">
                {plan.title}
              </h1>
              <p className="text-[#999999] mb:text-[18px] text-[14px]">
                {plan.subTitle}
              </p>
            </div>
            <div className="max-w-[190px] lg:max-w-[237px] w-full h-[61px] flex items-center p-2 bg-[#0F0F0F] rounded-[8px]">
              <div className="flex-[1] text-center rounded-[6px]">Montly</div>
              <div className="flex-[1] text-center">Yearly</div>
            </div>
          </div>
          <div>
            <ul className="flex flex-col md:flex-row gap-y-[20px] justify-between">
              {plan.content.map((item) => (
                <PlanCard
                  key={item.id}
                  cardId={item.id}
                  cardTitle={item.title}
                  price={item.price}
                  duration={item.duration}
                  content={item.content}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plan;
