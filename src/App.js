import React from "react";
import { Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Product from "./components/Product";
import Contact from "./components/Contact";

import "./styles.css";

export default function App() {
  return (
    <div>
      <Nav />
      <Route exact path="/" component={Home} />
      <Route path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
      <Route path="/product" component={Product} />
    </div>
  );
}
