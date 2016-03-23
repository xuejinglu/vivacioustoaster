import Immutable from 'immutable';

const initialState = Immutable.Map({
  trips: Immutable.List(),
});

const trips = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default trips;
