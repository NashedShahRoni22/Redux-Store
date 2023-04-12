import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <>
      {cart.length === 0 && (
        <p className="text-3xl text-center font-semibold text-red-500">
          Cart is Empty!
        </p>
      )}
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center gap-4">
        {cart
          .sort((a, b) => a.id - b.id)
          .map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </>
  );
};

export default Cart;
