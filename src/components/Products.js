import React from "react";

function Products(props) {
  return (
    <div className="product">
      <img className="productImage" src={props.image} alt={props.name} />
      <div className="productName">{props.name}</div>
    </div>
  );
}

export default Products;
