import React from 'react'
import Cart from './cart'
import { useCart } from './CartContent';
import CartNavbar from '../../components/navbar_cart';

function AllProducts() {
    const { cartItems, increaseQuantity, decreaseQuantity ,removeFromCart} = useCart();
    
  return (
    <div>
      <CartNavbar/>
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
