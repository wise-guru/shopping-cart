import React from "react";
import { Link } from "react-router-dom";

function Products(props) {
  const { addProduct, product, openModal, item } = props;
  return (
    <div className="product" data-id={product.id}>
      <Link to={product.route}>
        <img
          className="productImage"
          src={product.image}
          alt={product.name}
          data-id={product.id}
          onClick={() => {
            RouteSwitch(item);
            console.log(item);
          }}
        />
        <div
          className="productName"
          data-id={product.id}
          onClick={() => {
            openModal(true);
          }}
        >
          {product.name}
        </div>

        <div className="productPrice" data-id={product.id}>
          ${product.price}
        </div>
      </Link>
      <button type="button" onClick={() => addProduct(product)}>
        Add to cart
      </button>
    </div>
  );
}

export default Products;
