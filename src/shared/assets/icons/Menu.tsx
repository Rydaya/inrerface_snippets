import React from "react";
import { IconProps } from "../../types/icons";

const Menu: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <line
        x1="3"
        y1="6"
        x2="21"
        y2="6"
        stroke="#8a2be2"
        stroke-width="2"
        stroke-linecap="round"
      />
      <line
        x1="3"
        y1="12"
        x2="21"
        y2="12"
        stroke="#8a2be2"
        stroke-width="2"
        stroke-linecap="round"
      />
      <line
        x1="3"
        y1="18"
        x2="21"
        y2="18"
        stroke="#8a2be2"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default Menu;
