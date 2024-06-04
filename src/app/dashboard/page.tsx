import React from "react";
import { Button } from "antd";
import DashboardMainView from "./_components/dashboardMain";
import DashboardSideview from "./_components/dashboardSide";
import "../_components/styleScrollbar.css";

const Dashboard = () => {
  return (
    <div className="xl:h-full w-full bg-[#F4F4F4] flex flex-col xl:flex-row items-start xl:overflow-hidden overflow-y-scroll">
      <div className="xl:h-full w-full xl:w-[75%] bg-[#F4F4F4] xl:overflow-x-hidden xl:hover:overflow-y-scroll xl:overflow-y-hidden style-scrollbar-main-dashboard">
        <DashboardMainView />
      </div>
      <div className="px-[26px] xl:h-full w-full xl:w-[25%] xl:pr-[8px] py-[32px] bg-[#F4F4F4] xl:overflow-x-hidden xl:overflow-y-scroll style-scrollbar">
        <DashboardSideview />
      </div>
    </div>
  );
};

export default Dashboard;
