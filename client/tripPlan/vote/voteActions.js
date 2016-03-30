import fetch from 'isomorphic-fetch';
import cookie from 'react-cookie';
import Promise from 'bluebird';

const receiveVotesForEvents = votes => ({
  type: 'RECEIVE_VOTES_FOR_EVENTS',
  payload: {
    votes,
  },
});

export const fetchVotes = events => {
  const token = cookie.load('token');
  return dispatch =>
    Promise.all(events.map(event =>
      fetch(`/api/event/${event.id}/votes`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          token,
        },
      }).then(res => res.json())
    )).then(votes => {
      dispatch(receiveVotesForEvents(votes));
    })
    .catch(err => console.error(err)); // add proper error handling
};
