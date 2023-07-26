import React, { useEffect, useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useCart } from './CartContent';
import '../../components/checkout.css';
import CheckoutNavbar from '../../components/navbar_checkout';

function CheckoutProcess() {
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [myAddress, setmyAddress] = useState('');
  const [price, setPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  const handlePayment = (e) => {
    e.preventDefault();
    setTotalPrice(price);

    // Here, you can implement your actual payment processing logic
    // After successful payment processing, you can handle the next steps accordingly
  };
  useEffect(() => {
    // Calculate the total price based on the cart items and their selected sizes
    const totalPrice = cartItems.reduce((acc, item) => {
      const itemTotalPrice = item.price * item.quantity;
      const sizeMultiplier = calculateSizeMultiplier(item.selectedSizes);
      return acc + itemTotalPrice * sizeMultiplier;
    }, 0);

    setTotalPrice(totalPrice);
  }, [cartItems]);

  const calculateSizeMultiplier = (selectedSizes) => {
   
    return selectedSizes.length > 0 ? 1.2 : 1; 
  };

  
  const buttonStyles = {
    borderRadius: '0', 
    borderWidth: '0',
    margin: '20px 0',
    height: '50px',
    color: 'white', 
    backgroundColor: '#E97451'
  };

  return (
    <div>
      <CheckoutNavbar/>
    <Container>
      <h2>Checkout Process</h2>

      <Row>
        <Col sm={8}>
          <Form onSubmit={handlePayment}>
            <Form.Group>
              <Form.Label className="form-label">Credit Card Number</Form.Label>
              <Form.Control
                type="text"
                value={creditCardNumber}
                onChange={(e) => setCreditCardNumber(e.target.value)}
                placeholder="Enter your credit card number"
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label className="form-label">Expiry Date</Form.Label>
              <Form.Control
                type="text"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                placeholder="MM/YY"
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label className="form-label">Address</Form.Label>
              <Form.Control
                type="text"
                value={myAddress}
                placeholder="Enter your Address"
                onChange={(e) => setmyAddress(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group>
        <Form.Label className="form-label">Total Price</Form.Label>
        <Form.Control type="text" value={`$${totalPrice.toFixed(2)}`} readOnly />
      </Form.Group>

            <Button type="submit" style={buttonStyles} block>
              Make a Payment
            </Button>
          </Form>
        </Col>

        <Col sm={8}>
          <div className="cart-container">
            <h4>Cart</h4>
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-image">
                  <img src={item.image} alt={item.type} className="img-fluid" />
                </div>
                <div className="cart-item-details">
                  <div className="cart-item-name">{item.type}</div>
                  <div className="cart-item-price">Occasion: {item.occasions}</div>
                  <div className="cart-item-price">Materials: {item.materials}</div>
                  <div className="cart-item-price">Quantity: {item.quantity}</div>
                  <div className="cart-item-price">Selected Sizes: {Array.isArray(item.selectedSizes) ? item.selectedSizes.join(', ') : 'N/A'}</div>
                <div className="cart-item-price">Selected Color: {Array.isArray(item.selectedColor) ? item.selectedColor.join(', ') : 'N/A'}</div>
                  <div className="cart-item-price">Price: ${item.price}</div>
                </div>
              </div>
            ))}
            {cartItems.length === 0 && <p>Your cart is empty.</p>}
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default CheckoutProcess;
