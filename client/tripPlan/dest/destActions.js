import fetch from 'isomorphic-fetch';
import { routeActions } from 'react-router-redux';

export const REQUEST_DESTINATIONS = 'REQUEST_DESTINATIONS';
export const RECEIVE_DESTINATIONS = 'RECEIVE_DESTINATIONS';
export const FETCH_DEST_FAILURE = 'FETCH_DEST_FAILURE';

export const requestDestinations = (trip) => ({
  type: REQUEST_DESTINATIONS,
  payload: {
    trip,
  },
});

export const receiveDestinations = (trip, json) => ({
  type: RECEIVE_DESTINATIONS,
  payload: {
    trip,
    destinations: json.data.children.map(child => child.data),
  },
});

export const fetchDestinationsError = (message) => ({
  type: FETCH_DEST_FAILURE,
  payload: {
  },
});
