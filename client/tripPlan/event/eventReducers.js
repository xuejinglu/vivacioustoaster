import Immutable from 'immutable';

const initialState = Immutable.Map({
  events: Immutable.List([]),
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
      return state.set('events', action.payload.events);
    default:
      return state;
  }
};

export default events;
