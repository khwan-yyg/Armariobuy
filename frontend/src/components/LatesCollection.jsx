import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const LatesCollection = () => {
  const { products } = useContext(ShopContext);
  console.log(products);
  return <div>LatesCollection</div>;
};

export default LatesCollection;
