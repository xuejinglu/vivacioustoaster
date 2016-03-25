import fetch from 'isomorphic-fetch';
import _ from 'lodash';
import { setTripAndGetDestinations } from '../tripPlan/tripPlanActions';

// Redux-Thunk Middleware (see configureStore.js) allows us to return a function that
// can dispatch other actions. In this case, we return a function that:
// (1) POSTs a new trip
// (2) dispatches an action to update the state with the selected trip and GET
//     destinations for that trip id

export const save = (destinations, tripType, friends, events) => {
  const addedEvents = events.filter(event => event.addedToDest);
  return dispatch =>
    fetch('/api/trips', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        destinations,
        tripType,
        friends,
        events: addedEvents,
      }),
    }).then(res => res.json())
      .then(trip => dispatch(setTripAndGetDestinations(trip)))
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

export const startSearch = (goNext, tags, destinations) => {
  // once we support multiple destinations, this will no longer be needed
  const newDestination = [destinations.toJS()];
  const addedTags = tags.filter(tag => tag.addedToTrip);
  return dispatch =>
    fetch('/api/placeSearch', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        destinations: newDestination,
        tags: addedTags,
      }),
    }).then(res => res.json())
      .then(events => {
        dispatch(receiveEvents(events));
        goNext('/query');
      })
      .catch(err => console.error(err));
};

