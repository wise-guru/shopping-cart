import { Link } from "react-router-dom";
import Hoodie from "../Assets/hoodie.jpg";

function Homepage() {
  return (
    <main className="homepage">
      <div className="homepageLeft">
        <h1>Unnecessary Products</h1>
        <div>
          Check out our catalog for the most pointless innovations you will ever
          have the privilege of viewing.
        </div>
        <Link to="/shopping-cart/shop">
          <button type="button">Shop Now</button>
        </Link>
        <div />
      </div>

      <div>
        <img src={Hoodie} alt="Privacy Hoodie" />
      </div>
    </main>
  );
}

export default Homepage;
