import React from 'react'
import Cart from './cart'
import { useCart } from './CartContent';

function AllProducts() {
    const { cartItems, increaseQuantity, decreaseQuantity ,removeFromCart} = useCart();
    
  return (
    <div>
         <Cart
            cartItems={cartItems}
            onIncreaseQuantity={increaseQuantity}
            onDecreaseQuantity={decreaseQuantity}
            removeFromCart={removeFromCart}
          />
          
    </div>
  )
}

export default AllProducts
