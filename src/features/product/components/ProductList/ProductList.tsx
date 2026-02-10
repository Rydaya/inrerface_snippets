import React from "react";
import { usePagination } from "../../hooks/usePagination";
import { useGetProductsQuery } from "../../api";
import ProductCard from "../ProductCard/ProductCard";
import Pagination from "../Pagination";
import { ProductsListProps } from "./ProductsList.types";

const PAGE_SIZE = 8;

const ProductsList: React.FC<ProductsListProps> = ({
  withPagination = false,
}) => {
  const { data: products = [] } = useGetProductsQuery();
  const pagination = usePagination(products, PAGE_SIZE);
  const itemsToRender = withPagination ? pagination.currentItems : products;

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {itemsToRender.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {withPagination && (
        <Pagination
          page={pagination.page}
          totalPages={pagination.totalPages}
          pages={pagination.pages}
          onPageChange={pagination.setPage}
          onNext={pagination.nextPage}
          onPrev={pagination.prevPage}
        />
      )}
    </>
  );
};

export default ProductsList;
