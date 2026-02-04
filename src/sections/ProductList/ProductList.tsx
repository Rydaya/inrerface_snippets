import React from "react";
import { useGetProductsQuery } from "../../api/productsApi";
import { ProductCard } from "../../components";

export const ProductsList: React.FC = () => {
  const { data } = useGetProductsQuery();

  return (
    <div className="grid grid-cols-4 gap-4">
      {data?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
