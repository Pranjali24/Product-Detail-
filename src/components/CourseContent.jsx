import React, { useState } from "react";
import Course from "./Course";
export default function CourseContent(props) {
  const [searchInput, setSearchInput] = useState("");
  function findProduct(event) {
    setSearchInput(event.target.value);
  }
  let searchProduct = props.productList.filter(product => {
    return product.productName
      .toLowerCase()
      .includes(searchInput.toLowerCase());
  });
  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          onChange={findProduct}
          placeholder="Search Product"
          className="input-field"
        />
      </div>
      <div className="course-content">
        {searchProduct.map((product, index) => {
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
    </div>
  );
}
