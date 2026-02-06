import React from "react";
import Error from "../shared/ui/Error";
import Loader from "../shared/ui/Loader";
import { useGetProductsQuery } from "../features/product/api";
import ProductsList from "../features/product/components/ProductList";
import { useParams } from "react-router-dom";
import ProductCardDetail from "../features/product/components/ProductCardDetail";

const ProductPage: React.FC = () => {
  const { isLoading, error } = useGetProductsQuery();
  let { productId } = useParams();

  if (isLoading) return <Loader />;
  if (error) return <Error />;

  return (
    <div className="p-6">
      {productId ? (
        <ProductCardDetail productId={productId} />
      ) : (
        <>
          <h1 className="heading-page mb-5">Products</h1>
          <ProductsList />
        </>
      )}
    </div>
  );
};

export default ProductPage;
