import React from "react";

function Products(props) {
  return (
    <div className="product" data-id={props.id}>
      <a href={props.route}>
        <img
          className="productImage"
          src={props.image}
          alt={props.name}
          data-id={props.id}
        />
        <div className="productName" data-id={props.id}>
          {props.name}
        </div>
        <div className="productPrice" data-id={props.id}>
          {props.price}
        </div>
      </a>
    </div>
  );
}

export default Products;
