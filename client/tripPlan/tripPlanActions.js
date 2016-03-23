import fetch from 'isomorphic-fetch';
import { routeActions } from 'react-router-redux';
import { fetchDestinations } from './dest/destActions';

export const SELECT_TRIP = 'SELECT_TRIP';

const selectTrip = (trip) => ({
  type: SELECT_TRIP,
  payload: {
    trip,
  },
});

// Redux-Thunk Middleware (see configureStore.js) allows us to return a function that
// can dispatch other actions. In this case, we return a function that:
// (1) dispatches an action that updates the selectedTrip variable
// (2) dispatches another action to GET destinations for the selected trip

export const setTripAndGetDestinations = (trip) =>
  dispatch => {
    dispatch(selectTrip(trip));
    dispatch(fetchDestinations(trip));
  };
