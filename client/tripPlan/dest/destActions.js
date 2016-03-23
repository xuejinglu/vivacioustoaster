import fetch from 'isomorphic-fetch';
import { routeActions } from 'react-router-redux';

export const REQUEST_DESTINATIONS = 'REQUEST_DESTINATIONS';
export const RECEIVE_DESTINATIONS = 'RECEIVE_DESTINATIONS';
export const FETCH_DEST_FAILURE = 'FETCH_DEST_FAILURE';

const requestDestinations = () => ({
  type: REQUEST_DESTINATIONS,
});

const receiveDestinations = (destinations) => ({
  type: RECEIVE_DESTINATIONS,
  payload: {
    destinations,
  },
});

const fetchDestinationsError = (message) => ({
  type: FETCH_DEST_FAILURE,
  payload: {
    // TODO
  },
});

export const fetchDestinations = trip =>
  dispatch => {
    // update 'isFetching' state
    dispatch(requestDestinations());

    return fetch(`/api/trips/${trip.id}/destinations`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(res => res.json())
      .then(destinations => {
        dispatch(receiveDestinations(destinations));
      })
      .catch(err => console.error(err)); // add proper error handling
  };
