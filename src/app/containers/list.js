import React from "react";
import { connect } from "react-redux";

import List from "../components/list";

const mapStateToProps = ({ hotels, error }) => ({
  hotels,
  error
});

export default connect(mapStateToProps)(List);
