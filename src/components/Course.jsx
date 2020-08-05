import React from "react";
export default function Course({ productDetails }) {
  return (
    <div className="course-box">
      <img
        src={productDetails.productImage}
        alt="productimage"
        className="product-image"
      />
      <h3 className="product-title">{productDetails.productName}</h3>
      <p className="price">&#8377; {productDetails.productPrice}</p>
      <p className="quantity">{productDetails.productQuantity}</p>
    </div>
  );
}
