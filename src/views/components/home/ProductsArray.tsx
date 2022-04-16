import React from "react";
import ProductsCard from "../common/ProductsCard";

const ProductsArray = ({ products }: { products: Iproduct[] }) => {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((item) => (
        <ProductsCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default ProductsArray;
