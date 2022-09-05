import React from "react";
import { Link } from "react-router-dom";
import CartImage from "../Assets/cart.png";

function Navigation(props) {
  const { cartQuantity } = props;
  return (
    <header>
      <div>
        <Link to="/">Useless Inventions</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">
              <button type="button">Contact Us</button>
            </Link>
          </li>
          <li>
            <Link to="/checkout" className="navCart">
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
