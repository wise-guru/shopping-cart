import products from "../Catalog";

function Boots() {
  return (
    <div className="productPage">
      <div className="productInfo">
        <div className="left">
          <a href="/shop">Shop</a> {">"} {products[1].name}
        </div>
        <div className="left">
          <img src={products[1].image} alt={products[1].name} />
        </div>
        <div className="right">
          <h1 className="name">{products[1].name}</h1>
          <div className="price">{products[1].price}</div>
          <p className="description">Uncomfortable rain boots</p>
          <p>{products[1].name}</p>
          <button type="button">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default Boots;
