import Immutable from 'immutable';

const initialState = Immutable.Map({
  trips: Immutable.List([
    {
      id: 1,
      name: 'Trip1',
      tripType: 'Group',
      destinations: [
        {
          startDate: '03/23/16',
          endDate: '03/28/16',
          location: 'New York',
        },
        {
          startDate: '03/28/16',
          endDate: '04/01/16',
          location: 'Boston',
        },
      ],
      users: [
        {
          id: 1,
          name: 'Akshay',
          fbId: 'g4s-02a-bm2',
          picUrl: 'http://i.imgur.com/WGI2Sllb.jpg',
          addedToTrip: true,
        },
        {
          id: 2,
          name: 'Leran',
          fbId: 'ps2-gh5-slw',
          picUrl: 'http://i.imgur.com/PmpIJxHb.jpg',
          addedToTrip: true,
        },
      ],
      selectedTrip: false,
    },
    {
      id: 2,
      name: 'Trip2',
      tripType: 'Group',
      destinations: [
        {
          startDate: '08/05/16',
          endDate: '08/15/16',
          location: 'San Francisco',
        },
        {
          startDate: '08/15/16',
          endDate: '08/20/16',
          location: 'Los Angeles',
        },
      ],
      users: [
        {
          id: 3,
          name: 'Jing',
          fbId: 'fba-2ps-bp2',
          picUrl: 'http://i.imgur.com/hAX5K0Hb.jpg',
          addedToTrip: true,
        },
        {
          id: 4,
          name: 'Boya',
          fbId: 'fba-2ps-bp2',
          picUrl: 'http://i.imgur.com/hAX5K0Hb.jpg',
          addedToTrip: true,
        },
      ],
      selectedTrip: false,
    },
  ]),
});

const trip = (state, action) => {
  switch (action.type) {
    case 'SELECT_TRIP':
      if (state.id !== action.payload.id) {
        return state;
      }
      return Object.assign({}, state, {
        selectedTrip: !state.selectedTrip,
      });
    default:
      return state;
  }
};

const trips = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_TRIP':
      const allTrips = state.get('trips');
      const pickedTrip = allTrips.map(t => trip(t, action));
      return state.set('trips', pickedTrip);
    default:
      return state;
  }
};

export default trips;
