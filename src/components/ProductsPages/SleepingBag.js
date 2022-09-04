import { Link } from "react-router-dom";
import products from "../Catalog";

function SleepingBag(props) {
  const { addProduct } = props;
  return (
    <div className="productPage">
      <div className="productInfo">
        <div className="left">
          <Link to="/shopping-cart/shop">Shop</Link> {">"} {products[4].name}
        </div>
        <div className="left">
          <img src={products[4].image} alt={products[4].name} />
        </div>
        <div className="right">
          <h1 className="name">{products[4].name}</h1>
          <div className="price">${products[4].price}</div>
          <p className="description">
            Whether you’re gearing up for a weekend outdoors, on the road, or on
            the couch, you need the Selk’bag wearable sleeping bag. It keeps you
            warm and cozy and comes with features like cargo pockets, elastic
            hand enclosures, and removable boots.
          </p>
          <button type="button" onClick={() => addProduct(products[4])}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default SleepingBag;
