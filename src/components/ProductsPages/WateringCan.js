import { Link } from "react-router-dom";
import products from "../Catalog";

function WateringCan(props) {
  const { addProduct } = props;
  return (
    <div className="productPage">
      <div className="productInfo">
        <div className="left">
          <Link to="/shopping-cart/shop">Shop</Link> {">"} {products[6].name}
        </div>
        <div className="left">
          <img src={products[6].image} alt={products[6].name} />
        </div>
        <div className="right">
          <h1 className="name">{products[6].name}</h1>
          <div className="price">${products[6].price}</div>
          <p className="description">
            this watering can is deliberately annoying and even useless in an
            effort to water itself. You may use it to annoy an imaginary
            miniature gardener, or place it in your office to make you remember
            the importance of good design.
          </p>
          <button type="button" onClick={() => addProduct(products[6])}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default WateringCan;
