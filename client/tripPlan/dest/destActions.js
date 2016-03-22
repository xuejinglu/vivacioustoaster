import fetch from 'isomorphic-fetch';
import { routeActions } from 'react-router-redux';

export const FETCH_DEST_REQUEST = 'FETCH_DEST_REQUEST';
export const FETCH_DEST_SUCCESS = 'FETCH_DEST_SUCCESS';
export const FETCH_DEST_FAILURE = 'FETCH_DEST_FAILURE';

export const requestDestinations = (tripId) => ({
  type: FETCH_DEST_REQUEST,
  payload: {
  },
});

export const receiveDestinations = (user) => ({
  type: FETCH_DEST_SUCCESS,
  payload: {
  },
});

export const fetchDestinationsError = (message) => ({
  type: FETCH_DEST_FAILURE,
  payload: {
  },
});
