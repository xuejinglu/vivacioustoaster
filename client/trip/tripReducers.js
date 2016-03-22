import Immutable from 'immutable';
import { SELECT_TRIP } from './tripActions';

const initialState = Immutable.Map({
  trips: Immutable.List(),
});

const selectedTrip = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
