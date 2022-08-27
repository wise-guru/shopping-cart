import products from "../Catalog";

function SunShaders() {
  return (
    <div className="productPage">
      <div className="productInfo">
        <div className="left">
          <a href="/shop">Shop</a> {">"} {products[0].name}
        </div>
        <div className="left">
          <img src={products[0].image} alt={products[0].name} />
        </div>
        <div className="right">
          <h1 className="name">{products[0].name}</h1>
          <div className="price">{products[0].price}</div>
          <p className="description">
            Are your usual sunglasses letting in too much light or not giving
            you quite enough privacy? Are you looking to start a new fashion
            trend? Then SunShaders might be the product for you - stylish blinds
            for your sunglasses.
          </p>
          <p>
            Get more of your sunglasses with your own shades for your shades.
            Whether you need to block out more light, spy through the blinds, or
            block out haters - wear them up, down, or closed with your favourite
            pair of sunglasses.
          </p>
          <p>{products[0].name}</p>
          <button type="button">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default SunShaders;