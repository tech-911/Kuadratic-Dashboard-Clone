"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { dropDownPropsType } from "./navDropDownData";
import { Dropdown } from "antd";

const NavDropMenu = ({ icon, label, items }: dropDownPropsType) => {
  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <div className="border-[#EAEAEA] border h-full flex flex-row items-center gap-[5px] cursor-pointer px-[8px]">
        {!label ? (
          ""
        ) : (
          <p className="text-[#666666] text-[12px] font-[600] leading-[17px] text-center">
            {label}
          </p>
        )}
        <Icon icon={icon as any} className="text-[20px] text-[#666666]" />
      </div>
    </Dropdown>
  );
};

export default NavDropMenu;
