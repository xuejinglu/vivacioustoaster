import Immutable from 'immutable';
import { SELECT_TRIP } from './tripActions';

const initialState = Immutable.Map({
  trips: Immutable.List(),
  selectedTrip: null,
});

const selectedTrip = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_TRIP:
      return state.set('selectedTrip', action.payload.trip);
    default:
      return state;
  }
};
