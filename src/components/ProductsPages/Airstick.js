import Catalog from "../Catalog";

function Airstick() {
  return (
    <div className="productPage">
      <div className="productInfo">
        <div className="left">
          <a href="/shop">Shop</a> {">"} {Catalog[7].name}
        </div>
        <div className="left">
          <img src={Catalog[7].image} alt={Catalog[7].name} />
        </div>
        <div className="right">
          <h7 className="name">{Catalog[7].name}</h7>
          <div className="price">{Catalog[7].price}</div>
          <p className="description">
            Forever losing your Apple Airpods? Or simply worried that you might
            misplace them? Also a fiend for oriental food and wolfing down a
            good meal with some chopsticks? Then the Airsticks might be the
            perfect solution for you.
          </p>
          <p>
            The perfect accessory for your Apple AirPods. Enjoy your favourite
            sushi on the go and never leave your chopsticks behind.
          </p>
          <p>{Catalog[7].name}</p>
          <button type="button">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default Airstick;
