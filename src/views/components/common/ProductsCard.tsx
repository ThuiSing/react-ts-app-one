import React from "react";
import { Link } from "react-router-dom";

const ProductsCard = ({ item }: { item: Iproduct }) => {
  const { name, image, description, price, _id } = item;
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg" src={`${image}`} alt={name} />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description.slice(0, 100)}
        </p>
        <p className="mb-3 font-semibold text-white ">Price : {price}</p>
        <Link to={`/product/${_id}`}>
          <button className="bg-white text-gray-700 py-2 px-3 font-semibold rounded">
            Show Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductsCard;
