import fetch from 'isomorphic-fetch';
import { routeActions } from 'react-router-redux';
import { fetchDestinations } from './dest/destActions';
import { clearFriends } from '../friend/friendActions';
import { clearTags } from '../tag/tagActions';
import { clearDestination } from '../home/homeActions';

export const SELECT_TRIP = 'SELECT_TRIP';
export const CLEAR_STATES = 'SELECT_STATES';


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
    // these dispatches clears the state after info is saved in db and user can now create a new trip
    dispatch(clearFriends());
    dispatch(clearTags());
    dispatch(clearDestination());
  };
