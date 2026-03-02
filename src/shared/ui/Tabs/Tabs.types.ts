export interface TabsItem {
  id: number;
  name: string;
  description: string;
}

export interface TabsProps {
  items: TabsItem[];
  withDescription?: boolean;
}
