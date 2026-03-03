import React, { useState, useRef, useEffect } from "react";
import { DropdownProps } from "./Dropdown.types";
import { Arrow } from "../../assets/icons";
import clsx from "clsx";

const Dropdown: React.FC<DropdownProps> = ({ items }) => {
  const [activeId, setActiveId] = useState<string | number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (id: string | number) => {
    setActiveId((prev) => (prev === id ? null : id));
    setIsOpen(false);
  };

  const activeItem = items.find((item) => item.id === activeId);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative font-bold">
      <button
        type="button"
        onClick={toggleDropdown}
        className={clsx(
          "w-full border p-4 text-left rounded-lg flex justify-between items-center",
          { "border-accent text-text-brand": isOpen },
        )}
      >
        {activeItem?.name || "Please select..."}
        {isOpen ? (
          <Arrow className="stroke-accent" direction="down" />
        ) : (
          <Arrow className="stroke-accent" direction="up" />
        )}
      </button>

      {isOpen && (
        <ul className="absolute z-10 mt-3 w-full border shadow rounded-lg">
          {items.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => handleSelect(item.id)}
                className="w-full px-6 py-3 text-left hover:bg-button-primary hover:text-button-textPimary rounded-lg"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
