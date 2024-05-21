"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { SideData } from "./SideData";
import "./styleScrollbar.css";

const SideOption = () => {
  const pathname = usePathname();
  // console.log(pathname);
  return (
    <div className="bg-[#ffffff] w-full h-full border-r-[3px] border-[#2FA8FF] px-[8px] pt-[10px] pb-[50px] scroll-smooth transition-all ease-in-out hover:overflow-y-scroll style-scrollbar overflow-hidden flex flex-col items-center gap-[6px]">
      {SideData?.map(({ id, name, path, SVGIcon }) => (
        <div key={id} className="w-full gap-[6px] flex flex-col items-center">
          <div
            className={`cursor-pointer h-12 w-12 rounded-[12px] p-[2px] border-[3px] border-[#F2F2F2] hover:border-[#0081FF33]`}
          >
            <div
              className={`rounded-[6px] h-full w-full hover:bg-[#F3F6FF] flex flex-row items-center justify-center ${
                pathname === path ? "bg-[#ffffff]" : "bg-[#33357D]"
              }`}
            >
              <SVGIcon
                isActive={pathname === path}
                activeColor="#33357D"
                defaultColor="#FFFFFF"
              />
            </div>
          </div>
          <p className="text-[#404040] text-[10px] font-[500]">{name}</p>
        </div>
      ))}
    </div>
  );
};

export default SideOption;
