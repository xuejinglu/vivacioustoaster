import Immutable from 'immutable';

const initialState = Immutable.Map({
  friends: Immutable.List([
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
    {
      id: 3,
      name: 'Jing',
      fbId: 'fba-2ps-bp2',
      picUrl: 'http://i.imgur.com/hAX5K0Hb.jpg',
      addedToTrip: false,
    },
    {
      id: 4,
      name: 'Boya',
      fbId: 'fba-2ps-bp2',
      picUrl: 'http://i.imgur.com/hAX5K0Hb.jpg',
      addedToTrip: false,
    },
  ]),
});

const friend = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_ADD_FRIEND':
      if (state.id !== action.payload.id) {
        return state;
      }
      return Object.assign({}, state, {
        addedToTrip: !state.addedToTrip,
      });
    default:
      return state;
  }
};

const friends = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_ADD_FRIEND':
      const oldFriends = state.get('friends');
      const updatedFriends = oldFriends
        .toSeq()
        .map(f => friend(f, action))
        .toList();
      return state.set('friends', updatedFriends);
    default:
      return state;
  }
};

export default friends;
