import React, { useState } from "react";
import Contact from "../../components/Contact";
import ArrowUp from "../../assets/icons/ArrowUp";
import ArrowDown from "../../assets/icons/ArrowDown";
import styles from "./Sidebar.module.css";
import clsx from "clsx";

const testBar = ["Test", "Test 1", "Test 2"];

const Sidebar: React.FC = () => {
  const [activeBtnId, setActiveBtnId] = useState<string | null>(null);

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
          <button
            key={item}
            className={`p-3 font-semibold rounded-xl flex justify-between items-center w-full text-left transition
    ${activeBtnId === item ? "bg-accent text-focused" : "text-sidebar hover:bg-accent hover:text-focused"}`}
            onClick={() => setActiveBtnId(item)}
          >
            {item}
            {activeBtnId === item ? (
              <ArrowUp className="w-4 h-4" />
            ) : (
              <ArrowDown className="w-4 h-4" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
