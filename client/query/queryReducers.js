import Immutable from 'immutable';

const initialState = Immutable.Map({
  events: null,
  currPage: 0,
  currEvents: null,
});

const event = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_EVENT':
      if (state.placeId !== action.payload.event.placeId) {
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
      const eventList = state.get('events');
      const updatedEvents = eventList.map(e => e.map(item => event(item, action)));
      return state.set('events', updatedEvents);
    case 'RECEIVE_EVENTS':
      return state.set('events', action.payload.events);
    case 'NEXT_QUERY':
      const oldPage = state.get('currPage');
      const newPage = oldPage + 1;
      return state.set('currPage', newPage);
    case 'NEXT_EVENTS':
      const eventsQueue = state.get('events');
      const newEvents = eventsQueue[action.payload.currPage];
      return state.set('currEvents', newEvents);
    case 'RESET':
      return state.set('currPage', 0);
    default:
      return state;
  }
};

export default events;
