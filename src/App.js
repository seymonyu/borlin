import React, { Component } from "react";

import "./App.css";
import ProductDetails from "./components/product-details/ProductDetails";
import { Router, Route, Switch } from "react-router";
<<<<<<< HEAD
import Header from "./components/Header/Header";

class App extends Component  {
  render() {
    return(
     
     <div className="App">
       <ProductDetails.js />

     </div>

     
    )
  }
=======
import Header from "./component/header/Header";
import "./stylesheets/global.scss";
import Product from './component/pages/product/Product'
function App() {
  return (
    <div className="App">
      <Product />
    </div>
  );
>>>>>>> 415c02d4949b77a6be0638fe4460b53375df6201
}

export default App;
