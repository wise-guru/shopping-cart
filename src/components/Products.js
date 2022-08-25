import React from "react";

function Products(props) {
  return (
    <div className="product">
      <a href={props.route}>
        <img className="productImage" src={props.image} alt={props.name} />
        <div className="productName">{props.name}</div>
      </a>
    </div>
  );
}

export default Products;
