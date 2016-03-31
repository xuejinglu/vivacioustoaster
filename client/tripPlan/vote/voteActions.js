import _ from 'lodash';
import fetch from 'isomorphic-fetch';
import cookie from 'react-cookie';
import Promise from 'bluebird';

export const REQUEST_VOTES = 'REQUEST_VOTES';
export const RECEIVE_VOTES_FOR_EVENTS = 'RECEIVE_VOTES_FOR_EVENTS';
export const FETCH_VOTES_FAILURE = 'FETCH_VOTES_FAILURE';

const requestVotes = () => ({
  type: REQUEST_VOTES,
});

const receiveVotesForEvents = votes => ({
  type: RECEIVE_VOTES_FOR_EVENTS,
  payload: {
    votes,
  },
});

const fetchVotesError = message => ({
  type: FETCH_VOTES_FAILURE,
  payload: {
    // TODO
  },
});

export const fetchVotes = events =>
  dispatch => {
    dispatch(requestVotes());
    return Promise.all(events.map(event =>
      fetch(`/api/events/${event.id}/votes`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }).then(res => res.json())
    )).then(votes => {
      const allVotes = _.flattenDeep(votes);
      dispatch(receiveVotesForEvents(allVotes));
    })
    .catch(err => console.error(err)); // add proper error handling
  };
