import React from "react";
import CategoryCard from "././Cards/CategoryCard";
import { Left, Right } from "../Assets";
import { category } from "../constants";

const Category = () => {
  return (
    <>
      <div className="lg:max-w-[1920px] md:max-w-[1440px] w-full m-auto flex justify-center mb-[120px]">
        <div className="max-w-[1260px] px-[10px] w-full justify-center">
          <div className="flex justify-between mb-[60px]">
            <div className="">
              <h2 className="text-[#ffffff] text-[28px] font-bold">
                {category.title}
              </h2>
              <p className="text-[#999999]">{category.subTitle}</p>
            </div>
            <div className="hidden md:flex lg:hidden justify-between items-center bg-[#0F0F0F] rounded-[10px] p-3 gap-3">
              <div className="w-[44px] h-[44px] flex justify-center items-center bg-[#1A1A1A] rounded-[6px]">
                <img src={Right} alt="Right Icon" />
              </div>
              <div className="flex">
                <div className="w-[15px] h-1 bg-[#E50000] rounded-[100px]"></div>
                <div className="w-[15px] h-1 bg-[#333333] rounded-[100px]"></div>
                <div className="w-[15px] h-1 bg-[#333333] rounded-[100px]"></div>
                <div className="w-[15px] h-1 bg-[#333333] rounded-[100px]"></div>
              </div>
              <div className="w-[44px] h-[44px] flex justify-center items-center bg-[#1A1A1A] rounded-[6px]">
                <img src={Left} alt="Left Icon" />
              </div>
            </div>
          </div>
          <div className="hidden md:flex justify-between lg:max-w-[1600px] md:max-w-[1440px] w-full ">
            {category.content.map((item, index) => (
              <CategoryCard key={index} image={item.img} Title={item.title} />
            ))}
          </div>
          <div className="md:hidden">
            <CategoryCard
              image={category.contentForPhone.img}
              Title={category.contentForPhone.title}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
