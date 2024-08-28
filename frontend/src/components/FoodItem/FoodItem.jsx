import React, { useContext, useEffect, useState } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";

const FoodItem = ({ image, name, price, desc, id }) => {
  const { cartItems, addToCart, removeFromCart, url, currency } =
    useContext(StoreContext);
  const [quantity, setQuantity] = useState(cartItems?.[id] || 0);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    setQuantity(cartItems?.[id] || 0);
  }, [cartItems, id]);

  const handleShowMore = () => setShowMore(!showMore);

  const handleAddToCart = () => {
    addToCart(id);
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleRemoveFromCart = () => {
    if (quantity > 0) {
      removeFromCart(id);
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img
          className="food-item-image"
          src={url + "/images/" + image}
          alt={name}
        />
        <img
          className={`add ${quantity ? "hidden" : ""}`}
          onClick={handleAddToCart}
          src={assets.add_icon_white}
          alt="Add"
        />
        {quantity > 0 && (
          <div className="food-item-counter">
            <img
              src={assets.remove_icon_red}
              onClick={handleRemoveFromCart}
              alt="Remove"
            />
            <p>{quantity}</p>
            <img
              src={assets.add_icon_green}
              onClick={handleAddToCart}
              alt="Add More"
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <p className="food-item-name">{name}</p>
        <p className={`food-item-desc ${showMore ? "show-more" : ""}`}>
          {desc}
          {desc.length > 100 && !showMore && (
            <span className="show-more-btn" onClick={handleShowMore}>
              Show More
            </span>
          )}
        </p>
        <div className="food-item-price">
          <span className="price-label">Price:</span> {currency}
          {price}
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
