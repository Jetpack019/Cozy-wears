import React from 'react'

function CheckoutPage({ cartItems, onIncreaseQuantity, onDecreaseQuantity, removeFromCart }) {
    const cartItemStyles = {
        border: '1px solid #ccc',
        padding: '10px',
        margin: '10px 0',
      };
  return (
    <div>
       <div className="container">
      <h2>Your Cart</h2>
      {!cartItems || cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} style={cartItemStyles}>
              <p>
                <strong>{item.type}</strong>
              </p>
              <p>Style: {item.styles}</p>
              <p>Occasions: {item.occasions}</p>
              <p>Materials: {item.materials}</p>
              <p>Price: ${item.price}</p>
              <p>Selected Size: {Array.isArray(item.selectedSizes) ? item.selectedSizes.join(', ') : 'N/A'}</p>
              <p>Selected Size Count: {item.selectedSizesCount}</p> {/* Display the count of selected sizes */}
              <p>
                Quantity:
                <button onClick={() => onDecreaseQuantity(item.id)} disabled={item.quantity === 1}>
                  -
                </button>
                {item.quantity}
                <button onClick={() => onIncreaseQuantity(item.id)}>+</button>
              </p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  )
}

export default CheckoutPage
