import React from "react";
import { Questions } from "../constants";
import QuestionCard from "./QuestionCard";

const Question = () => {
  return (
    <>
      <div className="max-w-[1440px] w-full mx-auto flex justify-center">
        <div className="max-w-[1300px] px-[10px] w-full text-white">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-[28px] font-bold">{Questions.title}</h1>
              <p className="text-[#999999]">{Questions.subTitle}</p>
            </div>
            <button className="bg-[#E50000] px-[20px] py-[14px] rounded-[6px]">
              Ask a Question
            </button>
          </div>
          {/* Bottom */}
          <div>
            <ul className="flex flex-col max-h-[446px] h-full flex-wrap gap-x-[40px]">
              {Questions.content.map((question) => {
                return (
                  <>
                    <QuestionCard
                      key={question.id}
                      number={question.id}
                      icon={question.icon}
                      title={question.title}
                      content={question.content}
                    />
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
