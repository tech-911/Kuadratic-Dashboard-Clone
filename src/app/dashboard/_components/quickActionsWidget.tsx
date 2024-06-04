"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Checkbox, Dropdown } from "antd";
import type { CheckboxProps, MenuProps } from "antd";
import "./quickActionsResponsive.css";
import { quickActionDataType } from "./quickActionsData";
import CalendarWidget from "./calender";

const QuickActionWidget = ({
  heading,
  date,
  widgetType,
  data,
  handleToggle,
  isOpen,
}: quickActionDataType) => {
  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const items: MenuProps["items"] = [
    {
      label: (
        <p className="text-[#44566C] text-[15px] font-[400] leading-[17px]">
          View Profile
        </p>
      ),
      icon: (
        <Icon
          icon="fa-solid:chalkboard-teacher"
          className="text-[20px] text-[#44566C]"
        />
      ),
      key: "0",
    },
    {
      label: (
        <p className="text-[#44566C] text-[15px] font-[400] leading-[17px]">
          Send mail
        </p>
      ),
      icon: (
        <Icon
          icon="tabler:message-check"
          className="text-[20px] text-[#44566C]"
        />
      ),
      key: "1",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-[17px] w-full">
      <div
        onClick={handleToggle}
        className="cursor-pointer flex flex-row items-center justify-between gap-2 bg-[#FAFAFA] rounded-l-[10px] h-[55px] w-full relative overflow-hidden pl-[12px] xl:pl-[26px] xl:pr-[10px] pr-[4px]"
      >
        <div className="absolute top-0 left-0 w-[6px] h-full bg-[#33357D]"></div>
        <p className="text-[#404040] text-[13px] font-[600] leading-[20px]">
          {heading}
        </p>
        <div className="flex flex-row items-center justify-center rounded-[59%] h-[30px] w-[30px] bg-[#33357D]">
          <Icon
            icon="iconamoon:arrow-down-2"
            className="text-[20px] text-[#ffffff]"
          />
        </div>
      </div>
      {widgetType === "card" ? (
        <div
          className={`w-full overflow-hidden rounded-[10px] transition-all ease-in-out delay-100 duration-700 ${
            isOpen
              ? "p-[10px] max-h-[500px] border border-[#ECECEC]"
              : "p-0 max-h-0"
          }`}
        >
          <div className="w-full rounded-[10px] bg-[#F8F8FB] py-[11px] flex flex-col items-center gap-[10px]">
            <p className="text-[#404040] text-[13px] font-[600] leading-[20px]">
              {date}
            </p>
            {data?.map(({ id, name, value, iconValue, iconColor }) => (
              <div
                key={id}
                className="h-[35px] w-full bg-[#ffffff] flex flex-row items-center justify-center gap-5 xl:justify-between xl:gap-[5px] pl-[10px]"
              >
                <Checkbox onChange={onChange}>
                  <p className="text-[#696565] text-[10px] font-[400] leading-[15px]">
                    {name}
                  </p>
                </Checkbox>
                <p className="text-[#696565] text-[10px] font-[400] leading-[15px] removeTextResponsive">
                  {value}
                </p>
                <div
                  className={`flex flex-row items-center justify-center rounded-[59%] h-[25px] w-[25px] text-[#ffffff] text-[10px] font-[400] leading-[15px] 
                                          ${
                                            iconColor === "#008124"
                                              ? "bg-[#008124]"
                                              : iconColor === "#0081FF"
                                              ? "bg-[#0081FF]"
                                              : iconColor === "#FFC700"
                                              ? "bg-[#FFC700]"
                                              : "bg-[#FF4159]"
                                          }
                  `}
                >
                  {iconValue}
                </div>
                <Dropdown menu={{ items }} trigger={["click"]}>
                  <Icon
                    icon="tabler:dots"
                    className="text-[20px] text-[#A098AE]"
                  />
                </Dropdown>
              </div>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
      {widgetType === "calender" ? (
        <div
          className={`overflow-hidden transition-all ease-in-out delay-100 duration-700 ${
            !isOpen ? "max-h-0" : "max-h-[500px]"
          }`}
        >
          <CalendarWidget />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default QuickActionWidget;
