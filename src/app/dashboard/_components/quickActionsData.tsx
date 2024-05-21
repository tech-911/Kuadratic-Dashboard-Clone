export type dataValueType = {
  id?: string;
  name: string;
  value: string;
  iconValue: string;
  iconColor: string;
};
export type quickActionDataType = {
  id: number;
  heading: string;
  date: string | null;
  widgetType: string;
  data: dataValueType[] | null;
};

export const quickActionData: quickActionDataType[] = [
  {
    id: 0,
    heading: "Reported Absence",
    date: "Thursday, June 2, 2023",
    widgetType: "card",
    data: [
      {
        id: "a0",
        name: "Misty Taylor",
        value: "435152",
        iconValue: "G2",
        iconColor: "#008124",
      },
      {
        id: "a1",
        name: "Misty Taylor",
        value: "435152",
        iconValue: "G2",
        iconColor: "#0081FF",
      },
    ],
  },
  {
    id: 1,
    heading: "Reported Lateness",
    date: "Thursday, June 2, 2023",
    widgetType: "card",
    data: [
      {
        id: "b0",
        name: "Misty Taylor",
        value: "435152",
        iconValue: "JK",
        iconColor: "#FFC700",
      },
      {
        id: "b1",
        name: "Misty Taylor",
        value: "435152",
        iconValue: "SK",
        iconColor: "#FF4159",
      },
    ],
  },
  {
    id: 2,
    heading: "View Reports",
    date: null,
    widgetType: "calender",
    data: null,
  },
];
