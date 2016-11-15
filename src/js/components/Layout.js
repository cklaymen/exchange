import React from "react";

import Header from "./Header.js";
import Tiles from "./Tiles.js";

export default class Layout extends React.Component {
  render () {
    return(
      <div id="container">
        <Header />
        <Tiles />
      </div>
    );
  }
}
