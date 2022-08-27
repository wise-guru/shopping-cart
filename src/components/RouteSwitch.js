import { BrowserRouter, Route, Routes } from "react-router-dom";
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

function RouteSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />

        {/* <Route
          path=":route"
          render={(routeProps) => (
            <ProductsPage route={routeProps.match.params.route} />
          )}
        /> */}
        <Route path="/shop/sun-shaders" element={<SunShaders />} />
        <Route path="/shop/uncomfortable-rain-boots" element={<Boots />} />
        <Route path="/shop/shopper-stopper" element={<ShopperStopper />} />
        <Route path="/shop/shoe-umbrella" element={<ShoeUmbrellas />} />
        <Route path="/shop/walking-sleeping-bag" element={<SleepingBag />} />
        <Route path="/shop/the-baguette-pack" element={<Baguette />} />
        <Route path="/shop/watering-can" element={<WateringCan />} />
        <Route path="/shop/airstick" element={<Airstick />} />
        <Route path="/shop/usb-pet-rock" element={<Rock />} />

        <Route exact path="/shop/" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;
