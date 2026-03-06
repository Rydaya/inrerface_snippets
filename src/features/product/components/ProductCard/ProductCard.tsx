import React from "react";
import type { ProductCardProps } from "./ProductCard.types";
import Button from "../../../../shared/ui/Button";
import { Star } from "../../../../shared/assets/icons";
import { useNavigate } from "react-router-dom";

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  const handleBtnCardClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    alert("Sorry, it's not real online shop");
  };

  return (
    <div
      onClick={() => navigate(`/products/${product.id}`)}
      className="p-4 h-full rounded-lg shadow-lg transition flex flex-col gap-5"
    >
      <div className="flex justify-center items-center h-48 overflow-hidden mt-6 mb-1">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <div className="flex-1 flex flex-col gap-4 justify-between">
        <div className="mb-1">
          <div className="flex mb-1 gap-[2px] items-center">
            <Star className="fill-accent" />
            <p className="text-sm text-text-productCard">
              {product.rating?.rate}
            </p>
          </div>
          <p className="text-sm first-letter:uppercase">{product.category}</p>
          <h3 className="text-base mb-2 leading-[1.2] line-clamp-3 text-text-productCard">
            {product.title}
          </h3>
        </div>
        <div className="flex justify-between gap-1 flex-col xl:flex-row xl:items-center">
          <p className="font-bold text-2xl text-text-productCard">
            ${product.price}
          </p>
          <Button
            onClick={handleBtnCardClick}
            type="button"
            variant="primary"
            className="xl:w-[100px]"
          >
            {" "}
            Buy
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
