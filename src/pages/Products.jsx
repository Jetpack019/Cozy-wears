import React from 'react';
import CustomNavbar from '../components/navbar';
import ProductFilter from './productpage/product_filter';
import Footer from '../components/footer';
const Products = () => {
  return (
    <div>
      <CustomNavbar />
      <ProductFilter/>
      <Footer/>
    </div>
  );
};

export default Products;
