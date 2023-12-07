import React from "react";
import "./styles.css";

const ProductCard = ({ name, price, image, id, onAddToCart }) => {
  const handleAddToCart = () => {
    // Call the handler function to add a product to the cart
    onAddToCart({ name, price, image, id });
  };

  return (
    <div className="card">
      <div className="cardHeader">
        <img src={image} alt={name} className="productImage" />
      </div>

      <div className="productBody">
        <div className="productTop">
          <h3 className="productName">
            {name.length > 80 ? `${name.slice(0, 80)}...` : name}
          </h3>
          <p className="productPrice">{price}$</p>
        </div>

        <div className="productBox">
          <button className="productBtn" onClick={handleAddToCart}>
            Добавить в корзину
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
