import React, { useState } from "react";
import { Plus, Minus } from "../../Assets";

const QuestionCard = ({ title, content, number }) => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle((prev) => !prev);
  };
  return (
    <>
      <li className="border-b-[1px] mx-auto md:max-w-[620px] lg:max-w-[758px] max-w-[358px] md:h-[102px] w-full flex-[1] border-[#E50000]">
        <div className="p-[24px] flex items-center gap-x-4 h-fit">
          <div className="bg-[#1F1F1F] p-4 rounded-[8px] w-[50px] h-[54px]">{`0${number}`}</div>
          <div className="max-w-[466px] w-full">
            <h4>{title}</h4>
            {toggle && <p>{content}</p>}
          </div>
          <img
            onClick={() => {
              handleClick();
            }}
            src={toggle ? Minus : Plus}
            className="w-[24px] h-[24px]"
            alt="Icon"
          />
        </div>
      </li>
    </>
  );
};

export default QuestionCard;
