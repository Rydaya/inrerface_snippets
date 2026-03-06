import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store";
import { NavLink } from "react-router-dom";
import Contact from "../../../shared/ui/Contact";
import { Arrow, Menu } from "../../../shared/assets/icons";
import styles from "./Sidebar.module.css";
import clsx from "clsx";
import { SidebarProps } from "./Sidebar.types";

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const navItems = useSelector((state: RootState) => state.nav.items);

  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden z-50 absolute top-5 right-5"
      >
        <Menu />
      </button>

      {isOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}

      <div
        className={clsx(
          "fixed top-0 left-0 h-screen w-[70vw] w-[80vw] md:w-[300px] lg:w-[20vw] bg-bg-sidebar shadow-lg p-5 flex flex-col gap-3 transition-transform duration-300 z-50",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "lg:translate-x-0",
        )}
      >
        <h2 className="heading-page text-xl lg:text-3xl text-center">
          Snippets
        </h2>

        <Contact />

        <div
          className={clsx(
            styles.scroll,
            "flex flex-col gap-1 overflow-y-auto pr-1",
          )}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              onClick={closeSidebar}
              className={({ isActive }) =>
                clsx(
                  "p-3 font-semibold rounded-xl flex justify-between items-center w-full text-left transition",
                  isActive
                    ? "bg-button-primary text-button-textPimary"
                    : "hover:bg-button-primary hover:text-button-textPimary",
                )
              }
            >
              {({ isActive }) => (
                <>
                  {item.title}
                  <Arrow
                    direction={isActive ? "up" : "down"}
                    className="w-4 h-4"
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
