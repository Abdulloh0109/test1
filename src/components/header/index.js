import React, { useContext, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import "./styles.css";
import Modal from "../modal";
import { CartContext } from "../../context/cart";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useContext(CartContext);


  return (
    <header>
      <h1>Logo</h1>
      <button onClick={() => setIsOpen(true)}>
        <FiShoppingCart className="cart" />
        <span>{cart?.length}</span>
      </button>

      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </header>
  );
}
