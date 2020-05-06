import React from "react";
import "./App.css";
import { Router, Route, Switch } from "react-router";
import Header from "./component/header/Header";
import "./stylesheets/global.scss";

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
