const get = (url, dispatch) =>
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .catch(error => {
      dispatch({ type: "ERROR", payload: true });
    });

export const getHotels = () => dispatch =>
  get("http://fake-hotel-api.herokuapp.com/api/hotels?count=5", dispatch).then(
    response => {
      response && dispatch({ type: "GET_HOTELS", payload: response });
    }
  );

export const getReviews = id => dispatch =>
  get(
    `http://fake-hotel-api.herokuapp.com/api/reviews?hotel_id=${id}`,
    dispatch
  ).then(response => {
    response &&
      dispatch({
        type: "GET_REVIEWS",
        payload: {
          hotelId: id,
          reviews: response
        }
      });
  });
