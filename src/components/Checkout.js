import { Link } from "react-router-dom";
import CartItem from "./CartItem";

function Checkout(props) {
  const { removeProduct, addProduct, cartItems, totalItems, setCartItems } =
    props;
  const itemsPrice = cartItems.reduce(
    (a, c) => Math.round((a + c.qty * c.price) * 100) / 100,
    0
  );
  const taxPrice = Math.round(itemsPrice * 0.13 * 100) / 100;
  const shippingPrice = itemsPrice > 100 ? 0 : 5.99;
  const shippingText = shippingPrice > 0 ? `$${shippingPrice}` : "FREE";
  const totalPrice =
    Math.round((itemsPrice + taxPrice + shippingPrice) * 100) / 100;
  const itemCount = totalItems > 1 ? "items" : "item";

  return (
    <main className="checkout-container">
      {cartItems.length > 0 ? (
        <div className="checkout">
          <h1 className="checkoutTitle">Checkout</h1>
          <div className="cartItemsContainer checkoutLeft">
            {cartItems.map((product) => {
              return (
                <CartItem
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  route={product.route}
                  removeProduct={removeProduct}
                  addProduct={addProduct}
                  item={cartItems.find((item) => item.id === product.id)}
                />
              );
            })}
            <div className="cartSubTotal">
              Subtotal({totalItems} {itemCount}):{" "}
              <strong> ${itemsPrice}</strong>
            </div>
          </div>
          <div className="checkoutRight">
            <h2>Cart Summary</h2>
            <div className="summaryInfo">
              <div>
                Subtotal({totalItems} {itemCount}):{" "}
                <strong>${itemsPrice}</strong>
              </div>
              <div>
                Tax: <strong>${taxPrice}</strong>
              </div>
              <div>
                Shipping: <strong>{shippingText}</strong>
              </div>
              <div>
                Total: <strong>${totalPrice}</strong>
              </div>
            </div>
            <Link to="/order-complete">
              <button
                type="button"
                onClick={() => {
                  setCartItems([]);
                }}
              >
                Place Order
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="emptyCart">
          <h1>Your cart is empty!</h1>
          <Link to="/shop">
            <button type="button">Shop Now</button>
          </Link>
        </div>
      )}
    </main>
  );
}

export default Checkout;
