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

        <div className="button-container">
          <Link to="/shop">
            <button type="button">Shop Now</button>
          </Link>
        </div>
        <div />
      </div>

      <div className="image-box">
        <img src={Hoodie} alt="Privacy Hoodie" />
      </div>
    </main>
  );
}

export default Homepage;
