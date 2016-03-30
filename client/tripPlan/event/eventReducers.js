import Immutable from 'immutable';

const initialState = Immutable.Map({
  key: null,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHOOSE_KEY':
      console.log(action.payload.key);
      return state.set('key', action.payload.key);
    default:
      return state;
  }
};
