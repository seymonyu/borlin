import React from "react";
import "./App.css";
import { Router, Route, Switch } from "react-router";
import Header from "./component/header/Header";
import "./stylesheets/global.scss";
import Product from './component/pages/product/Product'
function App() {
  return (
    <div className="App">
      <Product />
    </div>
  );
}

export default App;
