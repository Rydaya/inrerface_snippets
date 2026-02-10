import { useState, useMemo } from "react";

export const usePagination = <T>(items: T[], pageSize: number) => {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(items.length / pageSize);

  const currentItems = useMemo(() => {
    const start = (page - 1) * pageSize;
    return items.slice(start, start + pageSize);
  }, [items, page, pageSize]);

  const pages = useMemo(() => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const result: (number | "...")[] = [];

    if (page > 3) {
      result.push(1, "...");
    } else {
      result.push(1, 2, 3);
    }

    if (page > 3 && page < totalPages - 2) {
      result.push(page - 1, page, page + 1);
    }

    if (page < totalPages - 2) {
      result.push("...", totalPages);
    } else {
      result.push(totalPages - 2, totalPages - 1, totalPages);
    }

    return Array.from(new Set(result));
  }, [page, totalPages]);

  return {
    page,
    totalPages,
    currentItems,
    pages,
    setPage,
    nextPage: () => setPage((p) => Math.min(p + 1, totalPages)),
    prevPage: () => setPage((p) => Math.max(p - 1, 1)),
  };
};
