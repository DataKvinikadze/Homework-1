import React from "react";
import { Left } from "../../Assets";

const CategoryCard = ({ image, secondImg, Title }) => {
  return (
    <>
      <div className="flex flex-col p-[24px] bg-[#1A1A1A] md:max-w-[240px] lg:max-w-[300px] w-full items-center md:items-baseline rounded-[10px] text-[#FFFFFF]">
        <div>
          <img src={image} alt="Category Image" />
          {secondImg && <img />}
          {/* this logic is for responsive */}
        </div>
        <div className="flex justify-between">
          <p>{Title}</p>
          <img src={Left} alt="Left Icon" />
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
