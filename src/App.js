import React, { useState } from "react";
import "./styles.css";
import InputArea from "./components/InputArea";
import Header from "./components/Header";
import CourseContent from "./components/CourseContent";

export default function App() {
  const [productArray, setProductArray] = useState([]);
  function addProduct(newProduct) {
    setProductArray(preProduct => {
      return [...preProduct, newProduct];
    });
  }

  return (
    <div className="App">
      <Header title="Add Course On Website" />
      <InputArea addProductList={addProduct} />
      <Header title="Added Course Details" />
     <CourseContent productList={productArray} />
    </div>
  );
}
