import products from "../Catalog";

function ShoeUmbrellas() {
  return (
    <div className="productPage">
      <div className="productInfo">
        <div className="left">
          <a href="/shop">Shop</a> {">"} {products[3].name}
        </div>
        <div className="left">
          <img src={products[3].image} alt={products[3].name} />
        </div>
        <div className="right">
          <h3 className="name">{products[3].name}</h3>
          <div className="price">{products[3].price}</div>
          <p className="description">
            No matter how big the umbrella, do your feet still get wet uner a
            torrential downfall? These umbrella shoes are a unique solution to
            this ongoing problem.
          </p>
          <p>{products[3].name}</p>
          <button type="button">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default ShoeUmbrellas;
