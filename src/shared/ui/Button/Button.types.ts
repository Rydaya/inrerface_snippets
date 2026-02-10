export enum ButtonType {
  NavLink = "navLink",
  Button = "button",
  Link = "link",
}

export enum ButtonVariant {
  Primary = "primary",
  Secondary = "secondary",
  Outline = "outline",
  Disabled = "disabled",
}

export interface ButtonData {
  id?: string;
  title: string;
  url?: string;
}

export interface ButtonProps {
  className?: string;
  type?: ButtonType | string;
  variant?: ButtonVariant | string;
  icon?: React.ReactNode;
  data?: ButtonData;
  onClick?: (...args: any[]) => void;
  children: React.ReactNode;
  disabled?: boolean;
}
