import React from "react";
import { Logo, Search, Notification } from "../Assets";
import { navBar } from "../constants";
import { burgerBar } from "../Assets";

const NavBar = () => {
  return (
    <>
      <div className="flex justify-center mx-auto md:max-w-[1440px] w-full h-24 py-5">
        <div className="lg:max-w-[1577px] md:max-w-[1279px] w-full flex justify-between items-center px-[10px]">
          <div className="">
            <img
              src={Logo}
              alt="Logo"
              className="w-[116px] md:w-[165px] lg:w-[200px]"
            />
          </div>
          <nav className="max-w-[412px] hidden mm:block w-full h-[61px] p-[8px] bg-[#0F0F0F] border-[3px] border-[#1F1F1F] rounded-[10px]">
            <ul className="flex h-full justify-between">
              {navBar.map((item) => (
                <li className="px-[10px] py-[12px] text-[14px] hover:bg-[#1A1A1A] rounded-[8px]">
                  <button className="text-[#FFFFFF]">{item.title}</button>
                </li>
              ))}
            </ul>
          </nav>
          <div className="hidden mm:flex gap-[14px] h-6">
            <img src={Search} alt="Search" className="md:w-[34px]" />
            <img
              src={Notification}
              alt="notification"
              className="lg:w-[34px]"
            />
          </div>
          <div className="mm:hidden">
            <img src={burgerBar} alt="Menu" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
