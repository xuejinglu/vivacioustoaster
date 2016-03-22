import fetch from 'isomorphic-fetch';
import { routeActions } from 'react-router-redux';

export const SELECT_TRIP = 'SELECT_TRIP';

export const selectTrip = (trip) => ({
  type: SELECT_TRIP,
  payload: {
    trip,
  },
});
