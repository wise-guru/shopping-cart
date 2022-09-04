import { Link } from "react-router-dom";
import products from "../Catalog";

function ShoeUmbrellas(props) {
  const { addProduct } = props;
  return (
    <div className="productPage">
      <div className="productInfo">
        <div className="left">
          <Link to="/shopping-cart/shop">Shop</Link> {">"} {products[3].name}
        </div>
        <div className="left">
          <img src={products[3].image} alt={products[3].name} />
        </div>
        <div className="right">
          <h1 className="name">{products[3].name}</h1>
          <div className="price">${products[3].price}</div>
          <p className="description">
            No matter how big the umbrella, do your feet still get wet uner a
            torrential downfall? These umbrella shoes are a unique solution to
            this ongoing problem.
          </p>
          <p>Now, you can wear suede heels in rainy weather too!</p>
          <button type="button" onClick={() => addProduct(products[3])}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShoeUmbrellas;
