import React from "react";
import { useGetProductByIdQuery } from "../../api";
import { ProductCardDetailProps } from "./ProductCardDetail.types";
import { Star } from "../../../../shared/assets/icons";
import { Button, Loader, Error } from "../../../../shared/ui";

const ProductCardDetail: React.FC<ProductCardDetailProps> = ({ productId }) => {
  const { data, isLoading, error } = useGetProductByIdQuery(productId);

  const handleBtnCardClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    alert("Sorry, it's not real online shop");
  };

  if (isLoading) return <Loader className="absolute w-[80vw]" />;
  if (error) return <Error className="absolute w-[80vw]" />;

  return (
    <div className="p-6">
      <div className="mb-8">
        <p className="font-gothic text-text-productCard text-2xl">
          {data?.title}
        </p>
        <p className="text-sm first-letter:uppercase">{data?.category}</p>
      </div>
      <div className="flex gap-5 w-full">
        <div className="w-[40%] flex items-center justify-center overflow-hidden">
          <img
            src={data?.image}
            alt={data?.title}
            className="h-full w-full object-contain"
          />
        </div>
        <div className="w-[60%] flex flex-col">
          <div className="flex mb-1 gap-[2px] items-center">
            <Star className="fill-accent" />
            <p className="text-sm text-text-productCard">
              {data?.rating?.rate}
            </p>
          </div>
          <p className="mb-4">{data?.description}</p>
          <Button
            onClick={handleBtnCardClick}
            type="button"
            variant="primary"
            className="self-end w-[200px]"
          >
            {" "}
            Buy
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ProductCardDetail;
