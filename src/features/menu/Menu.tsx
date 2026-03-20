import React, { useState, useMemo } from "react";
import { MenuProps } from "./Menu.types";
import SubMenu from "./SubMenu";
import clsx from "clsx";

const Menu: React.FC<MenuProps> = ({ categories }) => {
  const [activeMenuId, setActiveMenuId] = useState<number | null>(2);

  const currentCategory = useMemo(
    () => categories.find((item) => item.idx === activeMenuId),
    [activeMenuId, categories],
  );

  return (
    <div className="w-full" onMouseLeave={() => setActiveMenuId(null)}>
      <div className="bg-accent px-5 py-2 flex items-center justify-between gap-4">
        <h2 className="heading-page text-xl lg:text-2xl text-text-accent">
          Snippets
        </h2>
        <ul className="flex gap-5">
          {categories.map((item) => (
            <li
              key={item.idx}
              className={clsx(
                "text-text-accent font-bold cursor-pointer hover:underline underline-offset-[5px] decoration-2",
                {
                  underline:
                    activeMenuId === item.idx && item.subcategories?.length,
                },
              )}
              onMouseEnter={() => setActiveMenuId(item.idx)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      {!!currentCategory?.subcategories?.length && (
        <div className="bg-bg-sidebar p-5">
          <SubMenu
            categories={currentCategory.subcategories}
            titleCategory={currentCategory.name}
          />
        </div>
      )}
    </div>
  );
};

export default Menu;
