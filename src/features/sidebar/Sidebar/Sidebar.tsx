import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store";
import { NavLink } from "react-router-dom";
import { Contact, Drawer } from "../../../shared/ui";
import { Arrow } from "../../../shared/assets/icons";
import styles from "./Sidebar.module.css";
import clsx from "clsx";
import { SidebarProps } from "./Sidebar.types";
import { DrawerType } from "../../../shared/ui/Drawer/Drawer.types";

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const navItems = useSelector((state: RootState) => state.nav.items);

  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} type={DrawerType.Sidebar}>
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
      </Drawer>
    </>
  );
};

export default Sidebar;
