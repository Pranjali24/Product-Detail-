import React, { useState } from "react";
import ProductContent from "./ProductContent";
export default function InputArea(props) {
  const [inputText, setInputText] = useState({
    productName: "",
    productPrice: 0,
    productQuantity: 0,
    productImage: ""
  });
  function getInput(event) {
    const { name, value } = event.target;

    setInputText(preValue => {
      return {
        ...preValue,
        [name]: value
      };
    });
  }
  return (
    <div className="input-content">
      <div className="input-box">
        <form className="form">
          <input
            name="productName"
            onChange={getInput}
            className="input-field"
            type="text"
            placeholder="Enter Prodduct name"
            value={inputText.productName}
          />
          <input
            name="productPrice"
            onChange={getInput}
            className="input-field"
            type="number"
            placeholder="Price"
            value={inputText.productPrice}
          />
          <input
            name="productQuantity"
            onChange={getInput}
            className="input-field"
            type="number"
            placeholder="Quantity"
            value={inputText.productQuantity}
          />
          <input
            name="productImage"
            onChange={getInput}
            type="text"
            className="input-field"
            placeholder="Image URL"
            value={inputText.productImage}
          />
          <button
            className="btn"
            onClick={event => {
              props.addProductList(inputText);
              setInputText({
                productName: "",
                productPrice: 0,
                productQuantity: 0,
                productImage: ""
              });
              event.preventDefault();
            }}
          >
            Submit
          </button>
        </form>
      </div>

      <div className="input-box">
        <ProductContent
          productName={inputText.productName}
          productPrice={inputText.productPrice}
          productQuantity={inputText.productQuantity}
          productImage={inputText.productImage}
        />
      </div>
    </div>
  );
}
