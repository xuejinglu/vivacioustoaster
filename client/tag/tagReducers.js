import { TOGGLE_TAG } from './tagActions';

const initialState = {
  Romance: false,
  Thrill: false,
  Relaxation: false,
  Food: false,
  Family: false,
  Outdoor: false,
  Culture: false,
  Landmark: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_TAG':
      const newState = Object.assign({}, state);
      newState[action.payload.tag] = !state[action.payload.tag];
      return newState;
    default:
      return state;
  }
};
