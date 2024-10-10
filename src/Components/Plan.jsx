import React from "react";
import PlanCard from "./PlanCard";
import { plan } from "../constants";

const Plan = () => {
  return (
    <>
      <div className="text-white max-w-[1440px] w-full mx-auto flex justify-center mb-[120px]">
        <div className="max-w-[1300px] w-full px-10px">
          {/* Header */}
          <div className="flex justify-between mb-[60px]">
            <div>
              <h1 className="text-[#FFFFFF] text-[28px] font-bold ">
                {plan.title}
              </h1>
              <p className="text-[#999999]">{plan.subTitle}</p>
            </div>
            <div className="max-w-[190px] w-full flex p-2 bg-[#0F0F0F] rounded-[8px]">
              <div className="flex-[1] bg-[#1F1F1F] text-center rounded-[6px]">
                Montly
              </div>
              <div className="flex-[1] text-center">Yearly</div>
            </div>
          </div>
          <div>
            <ul className="flex justify-between">
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
