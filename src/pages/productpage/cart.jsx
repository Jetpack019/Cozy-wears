import React from 'react';
import { FaTrash } from 'react-icons/fa';
import '../../components/cart.css'
import { Container, Row, Col } from 'react-bootstrap';

function Cart({ cartItems, onIncreaseQuantity, onDecreaseQuantity, removeFromCart }) {
  return (
    <Container>
      <h2 className="my-4">Your Cart</h2>
      {!cartItems || cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <Row key={item.id} className="cart-item">
              <Col xs={12} sm={4} className="cart-item-image">
                <img className='img-fluid' src={item.image} alt={item.type} />
              </Col>
              <Col xs={12} sm={8} className="cart-item-details">
                <p className="cart-item-type">{item.type}</p>
                <p className="cart-item-info">Style: {item.styles}</p>
                <p className="cart-item-info">Occasions: {item.occasions}</p>
                <p className="cart-item-info">Materials: {item.materials}</p>
                <p className="cart-item-info">Price: ${item.price}</p>
                <p className="cart-item-info">Selected Size: {Array.isArray(item.selectedSizes) ? item.selectedSizes.join(', ') : 'N/A'}</p>
                <p className="cart-item-info">Selected Color: {Array.isArray(item.selectedColor) ? item.selectedColor.join(', ') : 'N/A'}</p>
                <p className="cart-item-info">Quantity:</p>
                <div className="cart-item-quantity">
                  <button onClick={() => onDecreaseQuantity(item.id)} disabled={item.quantity === 1}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => onIncreaseQuantity(item.id)}>+</button>
                </div>
                <div className="cart-item-actions">
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                    <FaTrash /> Remove
                  </button>
                </div>
              </Col>
            </Row>
          ))}
        </div>
      )}
    </Container>
  );
}

export default Cart;
