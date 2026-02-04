import React from "react";
import { useGetProductsQuery } from "../../api";
import ProductCard from "../ProductCard/ProductCard";

const ProductsList: React.FC = () => {
  const { data } = useGetProductsQuery();

  return (
    <div className="grid grid-cols-4 gap-4">
      {data?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
