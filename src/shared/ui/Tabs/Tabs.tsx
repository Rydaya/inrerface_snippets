import React, { useState } from "react";
import { TabsProps } from "./Tabs.types";
import { clsx } from "clsx";

const Tabs: React.FC<TabsProps> = ({ items }) => {
  const [activeId, setActiveId] = useState<string | number | null>(items[0].id);

  const toggleItem = (id: string | number) => {
    setActiveId(id);
  };

  const activeItem = items.find((item) => item.id === activeId);

  return (
    <div>
      <div className="flex gap-2">
        {items?.map((item) => (
          <button
            onClick={() => toggleItem(item.id)}
            className={clsx(
              "flex-1 px-4 py-2 border-t border-l border-r rounded-tl-xl rounded-tr-xl",
              {
                "bg-accent border-accent text-button-textPimary":
                  activeId === item.id,
              },
            )}
            key={item.id}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="h-[4px] bg-accent" />
      <div className="p-5 border">
        {activeItem && <p>{activeItem.description}</p>}
      </div>
    </div>
  );
};

export default Tabs;
