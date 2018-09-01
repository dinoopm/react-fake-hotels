const hotels = (state = { hotels: [], reviews: {}, error: false }, action) => {
  switch (action.type) {
    case "GET_HOTELS":
      return Object.assign({}, state, {
        hotels: [...action.payload],
        error: false
      });
      break;
    case "GET_REVIEWS":
      state = {
        error: false,
        hotels: state.hotels,
        reviews: Object.assign({}, state.reviews, {
          [action.payload.hotelId]: action.payload.reviews
        })
      };
      break;
    case "ERROR":
      return Object.assign({}, state, {
        error: action.payload
      });
      break;
  }
  return state;
};

export default hotels;
