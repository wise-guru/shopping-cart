import products from "../Catalog";

function Baguette() {
  return (
    <div className="productPage">
      <div className="productInfo">
        <div className="left">
          <a href="/shop">Shop</a> {">"} {products[5].name}
        </div>
        <div className="left">
          <img src={products[5].image} alt={products[5].name} />
        </div>
        <div className="right">
          <h5 className="name">{products[5].name}</h5>
          <div className="price">{products[5].price}</div>
          <p className="description">
            FINALLY a backpack specially designed for your delicious baguette.
            Hit your local bakery and pick up some steaming hot freshly baked
            bread knowing you will keep it safe, protected, and dry all the way
            home. Slide this French delicacy into our ergonomically designed
            pouch and cinch it up to be on your way in no time!
          </p>
          <p>{products[5].name}</p>
          <button type="button">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default Baguette;
