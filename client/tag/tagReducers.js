import { TOGGLE_TAG } from './tagActions';
import { Map } from 'immutable';

const initialState = Map({
  Romance: false,
  Thrill: false,
  Relaxation: false,
  Food: false,
  Family: false,
  Outdoor: false,
  Culture: false,
  Landmark: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_TAG':
      state[action.payload.tag] = !state[action.payload.tag];
      return state;
    default:
      return state;
  }
};
