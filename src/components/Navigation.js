import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartImage from "../Assets/cart.png";

function Navigation(props) {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleClass = () => {
    setIsMenuActive(!isMenuActive);
  };
  const { cartQuantity } = props;
  return (
    <header>
      <div className="header-left">
        <div className="menu-button-container">
          <button
            type="button"
            className="toggle-button toggle"
            onClick={toggleClass}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        </div>
        <Link to="/" className="header-title">
          <h2>Useless Inventions</h2>
        </Link>
      </div>

      <nav className={`navbar-links ${isMenuActive ? "active" : null}`}>
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
        </ul>
      </nav>
      {/* <div className="cartUl"> */}
      <div className="navCartContainer">
        <Link to="/checkout" className="navCart">
          <img src={CartImage} alt="shopping cart icon" />
          <div>{cartQuantity}</div>
        </Link>
      </div>
      {/* </ul> */}
    </header>
  );
}

export default Navigation;
