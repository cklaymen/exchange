import React from "react";
import { connect } from "react-redux";
import { addTile } from "../actions/tilesActions";

@connect()
export default class Header extends React.Component {
  convertToPLN(e) {
    e.preventDefault();
    const euro_value = document.getElementById("euro_value").value;
    const exchange = 4.2*(1+(Math.floor(Math.random()*101)-50)/1000);
    const value = Math.round(euro_value*exchange*1000)/1000;
    this.props.dispatch(addTile(value, new Date()));
  }

  render() {
    return(
      <div id="header">
        <h1>Convert <span class="bold">EUR</span> to <span class="bold">PLN</span></h1>
        <form onSubmit={this.convertToPLN.bind(this)}>
          <div class="euro-convert-label">ENTER <span class="bold">EUR</span> AMOUNT</div>
          <input type="text" id="euro_value" placeholder="euros" defaultValue="33" class="euro-convert-input"/>
          <input type="submit" value="convert to PLN" class="euro-convert-submit"/>
        </form>
      </div>
    );
  }
}
