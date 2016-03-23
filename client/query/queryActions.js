import fetch from 'isomorphic-fetch';
import _ from 'lodash';
import { setTripAndGetDestinations } from '../tripPlan/tripPlanActions';
const map = new google.maps.Map(document.createElement('div')); // eslint-disable-line
const service = new google.maps.places.PlacesService(map); // eslint-disable-line


// Redux-Thunk Middleware (see configureStore.js) allows us to return a function that
// can dispatch other actions. In this case, we return a function that:
// (1) POSTs a new trip
// (2) dispatches an action to update the state with the selected trip and GET
//     destinations for that trip id

export const save = (destinations, tripType, friends, events) => {
  console.log(events);
  const addedEvents = events.filter(event => event.addedToDest);
  console.log(addedEvents);
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

const request = {
  query: 'Paris Museum',
};

export const startSearch = (goNext) =>
  dispatch =>
    service.textSearch(request, (results, status) => {
      results.map(result => {
        result.addedToDest = false;
        return result;
      });
      dispatch(receiveEvents(results));
      goNext('/query');
    });
