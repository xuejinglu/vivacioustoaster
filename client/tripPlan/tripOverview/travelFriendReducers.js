import Immutable from 'immutable';

const initialState = Immutable.Map({
  travelFriends: Immutable.List([]),
});

const travelFriend = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const travelFriends = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_FRIENDS_IN_TRIP':
      return state.set('travelFriends', action.payload.friends);
    default:
      return state;
  }
};

export default travelFriends;
