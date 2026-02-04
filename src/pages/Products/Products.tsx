import React from "react";
import { Loader, Error } from "../../components";
import { useGetProductsQuery } from "../../api/productsApi";
import { ProductsList } from "../../sections/ProductList/ProductList";

const ProductsPage: React.FC = () => {
  const { isLoading, error } = useGetProductsQuery();

  if (isLoading) return <Loader />;
  if (error) return <Error />;

  return (
    <div className="p-6">
      <h1 className="heading-page mb-5">Products</h1>
      <ProductsList />
    </div>
  );
};

export default ProductsPage;
