import React, { useState } from "react";
import Header from "./Header";
import CourseContent from "./CourseContent";
import InputArea from "./InputArea";
export default function Product() {
    const [productArray, setProductArray] = useState([]);
    function addProduct(newProduct) {
        setProductArray(preProduct => {
            return [...preProduct, newProduct];
        });
    }

    return (
        <div>
            <Header title="Add Course On Website" />
            <InputArea addProductList={addProduct} />
            <Header title="Added Course Details" />

            <CourseContent productList={productArray} />
        </div>
    );
}
