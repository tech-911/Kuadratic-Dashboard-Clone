import type { Metadata } from "next";
import SideOption from "../_components/sideOptions";
import Footer from "../_components/footer";
import Nav from "../_components/nav";
import SideBar from "../_components/sideBar";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "View dashboard activities",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col items-center w-screen h-screen bg-[#F4F4F4]">
      <div className="flex flex-row items-start flex-1 w-full h-[93%]">
        <div className="w-[8%] h-full">
          <SideOption />
        </div>
        <div className="w-[20%] h-full">
          <SideBar />
        </div>
        <div className="flex flex-col items-center w-[72%] h-full">
          <Nav />
          {children}
        </div>
      </div>
      <div className="h-[7%] w-full">
        <Footer />
      </div>
    </div>
  );
}
