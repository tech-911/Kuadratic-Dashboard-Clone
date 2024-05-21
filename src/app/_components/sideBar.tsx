"use client";

import React, { useState } from "react";
import logo from "../assets/logo.png";
import Image from "next/image";
import bottomImage from "../assets/sideNavBottomImage.png";
import OptionButton from "./optionButton";
import { sideBarData } from "./sideBarData";
import { Icon } from "@iconify/react";
import "./styleScrollbar.css";

const SideBar = () => {
  const [tab, setTab] = useState<boolean>(false);
  return (
    <div className="bg-[#33357D] w-full h-full pb-20 px-5 pt-10 flex flex-col items-center relative style-scrollbar overflow-x-hidden overflow-y-scroll">
      <Image priority className="mb-10" src={logo} alt="Logo" />
      <div className="flex flex-col items-center gap-4 w-full">
        {sideBarData?.map(({ id, name, sideIcon, link }) => (
          <OptionButton key={id} sideIcon={sideIcon} name={name} link={link} />
        ))}
      </div>
      <div className="flex flex-col items-center gap-4 w-full mt-[311px]">
        {/* ------------messages button----------------- */}
        <div
          className={`cursor-pointer p-2 flex flex-row items-center justify-between h-[50px] gap-1 xl:gap-3 rounded-[8px] w-full bg-[#ffffff]`}
        >
          <p
            onClick={() => setTab(true)}
            className={`p-[7px] text-center text-[16px] flex flex-row items-center justify-center w-full h-full rounded-[5.7px] hover:text-[#ffffff] hover:bg-[#33357D] transition-all ease-in-out font-[500] leading-[18px] ${
              tab ? "text-[#ffffff] bg-[#33357D]" : "text-[#33357D]"
            }`}
          >
            Messages
          </p>
          <p
            onClick={() => setTab(false)}
            className={`p-[7px] w-full h-full flex flex-row items-center justify-center rounded-[5.7px] hover:text-[#ffffff] hover:bg-[#33357D] text-center text-[16px] transition-all ease-in-out font-[500] leading-[18px] ${
              tab ? "text-[#33357D]" : "text-[#ffffff] bg-[#33357D]"
            }`}
          >
            Notifications
          </p>
        </div>
        {/* ------------logout button----------------- */}
        <div className="cursor-pointer pl-[22px] py-2 flex flex-row items-center h-[50px] gap-3 rounded-[8px] w-full bg-[#FF4159] hover:bg-[#e77a88]">
          <Icon icon="tabler:logout" className={`text-[#ffffff] text-[24px]`} />
          <p className="text-center text-[16px] text-[#ffffff] font-[500] leading-[18px]">
            Log Out
          </p>
        </div>
      </div>
      <Image className="mt-[164px]" src={bottomImage} alt="bottom image" />
    </div>
  );
};

export default SideBar;

// absolute bottom-10 left-[75px]
