import fetch from 'isomorphic-fetch';

const receiveFriendsInTrip = friends => ({
  type: 'RECEIVE_FRIENDS_IN_TRIP',
  payload: {
    friends,
  },
});

export const fetchFriends = trip =>
  dispatch =>
    fetch(`/api/trips/${trip.id}/users`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(res => res.json())
      .then(friends => {
        dispatch(receiveFriendsInTrip(friends));
      })
      .catch(err => console.error(err));
