export const toggleAddFriend = id => ({
  type: 'TOGGLE_ADD_FRIEND',
  payload: {
    id,
  },
});

export const clearFriends = () => ({
  type: 'CLEAR_FRIENDS',
});
