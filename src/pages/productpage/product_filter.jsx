import React, { useEffect, useState } from 'react';
import { FaCheckCircle, FaFemale, FaMale, FaChild, FaSuitcase, FaPercent } from 'react-icons/fa';
import "../../components/sidebar.css"
import {  useNavigate } from 'react-router-dom';


const categoriesData = {
  styles: ['Turtleneck', 'V-Neck', 'Hoodie', 'Pullover', 'Cable Knit', 'Cardigan'],
  occasions: ['Casual', 'Work', 'Holiday', 'Playtime', 'Formal', 'Outdoor'],
  materials: ['Wool', 'Cotton', 'Polyester', 'Acrylic', 'Cashmere', 'Merino Wool'],
};


const labelstyles = {
color: 'white',
fontSize: '1rem',
marginRight: '10px', 
alignSelf: 'flex-start'
};

const h3styles = {
color: 'white',
fontSize: '2rem',
textAlign: 'center',
marginTop: '30px'
};

const inputstyles = {
borderWidth: '0',
color: '#E97451',    
marginRight: '5px'
};


const products = [
  {
    id: 1,
    type: 'men',
    styles: 'Hoodie',
    occasions: 'Casual',
    materials: 'Polyester',
    image: 'images/products/male/hoodie_men1.jpg',
    price: 29.99,
  },
  {
    id: 2,
    type: 'women',
    styles: 'Turtle Neck',
    occasions: 'Holiday',
    materials: 'Wool',
    image: 'images/products/female/turtleneck_female1.jpg',
    price: 39.99,
  },
  {
    id: 3,
    type: 'men',
    styles: 'V-Neck',
    occasions: 'Work',
    materials: 'Cotton',
    image: 'images/products/male/vneck_men1.webp',
    price: 25.99,
  },
  {
    id: 4,
    type: 'women',
    styles: 'Pullover',
    occasions: 'Playtime',
    materials: 'Acrylic',
    image: 'images/products/female/pullover_female1.jpg',
    price: 32.50,
  },
  {
    id: 5,
    type: 'kids',
    styles: 'Cable Knit',
    occasions: 'Formal',
    materials: 'Cashmere',
    image: 'images/products/kids/cableknit_kids3.jpg',
    price: 45.00,
  },
  {
    id: 6,
    type: 'men',
    styles: 'Cardigan',
    occasions: 'Casual',
    materials: 'Merino Wool',
    image: 'images/products/male/cardigan_men1.jpg',
    price: 36.75,
  },
  {
    id: 7,
    type: 'women',
    styles: 'Turtleneck',
    occasions: 'Holiday',
    materials: 'Wool',
    image: 'images/products/female/turtleneck_female2.jpg',
    price: 42.99,
  },
  {
    id: 8,
    type: 'kids',
    styles: 'Hoodie',
    occasions: 'Playtime',
    materials: 'Cotton',
    image: 'images/products/kids/hoodie_kids1.jpg',
    price: 27.50,
  },
  {
    id: 9,
    type: 'men',
    styles: 'V-Neck',
    occasions: 'Work',
    materials: 'Polyester',
    image: 'images/products/male/vneck_men2.webp',
    price: 29.99,
  },
  {
    id: 10,
    type: 'women',
    styles: 'Cardigan',
    occasions: 'Formal',
    materials: 'Cashmere',
    image: 'images/products/female/cardigan_female1.png',
    price: 49.99,
  },

  {
    id: 11,
    type: 'men',
    styles: 'Hoodie',
    occasions: 'Casual',
    materials: 'Cotton',
    image: 'images/products/male/hoodie_men2.jpg',
    price: 33.99,
  },
  {
    id: 12,
    type: 'women',
    styles: 'Pullover',
    occasions: 'Holiday',
    materials: 'Acrylic',
    image: 'images/products/female/pullover_female2.jpg',
    price: 28.50,
  },
  {
    id: 13,
    type: 'kids',
    styles: 'Cable Knit',
    occasions: 'Playtime',
    materials: 'Wool',
    image: 'images/products/kids/cableknit_kids1.jpg',
    price: 38.00,
  },
  {
    id: 14,
    type: 'men',
    styles: 'Cardigan',
    occasions: 'Casual',
    materials: 'Cashmere',
    image: 'images/products/male/cardigan_men2.jpg',
    price: 55.75,
  },
  {
    id: 15,
    type: 'women',
    styles: 'Turtleneck',
    occasions: 'Holiday',
    materials: 'Wool',
    image: 'images/products/female/turtleneck_female4.jpg',
    price: 49.99,
  },
  {
    id: 16,
    type: 'kids',
    styles: 'Hoodie',
    occasions: 'Playtime',
    materials: 'Polyester',
    image: 'images/products/kids/hoodie_kids2.jpg',
    price: 29.50,
  },
  {
    id: 17,
    type: 'men',
    styles: 'V-Neck',
    occasions: 'Work',
    materials: 'Cotton',
    image: 'images/products/male/vneck_men3.webp',
    price: 28.99,
  },
  {
    id: 18,
    type: 'women',
    styles: 'Cardigan',
    occasions: 'Formal',
    materials: 'Cashmere',
    image: 'images/products/female/cardigan_female2.jpeg',
    price: 59.99,
  },
  {
    id: 19,
    type: 'kids',
    styles: 'Cable Knit',
    occasions: 'Playtime',
    materials: 'Wool',
    image: 'images/products/kids/cableknit_kids2.jpg',
    price: 35.00,
  },
  {
    id: 20,
    type: 'men',
    styles: 'Hoodie',
    occasions: 'Casual',
    materials: 'Polyester',
    image: 'images/products/male/hoodie_men3.jpg',
    price: 31.99,
  },
 
{
  id: 21,
  type: 'accessories',
  styles: 'Blanket Wraps',
  occasions: 'Casual',
  materials: 'Cotton',
  image: 'images/products/accessories/blanket_access.jpg',
  price: 19.99,
},
{
  id: 22,
  type: 'accessories',
  styles: 'Mittens',
  occasions: 'Formal',
  materials: 'Wool',
  image: 'images/products/accessories/mittens_access.jpg',
  price: 69.99,
},
{
  id: 23,
  type: 'accessories',
  styles: 'Socks',
  occasions: 'Outdoor',
  materials: 'Polyester',
  image: 'images/products/accessories/socket_access.jpg',
  price: 39.50,
},
{
  id: 24,
  type: 'accessories',
  styles: 'Scarf',
  occasions: 'Holiday',
  materials: 'Wool',
  image: 'images/products/accessories/scarf_access.jpg',
  price: 22.75,
},
{
  id: 25,
  type: 'accessories',
  styles: 'Beanie',
  occasions: 'Casual',
  materials: 'Acrylic',
  image: 'images/products/accessories/beanie_access.webp',
  price: 15.00,
},
{
  id: 26,
  type: 'sales',
  styles: 'Pullover',
  occasions: 'Casual',
  materials: 'Cotton',
  image: 'images/products/sales/pullover_sales.jpg',
  price: 14.99,
},
{
  id: 27,
  type: 'sales',
  styles: 'Cardigan',
  occasions: 'Casual',
  materials: 'Wool',
  image: 'images/products/sales/cardigan_sales.jpg',
  price: 34.50,
},
{
  id: 28,
  type: 'sales',
  styles: 'V-neck',
  occasions: 'Formal',
  materials: 'Silk',
  image: 'images/products/sales/vneck_sales.jpg',
  price: 45.99,
},
{
  id: 29,
  type: 'sales',
  styles: 'Cable Knit',
  occasions: 'Holiday',
  materials: 'Wool',
  image: 'images/products/sales/cableknit_sales.png',
  price: 28.75,
},
{
  id: 30,
  type: 'sales',
  styles: 'Hoodie',
  occasions: 'Outdoor',
  materials: 'Polyester',
  image: 'images/products/sales/hoodie_sales.jpg',
  price: 55.00,
},
];

