import Immutable from 'immutable';
import { REQUEST_DESTINATIONS, RECEIVE_DESTINATIONS,
FETCH_DEST_FAILURE, RECEIVE_EVENTS_IN_DEST } from './destActions';

const initialState = Immutable.Map({
  isFetching: false,
  destinations: Immutable.List(),
  events: Immutable.List(),
});

// not using this yet, but if we add sorting or filtering, we'll need it
const destination = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const destinations = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_EVENTS_IN_DEST:
      const oldEvents = state.get('events');
      console.log(oldEvents, action.payload.events);
      const newEvents = oldEvents.push(action.payload.events);
      console.log(newEvents);
      return state.set('events', newEvents);
    case REQUEST_DESTINATIONS:
      return state.set('isFetching', true);
    case RECEIVE_DESTINATIONS:
      state = state.set('isFetching', false);
      return state.set('destinations', action.payload.destinations);
    case FETCH_DEST_FAILURE:
      // return state.set('')
    default:
      return state;
  }
};

export default destinations;
