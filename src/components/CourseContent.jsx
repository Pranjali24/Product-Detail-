import React from "react";
import Course from "./Course";
export default function CourseContent(props) {
  return (
    <div className="course-content">
      {props.ProductList.map((product, index) => {
        return (
          <Course
            key={index}
            productName={product.productName}
            productPrice={product.productPrice}
            productQuantity={product.productQuantity}
            productImage={product.productImage}
          />
        );
      })}
    </div>
  );
}
