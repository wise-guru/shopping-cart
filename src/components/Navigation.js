import Cart from "../Assets/cart.png";

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
            <a href="./cart">
              <img src={Cart} alt="shopping cart icon" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
