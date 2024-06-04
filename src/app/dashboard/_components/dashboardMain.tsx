"use client";

import React from "react";
import SubNav from "./subNav";
import StatusWidget from "./statusWidget";
import { statusData } from "./statusData";
import GenerateReportButton from "./generateReportButton";
import { Icon } from "@iconify/react";
import { dropDownPropsType } from "./navDropDownData";
import { Dropdown } from "antd";
import type { MenuProps } from "antd";
import GraphComponent from "./graphComponent";

const DashboardMainView = () => {
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
    <div className="px-[26px] xl:pl-[26px] xl:pr-[16px] pt-[32px] w-full">
      <SubNav />
      {/* -------------------Status------------------------- */}
      <div className="mt-12 flex flex-col sm:flex-row items-center w-full gap-[15px]">
        {statusData?.map(({ id, heading, value, percentage, theme }) => (
          <StatusWidget
            key={id}
            heading={heading}
            value={value}
            percentage={percentage}
            theme={theme}
          />
        ))}
      </div>
      <div className="mt-12 h-[450px] w-full px-4 md:px-10 py-6 bg-[#ffffff] rounded-[11px] flex flex-col items-center gap-[33px]">
        <div className="flex flex-row-reverse md:flex-row items-center justify-end w-full gap-2">
          <Dropdown menu={{ items }} trigger={["click"]}>
            <div className="rounded-[5px] bg-[#F8FAFB] px-[18px] py-[10px] h-[42px] flex flex-row items-center gap-[5px] cursor-pointer">
              <p className="text-[#666666] text-[16px] font-[600] leading-[17px] text-center">
                Status
              </p>
              <Icon
                icon="iconamoon:arrow-down-2-light"
                className="text-[22px] mt-[4px] text-[#666666]"
              />
            </div>
          </Dropdown>
          <Dropdown menu={{ items }} trigger={["click"]}>
            <div className="rounded-[5px] bg-[#F8FAFB] px-[18px] py-[10px] h-[42px] flex flex-row items-center gap-[5px] cursor-pointer">
              <p className="text-[#666666] text-[16px] font-[600] leading-[17px] text-center">
                Type
              </p>
              <Icon
                icon="iconamoon:arrow-down-2-light"
                className="text-[22px] mt-[4px] text-[#666666]"
              />
            </div>
          </Dropdown>
        </div>
        <GraphComponent />
      </div>
      <div className="mt-8 w-full xl:mb-[100px] mb-20px">
        <GenerateReportButton />
      </div>
    </div>
  );
};

export default DashboardMainView;
