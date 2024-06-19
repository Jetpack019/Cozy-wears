import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaShoppingBasket, FaArrowLeft } from 'react-icons/fa';
import '../css/customnavbar.css';
import { useCart } from '../pages/productpage/CartContent';

function CartNavbar() {
  const [expanded, setExpanded] = useState(false);
  const { cartItems } = useCart();

  const handleNavToggle = () => {
    setExpanded(!expanded);
  };

  const linkStyles = {
    color: 'white',
    fontSize: '1.2rem',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    position: 'relative',
  };

  const backArrowStyles = {
    ...linkStyles,
    display: 'flex',
    alignItems: 'center',
  };

  const cartIconStyles = {
    ...linkStyles,
    color: 'white',
    display: 'flex',
    alignItems: 'center',
  };

  const cartItemCountStyles = {
    position: 'absolute',
    top: '-10px',
    right: '-10px',
    background: 'red',
    color: 'white',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.9rem',
  };

  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Navbar expand="lg" expanded={expanded} style={{ backgroundColor: "#E97451", }}>
      <Navbar.Brand as={NavLink} to="/" style={backArrowStyles}>
        <FaArrowLeft style={{ fontSize: '1.5rem' }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleNavToggle} />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto">
        <Nav className="ml-4">
          <Nav.Link href="/checkout" style={cartIconStyles}>
            <FaShoppingBasket style={{ fontSize: '1.5rem' }} />
            {cartItemCount > 0 && <span style={cartItemCountStyles}>{cartItemCount}</span>}
          </Nav.Link>
        </Nav>
        </Nav>
       
      </Navbar.Collapse>
    </Navbar>
  );
}

export default  CartNavbar;
