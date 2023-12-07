import ProductCard from "./components/card";
import { cardData } from "./data/cardData";
import { useContext } from "react";
import "./app.css";
import Header from "./components/header";
import { CartContext } from "./context/cart";

function App() {
  const { cart, setCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    // Check if the product with the same id is already in the cart
    const isProductInCart = cart.some((item) => item.id === product.id);

    // If the product is not in the cart, add it
    if (!isProductInCart) {
      setCart([...cart, product]);
    }
  };

  return (
    <div className="root">
      <Header />
      <div className="cardBox">
        {cardData.map((item, id) => (
          <ProductCard
            key={id}
            id={id}
            name={item.name}
            price={item.price}
            image={item.image}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
