import React from "react";
import { connect } from "react-redux";
import { addTile } from "../actions/tilesActions";

import Tile from "./Tile";

@connect((store) => {
  return {
    tiles: store.tiles.tiles
  }
})
export default class Tiles extends React.Component {
  render() {
    const { tiles } = this.props;
    const mappedTiles = tiles.map((tile, i) => <Tile {...tile} key={i} />);
    return(
      <div>
        {mappedTiles}
        <div class="clear-both"></div>
      </div>
    );
  }
}
