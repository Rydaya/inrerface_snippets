import { ReactElement, ReactNode, HTMLAttributes } from "react";

export interface ClickOverlayProps {
  variant: "tooltip" | "popover";
  children: ReactElement<HTMLAttributes<HTMLElement>>;
  content: ReactNode;
}
