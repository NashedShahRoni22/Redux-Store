import React from "react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
} from "../redux/actionCreators/productAction";
import { AiOutlineLike, AiOutlineShoppingCart, AiOutlineDelete } from "react-icons/ai";
import { useLocation } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const {pathname} = useLocation();
  return (
    <div className="p-2 border rounded shadow flex flex-col gap-2">
      <img src={product.img} alt="product_image" />
      <p className="font-semibold text-sm">{product.name}</p>
      <p className="font-semibold text-purple-500">${product.price}</p>
      {
        !pathname.includes("cart") &&
        <div className="flex justify-between">
        {/* <button
          className="flex items-center gap-1 px-2 py-1 border rounded bg-gradient-to-r from-blue-400 to-purple-400 text-white"
        >
          <AiOutlineLike />
          Like
        </button> */}
        <button
          onClick={() => dispatch(addToCart(product))}
          className="flex w-full justify-between items-center gap-1 px-2 py-1 border rounded bg-gradient-to-r from-blue-400 to-purple-400 text-white"
        >
          Add to cart<AiOutlineShoppingCart />
        </button>
      </div>
      }
      {
        pathname.includes("cart") &&
        <button
          onClick={() => dispatch(removeFromCart(product))}
          className="flex items-center justify-between gap-1 px-2 py-1 border rounded bg-gradient-to-r from-red-400 to-red-600 text-white"
        >
          Remove<AiOutlineDelete />       
        </button>
      }
    </div>
  );
};

export default ProductCard;
