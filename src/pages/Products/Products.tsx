import React from "react";
import { ProductsList } from "../../sections/ProductList/ProductList";

const ProductsPage: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <ProductsList />
    </div>
  );
};

export default ProductsPage;
