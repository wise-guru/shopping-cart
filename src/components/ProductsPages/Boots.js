import { Link } from "react-router-dom";
import products from "../Catalog";

function Boots(props) {
  const { addProduct } = props;
  return (
    <div className="productPage">
      <div className="productInfo">
        <div className="left">
          <Link to="/shopping-cart/shop">Shop</Link> {">"} {products[1].name}
        </div>
        <div className="left">
          <img src={products[1].image} alt={products[1].name} />
        </div>
        <div className="right">
          <h1 className="name">{products[1].name}</h1>
          <div className="price">${products[1].price}</div>
          <p className="description">
            Ever been unable to decide whether to wear rain boots or sandals?
            With the Uncomfortable Rain Boots, you can have both! You&apos;ll be
            equipped for rain <em>and</em> shine.
          </p>
          <button type="button" onClick={() => addProduct(products[1])}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Boots;
