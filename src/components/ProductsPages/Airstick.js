import { Link } from "react-router-dom";
import products from "../Catalog";

function Airstick(props) {
  const { addProduct } = props;
  return (
    <div className="productPage">
      <div className="productInfo">
        <div className="left">
          <Link to="/shop">Shop</Link> {">"} {products[7].name}
        </div>
        <div className="left">
          <img src={products[7].image} alt={products[7].name} />
        </div>
        <div className="right">
          <h1 className="name">{products[7].name}</h1>
          <div className="price">${products[7].price}</div>
          <p className="description">
            Forever losing your Apple Airpods? Or simply worried that you might
            misplace them? Also a fiend for oriental food and wolfing down a
            good meal with some chopsticks? Then the Airsticks might be the
            perfect solution for you.
          </p>
          <p>
            The perfect accessory for your Apple AirPods. Enjoy your favourite
            sushi on the go and never leave your chopsticks behind.
          </p>
          <button type="button" onClick={() => addProduct(products[7])}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Airstick;
