"use client";

import React from "react";
import type { statusDataType } from "./statusData";

const StatusWidget = ({
  heading,
  value,
  percentage,
  theme,
}: statusDataType) => {
  return (
    <div className="rounded-[8px] bg-[#FFFFFF] h-[152px] w-full relative px-[21px] py-[16px]">
      <svg
        className="absolute left-[21px] top-[16px]"
        width="43"
        height="43"
        viewBox="0 0 43 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="21.3036" cy="21.7366" r="20.9638" fill={theme} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.303 21.6722C23.7151 21.6722 25.6705 19.7168 25.6705 17.3047C25.6705 14.8926 23.7151 12.9373 21.303 12.9373C18.8909 12.9373 16.9355 14.8926 16.9355 17.3047C16.9355 19.7168 18.8909 21.6722 21.303 21.6722ZM17.3717 24.4219C15.6832 24.4219 14.3145 25.7907 14.3145 27.4791C14.3145 29.1676 15.6832 30.5363 17.3717 30.5363H25.2331C26.9216 30.5363 28.2903 29.1676 28.2903 27.4791C28.2903 25.7907 26.9216 24.4219 25.2331 24.4219H17.3717Z"
          fill="white"
        />
      </svg>

      <svg
        className="absolute left-[21px] bottom-[16px]"
        width="24"
        height="13"
        viewBox="0 0 24 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.339844"
          y="3.72852"
          width="0.887969"
          height="9.03874"
          rx="0.443985"
          fill={theme}
        />
        <rect
          x="3.08398"
          y="7.18457"
          width="0.887969"
          height="5.58275"
          rx="0.443985"
          fill={theme}
        />
        <rect
          x="5.82617"
          y="8.77966"
          width="0.887969"
          height="3.98768"
          rx="0.443985"
          fill={theme}
        />
        <rect
          x="8.57031"
          y="0.538452"
          width="0.887969"
          height="12.2289"
          rx="0.443985"
          fill={theme}
        />
        <rect
          x="11.3145"
          y="3.99438"
          width="0.887969"
          height="8.77289"
          rx="0.443985"
          fill={theme}
        />
        <rect
          x="14.0586"
          y="2.13354"
          width="0.887969"
          height="10.6338"
          rx="0.443985"
          fill={theme}
        />
        <rect
          x="16.8008"
          y="3.72864"
          width="0.887969"
          height="9.03874"
          rx="0.443985"
          fill={theme}
        />
        <rect
          x="19.5449"
          y="7.18457"
          width="0.887969"
          height="5.58275"
          rx="0.443985"
          fill={theme}
        />
        <rect
          x="22.2891"
          y="8.77966"
          width="0.887969"
          height="3.98768"
          rx="0.443985"
          fill={theme}
        />
      </svg>
      <svg
        className="absolute right-[21px] bottom-[16px]"
        width="18"
        height="17"
        viewBox="0 0 18 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.2702 16.7671H1.78262C1.00443 16.7671 0.614704 15.8262 1.16497 15.2759L15.6525 0.788385C16.2028 0.238116 17.1437 0.627837 17.1437 1.40604V15.8936C17.1437 16.376 16.7526 16.7671 16.2702 16.7671Z"
          fill={theme}
        />
      </svg>

      {/* -------------------Heading-------------------- */}
      <p
        className={`text-[#404040] text-[17px] font-[500] leading-[17px] text-center absolute top-[20px] left-[88px]`}
      >
        {heading}
      </p>
      {/* -------------------Value-------------------- */}
      <p
        className={`text-[24px] font-[700] leading-[29px] text-center absolute top-[50px] left-[88px] ${
          theme === "#33357D"
            ? "text-[#33357D]"
            : theme === "#008124"
            ? "text-[#008124]"
            : theme === "#FF8787"
            ? "text-[#FF8787]"
            : "text-[#404040]"
        }`}
      >
        {value}
      </p>
      {/* -------------------Percentage-------------------- */}
      <p
        className={`text-[14px] font-[500] leading-[14px] text-center absolute bottom-[16px] left-[90px] ${
          theme === "#33357D"
            ? "text-[#33357D]"
            : theme === "#008124"
            ? "text-[#008124]"
            : theme === "#FF8787"
            ? "text-[#FF8787]"
            : "text-[#404040]"
        }`}
      >
        {percentage}
      </p>
    </div>
  );
};

export default StatusWidget;
