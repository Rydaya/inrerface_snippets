export interface AccordionItem {
  id: number;
  title: string;
  content: string;
}

export interface AccordionProps {
  items: AccordionItem[];
  title?: string;
}
