"use client";

import React from "react";
import { Icon } from "@iconify/react";
import type { DatePickerProps } from "antd";
import { DatePicker, Checkbox } from "antd";
import "./dateStyles.css";
import NavDropMenu from "./navdropMenuComponent";
import { navDropDownData } from "./navDropDownData";
import { dropDownPropsType } from "./navDropDownData";
import type { CheckboxProps, MenuProps } from "antd";
import { Dropdown } from "antd";

const SubNav = () => {
  const handleDatePicker: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };
  const handleGrade = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const items: MenuProps["items"] = [
    {
      label: (
        <Checkbox onChange={onChange}>
          <p className="text-[#33357D] text-[10px] font-[400] leading-[15px]">
            Grade JK 2022/2023
          </p>
        </Checkbox>
      ),
      key: "0",
    },
    {
      label: (
        <Checkbox onChange={onChange}>
          <p className="text-[#33357D] text-[10px] font-[400] leading-[15px]">
            Grade SK 2022/2023
          </p>
        </Checkbox>
      ),
      key: "1",
    },
    {
      label: (
        <Checkbox onChange={onChange}>
          <p className="text-[#33357D] text-[10px] font-[400] leading-[15px]">
            Grade 1 2022/2023
          </p>
        </Checkbox>
      ),
      key: "2",
    },
    {
      label: (
        <Checkbox onChange={onChange}>
          <p className="text-[#33357D] text-[10px] font-[400] leading-[15px]">
            Grade 2 2022/2023
          </p>
        </Checkbox>
      ),
      key: "3",
    },
    {
      label: (
        <Checkbox onChange={onChange}>
          <p className="text-[#33357D] text-[10px] font-[400] leading-[15px]">
            Grade 3 2022/2023
          </p>
        </Checkbox>
      ),
      key: "4",
    },
    {
      label: (
        <Checkbox onChange={onChange}>
          <p className="text-[#33357D] text-[10px] font-[400] leading-[15px]">
            Grade 4 2022/2023
          </p>
        </Checkbox>
      ),
      key: "5",
    },
    {
      label: (
        <Checkbox onChange={onChange}>
          <p className="text-[#33357D] text-[10px] font-[400] leading-[15px]">
            Grade 5 2022/2023
          </p>
        </Checkbox>
      ),
      key: "6",
    },
    {
      label: (
        <Checkbox onChange={onChange}>
          <p className="text-[#33357D] text-[10px] font-[400] leading-[15px]">
            Grade 6 2022/2023
          </p>
        </Checkbox>
      ),
      key: "7",
    },
  ];

  return (
    <div className="bg-[#ffffff] h-fit lg:h-[43px] lg:gap-0 gap-4 w-full md:py-[7.6px] py-[16px] pl-[12px] pr-[12px] flex flex-1 flex-wrap flex-row items-center">
      {/* ------------------Search----------------------- */}
      <div className="relative h-full sm:grow w-full md:w-[10%]">
        <Icon
          icon="gg:search"
          className="absolute left-[10px] top-[3px] text-[24px] text-[#2E2E48]"
        />
        <input
          type="text"
          className="h-full pl-[45px] xl:placeholder:text-[#A098AE] md:placeholder:text-[#ffffff] placeholder:text-[#a098ad] border-none outline-none bg-[#ffffff] w-full placeholder:text-[18px]"
          placeholder="Search here..."
        />
      </div>

      <div className="flex flex-row items-center gap-2 h-full flex-wrap">
        {/* ----------------------Date----------------------- */}
        <div className="cursor-pointer w-[100px] md:w-[15%] flex flex-row items-center gap-1 relative">
          {/* <Icon
            icon="lets-icons:date-today"
            className="text-[20px] text-[#666666] absolute right-[1px]"
          /> */}
          <DatePicker
            className="custom-datepicker"
            suffixIcon
            onChange={handleDatePicker}
            placeholder="Date"
            variant="filled"
          />
          {/* <Icon
            icon="iconamoon:arrow-down-2-light"
            className="text-[20px] text-[#666666] absolute left-[1px]"
          /> */}
        </div>
        {/* ----------------------Grade-------------------------------- */}
        <Dropdown menu={{ items }} trigger={["click"]}>
          <div className="border-[#EAEAEA] border h-full w-[150px] md:w-[20%] flex flex-row items-center cursor-pointer">
            <div className="w-[25%] h-full border-[#EAEAEA] border-r flex flex-row items-center justify-center">
              <Icon
                icon="icons8:student"
                className="text-[20px] text-[#666666]"
              />
            </div>
            <p className="w-[50%] h-full border-[#EAEAEA] border-r text-[#666666] text-[12px] font-[600] leading-[17px] text-center flex items-center justify-center">
              Grade
            </p>

            <div className="w-[25%] h-full flex flex-row items-center justify-center">
              <Icon
                icon="iconamoon:arrow-down-2-light"
                className="text-[20px] text-[#666666]"
              />
            </div>
          </div>
        </Dropdown>
        {navDropDownData?.map(({ id, icon, label, items }) => (
          <NavDropMenu key={id} icon={icon} label={label} items={items} />
        ))}
        <div className="border-[#EAEAEA] border h-full flex flex-row items-center gap-[5px] cursor-pointer px-[8px]">
          <Icon icon="lucide:printer" className="text-[20px] text-[#666666]" />
        </div>
      </div>
    </div>
  );
};

export default SubNav;
