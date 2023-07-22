import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage';
import Blog from './pages/Blog';
import About from './pages/About';
import Products from './pages/Products';
import Product_AddCart from './pages/productpage/product_add';
import AllProducts from './pages/productpage/allproduct';
import Checkout_Process from './pages/productpage/Checkout_process';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Contact_Page from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/product_add_cart"  element={<Product_AddCart/>} />
        <Route path="/addtocart" element={<AllProducts />} />
        <Route path="/contact" element={<Contact_Page />} />
        <Route path="/checkout" element={<Checkout_Process/>} />
      </Routes>
    </Router>
  );
};

export default App;
