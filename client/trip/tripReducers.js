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
          endDate: '03/25/16',
          location: 'New York',
        },
        {
          startDate: '05/23/16',
          endDate: '05/25/16',
          location: 'Paris',
        },
      ],
      users: [
        {
          id: 1,
          name: 'Akshay',
          fbId: 'g4s-02a-bm2',
          picUrl: 'http://i.imgur.com/WGI2Sllb.jpg',
          addedToTrip: false,
        },
        {
          id: 2,
          name: 'Leran',
          fbId: 'ps2-gh5-slw',
          picUrl: 'http://i.imgur.com/PmpIJxHb.jpg',
          addedToTrip: false,
        },
      ],
    },
  ]),
});

const trip = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const trips = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default trips;
