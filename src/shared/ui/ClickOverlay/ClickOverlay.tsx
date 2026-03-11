import React, { useState, useRef, useEffect } from "react";
import { ClickOverlayProps } from "./ClickOverlay.types";
import clsx from "clsx";

const ClickOverlay: React.FC<ClickOverlayProps> = ({
  variant,
  children,
  content,
}) => {
  const [visible, setVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (variant !== "popover") return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [variant]);

  const trigger = React.cloneElement(children);

  return (
    <div
      ref={containerRef}
      className="relative inline-block"
      onMouseEnter={variant === "tooltip" ? () => setVisible(true) : undefined}
      onMouseLeave={variant === "tooltip" ? () => setVisible(false) : undefined}
    >
      <div
        onClick={
          variant === "popover" ? () => setVisible((v) => !v) : undefined
        }
      >
        {trigger}
      </div>

      {visible && (
        <div
          className={clsx(
            "absolute z-10 left-1/2 -translate-x-1/2 rounded-md border-[3px] border-accent top-[125%] min-w-[200px] max-w-[350px]",
            {
              "px-2 py-1 text-sm text-center": variant === "tooltip",
              "p-3 shadow-lg": variant === "popover",
            },
          )}
        >
          {content}
          <span className="inline-block border-[12px] border-transparent border-b-accent absolute top-[-24px] left-1/2 -translate-x-1/2" />
        </div>
      )}
    </div>
  );
};

export default ClickOverlay;
