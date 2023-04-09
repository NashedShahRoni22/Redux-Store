import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const state = useSelector((state)=> state);
  console.log(state);
  return (
    <div className="container mx-auto py-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center gap-4">
      {products.slice(0,10).map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Home;
