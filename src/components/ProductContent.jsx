import React from "react";
export default function ProductContent(props) {
  return (
    <div>
      <img src={props.productImage} alt="Product" className="image" />
      <div className="product-content">
        <h3 className="product-title">Product Name : </h3>
        <span className="prodct-descriton">{props.productName}</span>
      </div>
      <div className="product-content">
        <h3 className="product-title">Price : </h3>
        <span className="prodct-descriton">&#8377; {props.productPrice}</span>
      </div>
      <div className="product-content">
        <h3 className="product-title">Quantity : </h3>
        <span className="prodct-descriton">{props.productQuantity} Units</span>
      </div>
    </div>
  );
}
