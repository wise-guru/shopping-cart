import React from "react";

function Products(props) {
  return (
    <div className="product" data-id={props.id}>
      <a href={props.route}>
        <img className="productImage" src={props.image} alt={props.name} />
        <div className="productName">{props.name}</div>
        <div className="productPrice">{props.price}</div>
      </a>
    </div>
  );
}

export default Products;
