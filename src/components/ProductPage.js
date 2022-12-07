import { Ring } from "@uiball/loaders";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Catalog from "./Catalog";

function ProductPage(props) {
  const { addProduct } = props;
  const [product, setProduct] = useState();

  const { route } = useParams();
  //   console.log(route);

  useEffect(() => {
    const productInfo = Catalog.find((item) => item.route === route);
    console.log(productInfo);
    setProduct(productInfo);
  });
  return (
    <div className="productPage">
      {product ? (
        <div className="productInfo">
          <div className="left">
            <Link to="/shop">Shop</Link> {">"} {product.name}
          </div>
          <div className="left image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="right">
            <h1 className="name">{product.name}</h1>
            <div className="price">${product.price}</div>
            <p className="description">{product.description}</p>
            <button type="button" onClick={() => addProduct(product)}>
              Add to cart
            </button>
          </div>
        </div>
      ) : (
        <div className="loadingAnimation">
          <Ring />
        </div>
      )}
    </div>
  );
}

export default ProductPage;
