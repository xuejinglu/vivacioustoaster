import Immutable from 'immutable';

const initialState = Immutable.Map({
  events: Immutable.List([
    {
      id: 1,
      name: 'Empire State Building',
      formattedAddress: '75001 Paris, France',
      rating: 4.6,
    },
    {
      id: 2,
      name: 'Eiffel Tower',
      formattedAddress: 'Jardin Tuileries, 75001 Paris, France',
      rating: 4.4,
    },
    {
      id: 3,
      name: 'Caesar\'s Palace',
      formattedAddress: '16 Rue des Francs Bourgeois, 75003 Paris, France',
      rating: 4.1,
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
