"use client";

import React, { useState } from "react";
import QuickActionWidget from "./quickActionsWidget";
import {
  quickActionData,
  dataValueType,
  quickActionDataType,
} from "./quickActionsData";

const DashboardSideview = () => {
  const [openDropdown, setOpenDropdown] = useState<any>(null);

  const handleToggle = (id: number) => {
    setOpenDropdown((prevOpenDropdown: number) =>
      prevOpenDropdown === id ? null : id
    );
  };
  return (
    <div className="bg-[#ffffff] min-h-full w-full rounded-[10px] py-[36px] px-3 flex flex-col items-center ">
      <h2 className="text-[#404040] text-[15px] font-[600] leading-[18px] mb-[17px]">
        Quick Actions
      </h2>
      <div className="flex flex-col items-center w-full gap-[17px]">
        {quickActionData?.map(({ id, heading, date, widgetType, data }) => (
          <QuickActionWidget
            key={id}
            id={id}
            heading={heading}
            date={date}
            widgetType={widgetType}
            data={data}
            isOpen={openDropdown === id}
            handleToggle={() => handleToggle(id)}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardSideview;
