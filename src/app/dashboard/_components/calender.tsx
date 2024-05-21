"use client";

import type { Dayjs } from "dayjs";
import React from "react";
import { Calendar, theme } from "antd";
import type { CalendarProps } from "antd";
import "./calenderResponsive.css";

const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>["mode"]) => {
  console.log(value.format("YYYY-MM-DD"), mode);
};

const CalendarWidget: React.FC = () => {
  return (
    <div
      className="w-full border-[#ECECEC] border rounded-[10px] calenderWrapper"
      //  style={wrapperStyle}
    >
      <Calendar fullscreen={false} onPanelChange={onPanelChange} />
    </div>
  );
};

export default CalendarWidget;
