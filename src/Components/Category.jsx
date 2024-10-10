import React from "react";
import CategoryCard from "./CategoryCard";
import { category, Left, Right } from "../Assets";

const Category = () => {
  return (
    <>
      <div className="max-w-[1440px] w-full m-auto flex justify-center mb-[120px]">
        <div className="max-w-[1280px] w-full justify-center">
          <div className="flex justify-between mb-[60px]">
            <div className="">
              <h2 className="text-[#ffffff] text-[28px] font-bold">
                Explore our wide variety of categories
              </h2>
              <p className="text-[#999999]">
                Whether you're looking for a comedy to make you laugh, a drama
                to make you think, or a documentary to learn something new
              </p>
            </div>
            <div className="flex justify-between items-center bg-[#0F0F0F] rounded-[10px] p-3 gap-3">
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
          <div className="flex justify-between max-w-[1280px] w-full ">
            <CategoryCard image={category} Title={"Action"} />
            <CategoryCard image={category} Title={"Adventure"} />
            <CategoryCard image={category} Title={"Comedy"} />
            <CategoryCard image={category} Title={"Drama"} />
            <CategoryCard image={category} Title={"Horror"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
