import React from "react";
import { connect } from "react-redux";

import Loadhotels from "../components/loadhotels";
import { getHotels } from "../actions/hotels";

export default connect(
  null,
  { getHotels }
)(Loadhotels);
