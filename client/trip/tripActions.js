import fetch from 'isomorphic-fetch';
import { routeActions } from 'react-router-redux';
import cookie from 'react-cookie';

export const REQUEST_TRIPS = 'REQUEST_TRIPS';
export const RECEIVE_TRIPS = 'RECEIVE_TRIPS';
export const FETCH_TRIP_FAILURE = 'FETCH_TRIP_FAILURE';

const requestTrips = () => ({
  type: REQUEST_TRIPS,
});

const receiveTrips = trips => ({
  type: RECEIVE_TRIPS,
  payload: {
    trips,
  },
});

const fetchTripsError = message => ({
  type: FETCH_TRIP_FAILURE,
  payload: {
    // TODO
  },
});

export const fetchTrips = () =>
  dispatch => {
    // update 'isFetching' state
    dispatch(requestTrips());

    const currentCookie = cookie.load('token');
    return fetch('/api/me', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        token: currentCookie,
      },
    })
      .then(res => res.json())
      .then(user =>
        fetch('/api/trips/', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          user,
        }).then(res => res.json())
          .then(trips => {
            dispatch(receiveTrips(trips));
          })
      )
      .catch(err => console.error(err)); // add proper error handling
  };
