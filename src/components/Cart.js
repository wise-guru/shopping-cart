import Catalog from "./Catalog";

const Cart = {
  totalQuantity:
    Catalog[0].inCart +
    Catalog[1].inCart +
    Catalog[2].inCart +
    Catalog[3].inCart +
    Catalog[4].inCart +
    Catalog[5].inCart +
    Catalog[6].inCart +
    Catalog[7].inCart +
    Catalog[8].inCart,

  totalPrice:
    Catalog[0].price * Catalog[0].inCart +
    Catalog[1].price * Catalog[1].inCart +
    Catalog[2].price * Catalog[2].inCart +
    Catalog[3].price * Catalog[3].inCart +
    Catalog[4].price * Catalog[4].inCart +
    Catalog[5].price * Catalog[5].inCart +
    Catalog[6].price * Catalog[6].inCart +
    Catalog[7].price * Catalog[7].inCart +
    Catalog[8].price * Catalog[8].inCart,
};

export default Cart;
