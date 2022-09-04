import { Link } from "react-router-dom";

function CartItem(props) {
  const { item, removeProduct, addProduct } = props;
  const totalPrice = Math.round(item.qty * item.price * 100) / 100;
  return (
    <div>
      {item ? (
        <div className="cartItem">
          <Link to={props.route}>
            <div className="image-box">
              <img src={props.image} alt={props.name} />
            </div>
          </Link>
          <div className="cartInfo">
            <h2 className="title">{props.name}</h2>
            <div>$ {props.price}</div>
          </div>
          <div className="quantity">
            <button
              type="button"
              className="decrement"
              onClick={() => removeProduct(item)}
            >
              -
            </button>
            <p className="cartItemQty">{item.qty}</p>
            <button
              type="button"
              className="increment"
              onClick={() => addProduct(item)}
            >
              +
            </button>
          </div>
          <div>$ {totalPrice}</div>
        </div>
      ) : (
        <div>No products in cart</div>
      )}
    </div>
  );
}

export default CartItem;
