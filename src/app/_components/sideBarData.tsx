export type sideBarDataType = {
  id: number;
  name: string;
  sideIcon: string;
  link: string;
}[];

export const sideBarData: sideBarDataType = [
  {
    id: 0,
    name: "Dashboard",
    sideIcon: "material-symbols:dashboard-outline",
    link: "/dashboard",
  },
  {
    id: 1,
    name: "Track",
    sideIcon: "eos-icons:monitoring",
    link: "/track",
  },
  {
    id: 2,
    name: "Reports",
    sideIcon: "iconoir:reports-solid",
    link: "/reports",
  },
  {
    id: 3,
    name: "Profile",
    sideIcon: "healthicons:ui-user-profile-outline",
    link: "/profile",
  },
];
