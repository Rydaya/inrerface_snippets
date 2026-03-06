import React, { useState } from "react";
import { useGetProductsQuery } from "../features/product/api";
import { Loader, Error } from "../shared/ui";
import {
  Carousel,
  CarouselOptions,
  OptionsState,
} from "../features/product/components/Carousel";

const CarouselPage: React.FC = () => {
  const [options, setOptions] = useState<OptionsState>({
    pagination: false,
    autoplay: false,
    scrollbar: false,
  });
  const { data: products, isLoading, error } = useGetProductsQuery();

  if (isLoading) return <Loader />;
  if (error) return <Error />;
  return (
    <div className="p-6">
      <div className="flex flex-col gap-3">
        <h1 className="heading-page mb-5">Carousel</h1>
        <CarouselOptions options={options} setOptions={setOptions} />
        {products && <Carousel products={products} options={options} />}
      </div>
    </div>
  );
};

export default CarouselPage;
