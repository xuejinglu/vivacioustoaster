import Immutable from 'immutable';

const initialState = Immutable.Map({
  events: Immutable.List([
    {
      id: 1,
      name: 'Empire State Building',
    },
    {
      id: 2,
      name: 'Eiffel Tower',
    },
    {
      id: 3,
      name: 'Caesar\'s Palace',
    },
  ]),
});

const event = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const events = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default events;
