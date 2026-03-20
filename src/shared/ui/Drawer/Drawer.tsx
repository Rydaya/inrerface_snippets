import React from "react";
import { DrawerProps, DrawerType } from "./Drawer.types";
import { Button } from "../../ui";
import { MenuIcon } from "../../assets/icons";
import clsx from "clsx";

const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  setIsOpen,
  children,
  type,
}) => {
  const closeDrawer = () => setIsOpen(false);
  return (
    <>
      {type === DrawerType.Menu && (
        <Button
          variant="primary"
          onClick={() => setIsOpen(true)}
          className="m-auto w-[30%]"
        >
          Open menu
        </Button>
      )}

      {type === DrawerType.Sidebar && (
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden z-50 absolute top-5 right-5"
        >
          <MenuIcon />
        </button>
      )}

      {isOpen && (
        <div
          onClick={closeDrawer}
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
        {children}
      </div>
    </>
  );
};

export default Drawer;
