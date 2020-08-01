import React, { useState } from "react";
import "./styles.css";
import InputArea from "./components/InputArea";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CourseContent from "./components/CourseContent";

export default function App() {
  const [productArray, setProductArray] = useState([]);
  function addProduct(newProduct) {
    console.log("Add product", newProduct);
    setProductArray(preProduct => {
      return [...preProduct, newProduct];
    });
  }

  return (
    <div className="App">
      <Header title="Add Course On Website" />
      <InputArea addProductList={addProduct} />
      <Header title="Added Course Details" />
      <SearchBar />
      <CourseContent ProductList={productArray} />
    </div>
  );
}
