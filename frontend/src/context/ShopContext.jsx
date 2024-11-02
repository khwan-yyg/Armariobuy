import React, { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const addToCart = async (itemId, size) => {
    //if user not select size but click addTocart btn
    if (size === "") {
      toast.error("Select Product Size.");
      return;
    }

    //create one copy cartData
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      //increase by one
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        //same itemId but not same size will create new entry
        //itemId will be key and size is value
        cartData[itemId][size] = 1;
      }
    } else {
      //if not have itemId create new entry
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;
    //iterate item
    for (const items in cartItems) {
      //iterate product size
      for (const item in cartItems[items]) {
        try {
          //if have product and size
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalCount;
  };

  // useEffect(() => {
  //   console.log(cartItems);
  // }, [cartItems]);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
