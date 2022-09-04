import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Shop from "./Shop";
import About from "./About";
import Contact from "./Contact";
import SunShaders from "./ProductsPages/SunShaders";
import WateringCan from "./ProductsPages/WateringCan";
import ShopperStopper from "./ProductsPages/ShopperStopper";
import ShoeUmbrellas from "./ProductsPages/ShoeUmbrellas";
import SleepingBag from "./ProductsPages/SleepingBag";
import Baguette from "./ProductsPages/Baguette";
import Airstick from "./ProductsPages/Airstick";
import Rock from "./ProductsPages/Rock";
import Boots from "./ProductsPages/Boots";
import Checkout from "./Checkout";
import CompleteOrder from "./CompleteOrder";

function RouteSwitch(props) {
  const {
    cartItems,
    products,
    addProduct,
    removeProduct,
    item,
    totalItems,
    setCartItems,
    // resetCart,
  } = props;
  return (
    <Routes>
      <Route path="/shopping-cart/home" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route
        path="/shopping-cart/shop/sun-shaders"
        element={
          <SunShaders
            addProduct={addProduct}
            removeProduct={removeProduct}
            item={item}
          />
        }
      />
      <Route
        path="/shopping-cart/shop/uncomfortable-rain-boots"
        element={
          <Boots addProduct={addProduct} removeProduct={removeProduct} />
        }
      />

      <Route
        path="/shopping-cart/shop/shopper-stopper"
        element={
          <ShopperStopper
            addProduct={addProduct}
            removeProduct={removeProduct}
          />
        }
      />
      <Route
        path="/shopping-cart/shop/shoe-umbrella"
        element={
          <ShoeUmbrellas
            addProduct={addProduct}
            removeProduct={removeProduct}
          />
        }
      />
      <Route
        path="/shopping-cart/shop/walking-sleeping-bag"
        element={
          <SleepingBag addProduct={addProduct} removeProduct={removeProduct} />
        }
      />
      <Route
        path="/shopping-cart/shop/the-baguette-pack"
        element={
          <Baguette addProduct={addProduct} removeProduct={removeProduct} />
        }
      />
      <Route
        path="/shopping-cart/shop/watering-can"
        element={
          <WateringCan addProduct={addProduct} removeProduct={removeProduct} />
        }
      />
      <Route
        path="/shopping-cart/shop/airstick"
        element={
          <Airstick addProduct={addProduct} removeProduct={removeProduct} />
        }
      />
      <Route
        path="/shopping-cart/shop/usb-pet-rock"
        element={<Rock addProduct={addProduct} removeProduct={removeProduct} />}
      />
      <Route
        exact
        path="/shopping-cart/shop/"
        element={<Shop addProduct={addProduct} products={products} />}
      />
      <Route path="/contact" element={<Contact />} />
      <Route
        path="/shopping-cart/checkout"
        element={
          <Checkout
            removeProduct={removeProduct}
            cartItems={cartItems}
            addProduct={addProduct}
            totalItems={totalItems}
            setCartItems={setCartItems}
          />
        }
      />
      <Route path="/shopping-cart/order-complete" element={<CompleteOrder />} />
    </Routes>
  );
}

export default RouteSwitch;
