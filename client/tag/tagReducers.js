import { TOGGLE_TAG } from './tagActions';
import Immutable from 'immutable';

const initialState = Immutable.Map({
  tags: Immutable.List([
    {
      name: 'Romance',
      addedToTrip: false,
    },
    {
      name: 'Thrill',
      addedToTrip: false,
    },
    {
      name: 'Relaxation',
      addedToTrip: false,
    },
    {
      name: 'Food',
      addedToTrip: false,
    },
    {
      name: 'Family',
      addedToTrip: false,
    },
    {
      name: 'Outdoor',
      addedToTrip: false,
    },
    {
      name: 'Culture & Landmarks',
      addedToTrip: false,
    },
    {
      name: 'Night Life',
      addedToTrip: false,
    },
    {
      name: 'Shopping',
      addedToTrip: false,
    },
  ]),
});

const tag = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_TAG':
      if (state.name !== action.payload.tagName) {
        return state;
      }
      return Object.assign({}, state, {
        addedToTrip: !state.addedToTrip,
      });
    default:
      return state;
  }
};

const tags = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_TAG':
      const oldTags = state.get('tags');
      const updatedTags = oldTags.map(t => tag(t, action));
      return state.set('tags', updatedTags);
    default:
      return state;
  }
};

export default tags;
