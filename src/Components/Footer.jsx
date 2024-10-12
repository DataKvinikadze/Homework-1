import React from "react";
import { footerLinks, copyright } from "../constants";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#0F0F0F] text-[#ffffff]">
        <div className="max-w-[1440px]  w-full mx-auto flex justify-center">
          <div className="max-w-[1260px] w-full px-[10px] flex flex-col justify-center">
            {/* Top */}
            <div className="flex justify-between py-[80px] w-full">
              {footerLinks.map((item) => (
                <div className="flex-[1]">
                  <h4 className="text-[#FFFFFF] text-[18px] font-semibold">
                    {item.heading}
                  </h4>
                  <ul className="mt-[20px]">
                    {item.items.map((links) => (
                      <li className="text-[#999999]">{links}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="border-[1px] bg-[#262626]"></div>
            {/* Bottom */}
            <div className="flex justify-between mt-[20px] pb-[40px] text-[#999999] text-[14px]">
              <span>{copyright.copyright}</span>
              <ul className="flex gap-[32px]">
                {copyright.policies.map((item) => (
                  <li>{item}</li>
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
