import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../features/sidebar/Sidebar";

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="flex h-screen relative">
      <Sidebar isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      <div className="flex-1 lg:w-[80vw] lg:ml-[20vw]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
