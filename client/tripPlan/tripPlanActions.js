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

export const setTripAndGetDestinations = (trip) =>
  dispatch => {
    dispatch(selectTrip(trip));
    dispatch(fetchDestinations(trip));
  };
