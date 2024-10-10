import React from "react";

const QuestionCard = ({ icon, title, content, number }) => {
  return (
    <>
      <li className="border-b-[1px] max-w-[620px] h-[102px] w-full flex-[1] border-[#E50000]">
        <div className="p-[24px] flex items-center gap-x-4">
          <div className="bg-[#1F1F1F] p-4 rounded-[8px] w-[50px] h-[54px]">{`0${number}`}</div>
          <div className="max-w-[466px] w-full">
            <h4>{title}</h4>
            <p>{content}</p>
          </div>
          <img src={icon} className="w-[24px] h-[24px]" alt="Icon" />
        </div>
      </li>
    </>
  );
};

export default QuestionCard;
