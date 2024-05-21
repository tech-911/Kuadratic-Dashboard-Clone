export type statusDataType = {
  id?: number;
  heading: string;
  value: string;
  percentage: string | null;
  theme: string;
};

export const statusData: statusDataType[] = [
  {
    id: 0,
    heading: "All",
    value: "190",
    percentage: "0%",
    theme: "#33357D",
  },
  {
    id: 1,
    heading: "Present",
    value: "140",
    percentage: "73%",
    theme: "#008124",
  },
  {
    id: 2,
    heading: "Absent",
    value: "50",
    percentage: "27%",
    theme: "#FF8787",
  },
];
