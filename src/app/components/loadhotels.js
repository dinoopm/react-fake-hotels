import React, { PureComponent } from "react";

export default class loadHotelButton extends PureComponent {
  render() {
    return (
      <div className="load-hotels-wrapper">
        <button className="button" onClick={this.props.getHotels}>
          Load Hotels
        </button>
      </div>
    );
  }
}
