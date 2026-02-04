import React from "react";
import { IconProps } from "../../types/icons";

const Star: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 2.5c.3 0 .6.2.7.5l1.8 5.5h5.8c.3 0 .6.2.7.5.1.3 0 .6-.2.8l-4.7 3.5 1.8 5.5c.1.3 0 .6-.2.8-.2.2-.5.2-.7.1l-4.7-3.4-4.7 3.4c-.2.1-.5.1-.7-.1-.2-.2-.3-.5-.2-.8l1.8-5.5-4.7-3.5c-.2-.2-.3-.5-.2-.8.1-.3.4-.5.7-.5h5.8l1.8-5.5c.1-.3.4-.5.7-.5z" />
    </svg>
  );
};

export default Star;
