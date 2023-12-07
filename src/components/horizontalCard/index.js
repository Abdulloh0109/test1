import React, { useContext } from "react";
import "./styles.css";
import { IoClose } from "react-icons/io5";
import { CartContext } from "../../context/cart";

const HorizontalCard = ({ name, price, image, id }) => {
  const { setCart } = useContext(CartContext);

  const handleDelete = () => {
    setCart((product) => product.filter((i) => i.id !== id));
  }; 

  return (
    <div className="container">
      <div className="cardBoxClose">
        <button className="cardBoxDeleteBtn" onClick={handleDelete}>
          <IoClose />
        </button>
      </div>

      <div className="cardBox">
        <div className="cardBoxHeader">
          <img src={image} alt={name} className="cardBoxImage" />
        </div>

        <div className="cardBoxBody">
          <h3 className="cardBoxName">
            {name.length > 80 ? `${name.slice(0, 80)}...` : name}
          </h3>
          <p className="cardBoxPrice">{price}$</p>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
