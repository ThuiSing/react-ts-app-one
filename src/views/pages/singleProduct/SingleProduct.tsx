import useAPI from "hooks/useAPI";
import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { add_to_cart, remove_from_cart } from "redux/actions/cartAction";
import productService from "services/product.service";

const SingleProduct = () => {
  const { id = "" } = useParams();
  const dispatch = useDispatch();
  const { data: product } = useAPI<Iproduct>(() =>
    productService.getProductsById(id)
  );
  // const slect = useSelector((state) => console.log(state));

  const handleClick = (product: Iproduct) => {
    dispatch(add_to_cart(product));
  };
  // () => dispatch(add_to_cart(product as Iproduct))
  return (
    <div className="container mx-auto py-16">
      <div className="text-center">
        {product ? (
          <div>
            <img
              className="rounded-t-lg mx-auto"
              src={product.image}
              alt={product.name}
            />
            <h3 className="text-2xl font-bold">{product.name}</h3>
          </div>
        ) : null}
        <div className="mt-5">
          <button
            onClick={() => handleClick(product as Iproduct)}
            className="bg-gray-700 text-white py-2 px-3 font-semibold rounded"
          >
            Add to cart
          </button>
          <button
            onClick={() => dispatch(remove_from_cart(id))}
            className="bg-gray-700 text-white py-2 px-3 font-semibold rounded"
          >
            remove to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
