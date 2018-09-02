import React, { PureComponent } from "react";
import Hotel from "../components/hotel";

export default class list extends PureComponent {
  render() {
    const { hotels, error } = this.props;

    return error ? (
      <div className="error">Something went wrong!!</div>
    ) : (
      <div>
        {hotels.map((hotel, index) => (
          <Hotel hotel={hotel} key={hotel.id} />
        ))}
      </div>
    );
  }
}
