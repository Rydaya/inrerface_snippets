import React from "react";
import type { Product } from "../types/product";

interface Props {
  product: Product;
}

export const ProductCard: React.FC<Props> = ({ product }) => (
  <div className="border p-4 rounded hover:shadow-md transition">
    <img src={product.image} alt={product.title} className="h-32 mx-auto" />
    <h3 className="font-bold mt-2">{product.title}</h3>
    <p className="text-gray-700">${product.price}</p>
  </div>
);
