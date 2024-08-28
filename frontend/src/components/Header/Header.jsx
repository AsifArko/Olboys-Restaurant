import React from "react";
import "./Header.css";

const Header = () => {
  const redirectToMenu = () => (window.location.href = "#explore-menu");
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favorite food here</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
        <h4>Delivery $2.00 for minimum order of $20.00</h4>
        <h3>Call ahead for pickup | Credit card fee $0.75</h3>
        <button onClick={redirectToMenu}>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
