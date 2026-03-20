import React, { useState } from "react";
import { Drawer } from "../../shared/ui";
import { Arrow } from "../../shared/assets/icons";
import { DrawerType } from "../../shared/ui/Drawer/Drawer.types";
import { MenuProps, Category } from "./Menu.types";

const MobileMenu: React.FC<MenuProps> = ({ categories }) => {
  const [currentCategories, setCurrentCategories] = useState(categories);
  const [history, setHistory] = useState<Category[][]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handlePath = (category: Category) => {
    if (category.subcategories?.length) {
      setHistory((prev) => [...prev, currentCategories]);
      setCurrentCategories(category.subcategories);
    }
  };

  const handleBack = () => {
    const prev = history[history.length - 1];

    if (prev) {
      setCurrentCategories(prev);
      setHistory((prevHistory) => prevHistory.slice(0, -1));
    }
  };

  return (
    <>
      <Drawer
        isOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen}
        type={DrawerType.Menu}
      >
        <div className="p-2">
          <h2 className="heading-page mb-6">Menu</h2>

          <h3 className="p-4 text-2xl text-text-brand font-bold">
            {history.length > 0
              ? history[history.length - 1].find(
                  (cat) => cat.subcategories === currentCategories,
                )?.name
              : null}
          </h3>
          <ul className="flex flex-col">
            {currentCategories.map((item) => (
              <li
                key={item.idx}
                className="p-4 w-full text-text-brand font-bold cursor-pointer hover:bg-focused hover:text-text-accent flex items-center justify-between"
              >
                <span>{item.name}</span>

                {!!item?.subcategories?.length && (
                  <button onClick={() => handlePath(item)}>
                    <Arrow direction="right" />
                  </button>
                )}
              </li>
            ))}
          </ul>

          {history.length > 0 && (
            <button
              onClick={handleBack}
              className="p-4 w-full flex justify-end items-center gap-1 text-m font-bold hover:underline underline-offset-4"
            >
              <Arrow direction="left" />
              Go back
            </button>
          )}
        </div>
      </Drawer>
    </>
  );
};

export default MobileMenu;
