import Immutable from 'immutable';
import { REQUEST_EVENTS, RECEIVE_EVENTS_IN_DEST, FETCH_EVENTS_FAILURE } from './eventActions';
import { TOGGLE_EVENT_VOTE } from '../vote/voteActions';

const initialState = Immutable.Map({
  isFetching: false,
  events: Immutable.List(),
});

const event = (state, action) => {
  switch (action.type) {
    case TOGGLE_EVENT_VOTE:
      if (state.id !== action.payload.eventId) {
        return state;
      }
      return Object.assign({}, state, {
        votedOn: !state.votedOn,
      });
    case RECEIVE_EVENTS_IN_DEST:
      return Object.assign({}, state, {
        votedOn: false,
      });
    default:
      return state;
  }
};

const events = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_EVENTS:
      return state.set('isFetching', true);
    case RECEIVE_EVENTS_IN_DEST:
      state = state.set('isFetching', false);
      let newEvents = action.payload.events;
      newEvents = newEvents.map(e => event(e, action));
      const allEvents = state.get('events').push(newEvents);
      return state.set('events', allEvents);
    case 'CLEAR_DEST':
      return state.set('events', Immutable.List());
    case TOGGLE_EVENT_VOTE:
      const eventList = state.get('events');
      const updatedEvents = eventList.map(e => e.map(item => event(item, action)));
      return state.set('events', updatedEvents);
    case FETCH_EVENTS_FAILURE:
      // return state.set('')
    default:
      return state;
  }
};

export default events;
