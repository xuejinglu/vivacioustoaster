import Immutable from 'immutable';
import { REQUEST_DESTINATIONS, RECEIVE_DESTINATIONS, FETCH_DEST_FAILURE } from './destActions';

const initialState = Immutable.Map({
  destinations: Immutable.List(),
});

const destination = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const destinations = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_DESTINATIONS:
      // return state.set('')
    case RECEIVE_DESTINATIONS:
      // return state.set('')
    case FETCH_DEST_FAILURE:
      // return state.set('')
    default:
      return state;
  }
};

export default destinations;
