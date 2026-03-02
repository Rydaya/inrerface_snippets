import React, { useState } from "react";
import { TabsProps } from "./Tabs.types";
import { clsx } from "clsx";

const Tabs: React.FC<TabsProps> = ({ items, withDescription }) => {
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
            className={clsx("flex-1 px-4 py-2", {
              "bg-accent border-accent text-button-textPimary":
                activeId === item.id && withDescription,
              "border-b-4 border-accent":
                activeId === item.id && !withDescription,
              "border-t border-l border-r rounded-tl-xl rounded-tr-xl":
                withDescription,
            })}
            key={item.id}
          >
            {item.name}
          </button>
        ))}
      </div>
      {withDescription && <div className="h-[4px] bg-accent" />}
      {withDescription && (
        <div className="p-5 border">
          {activeItem && <p>{activeItem.description}</p>}
        </div>
      )}
    </div>
  );
};

export default Tabs;
