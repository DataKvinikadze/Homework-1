import React from "react";
import { Logo, Search, Notification } from "../Assets";
import { navBar } from "../constants";
import { burgerBar } from "../Assets";

const NavBar = () => {
  return (
    <>
      <div className="flex justify-center mx-auto max-w-[1440px] w-full h-24 py-5">
        <div className="max-w-[1260px]] w-full flex justify-between items-center px-[10px]">
          <div className="">
            <img src={Logo} alt="Logo" className="w-[116px] md:w-[165px]" />
          </div>
          <div className="items-center hidden sm:flex justify-center max-w-[412px] w-full h-[61px] border-[3px] border-[#1F1F1F] rounded-lg bg-[#0F0F0F]">
            <nav className="">
              <ul className="flex items-center h-11 gap-4 text-[#BFBFBF]">
                {navBar.map((item) => (
                  <li key={item.title}>
                    <li className="">{item.title}</li>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="hidden sm:flex justify-between max-w-14 w-full h-6">
            <img src={Search} alt="Search" />
            <img src={Notification} alt="notification" />
          </div>
          <div className="sm:hidden">
            <img src={burgerBar} alt="Menu" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
