export interface DropdownItem {
  id: number;
  name: string;
  description: string;
}

export interface DropdownProps {
  items: DropdownItem[];
}
