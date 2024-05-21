"use client";

import React from "react";
import { Button } from "antd";
import { Icon } from "@iconify/react";

const GenerateReportButton = () => {
  return (
    <div className="w-full">
      <Button
        style={{
          height: "60px",
          borderRadius: "6px",
          backgroundColor: "#33357D",
        }}
        type="primary"
        block
      >
        <div className="text-[#FFFFFF] text-[20px] font-[600] leading-6 flex flex-row items-center justify-center gap-4 w-full">
          <Icon icon="carbon:report" className="text-[32px] text-[#ffffff]" />
          Generate Report
        </div>
      </Button>
    </div>
  );
};

export default GenerateReportButton;

<p>Term 1</p>;
