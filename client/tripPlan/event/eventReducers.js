import Immutable from 'immutable';
import { REQUEST_EVENTS, RECEIVE_EVENTS_IN_DEST, FETCH_EVENTS_FAILURE } from './eventActions';

const initialState = Immutable.Map({
  isFetching: false,
  events: Immutable.List(),
});

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_EVENTS:
      return state.set('isFetching', true);
    case RECEIVE_EVENTS_IN_DEST:
      state = state.set('isFetching', false);
      const oldEvents = state.get('events');
      const newEvents = oldEvents.push(action.payload.events);
      return state.set('events', newEvents);
    case 'CLEAR_DEST':
      return state.set('events', Immutable.List());
    case FETCH_EVENTS_FAILURE:
      // return state.set('')
    default:
      return state;
  }
};
