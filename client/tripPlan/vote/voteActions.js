import fetch from 'isomorphic-fetch';
import cookie from 'react-cookie';

const receiveVotesForEvent = votes => ({
  type: 'RECEIVE_VOTES_FOR_EVENT',
  payload: {
    votes,
  },
});

export const fetchVotes = event => {
  const token = cookie.load('token');
  return dispatch =>
    fetch(`/api/event/${event.id}/votes`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        token,
      },
    }).then(res => res.json())
      .then(votes => {
        dispatch(receiveVotesForEvent(votes));
      })
      .catch(err => console.error(err)); // add proper error handling
};
