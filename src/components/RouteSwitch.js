import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Shop from "./Shop";
import Cart from "./Cart";
import About from "./About";
import Contact from "./Contact";
import ProductsPage from "./ProductsPage";

function RouteSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />

        <Route
          path=":route"
          render={(routeProps) => (
            <ProductsPage route={routeProps.match.params.route} />
          )}
        />
        {/* <Route path="/shop/" element={<ProductsPage />} />
        <Route path="/shop/" element={<ProductsPage />} /> */}

        <Route exact path="/shop/" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;
