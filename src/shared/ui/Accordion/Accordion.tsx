import React, { useState } from "react";
import { Arrow } from "../../assets/icons";
import { AccordionProps } from "./Accordion.types";

const Accordion: React.FC<AccordionProps> = ({ items, title }) => {
  const [activeIds, setActiveIds] = useState<(string | number)[]>([]);

  const toggleItem = (id: string | number) => {
    setActiveIds((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id],
    );
  };

  return (
    <div className="p-2">
      {title && (
        <h4 className="mb-2 text-text-header text-center text-2xl font-bold">
          {title}
        </h4>
      )}

      <div className="flex flex-col">
        {items.map((item) => {
          const isOpen = activeIds.includes(item.id);

          return (
            <div key={item.id} className="overflow-hidde border-b">
              <button
                type="button"
                onClick={() => toggleItem(item.id)}
                className="w-full text-left px-4 py-4 transition flex justify-between items-center"
              >
                <span className="font-bold">{item.title}</span>
                <span>
                  {isOpen ? (
                    <Arrow className="stroke-accent" direction="down" />
                  ) : (
                    <Arrow className="stroke-accent" direction="up" />
                  )}
                </span>
              </button>

              {isOpen && <div className="px-4 pb-3">{item.content}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordion;
