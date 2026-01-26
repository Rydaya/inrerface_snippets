import React from "react";
import { useGetProductsQuery } from "../../api/productsApi";
import { ProductCard } from "../../components/ProductCard";

export const ProductsList: React.FC = () => {
  const { data, isLoading, error } = useGetProductsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error 😢</p>;

  return (
    <div className="grid grid-cols-3 gap-4">
      {data?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
