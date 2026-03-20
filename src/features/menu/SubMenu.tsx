import React, { useState } from "react";
import { Category } from "./Menu.types";
import { Arrow } from "../../shared/assets/icons";
import { SubMenuProps } from "./Menu.types";

const SubMenu: React.FC<SubMenuProps> = ({ categories, titleCategory }) => {
  const [activePath, setActivePath] = useState<Category[]>([]);

  const columns: Category[][] = [];
  columns.push(categories);

  for (let i = 0; i < activePath.length; i++) {
    const next = activePath[i]?.subcategories;
    if (next?.length) columns.push(next);
  }

  const handleHover = (level: number, category: Category) => {
    const newPath = activePath.slice(0, level);
    newPath[level] = category;
    setActivePath(newPath);
  };

  return (
    <div className="flex overflow-hidden">
      {columns.map((items, level) => (
        <div
          key={level}
          className={`flex flex-col min-w-[300px] ${
            level !== columns.length - 1 ? "border-r border-gray-300" : ""
          }`}
        >
          <p className="p-4 font-bold">
            {level === 0 ? titleCategory : activePath[level - 1]?.name}
          </p>
          <ul>
            {items.map((item) => (
              <li
                key={item.idx}
                className="cursor-pointer p-4 flex justify-between items-center hover:bg-focused hover:text-text-accent"
                onMouseEnter={() => handleHover(level, item)}
              >
                {item.name}
                {!!item.subcategories?.length && <Arrow direction="right" />}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SubMenu;
