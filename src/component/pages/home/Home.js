import Highlight from "../../highlights/Highlights";

import NewArrivals from "../../newarrivals/NewArrivals";
import React from "react";
import Header from "../../header/Header";

function Home() {
  return (
    <div className="Home">
      <Header />
      <Highlight />
      <NewArrivals />
    </div>
  );
}

export default Home;
