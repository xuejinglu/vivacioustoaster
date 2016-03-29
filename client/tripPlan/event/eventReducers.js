import Immutable from 'immutable';

const initialState = Immutable.Map({
  events: Immutable.List(),
  eventsInDest: null,
});

const event = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const events = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_EVENTS_IN_DEST':
      const oldEvents = state.get('events');
      const newEvents = oldEvents.push(action.payload.events);
      return state.set('events', newEvents);
    default:
      return state;
  }
};

export default events;
