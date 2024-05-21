import type { CheckboxProps, MenuProps } from "antd";
import { Checkbox, Dropdown } from "antd";
import { Icon } from "@iconify/react";

export type dropDownPropsType = {
  id?: number;
  icon: string | null;
  label: string | null;
  items?: MenuProps["items"];
};

export const onChange: CheckboxProps["onChange"] = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

export const navDropDownData: dropDownPropsType[] = [
  {
    id: 0,
    label: "Term 1",
    icon: "iconamoon:arrow-down-2-light",
    items: [
      {
        label: (
          <Checkbox onChange={onChange}>
            <p className="text-[#696565] text-[10px] font-[400] leading-[15px]">
              Term 1
            </p>
          </Checkbox>
        ),
        key: "0",
      },
      {
        label: (
          <Checkbox onChange={onChange}>
            <p className="text-[#696565] text-[10px] font-[400] leading-[15px]">
              Term 2
            </p>
          </Checkbox>
        ),
        key: "1",
      },
      {
        label: (
          <Checkbox onChange={onChange}>
            <p className="text-[#696565] text-[10px] font-[400] leading-[15px]">
              Term 3
            </p>
          </Checkbox>
        ),
        key: "2",
      },
    ],
  },
  {
    id: 1,
    label: "Bulk Action",
    icon: "iconamoon:arrow-down-2-light",
    items: [
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
        key: "0",
      },
    ],
  },
  {
    id: 2,
    label: "Export",
    icon: "iconamoon:arrow-down-2-light",
    items: [
      {
        label: (
          <p className="text-[#44566C] text-[15px] font-[400] leading-[17px]">
            Excel
          </p>
        ),
        icon: (
          <Icon icon="vscode-icons:file-type-excel" className="text-[20px]" />
        ),
        key: "0",
      },
      {
        label: (
          <p className="text-[#44566C] text-[15px] font-[400] leading-[17px]">
            PDF
          </p>
        ),
        icon: (
          <Icon icon="vscode-icons:file-type-pdf2" className="text-[20px]" />
        ),
        key: "1",
      },
    ],
  },
//   {
//     id: 3,
//     label: null,
//     icon: "lucide:printer",
//     items: [
//       {
//         label: <a href="https://www.antgroup.com">1st menu item</a>,
//         key: "0",
//       },
//       {
//         label: <a href="https://www.aliyun.com">2nd menu item</a>,
//         key: "1",
//       },
//       {
//         type: "divider",
//       },
//       {
//         label: "3rd menu item",
//         key: "3",
//       },
//     ],
//   },
];
