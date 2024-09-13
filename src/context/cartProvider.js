import React, { createContext, useState, useEffect } from "react";

const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [openCartSideBar, setOpenCartSideBar] = useState(false);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item, quantity = 1) => {
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
    // setOpenCartSideBar(true);
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    setCart(
      cart.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };
  const handleOpenCartSideBar = () => {
    setOpenCartSideBar(true);
  };
  const handleCloseCartSideBar = () => {
    setOpenCartSideBar(false);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        openCartSideBar,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity,
        handleOpenCartSideBar,
        handleCloseCartSideBar,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
