import { Link } from "react-router-dom";
import products from "../Catalog";

function Baguette(props) {
  const { addProduct } = props;
  return (
    <div className="productPage">
      <div className="productInfo">
        <div className="left">
          <Link to="/shop">Shop</Link> {">"} {products[5].name}
        </div>
        <div className="left">
          <img src={products[5].image} alt={products[5].name} />
        </div>
        <div className="right">
          <h1 className="name">{products[5].name}</h1>
          <div className="price">${products[5].price}</div>
          <p className="description">
            FINALLY a backpack specially designed for your delicious baguette.
            Hit your local bakery and pick up some steaming hot freshly baked
            bread knowing you will keep it safe, protected, and dry all the way
            home. Slide this French delicacy into our ergonomically designed
            pouch and cinch it up to be on your way in no time!
          </p>
          <button type="button" onClick={() => addProduct(products[5])}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Baguette;