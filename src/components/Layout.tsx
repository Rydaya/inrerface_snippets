import React from "react";
import Sidebar from "../sections/Sidebar/Sidebar";

const Layout: React.FC = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-6">'Children'</div>
    </div>
  );
};

export default Layout;
