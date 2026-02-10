import React from "react";
import { IconProps } from "../../types/icons";
import clsx from "clsx";

type ArrowDirection = "up" | "down" | "left" | "right";

interface ArrowProps extends IconProps {
  direction?: ArrowDirection;
}

const directionMap: Record<ArrowDirection, string> = {
  up: "M5 15l7-7 7 7",
  down: "M19 9l-7 7-7-7",
  left: "M15 19l-7-7 7-7",
  right: "M9 5l7 7-7 7",
};

const Arrow: React.FC<ArrowProps> = ({ className, direction = "up" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className={clsx("w-5 h-5", className)} // 👈 размер по умолчанию
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d={directionMap[direction]}
      />
    </svg>
  );
};

export default Arrow;
