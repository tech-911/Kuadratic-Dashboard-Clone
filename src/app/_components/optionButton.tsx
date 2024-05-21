"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";

type sideBarPropsType = {
  sideIcon: string;
  name: string;
  link: string;
};

const OptionButton = ({ sideIcon, name, link }: sideBarPropsType) => {
  const pathname = usePathname();

  return (
    <div
      className={`w-full h-[50px] group cursor-pointer rounded-[8px] py-[13px] hover:bg-[#ffffff] flex flex-row items-center justify-start pl-[13px] gap-4 ${
        pathname === link ? "bg-[#ffffff]" : ""
      }`}
    >
      <Icon
        icon={sideIcon}
        className={`group-hover:text-[#33357D] text-[24px] ${
          pathname === link ? "text-[#33357D]" : "text-[#ffffff]"
        }`}
      />
      <p
        className={`group-hover:text-[#33357D]  text-[18px] font-[600] leading-5 ${
          pathname === link ? "text-[#33357D]" : "text-[#ffffff]"
        }`}
      >
        {name}
      </p>
    </div>
  );
};

export default OptionButton;
