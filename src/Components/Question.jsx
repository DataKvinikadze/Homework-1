import React from "react";
import { Questions } from "../constants";
import QuestionCard from "./Cards/QuestionCard";

const Question = () => {
  return (
    <>
      <div className="md:max-w-[1440px] lg:max-w-[1920px] w-full mx-auto flex justify-center mb-[120px]">
        <div className="md:max-w-[1260px] lg:max-w-[1600px] px-[10px] w-full text-white">
          <div className="flex md:justify-between md:flex-row flex-col items-start md:mb-[60px] mb-[40px] lg:mb-[80px]">
            <div className="mb-[20px] md:mb-0">
              <h1 className="lg:text-[38px] text-[28px] font-bold">
                {Questions.title}
              </h1>
              <p className="lg:text-[18px] text-[#999999]">
                {Questions.subTitle}
              </p>
            </div>
            <button className="bg-[#E50000] px-[20px] py-[14px] rounded-[6px]">
              Ask a Question
            </button>
          </div>
          {/* Bottom */}
          <div>
            <ul className="flex flex-col md:flex-row md:justify-between">
              <div>
                {Questions.content.left.map((question) => (
                  <QuestionCard
                    key={question.id}
                    number={question.id}
                    icon={question.icon}
                    title={question.title}
                    content={question.content}
                  />
                ))}
              </div>
              <div>
                {Questions.content.right.map((question) => (
                  <QuestionCard
                    key={question.id}
                    number={question.id}
                    icon={question.icon}
                    title={question.title}
                    content={question.content}
                  />
                ))}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
