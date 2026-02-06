import React from "react";
import { ButtonProps, ButtonType, ButtonVariant } from "./Button.types";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

const variantClasses: Record<ButtonVariant | string, string> = {
  [ButtonVariant.Primary]: "button-primary",
  [ButtonVariant.Secondary]: "button-secondary",
  [ButtonVariant.Outline]: "button-outline",
};

const Button: React.FC<ButtonProps> = ({
  className,
  type = ButtonType.Button,
  variant = ButtonVariant.Primary,
  data,
  onClick,
  children,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick(e);
    } else if (type === ButtonType.Link && data?.url) {
      window.location.href = data.url;
    } else {
      e.preventDefault();
    }
  };

  return (
    <>
      {type === ButtonType.Button && (
        <button
          className={clsx(className, variantClasses[variant], "button")}
          type={type}
          onClick={handleClick}
        >
          {children || data?.title}
        </button>
      )}
      {type === ButtonType.NavLink && (
        <NavLink
          key={data?.id || data?.title}
          to={data?.url || "/"}
          className={clsx(className, variantClasses[variant], "button")}
        >
          {children || data?.title}
        </NavLink>
      )}
    </>
  );
};

export default Button;
