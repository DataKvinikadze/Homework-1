import React from "react";
import { footerLinks, copyright } from "../constants";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#0F0F0F] text-[#ffffff]">
        <div className="md:max-w-[1440px] lg:max-w-[1920px] w-full mx-auto flex justify-center">
          <div className="max-w-[1260px] lg:max-w-[1580px] w-full px-[10px] flex flex-col justify-center">
            {/* Top */}
            <div className="flex justify-between gap-y-[30px] flex-wrap py-[80px] w-full">
              {footerLinks.map((item, index) => (
                <div key={index} className="md:flex-[1] max-w-[179px] w-full">
                  <h4 className="md:mb-[20px] mb-4 lg:mb-6 text-[#FFFFFF] md:text-[18px] text-[16px] md-text-[18px] lg-text-[20px] font-semibold">
                    {item.heading}
                  </h4>
                  <ul className="">
                    {item.items.map((links, index) => (
                      <li
                        key={index}
                        className="text-[#999999] lg:text-[18px] md:text-[16px] text-[14px]"
                      >
                        {links}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="border-[1px] bg-[#262626]"></div>
            {/* Bottom */}
            <div className="flex md:flex-row flex-col gap-y-[20px] justify-between mt-[20px] pb-[40px] text-[#999999] text-[14px]">
              <span>{copyright.copyright}</span>
              <ul className="flex gap-[32px] lg:gap-[40px]">
                {copyright.policies.map((item, index) => (
                  <li key={index} className="text-[14px]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
