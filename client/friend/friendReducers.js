const friend = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_ADD_FRIEND':
      if (state.id !== action.id) {
        return state;
      }
      return state.set('addedToTrip', !state.get('addedToTrip'));
    default:
      return state;
  }
};

const friends = (state = [], action) => {
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
