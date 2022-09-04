import { Link } from "react-router-dom";
import products from "../Catalog";

function ShopperStopper(props) {
  const { addProduct } = props;
  return (
    <div className="productPage">
      <div className="productInfo">
        <div className="left">
          <Link to="/shopping-cart/shop">Shop</Link> {">"} {products[2].name}
        </div>
        <div className="left">
          <img src={products[2].image} alt={products[2].name} />
        </div>
        <div className="right">
          <h1 className="name">{products[2].name}</h1>
          <div className="price">${products[2].price}</div>
          <p className="description">
            Stop accidentally clicking the Instagram Shop tab. With recent
            layout changes, users around the world are clicking on tabs they
            have no desire to use. Our newest phone slider will ensure you never
            tap the Shop or Reels tab on @Instagram when looking for your
            notifications. The Instagram experience you know and love has
            finally returned.
          </p>
          <button type="button" onClick={() => addProduct(products[2])}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShopperStopper;
