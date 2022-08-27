import Cart from "./Cart";

function Checkout() {
  return (
    <main>
      <h1>Checkout</h1>
      <div>totalQuantity: {Cart.totalQuantity}</div>
      <div>Total: {Cart.totalPrice}</div>
    </main>
  );
}

export default Checkout;
