import React from "react";
import { useGetProductsQuery } from "../features/product/api";
import ProductsList from "../features/product/components/ProductList";
import { Loader, Error } from "../shared/ui";

const ProductPagePagination: React.FC = () => {
  const { isLoading, error } = useGetProductsQuery();

  if (isLoading) return <Loader />;
  if (error) return <Error />;
  return (
    <div className="p-6">
      <>
        <h1 className="heading-page mb-5">Products</h1>
        <ProductsList withPagination />
      </>
    </div>
  );
};

export default ProductPagePagination;
