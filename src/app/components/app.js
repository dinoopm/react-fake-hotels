import React from "react";
import { connect } from "react-redux";

import List from "../containers/list";
import LoadHotel from "../containers/loadhotels";

export default class App extends React.Component {
  render() {
    return (
      <div className="page">
        <LoadHotel />
        <List />
      </div>
    );
  }
}
