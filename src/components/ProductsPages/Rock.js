import { Link } from "react-router-dom";
import products from "../Catalog";

function Rock(props) {
  const { addProduct } = props;
  return (
    <div className="productPage">
      <div className="productInfo">
        <div className="left">
          <Link to="/shop">Shop</Link> {">"} {products[8].name}
        </div>
        <div className="left">
          <img src={products[8].image} alt={products[8].name} />
        </div>
        <div className="right">
          <h1 className="name">{products[8].name}</h1>
          <div className="price">${products[8].price}</div>
          <p className="description">
            Simply plug the USB cable into a free port and let the fun begin.
            The USB Pet Rock will instantly begin to work its magic. People will
            stop by and ask you what your USB Pet Rock does. Each time, you can
            make up a new story; for no matter what you say, it will be greater
            than the truth - because these USB Pet Rocks don&apos;t do a dang
            thing! Except make you smile. And confuse your friends and
            coworkers, which will make you smile even more.
          </p>
          <p>
            Here&apos;s why you need a USB Pet Rock now: They make a great gift
            for everyone we can think of. They don&apos;t need food or water.
            They don&apos;t chew on your stuff. They will make you instantly
            cool. They never talk back to you. They will forever love you in
            their own rocky way. They are the greenest USB products ever
            created, as they draw absolutely no electricity.
          </p>
          <button type="button" onClick={() => addProduct(products[8])}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Rock;
