import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "грн";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [fetchedProducts, setFetchedProducts] = useState([]);

  // Fetch products from API
  const fetchInfo = async () => {
    try {
      const response = await fetch("http://localhost:4000/allproducts");
      const data = await response.json();
      setFetchedProducts(data.data); // Update the state with fetched data
      console.log("Products fetched:", data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  // Add product to cart
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

  // Calculate total amount in cart
  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = fetchedProducts.find((product) => product._id === items);
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

  // Calculate total item count in cart
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

  // Update item quantity in cart
  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
  };

  // Create cart data for rendering
  const cartData = Object.keys(cartItems).flatMap((itemId) =>
    Object.keys(cartItems[itemId]).map((size) => ({
      _id: itemId,
      size,
      quantity: cartItems[itemId][size],
    }))
  );

  // Provide context values
  const value = {
    products: fetchedProducts, // Use fetchedProducts here
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
