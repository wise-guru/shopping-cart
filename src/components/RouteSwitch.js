import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Shop from "./Shop";
import Cart from "./Cart";
import About from "./About";
import Contact from "./Contact";
import ProductsPage from "./ProductsPage";
import SunShaders from "./ProductsPages/SunShaders";

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
        <Route
          path="/shop/uncomfortable-rain-boots"
          element={<ProductsPage />}
        />
        <Route path="/shop/shopper-stopper" element={<ProductsPage />} />
        <Route path="/shop/shoe-umbrella" element={<ProductsPage />} />
        <Route path="/shop/walking-sleeping-bag" element={<ProductsPage />} />
        <Route path="/shop/the-baguette-pack" element={<ProductsPage />} />
        <Route path="/shop/watering-can" element={<ProductsPage />} />
        <Route path="/shop/airstick" element={<ProductsPage />} />
        <Route path="/shop/usb-pet-rock" element={<ProductsPage />} />

        <Route exact path="/shop/" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;
