import React from "react";
import "./App.css";
import Header from "./component/header/Header";
import Highlight from "./component/highlights/Highlights";
import "./stylesheets/global.scss";
import Navbar from "./component/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Highlight />
    </div>
  );
}

export default App;
