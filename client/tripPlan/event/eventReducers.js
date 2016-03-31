import Immutable from 'immutable';
import { RECEIVE_EVENTS_IN_DEST } from './eventActions';

const initialState = Immutable.Map({
  events: Immutable.List(),
});

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_EVENTS_IN_DEST:
      const oldEvents = state.get('events');
      const newEvents = oldEvents.push(action.payload.events);
      return state.set('events', newEvents);
    case 'CLEAR_DEST':
      return state.set('events', Immutable.List());
    default:
      return state;
  }
};
