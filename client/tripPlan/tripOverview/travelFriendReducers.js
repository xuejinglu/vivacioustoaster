import Immutable from 'immutable';

const initialState = Immutable.Map({
  travelFriends: Immutable.List([
    {
      id: 1,
      name: 'Akshay',
      fbId: 'g4s-02a-bm2',
      picUrl: 'http://i.imgur.com/WGI2Sllb.jpg',
    },
    {
      id: 2,
      name: 'Leran',
      fbId: 'ps2-gh5-slw',
      picUrl: 'http://i.imgur.com/PmpIJxHb.jpg',
    },
    {
      id: 3,
      name: 'Jing',
      fbId: 'fba-2ps-bp2',
      picUrl: 'http://i.imgur.com/hAX5K0Hb.jpg',
    },
    {
      id: 4,
      name: 'Boya',
      fbId: 'fba-2ps-bp2',
      picUrl: 'http://i.imgur.com/hAX5K0Hb.jpg',
    },
  ]),
});

const travelFriend = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const travelFriends = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default travelFriends;
