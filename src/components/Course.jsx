import React from "react";
export default function Course(props) {
  return (
    <div className="course-box">
      <img
        src={props.productImage}
        alt="productimage"
        className="product-image"
      />
      <h3 className="product-title">{props.productName}</h3>
      <p className="price">&#8377; {props.productPrice}</p>
      <p className="quantity">{props.productQuantity}</p>
    </div>
  );
}
