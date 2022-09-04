import React from "react";
import { Link } from "react-router-dom";
import CartImage from "../Assets/cart.png";

function Navigation(props) {
  const { cartQuantity } = props;
  return (
    <header>
      <div>
        <Link to="/shopping-cart/">Useless Inventions</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/shopping-cart/">Home</Link>
          </li>
          <li>
            <Link to="/shopping-cart/shop">Shop</Link>
          </li>
          <li>
            <Link to="/shopping-cart/about">About</Link>
          </li>
          <li>
            <Link to="/shopping-cart/contact">
              <button type="button">Contact Us</button>
            </Link>
          </li>
          <li>
            <Link to="/shopping-cart/checkout" className="navCart">
              <img src={CartImage} alt="shopping cart icon" />
              <div>{cartQuantity}</div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
