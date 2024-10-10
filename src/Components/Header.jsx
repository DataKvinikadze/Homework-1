import React from "react";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <>
      <div className="h-[836px] bg-[url('./Assets/Background.png')] bg-contain bg-center bg-no-repeat mb-[130px]">
        <NavBar />
        <div className="mx-auto flex flex-col justify-center items-center text-center text-[#FFFFFF] mt-[501px]">
          <h1 className="text-[48px] leading-[72px] font-bold mb-[10px] ">
            The Best Streaming Experience
          </h1>
          <p className="text-[14px] px-2 mb-[40px] leading-[21px] max-w-[1140px] w-full text-[#999999]">
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere. With
            StreamVibe, you can enjoy a wide variety of content, including the
            latest blockbusters, classic movies, popular TV shows, and more. You
            can also create your own watchlists, so you can easily find the
            content you want to watch.
          </p>
          <button className="py-[14px] px-[24px] bg-[#E50000] rounded-lg">
            Start Watching Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
