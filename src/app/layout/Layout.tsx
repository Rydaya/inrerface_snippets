import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../features/sidebar/Sidebar";

const Layout: React.FC = () => {
  return (
    <div className="flex h-screen relative">
      <Sidebar />
      <div className="flex-1 w-[80vw] ml-[20vw]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
