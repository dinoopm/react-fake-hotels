import React from "react";
import { connect } from "react-redux";

import Reviews from "../components/reviews";
import { getReviews } from "../actions/hotels";

const mapStateToProps = ({ reviews, error }, { hotelid }) => ({
  reviews: reviews[hotelid],
  error
});

export default connect(
  mapStateToProps,
  { getReviews }
)(Reviews);
