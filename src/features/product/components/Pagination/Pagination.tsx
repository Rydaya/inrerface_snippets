import React from "react";
import { Button } from "../../../../shared/ui";
import { Arrow } from "../../../../shared/assets/icons";
import { PaginationProps } from "./Pagination.types";

const Pagination: React.FC<PaginationProps> = ({
  page,
  totalPages,
  pages,
  onPageChange,
  onNext,
  onPrev,
}) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex gap-2 justify-center items-center mt-6">
      <Button
        disabled={page === 1}
        variant={page === 1 ? "disabled" : "primary"}
        onClick={onPrev}
        className="w-[40px] h-[40px]"
      >
        <Arrow direction="left" />
      </Button>

      {pages.map((p, index) =>
        p === "..." ? (
          <span key={index} className="px-2 text-gray-400">
            ...
          </span>
        ) : (
          <Button
            key={p}
            variant={page === p ? "primary" : "outline"}
            onClick={() => onPageChange(p)}
            className="w-[40px] h-[40px]"
          >
            {p}
          </Button>
        ),
      )}

      <Button
        disabled={page === totalPages}
        variant={page === totalPages ? "disabled" : "primary"}
        onClick={onNext}
        className="w-[40px] h-[40px]"
      >
        <Arrow direction="right" className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default Pagination;
