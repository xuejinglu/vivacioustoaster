import Immutable from 'immutable';

const initialState = Immutable.Map({
  friends: [],
});

const friend = (state, action) => {
  switch (action.type) {
    case 'ADD_FRIEND':
      return {
        name: action.payload.name,
        fbId: action.payload.fbId,
        picUrl: action.payload.picUrl,
        addedToTrip: false,
      };
    case 'TOGGLE_ADD_FRIEND':
      if (state.id !== action.payload.id) {
        return state;
      }
      return Object.assign({}, state, {
        addedToTrip: !state.addedToTrip,
      });
    case 'CLEAR_FRIENDS':
      return Object.assign({}, state, {
        addedToTrip: false,
      });
    default:
      return state;
  }
};

const friends = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FRIEND': const friendsToUpdate = state.get('friends');
      const friendsList = [...friendsToUpdate, friend(null, action)];
      return state.set('friends', friendsList);
    case 'TOGGLE_ADD_FRIEND':
      const oldFriends = state.get('friends');
      const updatedFriends = oldFriends.map(f => friend(f, action));
      return state.set('friends', updatedFriends);
    case 'CLEAR_FRIENDS':
      const Friends = state.get('friends');
      const clearedFriends = Friends.map(f => friend(f, action));
      return state.set('friends', clearedFriends);
    default:
      return state;
  }
};

export default friends;
