import React, { useState } from "react";
import CourseContent from "./CourseContent";
export default function SearchBar(props) {
  const [searchProduct, setSearchProduct] = useState([]);
  function findProduct(event) {
    let searchInput = event.target.value;
    let res = props.productList.filter(product => {
      return product.productName.includes(searchInput);
    });
    setSearchProduct(res);
  }
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
      <CourseContent productList={searchProduct} />
    </div>
  );
}
