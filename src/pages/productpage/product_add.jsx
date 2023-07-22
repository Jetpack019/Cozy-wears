import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CustomNavbar from '../../components/navbar';
import { useCart } from './CartContent';

import '../../components/productadd.css'
import { Form } from 'react-bootstrap';

function Product_AddCart() {
  const h1Styles = {
    color: '#E97451',
    fontSize: '3rem',
  };
  const inputstyles = {
    borderWidth: '0',
    color: '#9E7451',
    marginRight: '5px',
  };
  const pstyles = {
    color: '#E97451',
    fontSize: '2rem',
    fontFamily: 'Open Sans',
  };
  const buttonStyles = {
    borderRadius: '0',
    height: '50px',
    color: '#E97451',
  };
  // Access the product data passed as state
  const location = useLocation();

  const { state: { product, selectedSize,selectedColor } = {} } = location;
  const { cartItems, addToCart, clearCart, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();


  
  // Keep track of selected sizes for each product
  const [selectedSizesByProduct, setSelectedSizesByProduct] = useState({});
  const [selectedColorsByProduct, setSelectedColorsByProduct] = useState({});
  useEffect(() => {
    // If product and selectedSize exist (i.e., a product is selected), update the selectedSizesByProduct state.
    if (product && selectedSize) {
      setSelectedSizesByProduct((prevSelectedSizesByProduct) => ({
        ...prevSelectedSizesByProduct,
        [product.id]: selectedSizesByProduct[product.id] || [], // Use previously selected sizes if available
      }));
    }
  }, [product, selectedSize]);

  useEffect(() => {
    // If product and selectedColor exist (i.e., a product is selected), update the selectedColorsByProduct state.
    if (product && selectedColor) {
      setSelectedColorsByProduct((prevSelectedColorsByProduct) => ({
        ...prevSelectedColorsByProduct,
        [product.id]: selectedColorsByProduct[product.id] || [], // Use previously selected colors if available
      }));
    }
  }, [product, selectedColor]);



  const renderCheckboxes = (category) => {
    return sizesByType[category].map((option) => (
      <Form.Group key={option} className="mb-2">
        <Form.Check
          style={inputstyles}
          type="checkbox"
          id={`${category}-${option}`} // Add a unique id for accessibility
          label={option}
          checked={selectedSizesByProduct[product.id]?.includes(option)}
          onChange={(e) => handleCheckboxChange(option, e.target.checked)}
        />
      </Form.Group>
    ));
  };

  const renderCheckboxes1 = (category) => {
    return sizesByColors[category].map((option) => (
      <Form.Group key={option} className="mb-2">
        <Form.Check
          style={inputstyles}
          type="checkbox"
          id={`${category}-${option}`} // Add a unique id for accessibility
          label={option}
          checked={selectedColorsByProduct[product.id]?.includes(option)}
          onChange={(e) => handleCheckboxChange1(option, e.target.checked)}
        />
      </Form.Group>
    ));
  };
  const handleCheckboxChange = (option, checked) => {
    setSelectedSizesByProduct((prevSelectedSizesByProduct) => ({
      ...prevSelectedSizesByProduct,
      [product.id]: checked
        ? [...(prevSelectedSizesByProduct[product.id] || []), option]
        : prevSelectedSizesByProduct[product.id]?.filter((size) => size !== option) || [],
    }));
  };
  const handleCheckboxChange1 = (option, checked) => {
    setSelectedColorsByProduct((prevSelectedColorsByProduct) => ({
      ...prevSelectedColorsByProduct,
      [product.id]: checked
        ? [...(prevSelectedColorsByProduct[product.id] || []), option]
        : prevSelectedColorsByProduct[product.id]?.filter((size) => size !== option) || [],
    }));
  };

  // Define an object to map types to their respective sizes
  const sizesByType = {
    women: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    men: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    kids: ['2T', '3T', '4T', '5T', '6', '7', '8', '10'],
   accessories: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    sales: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  };

  const sizesByColors = {
    women: ['red', 'black','pink','yellow'],
    men: ['blue', 'black','green'],
    kids: ['red', 'blue','green'],
    accessories: ['red', 'blue','green'],
    sales: ['red', 'blue','green']
  }

  // Get the sizes based on the product's type
  const sizes = product && sizesByType[product.type.toLowerCase()];
  const colors = product && sizesByColors[product.type.toLowerCase()];
  const allCheckboxesUnchecked = () => {
    // Check if any of the checkboxes is checked
    for (const size of sizes) {
      if (selectedSizesByProduct[product.id]?.includes(size)) {
        return false;
      }
    }
    for (const color of colors) {
      if (selectedColorsByProduct[product.id]?.includes(color)) {
        return false;
      }
    }
    return true; // All checkboxes are unchecked
  };

  const handleAddToCart = () => {
    if (!allCheckboxesUnchecked()) {
      addToCart(
        product,
        selectedSizesByProduct[product.id] || [],
        selectedColorsByProduct[product.id] || []
      );
      setSelectedSizesByProduct((prevSelectedSizesByProduct) => ({
        ...prevSelectedSizesByProduct,
        [product.id]: selectedSizesByProduct[product.id] || [],
      }));
      setSelectedColorsByProduct((prevSelectedColorsByProduct) => ({
        ...prevSelectedColorsByProduct,
        [product.id]: selectedColorsByProduct[product.id] || [],
      }));
    } else {
      alert('Please select at least one size or color.');
    }
  };


  const navigate = useNavigate();
  const handleCheckoutClick = () => {
   
      navigate('/checkout', {
        state: { product, selectedSize: selectedSize, selectedColor: selectedColor },
      });
   
  }

  
  return (
    <div>
      <CustomNavbar />
      {product ? (
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-6">
              <div className="card mb-3">
                <div className="card-header bg-light">
                  <h3 className="text-center text-muted">{product.type}</h3>
                </div>
                <div className="card-body text-center">
                  <img src={product.image} alt={product.type} className="img-fluid mb-3" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="product-info">
                <p className="lead">Style: {product.styles}</p>
                <p className="lead">Occasions: {product.occasions}</p>
                <p className="lead">Materials: {product.materials}</p>
                <p className="lead">Price: ${product.price}</p>
                {sizes && (
                  <>
                    <p className="lead">Sizes ({product.type.toLowerCase()}):</p>
                    <div className="form-group">
                      {renderCheckboxes(product.type.toLowerCase())}
                    </div>
                  </>
                )}
                <p>Selected Size: {selectedSizesByProduct[product.id]?.join(', ')}</p>
                {colors && (
                  <>
                    <p className="lead">Colors ({product.type.toLowerCase()}):</p>
                    <div className="form-group">
                      {renderCheckboxes1(product.type.toLowerCase())}
                    </div>
                  </>
                )}
                <p>Selected Colors: {selectedColorsByProduct[product.id]?.join(', ')}</p>
              </div>
              <div className="buttons">
                <button
                  type="button"
                  className="btn btn-outline-danger btn-lg mr-2"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
                <button
                  type="button"
                  className="btn btn-danger btn-lg"
                  onClick={() => handleCheckoutClick(product, selectedSize, selectedColor)}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="lead text-center mt-5">Product data not available</p>
      )}
    </div>
  );
}


export default Product_AddCart;
