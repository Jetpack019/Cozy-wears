// import React, { useState } from 'react';
// import "./sidebar.css"

// const Sidebar = ({ isOpen, onClose, selectedCategories, handleCheckboxChange, priceRange, setPriceRange }) => {
//     const categoriesData = {
//       styles: ['Turtleneck', 'V-Neck', 'Hoodie', 'Pullover', 'Cable Knit', 'Cardigan'],
//       occasions: ['Casual', 'Work', 'Holiday', 'Playtime', 'Formal', 'Outdoor'],
//       materials: ['Wool', 'Cotton', 'Polyester', 'Acrylic', 'Cashmere', 'Merino Wool'],
//     };


//   const labelstyles = {
//     color: 'white',
//     fontSize: '1rem',
//     marginRight: '10px', 
//     alignSelf: 'flex-start'
//   };

//   const h3styles = {
//     color: 'white',
//     fontSize: '2rem',
//     textAlign: 'center',
//     marginTop: '30px'
//   };

//   const inputstyles = {
//     borderWidth: '0',
//     color: '#E97451',    
//     marginRight: '5px'
//   };

//   const renderCheckboxes = (category) => {
//     return categoriesData[category].map((option) => (
//       <label key={option} style={labelstyles}>
//         <input
//           style={inputstyles}
//           type="checkbox"
//           value={option}
//           checked={selectedCategories[category].includes(option)}
//           onChange={() => handleCheckboxChange(category, option)}
//         />
//         {option}
//       </label>
//     ));
//   };

//   return (
//     <div className={`sidebar ${isOpen ? 'open' : ''}`}>
//       <button className="close-button" onClick={onClose}>
//         &times;
//       </button>
//       <h3 style={h3styles}>CATEGORY</h3>
//       <div className="category-section">
//         <h3 style={h3styles}>Styles:</h3>
//         {renderCheckboxes('styles')}
//       </div>
//       <div className="category-section">
//         <h3 style={h3styles}>Occasions:</h3>
//         {renderCheckboxes('occasions')}
//       </div>
//       <div className="category-section">
//         <h3 style={h3styles}>Materials:</h3>
//         {renderCheckboxes('materials')}
//       </div>
//       <div className="category-section">
//         <h3 style={h3styles}>Price Range:</h3>
//         <input
//           type="range"
//           className="form-range"
//           min={0}
//           max={100}
//           value={priceRange[0]} // Update this to use priceRange[0] instead of priceRange
//           onChange={(event) => setPriceRange([parseInt(event.target.value), priceRange[1]])}
//         />
//         <div className="d-flex justify-content-between">
//           <span>${priceRange[0]}</span>
//           <span>${priceRange[1]}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
