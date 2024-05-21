"use client";

import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function GraphComponent() {
  const data = [
    {
      name: "Jun 01",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Jun 02",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Jun 03",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Jun 04",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Jun 05",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Jun 06",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Jun 07",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Jun 08",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Jun 09",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Jun 10",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Jun 11",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Jun 12",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          //   top: 10,
          //   right: 30,
          //   left: 0,
          bottom: 25,
        }}
      >
        <CartesianGrid
          vertical={false}
          // strokeDasharray="3 3"
        />
        <XAxis
          dataKey="name"
          angle={-45}
          textAnchor="end"
          interval={0}
          axisLine={{ stroke: "transparent" }}
        />
        <YAxis axisLine={{ stroke: "transparent" }} />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stackId="1"
          stroke="#008124"
          strokeWidth="4"
          fill="#C9EAC4"
        />
        <Area
          type="monotone"
          dataKey="pv"
          stackId="1"
          stroke="#FF4C54"
          strokeWidth="4"
          fill="none"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default GraphComponent;
