export enum DrawerType {
  Sidebar = "sidebar",
  Menu = "menu",
}

export interface DrawerProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  type: DrawerType;
}
