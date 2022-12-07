import React from "react";
import { Link } from "react-router-dom";

function Products(props) {
  const { addProduct, product } = props;
  return (
    <div className="product" data-id={product.id}>
      <Link to={`/shop/${product.route}`}>
        <img
          className="productImage"
          src={product.image}
          alt={product.name}
          data-id={product.id}
        />
        <div className="productName" data-id={product.id}>
          {product.name}
        </div>

        <div className="productPrice" data-id={product.id}>
          ${product.price}
        </div>
      </Link>
      <div className="button-container">
        <button type="button" onClick={() => addProduct(product)}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Products;
