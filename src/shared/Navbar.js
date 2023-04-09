import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between container mx-auto mt-2">
      <p className="text-xl font-bold p-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
        Redux Store
      </p>
      <ul className="p-2 flex justify-around gap-8 font-semibold">
      <li className="hover:text-purple-400">
        {" "}
        <Link to="/">Home</Link>{" "}
      </li>
      <li className="hover:text-purple-400">
        {" "}
        <Link to="TopRatedProduct">Top Rated</Link>{" "}
      </li>
      <li className="hover:text-purple-400">
        {" "}
        <Link to="/cart">Cart</Link>{" "}
      </li>
      <li className="hover:text-purple-400">
        {" "}
        <Link>Wish List</Link>{" "}
      </li>
    </ul>
    </nav>
  );
};

export default Navbar;
