// CartContext.js
import React, { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Import uuidv4 from uuid package
const CartContext = createContext();

export const useCart = () => {
  return React.useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        return storedCartItems ? JSON.parse(storedCartItems) : [];
      });
      const addToCart = (product, selectedSizes, selectedColor) => {
        const existingCartItemIndex = cartItems.findIndex(
          (item) => item.id === product.id
        );
    
        if (existingCartItemIndex !== -1) {
          const newCartItems = cartItems.map((item, index) =>
            index === existingCartItemIndex
              ? { ...item, quantity: item.quantity + 1, selectedSizes,selectedColor }
              : item
          );
          setCartItems(newCartItems);
        } else {
          const newItem = {
            ...product,
         
            quantity: 1,
            selectedSizes: selectedSizes || [],
            selectedColor: selectedColor || [],
          };
          setCartItems((prevCartItems) => [...prevCartItems, newItem]);
        }
      };
      // Helper function to compare arrays for selectedSizes equality
      const arraysEqual = (arr1, arr2) => {
        if (arr1.length !== arr2.length) return false;
        const sortedArr1 = arr1.slice().sort();
        const sortedArr2 = arr2.slice().sort();
        return sortedArr1.every((value, index) => value === sortedArr2[index]);
      };
    
    
    
  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const increaseQuantity = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
