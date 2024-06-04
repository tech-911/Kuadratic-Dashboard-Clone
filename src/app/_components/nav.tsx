"use client";

import Image from "next/image";
import { Button, Drawer } from "antd";
import React, { useState } from "react";
import { BiMessageAltDots } from "react-icons/bi";
import {
  MdOutlineNotificationsNone,
  MdKeyboardArrowDown,
} from "react-icons/md";
import avatar from "../assets/avatar.png";
import { Icon } from "@iconify/react";
import SideOption from "./sideOptions";
import SideBar from "./sideBar";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="bg-[#ffffff] border-2 border-b-[#0000000e] min-h-[79px] px-[51px] w-full flex flex-row items-center justify-between">
      <p className="text-[24px] text-[#33357D] font-[700] leading-7 hidden lg:flex">
        Dashboard
      </p>
      <div className="flex flex-row items-center gap-4">
        <div className="flex flex-row items-center gap-5">
          <div className="cursor-pointer relative after:bg-[#ff4159] after:top-[0px] after:right-[2px] after:rounded-[50%] after:absolute after:h-[8px] after:w-[8px]">
            <BiMessageAltDots className="text-[26px] text-[#33357D] font-bold " />
          </div>
          <div className="cursor-pointer relative w-fit after:bg-[#ff4159] after:top-[1px] after:right-[4px] after:rounded-[50%] after:absolute after:h-[8px] after:w-[8px]">
            <MdOutlineNotificationsNone className="text-[26px] text-[#33357D] font-bold " />
          </div>
          <div className="h-[15px] w-[1px] rounded-[50px] bg-[#786f8c71]"></div>
        </div>
        <div className="cursor-pointer flex flex-row items-center gap-3">
          <div className="flex flex-row items-center justify-center bg-[#EDBBD6] rounded-[100%] h-8 w-8">
            <Image src={avatar} alt="avatar" />
          </div>
          <div className="flex flex-row items-center gap-3">
            <p className="md:flex hidden text-[16px] text-[#786F8C] font-[400] leading-6">
              Zuzu Jeremy
            </p>
            <MdKeyboardArrowDown className="text-[26px] text-[#5D5D92] font-bold " />
          </div>
        </div>
      </div>
      <div onClick={showDrawer} className="cursor-pointer lg:hidden flex">
        <Icon icon="ci:hamburger-lg" className="text-[24px] text-[#000000]" />
      </div>
      <Drawer
        // placement="left"
        size="large"
        title="Close"
        onClose={onClose}
        open={open}
        className="p-0"
      >
        <div className="flex flex-row-reverse items-start w-full h-full">
          <div className="w-[20%] h-full">
            <SideOption />
          </div>
          <div className="w-[80%] h-full">
            <SideBar />
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Nav;
