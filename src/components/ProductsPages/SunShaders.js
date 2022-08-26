import products from "../Catalog";

function SunShaders() {
  return (
    <div className="productPage">
      <div className="name">Sun Shaders</div>
      <div className="price">Price</div>
      <p className="description">Very sunny, very shady</p>
      <p>{products[0].name}</p>
    </div>
  );
}

export default SunShaders;
