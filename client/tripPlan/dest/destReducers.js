import Immutable from 'immutable';

const initialState = Immutable.Map({
  destinations: Immutable.List([
    {
      id: 1,
      startDate: Date.now(),
      endDate: Date.now(),
      location: 'Las Vegas',
    },
    {
      id: 2,
      startDate: Date.now(),
      endDate: Date.now(),
      location: 'Paris',
    },
    {
      id: 3,
      startDate: Date.now(),
      endDate: Date.now(),
      location: 'New York City',
    },
  ]),
});

const destination = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const destinations = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default destinations;
