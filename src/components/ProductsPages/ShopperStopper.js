import products from "../Catalog";

function ShopperStopper() {
  return (
    <div className="productPage">
      <div className="productInfo">
        <div className="left">
          <a href="/shop">Shop</a> {">"} {products[2].name}
        </div>
        <div className="left">
          <img src={products[2].image} alt={products[2].name} />
        </div>
        <div className="right">
          <h2 className="name">{products[2].name}</h2>
          <div className="price">{products[2].price}</div>
          <p className="description">
            Stop accidentally clicking the Instagram Shop tab. With recent
            layout changes, users around the world are clicking on tabs they
            have no desire to use. Our newest phone slider will ensure you never
            tap the Shop or Reels tab on @Instagram when looking for your
            notifications. The Instagram experience you know and love has
            finally returned.
          </p>
          <p>{products[2].name}</p>
          <button type="button">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default ShopperStopper;
