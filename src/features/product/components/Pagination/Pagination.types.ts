export interface PaginationProps {
  page: number;
  totalPages: number;
  pages: (number | "...")[];
  onPageChange: (page: number) => void;
  onNext: () => void;
  onPrev: () => void;
}
