import React, { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "грн";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  // use navigate put to the cart from shop context becase dont work

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Оберіть будь-ласка розмір речі");
      return;
    }
    let cartData = structuredClone(cartItems);

    if (!cartData[itemId]) {
      cartData[itemId] = {}; // Initialize the object for the item if it doesn't exist
    }

    if (cartData[itemId][size]) {
      cartData[itemId][size] += 1;
    } else {
      cartData[itemId][size] = 1; // Set the size quantity to 1 if it doesn't exist
    }

    setCartItems(cartData); // Update state
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {}
      }
    }

    return totalAmount;
  };
  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalCount;
  };

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
  };
  // useEffect(() => {
  //   console.log(cartItems, "Hello");
  // }, [cartItems]);
  const cartData = Object.keys(cartItems).flatMap((itemId) =>
    Object.keys(cartItems[itemId]).map((size) => ({
      _id: itemId,
      size,
      quantity: cartItems[itemId][size],
    }))
  );

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
    updateQuantity,
    getCartAmount,
    cartData, // Added this line
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
