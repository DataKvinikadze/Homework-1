import React from "react";
import { Logo, Search, Notification } from "../Assets";
import { navBar } from "../constants";
import { burgerBar } from "../Assets";

const NavBar = () => {
  return (
    <>
      <div className="flex justify-center mx-auto max-w-[1440px] w-full h-24 py-5">
        <div className="max-w-[1577px] w-full flex justify-between items-center px-[10px]">
          <div className="">
            <img
              src={Logo}
              alt="Logo"
              className="w-[116px] md:w-[165px] lg:w-[200px]"
            />
          </div>
          <div className="items-center hidden md:flex justify-center lg:max-w-[555px]  md:max-w-[412px] w-full lg:h-[75px] h-[61px] border-[3px] border-[#1F1F1F] rounded-lg bg-[#0F0F0F]">
            <nav className="">
              <ul className="flex items-center md:h-11 lg:h-[55px] md:gap-4 lg:gap-[30px] text-[#BFBFBF]">
                {navBar.map((item) => (
                  <li key={item.title}>
                    <li className="lg:text-[18px]">{item.title}</li>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="hidden md:flex justify-between max-w-14 w-full h-6">
            <img src={Search} alt="Search" className="md:w-[34px]" />
            <img
              src={Notification}
              alt="notification"
              className="lg:w-[34px]"
            />
          </div>
          <div className="md:hidden">
            <img src={burgerBar} alt="Menu" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
