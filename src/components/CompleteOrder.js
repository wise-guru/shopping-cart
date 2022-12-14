import { Link } from "react-router-dom";

function CompleteOrder() {
  return (
    <div className="completeOrder">
      <h1>Your order has been completed!</h1>
      <div className="buttons">
        <Link to="/">
          <button type="button" className="homeBtn">
            Go Back Home
          </button>
        </Link>
        <Link to="/shop">
          <button type="button" className="shopBtn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CompleteOrder;
