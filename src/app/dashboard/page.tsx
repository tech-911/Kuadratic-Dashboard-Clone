import React from "react";
import { Button } from "antd";
import DashboardMainView from "./_components/dashboardMain";
import DashboardSideview from "./_components/dashboardSide";
import "../_components/styleScrollbar.css";

const Dashboard = () => {
  return (
    <div className="h-full w-full bg-[#F4F4F4] flex flex-row items-start overflow-hidden">
      <div className="h-full w-[75%] bg-[#F4F4F4] overflow-x-hidden hover:overflow-y-scroll overflow-y-hidden style-scrollbar-main-dashboard">
        <DashboardMainView />
      </div>
      <div className="h-full w-[25%] pr-[8px] py-[32px] bg-[#F4F4F4] overflow-x-hidden overflow-y-scroll style-scrollbar">
        <DashboardSideview />
      </div>
    </div>
  );
};

export default Dashboard;
