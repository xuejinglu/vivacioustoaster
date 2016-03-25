export const toggleAddFriend = id => ({
  type: 'TOGGLE_ADD_FRIEND',
  payload: {
    id,
  },
});

export const clearFriends = () => ({
  type: 'CLEAR_FRIENDS',
})

export const addFriend = friend => ({
  type: 'ADD_FRIEND',
  payload: friend,
});
