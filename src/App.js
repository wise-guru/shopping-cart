import { useEffect, useState } from "react";
import { HashRouter } from "react-router-dom";
import "./App.css";
import Catalog from "./components/Catalog";
import Navigation from "./components/Navigation";
import RouteSwitch from "./components/RouteSwitch";

function App() {
  useEffect(() => {
    document.title = "Useless Inventions";
  });

  const [cartItems, setCartItems] = useState([]);
  const products = Catalog;
  const totalItems = cartItems.reduce((a, c) => a + c.qty, 0);

  const addProduct = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);

    if (exist) {
      const newCartItems = cartItems.map((item) =>
        item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
      );
      setCartItems(newCartItems);
    } else {
      const newCartItems = [...cartItems, { ...product, qty: +1 }];
      setCartItems(newCartItems);
    }
  };
  const removeProduct = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist.qty === 1) {
      const newCartItems = cartItems.filter((item) => item.id !== product.id);
      setCartItems(newCartItems);
    } else {
      const newCartItems = cartItems.map((item) =>
        item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item
      );
      setCartItems(newCartItems);
    }
  };

  return (
    <HashRouter basename="/">
      <div className="container">
        <Navigation cartQuantity={totalItems} />
        <RouteSwitch
          addProduct={addProduct}
          removeProduct={removeProduct}
          setCartItems={setCartItems}
          products={products}
          cartItems={cartItems}
          totalItems={totalItems}
        />
      </div>
    </HashRouter>
  );
}

export default App;
