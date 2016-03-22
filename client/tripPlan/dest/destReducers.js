import Immutable from 'immutable';
import { FETCH_DEST_REQUEST, FETCH_DEST_SUCCESS, FETCH_DEST_FAILURE } from './destActions';

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
    case FETCH_DEST_REQUEST:
      // return state.set('')
    case FETCH_DEST_SUCCESS:
      // return state.set('')
    case FETCH_DEST_FAILURE:
      // return state.set('')
    default:
      return state;
  }
};

export default destinations;
