import React from "react";
import { Logo, Search, Notification } from "../Assets";

const NavBar = () => {
  return (
    <>
      <div className="flex justify-center mx-auto max-w-[1440px] w-full h-24 py-5">
        <div className="max-w-7xl w-full flex justify-between items-center px-20">
          <div className="">
            <img src={Logo} alt="Logo" width={165} height={50} />
          </div>
          <div className="flex items-center justify-center max-w-[412px] w-full h-[61px] border-[3px] border-[#1F1F1F] rounded-lg bg-[#0F0F0F]">
            <nav className="">
              <ul className="flex items-center h-11 gap-4 text-[#BFBFBF]">
                <li className="">Home</li>
                <li>Movies & Shows</li>
                <li>Support</li>
                <li>Subscriptions</li>
              </ul>
            </nav>
          </div>
          <div className="flex justify-between max-w-14 w-full h-6">
            <img src={Search} alt="Search" />
            <img src={Notification} alt="notification" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
