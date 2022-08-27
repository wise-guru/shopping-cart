import CartImage from "../Assets/cart.png";
import Cart from "./Cart";

function Navigation() {
  return (
    <header>
      <div>
        <a href="/">Useless Inventions</a>
      </div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/shop">Shop</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">
              <button type="button">Contact Us</button>
            </a>
          </li>
          <li>
            <a href="/checkout" className="navCart">
              <img src={CartImage} alt="shopping cart icon" />
              <div>{Cart.totalQuantity}</div>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
