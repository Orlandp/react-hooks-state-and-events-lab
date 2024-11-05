import React, { useState } from "react"; // Make sure to import useState

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false); // State for tracking if item is in cart
  
  // Function to toggle item in cart
  const toggleInCart = () => {
    setInCart(!inCart);
  };

  return (
    <li className={inCart ? "in-cart" : ""}> {/* Conditional className */}
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleInCart}>
        {inCart ? "Remove From Cart" : "Add to Cart"} {/* Conditional button text */}
      </button>
    </li>
  );
}

export default Item;
