import fetch from 'isomorphic-fetch';
import _ from 'lodash';
import { setTripAndGetDestinations } from '../tripPlan/tripPlanActions';
import cookie from 'react-cookie';

// Redux-Thunk Middleware (see configureStore.js) allows us to return a function that
// can dispatch other actions. In this case, we return a function that:
// (1) POSTs a new trip
// (2) dispatches an action to update the state with the selected trip and GET
//     destinations for that trip id

export const save = (destinations, tripType, friends, eventList, goNext) => {
  const addedEvents = eventList.map(events =>
    events.filter(event => event.addedToDest));
  const token = cookie.load('token');
  return dispatch =>
    fetch('/api/trips', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        token,
      },
      body: JSON.stringify({
        destinations,
        tripType,
        friends,
        events: addedEvents,
      }),
    }).then(res => res.json())
      .then(trip => {
        dispatch(setTripAndGetDestinations(trip, goNext));
      })
      .catch(err => console.error(err)); // add proper error handling
};

export const toggleEvent = event => ({
  type: 'TOGGLE_EVENT',
  payload: {
    event,
  },
});


export const receiveEvents = (events) => ({
  type: 'RECEIVE_EVENTS',
  payload: {
    events,
  },
});

export const updateEvents = (events, dest) => {
  const addedEvents = events.filter(event => event.addedToDest);
  const token = cookie.load('token');
  const destId = dest[0].id;
  return dispatch =>
    fetch(`/api/destinations/${destId}/events`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        token,
      },
      body: JSON.stringify({
        events: addedEvents,
      }),
    }).then(res => res.json())
      .then(trip => dispatch(setTripAndGetDestinations(trip)))
      .catch(err => console.error(err)); // add proper error handling
};

export const nextQuery = () => ({
  type: 'NEXT_QUERY',
});

export const nextEvents = (currPage) => ({
  type: 'NEXT_EVENTS',
  payload: {
    currPage,
  },
});

export const startSearch = (goNext, tags, destinations, currPage) => {
  // once we support multiple destinations, this will no longer be needed
  const addedTags = tags.filter(tag => tag.addedToTrip);
  return dispatch =>
    fetch('/api/placeSearch', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        destinations,
        tags: addedTags,
      }),
    }).then(res => res.json())
      .then(events => {
        dispatch(receiveEvents(events));
        dispatch(nextEvents(currPage));
        goNext('/query');
      })
      .catch(err => console.error(err));
};

