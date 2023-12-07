import React, { useContext } from "react";
import "./styles.css";
import { RiCloseLine } from "react-icons/ri";
import { CartContext } from "../../context/cart";
import HorizontalCard from "../horizontalCard";

export default function Modal({ setIsOpen }) {
  const { cart } = useContext(CartContext);

  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Your Basket</h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="modalContent">
            {cart.map((item) => (
              <HorizontalCard
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            ))}

            <hr className="line" />
            <div className="priceBox">
              <h4>Total price</h4>
              <h5>
                {cart.reduce((total, item) => (total += item.price), 0)}$
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
