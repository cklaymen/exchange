import React from "react";

export default class Tile extends React.Component {
  render() {
    const { value, date } = this.props;
    return(

      <li class="tile">
      <div class="tile-label">PLN AMOUNT</div>
      <div class="tile-value">{value}</div>
      <div class="tile-date">{date.getFullYear()}.{date.getMonth()+1}.{date.getDate()} ({date.getHours()}:{("0" + date.getMinutes()).slice(-2)})</div>
      </li>
    );
  }
}
