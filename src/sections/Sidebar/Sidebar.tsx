import React from "react";
import { NavLink } from "react-router-dom";
import Contact from "../../components/Contact";
import { ArrowDown, ArrowUp } from "../../assets/icons";
import styles from "./Sidebar.module.css";
import clsx from "clsx";

const testBar = [
  {
    id: "hvbglhgahreughikera",
    title: "Home",
    path: "/",
  },
  {
    id: "nadjklbvaerfjkvbnaekj",
    title: "Test1",
    path: "/test",
  },
  {
    id: "vjnakjvndjbvajnveanv",
    title: "Test2",
    path: "/test2",
  },
];

const Sidebar: React.FC = () => {
  return (
    <div className="w-72 bg-bg-sidebar shadow-lg p-5 flex flex-col gap-3">
      <h2 className="font-gothic font-bold text-bg-accent text-3xl text-center">
        Snippets
      </h2>
      <Contact />
      <div
        className={clsx(
          styles.scroll,
          "flex flex-col gap-1 overflow-y-auto pr-1",
        )}
      >
        {testBar.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) =>
              clsx(
                "p-3 font-semibold rounded-xl flex justify-between items-center w-full text-left transition",
                isActive
                  ? "bg-accent text-focused"
                  : "text-sidebar hover:bg-accent hover:text-focused",
              )
            }
          >
            {({ isActive }) => (
              <>
                {item.title}
                {isActive ? (
                  <ArrowUp className="w-4 h-4" />
                ) : (
                  <ArrowDown className="w-4 h-4" />
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
