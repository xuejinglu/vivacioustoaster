import Immutable from 'immutable';

const initialState = Immutable.Map({
  events: null,
});

const event = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_EVENT':
      if (state.place_id !== action.payload.event.place_id) {
        return state;
      }
      return Object.assign({}, state, {
        addedToDest: !state.addedToDest,
      });
    default:
      return state;
  }
};

const events = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_EVENT':
      const oldEvents = state.get('events');
      const updatedEvents = oldEvents.map(e => event(e, action));
      return state.set('events', updatedEvents);
    case 'RECEIVE_EVENTS':
      return state.set('events', action.payload.events);
    default:
      return state;
  }
};

export default events;