function ProductFilter() {

  
  const [activeButton, setActiveButton] = useState(0);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState({
    styles: [],
    occasions: [],
    materials: [],
  });
  const [priceRange, setPriceRange] = useState([0, 100]); // Default price range
  const handleCheckboxChange = (category, value) => {
    setSelectedCategories((prevState) => ({
      ...prevState,
      [category]: prevState[category].includes(value)
        ? prevState[category].filter((item) => item !== value)
        : [...prevState[category], value],
    }));
  };

  const handleSidebarOpen = () => {
    setSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };
  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };
  const text_buttons = [
    { text: 'All', icon: FaFemale },
    { text: 'Women', icon: FaFemale },
    { text: 'Men', icon: FaMale },
    { text: 'Kids', icon: FaChild },
    { text: 'Accessories', icon: FaSuitcase },
    { text: 'Sales', icon: FaPercent }
  ];

  const renderCheckboxes = (category) => {
    return categoriesData[category].map((option) => (
      <label key={option} style={labelstyles}>
        <input
          style={inputstyles}
          type="checkbox"
          value={option}
          checked={selectedCategories[category].includes(option)}
          onChange={() => handleCheckboxChange(category, option)}
        />
        {option}
      </label>
    ));
  };
  
  const getFilteredProducts = () => {
    // Filter products based on activeButton and selectedCategories
    const filteredProducts = products.filter((product) => {
      if (activeButton !== 0) {
        if (product.type !== text_buttons[activeButton].text.toLowerCase()) {
          return false;
        }
      }

      // Check if the product matches all the selected categories
      for (const category in selectedCategories) {
        if (selectedCategories[category].length > 0) {
          if (!selectedCategories[category].includes(product[category.toLowerCase()])) {
            return false;
          }
        }
      }

      // Check if the product price is within the selected price range
      const [minPrice, maxPrice] = priceRange;
      if (product.price < minPrice || product.price > maxPrice) {
        return false;
      }

      return true;
    });

    return filteredProducts;
  };
  const navigate = useNavigate();
  const handleProductCardClick = (product, selectedSize) => {
    // Navigate to the Product_AddCart component and pass the product data and selected size as state
    navigate('/product_add_cart', { state: { product, selectedSize } });
  };
  
  return (
    <div className="container">
        <button className="sidebar-button" onClick={handleSidebarOpen}>
        <span className="icon-button">
          <FaCheckCircle style={{width:'50px',height: '50px'}} />
        </span>
      </button>
      <div className="product-filter d-flex flex-wrap justify-content-center">
  {text_buttons.map((button, index) => (
    <button
      key={index}
      className={`filter-button ${activeButton === index ? 'active' : ''}`}
      onClick={() => handleButtonClick(index)}
    >
      {button.text}
    </button>
  ))}
</div>
    <div class="vDivider"></div>
    <div className="product-cards-container">
    {getFilteredProducts().map((product) => (
            <div key={product.id} className="product-card"  onClick={() => handleProductCardClick(product, selectedCategories.materials[0])}>
            <img
              src={product.image}
              alt={`Product ${product.id}`}
              style={{ width: '200px', height: '200px' }}
            />
            <div className="product-info1">
              <h3>Type: {product.type}</h3>
              <p>Style: {product.styles}</p>
              <p>Occasions: {product.occasions}</p>
              <p>Materials: {product.materials}</p>
              <p>Price: ${product.price}</p>
            </div>
          </div>
        ))}
    </div>
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={handleSidebarClose}>
          &times;
        </button>
      <h3 style={h3styles}>CATEGORY</h3>
      <div className="category-section">
        <h3 style={h3styles}>Styles:</h3>
        {renderCheckboxes('styles')}
      </div>
      <div className="category-section">
        <h3 style={h3styles}>Occasions:</h3>
        {renderCheckboxes('occasions')}
      </div>
      <div className="category-section">
        <h3 style={h3styles}>Materials:</h3>
        {renderCheckboxes('materials')}
      </div>
      <div className="category-section">
        <h3 style={h3styles}>Price Range:</h3>
        <input
          type="range"
          className="form-range"
          min={0}
          max={100}
          value={priceRange[0]} // Update this to use priceRange[0] instead of priceRange
          onChange={(event) => setPriceRange([parseInt(event.target.value), priceRange[1]])}
        />
        <div className="d-flex justify-content-between">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
    </div>
    
  </div>
  );
}

export default ProductFilter;
